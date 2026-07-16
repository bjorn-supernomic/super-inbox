// App business DB — cases as JSON blobs + a decisions ledger, in node:sqlite.
// ponytail: whole-case JSON blobs, no column-per-field schema — the case shape
// is rich display data; promote fields to columns when we actually query them.
import { mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { DatabaseSync } from 'node:sqlite';
// Seed data lives at the repo root (apps/server/src/shared → 4 levels up).
import { CASES, LIFECYCLE, LIBRARY } from '../../../../inbox-data.js';

export { LIFECYCLE, LIBRARY };

const dataDir = join(dirname(fileURLToPath(import.meta.url)), '..', '..', 'data');
mkdirSync(dataDir, { recursive: true });

const db = new DatabaseSync(join(dataDir, 'inbox.db'));
db.exec(`
  CREATE TABLE IF NOT EXISTS cases (
    id TEXT PRIMARY KEY,
    state TEXT NOT NULL,
    data TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT (datetime('now')),
    updated_at TEXT NOT NULL DEFAULT (datetime('now'))
  );
  CREATE TABLE IF NOT EXISTS decisions (
    seq INTEGER PRIMARY KEY AUTOINCREMENT,
    case_id TEXT NOT NULL REFERENCES cases(id),
    option_index INTEGER NOT NULL,
    title TEXT NOT NULL,
    decided_at TEXT NOT NULL DEFAULT (datetime('now'))
  );
`);

type Comment = {
  id?: string;
  author: string;
  tag: string;
  time: string;
  body: string;
  ctx?: unknown;
  replies?: Comment[];
};

/** Depth-first walk over a discussion tree. */
function walkComments(comments: Comment[], visit: (c: Comment) => void): void {
  for (const c of comments) {
    visit(c);
    if (Array.isArray(c.replies)) walkComments(c.replies, visit);
  }
}

/** Seed comments carry no ids; assign deterministic ones so parentId addressing works. */
function assignDiscussionIds(caseId: string, discussion: Comment[]): void {
  let n = 0;
  walkComments(discussion, (c) => {
    n += 1;
    if (!c.id) c.id = `${caseId}-d${n}`;
  });
}

const caseCount = (db.prepare('SELECT count(*) AS n FROM cases').get() as { n: number }).n;
if (caseCount === 0) {
  const insert = db.prepare('INSERT INTO cases (id, state, data) VALUES (?, ?, ?)');
  for (const c of CASES as Array<Record<string, unknown> & { id: string; state: string }>) {
    if (Array.isArray(c.discussion)) assignDiscussionIds(c.id, c.discussion as Comment[]);
    insert.run(c.id, c.state, JSON.stringify(c));
  }
  console.log(`store: seeded ${CASES.length} cases from inbox-data.js`);
}

export function listCases(): any[] {
  const rows = db.prepare('SELECT state, data FROM cases ORDER BY rowid').all() as Array<{
    state: string;
    data: string;
  }>;
  return rows.map((r) => ({ ...JSON.parse(r.data), state: r.state }));
}

export function getCase(id: string): any | null {
  const row = db.prepare('SELECT state, data FROM cases WHERE id = ?').get(id) as
    | { state: string; data: string }
    | undefined;
  return row ? { ...JSON.parse(row.data), state: row.state } : null;
}

export function createCase(c: any): void {
  if (!c || typeof c.id !== 'string' || !c.id.trim()) throw new Error('case needs an id');
  if (typeof c.state !== 'string' || !c.state.trim()) throw new Error('case needs a state');
  db.prepare('INSERT INTO cases (id, state, data) VALUES (?, ?, ?)').run(
    c.id,
    c.state,
    JSON.stringify(c),
  );
}

/**
 * Shallow-merge patch into the stored case JSON. A key set to undefined/null
 * deletes it. Keeps the `state` column in sync and bumps updated_at.
 */
export function updateCase(id: string, patch: Record<string, unknown>): void {
  const row = db.prepare('SELECT data FROM cases WHERE id = ?').get(id) as
    | { data: string }
    | undefined;
  if (!row) throw new Error(`unknown case ${id}`);
  const data = JSON.parse(row.data) as Record<string, unknown>;
  for (const [key, value] of Object.entries(patch)) {
    if (value === undefined || value === null) delete data[key];
    else data[key] = value;
  }
  const state = typeof patch.state === 'string' ? patch.state : undefined;
  if (state !== undefined) data.state = state;
  db.prepare(
    `UPDATE cases SET data = ?, state = coalesce(?, state), updated_at = datetime('now') WHERE id = ?`,
  ).run(JSON.stringify(data), state ?? null, id);
}

export function recordDecision(caseId: string, option: number, title: string): void {
  db.prepare('INSERT INTO decisions (case_id, option_index, title) VALUES (?, ?, ?)').run(
    caseId,
    option,
    title,
  );
}

export function listDecisions(): any[] {
  return db.prepare('SELECT * FROM decisions ORDER BY seq').all() as any[];
}

/**
 * Append a comment into the case's discussion tree (under parentId when given,
 * top-level otherwise). Assigns an id and returns the stored comment.
 * Throws on unknown case ('unknown case …') or unknown parent ('unknown parent …').
 */
export function addComment(
  caseId: string,
  parentId: string | null,
  comment: { author: string; tag: string; time: string; body: string; ctx?: unknown },
): any {
  const row = db.prepare('SELECT data FROM cases WHERE id = ?').get(caseId) as
    | { data: string }
    | undefined;
  if (!row) throw new Error(`unknown case ${caseId}`);
  const data = JSON.parse(row.data) as { discussion?: Comment[] };
  const discussion: Comment[] = Array.isArray(data.discussion) ? data.discussion : [];
  data.discussion = discussion;

  let maxSuffix = 0;
  walkComments(discussion, (c) => {
    const m = typeof c.id === 'string' ? c.id.match(/-d(\d+)$/) : null;
    if (m) maxSuffix = Math.max(maxSuffix, Number(m[1]));
  });

  const stored: Comment = {
    id: `${caseId}-d${maxSuffix + 1}`,
    author: comment.author,
    tag: comment.tag,
    time: comment.time,
    body: comment.body,
    ...(comment.ctx !== undefined ? { ctx: comment.ctx } : {}),
    replies: [],
  };

  if (parentId === null) {
    discussion.push(stored);
  } else {
    let parent: Comment | undefined;
    walkComments(discussion, (c) => {
      if (c.id === parentId) parent = c;
    });
    if (!parent) throw new Error(`unknown parent ${parentId}`);
    parent.replies = Array.isArray(parent.replies) ? parent.replies : [];
    parent.replies.push(stored);
  }

  db.prepare(`UPDATE cases SET data = ?, updated_at = datetime('now') WHERE id = ?`).run(
    JSON.stringify(data),
    caseId,
  );
  return stored;
}

export function nextCaseId(): string {
  const ids = (db.prepare('SELECT id FROM cases').all() as Array<{ id: string }>)
    .map((r) => Number(r.id.replace(/^ACT-/, '')))
    .filter((n) => Number.isFinite(n));
  return `ACT-${Math.max(1000, ...ids) + 1}`;
}
