// Session mirror + discovery (port of hermes-agent's session_search): every
// agent message lands in `messages`, searched via a generated tsvector column.
// Search demotes automation sessions instead of excluding them.
import { sql } from 'drizzle-orm';
import { appDb } from './db.ts';
import { messages } from './schema.ts';

export interface MirrorMessage {
  instanceId: string;
  agentName: string;
  tenant: string;
  role: 'user' | 'assistant' | 'tool';
  content: string;
  toolName?: string;
  eventIndex: number;
  ts: string; // ISO timestamp
}

export interface StoredMessage extends MirrorMessage {
  id: number;
}

export interface SessionSummary {
  instanceId: string;
  agentName: string;
  tenant: string;
  lastTs: string;
  messageCount: number;
  preview: string;
}

export interface DiscoveryHit {
  instanceId: string;
  agentName: string;
  snippet: string;
  window: StoredMessage[];
  bookends: { first: StoredMessage[]; last: StoredMessage[] };
}

function rowToMessage(row: Record<string, unknown>): StoredMessage {
  return {
    id: Number(row.id),
    instanceId: String(row.instance_id),
    agentName: String(row.agent_name),
    tenant: String(row.tenant),
    role: String(row.role) as StoredMessage['role'],
    content: String(row.content),
    ...(row.tool_name != null ? { toolName: String(row.tool_name) } : {}),
    eventIndex: Number(row.event_index),
    ts: String(row.ts),
  };
}

export async function recordMessage(msg: MirrorMessage): Promise<void> {
  const db = await appDb();
  await db
    .insert(messages)
    .values({
      instanceId: msg.instanceId,
      agentName: msg.agentName,
      tenant: msg.tenant,
      role: msg.role,
      content: msg.content,
      toolName: msg.toolName ?? null,
      eventIndex: msg.eventIndex,
      ts: msg.ts,
    })
    .onConflictDoNothing(); // idempotent on (instance_id, event_index)
}

function isAutomation(agentName: string, instanceId: string): boolean {
  return agentName !== 'personal' || instanceId.startsWith('hb:');
}

async function bookends(
  instanceId: string,
): Promise<{ first: StoredMessage[]; last: StoredMessage[] }> {
  const db = await appDb();
  const first = await db.execute(
    sql`SELECT * FROM messages WHERE instance_id = ${instanceId} ORDER BY event_index ASC LIMIT 3`,
  );
  const last = await db.execute(
    sql`SELECT * FROM messages WHERE instance_id = ${instanceId} ORDER BY event_index DESC LIMIT 3`,
  );
  return {
    first: [...first].map(rowToMessage),
    last: [...last].map(rowToMessage).reverse(),
  };
}

export async function searchSessions(
  query: string,
  opts?: { tenant?: string; limit?: number },
): Promise<DiscoveryHit[]> {
  if (!query.trim()) return [];
  const db = await appDb();
  const limit = opts?.limit ?? 5;
  // websearch_to_tsquery tolerates arbitrary user input (no MATCH syntax to escape).
  const rows = await db.execute(sql`
    SELECT m.*, ts_rank(m.tsv, q) AS rank,
           ts_headline('english', m.content, q,
                       'StartSel=,StopSel=,MaxWords=20,MinWords=5') AS snip
    FROM messages m, websearch_to_tsquery('english', ${query}) q
    WHERE m.tsv @@ q${opts?.tenant ? sql` AND m.tenant = ${opts.tenant}` : sql``}
    ORDER BY rank DESC
    LIMIT 200`);

  const ranked = [...rows]
    .map((row) => ({
      row,
      rank: Number(row.rank),
      demoted: isAutomation(String(row.agent_name), String(row.instance_id)),
    }))
    .sort((a, b) => Number(a.demoted) - Number(b.demoted) || b.rank - a.rank);

  const hits: DiscoveryHit[] = [];
  const seen = new Set<string>();
  for (const { row } of ranked) {
    const instanceId = String(row.instance_id);
    if (seen.has(instanceId)) continue;
    seen.add(instanceId);
    const message = rowToMessage(row);
    const snippet = String(row.snip ?? '').trim() || message.content.slice(0, 160);
    hits.push({
      instanceId,
      agentName: message.agentName,
      snippet,
      window: await scrollSession(instanceId, message.id),
      bookends: await bookends(instanceId),
    });
    if (hits.length >= limit) break;
  }
  return hits;
}

export async function scrollSession(
  instanceId: string,
  aroundId: number,
  window: number = 5,
): Promise<StoredMessage[]> {
  const db = await appDb();
  const anchorRows = await db.execute(
    sql`SELECT * FROM messages WHERE id = ${aroundId} AND instance_id = ${instanceId}`,
  );
  const anchorRow = [...anchorRows][0];
  if (!anchorRow) return [];
  const anchor = rowToMessage(anchorRow);
  const before = await db.execute(
    sql`SELECT * FROM messages WHERE instance_id = ${instanceId} AND event_index < ${anchor.eventIndex}
        ORDER BY event_index DESC LIMIT ${window}`,
  );
  const after = await db.execute(
    sql`SELECT * FROM messages WHERE instance_id = ${instanceId} AND event_index > ${anchor.eventIndex}
        ORDER BY event_index ASC LIMIT ${window}`,
  );
  return [...[...before].map(rowToMessage).reverse(), anchor, ...[...after].map(rowToMessage)];
}

export async function browseSessions(opts?: {
  tenant?: string;
  limit?: number;
}): Promise<SessionSummary[]> {
  const db = await appDb();
  const rows = await db.execute(sql`
    SELECT m.instance_id, m.agent_name, m.tenant,
           MAX(m.ts) AS last_ts, COUNT(*) AS message_count,
           (SELECT content FROM messages latest
            WHERE latest.instance_id = m.instance_id
            ORDER BY event_index DESC LIMIT 1) AS preview
    FROM messages m
    ${opts?.tenant ? sql`WHERE m.tenant = ${opts.tenant}` : sql``}
    GROUP BY m.instance_id, m.agent_name, m.tenant
    ORDER BY last_ts DESC
    LIMIT ${opts?.limit ?? 20}`);
  return [...rows].map((row) => ({
    instanceId: String(row.instance_id),
    agentName: String(row.agent_name),
    tenant: String(row.tenant),
    lastTs: String(row.last_ts),
    messageCount: Number(row.message_count),
    preview: String(row.preview).slice(0, 160),
  }));
}
