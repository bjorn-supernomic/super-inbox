// Memory tools (Hermes-style): session recall across past conversations plus
// durable facts about subjects. The tenant is bound in trusted code at
// construction (mirroring slackSend) — the model never picks whose memory it
// reads or writes.
import { defineTool } from '@flue/runtime';
import * as v from 'valibot';
import { addFact, removeFact, type Fact, type SubjectType } from '../store/facts.ts';
import {
  browseSessions,
  scrollSession,
  searchSessions,
  type DiscoveryHit,
  type SessionSummary,
  type StoredMessage,
} from '../store/sessions.ts';

// Store rows are interfaces; tool results must be plain JSON. Normalize here.
function toMessage(message: StoredMessage) {
  return { ...message, toolName: message.toolName ?? null };
}

function toHit(hit: DiscoveryHit) {
  return {
    instanceId: hit.instanceId,
    agentName: hit.agentName,
    snippet: hit.snippet,
    window: hit.window.map(toMessage),
    bookends: {
      first: hit.bookends.first.map(toMessage),
      last: hit.bookends.last.map(toMessage),
    },
  };
}

function toSummary(summary: SessionSummary) {
  return { ...summary };
}

function toFact(fact: Fact) {
  return { ...fact };
}

export interface SessionSearchArgs {
  query?: string;
  instanceId?: string;
  aroundMessageId?: number;
}

export type SessionSearchResult =
  | { shape: 'discovery'; hits: ReturnType<typeof toHit>[] }
  | { shape: 'scroll'; messages: ReturnType<typeof toMessage>[] }
  | { shape: 'browse'; sessions: ReturnType<typeof toSummary>[] };

/** Shape dispatch for session_search — exported for the self-check. */
export async function runSessionSearch(
  tenant: string,
  args: SessionSearchArgs,
): Promise<SessionSearchResult> {
  if (args.query) {
    const hits = await searchSessions(args.query, { tenant });
    return { shape: 'discovery', hits: hits.map(toHit) };
  }
  if (args.instanceId && args.aroundMessageId !== undefined) {
    const found = await scrollSession(args.instanceId, args.aroundMessageId);
    return { shape: 'scroll', messages: found.map(toMessage) };
  }
  if (args.instanceId || args.aroundMessageId !== undefined) {
    throw new Error(
      'Scrolling needs both instanceId and aroundMessageId; pass query for discovery or no args to browse.',
    );
  }
  const sessions = await browseSessions({ tenant });
  return { shape: 'browse', sessions: sessions.map(toSummary) };
}

export function sessionSearch(tenant: string) {
  return defineTool({
    name: 'session_search',
    description:
      'Search past conversations across all sessions. Zero cost — use before asking ' +
      'the user to repeat themselves. Shapes: query= discovery; ' +
      'instanceId+aroundMessageId= scroll context; no args= browse recent.',
    input: v.object({
      query: v.optional(v.string()),
      instanceId: v.optional(v.string()),
      aroundMessageId: v.optional(v.number()),
    }),
    async run({ input }) {
      return runSessionSearch(tenant, input);
    },
  });
}

export type FactCategory = 'preference' | 'process' | 'technical' | 'correction' | 'relationship';

export interface RememberFactArgs {
  subjectType: SubjectType;
  subjectId: string;
  category: FactCategory;
  body: string;
  removeFactId?: number;
}

export type RememberFactResult =
  | { ok: true; fact: ReturnType<typeof toFact> }
  | { ok: false; error: string; current: ReturnType<typeof toFact>[] };

/** remember_fact behavior — exported for the self-check. */
export async function runRememberFact(
  tenant: string,
  provenance: string,
  args: RememberFactArgs,
): Promise<RememberFactResult> {
  // Consolidation path: drop a superseded entry, then write the replacement.
  if (args.removeFactId !== undefined) await removeFact(args.removeFactId);
  const result = await addFact({
    tenant,
    subjectType: args.subjectType,
    subjectId: args.subjectId,
    category: args.category,
    body: args.body,
    provenance,
  });
  if (result.ok) return { ok: true, fact: toFact(result.fact) };
  // Error + current entries verbatim so the model consolidates and retries in-turn.
  return { ok: false, error: result.error, current: result.current.map(toFact) };
}

export function rememberFact(tenant: string, defaultProvenance: string) {
  return defineTool({
    name: 'remember_fact',
    description:
      'Store a durable fact about a user/channel/team/company. Write declarative facts, ' +
      'not instructions ("User prefers concise updates" not "Be concise"). Skip anything ' +
      'stale within a week. On a capacity error, consolidate: pass removeFactId to drop ' +
      'a superseded entry and retry.',
    input: v.object({
      subjectType: v.picklist(['user', 'channel', 'team', 'company']),
      subjectId: v.string(),
      category: v.picklist(['preference', 'process', 'technical', 'correction', 'relationship']),
      body: v.pipe(v.string(), v.minLength(1), v.maxLength(500)),
      removeFactId: v.optional(v.number()),
    }),
    async run({ input }) {
      return runRememberFact(tenant, defaultProvenance, input);
    },
  });
}
