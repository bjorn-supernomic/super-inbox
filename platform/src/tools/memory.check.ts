// Self-check: `bun run src/tools/memory.check.ts` (needs local Postgres; see .env.example)
import assert from 'node:assert/strict';
import { sql } from 'drizzle-orm';

// The store binds DATABASE_URL at first use — set it before any store import.
process.env.DATABASE_URL =
  process.env.TEST_DATABASE_URL ?? 'postgres://localhost:5432/super_inbox_test';

const { appDb, closeAppDb } = await import('../store/db.ts');
const { recordMessage } = await import('../store/sessions.ts');
const memory = await import('./memory.ts');

const db = await appDb();
await db.execute(sql`TRUNCATE messages, facts RESTART IDENTITY`);

const TENANT = 'T-memcheck';
const OTHER_TENANT = 'T-other';
const INSTANCE = `slack:${TENANT}:C-memcheck:171000.001`;

// Tool factories bind the tenant in trusted code and keep their fixed names.
assert.equal(memory.sessionSearch(TENANT).name, 'session_search');
assert.equal(memory.rememberFact(TENANT, 'agent:personal test').name, 'remember_fact');

// --- session_search: three shapes ---

const seedContents: [string, string][] = [
  ['user', 'we deploy with terraform every friday afternoon'],
  ['assistant', 'Noted — terraform deploys on fridays.'],
];
for (const [eventIndex, [role, content]] of seedContents.entries()) {
  await recordMessage({
    instanceId: INSTANCE,
    agentName: 'personal',
    tenant: TENANT,
    role: role as 'user' | 'assistant',
    content,
    eventIndex,
    ts: `2026-07-15T12:0${eventIndex}:00.000Z`,
  });
}
await recordMessage({
  instanceId: `slack:${OTHER_TENANT}:C-else`,
  agentName: 'personal',
  tenant: OTHER_TENANT,
  role: 'user',
  content: 'terraform is banned here',
  eventIndex: 0,
  ts: '2026-07-15T12:00:00.000Z',
});

// discovery: query → tenant-scoped hits with windows and bookends
const discovery = await memory.runSessionSearch(TENANT, { query: 'terraform' });
assert.equal(discovery.shape, 'discovery');
assert.ok(discovery.shape === 'discovery' && discovery.hits.length >= 1);
const hit = discovery.shape === 'discovery' ? discovery.hits[0]! : undefined!;
assert.equal(hit.instanceId, INSTANCE);
assert.ok(hit.window.length >= 1);
assert.ok(hit.bookends.first.length >= 1);

// scroll: instanceId + aroundMessageId → surrounding messages
const anchor = hit.window[0]!;
const scroll = await memory.runSessionSearch(TENANT, {
  instanceId: hit.instanceId,
  aroundMessageId: anchor.id,
});
assert.equal(scroll.shape, 'scroll');
assert.ok(scroll.shape === 'scroll' && scroll.messages.some((m) => m.id === anchor.id));

// browse: no args → recent session summaries, tenant-scoped
const browse = await memory.runSessionSearch(TENANT, {});
assert.equal(browse.shape, 'browse');
assert.ok(browse.shape === 'browse' && browse.sessions.some((s) => s.instanceId === INSTANCE));
assert.ok(browse.shape === 'browse' && browse.sessions.every((s) => s.tenant === TENANT));

// Partial scroll args are a usage error, not a silent browse.
await assert.rejects(
  () => memory.runSessionSearch(TENANT, { instanceId: INSTANCE }),
  /aroundMessageId/,
);

// --- remember_fact: success + capacity consolidation ---

const first = await memory.runRememberFact(TENANT, 'agent:personal test', {
  subjectType: 'user',
  subjectId: 'U-memcheck',
  category: 'preference',
  body: 'Prefers concise updates',
});
assert.ok(first.ok, 'first fact should store cleanly');
assert.equal(typeof first.fact.id, 'number');
assert.equal(first.fact.provenance, 'agent:personal test');

// Fill the subject until the store reports capacity, then consolidate by
// dropping a superseded entry and retrying — the same-turn model loop.
let capacity: { error: string; current: { id: number }[] } | undefined;
for (let i = 0; i < 64 && !capacity; i++) {
  const result = await memory.runRememberFact(TENANT, 'agent:personal test', {
    subjectType: 'user',
    subjectId: 'U-memcheck',
    category: 'preference',
    body: `Preference number ${i}: likes long-form detail padding ${'x'.repeat(80)}`,
  });
  if (!result.ok) capacity = result;
}
assert.ok(capacity, 'expected a capacity error within 64 facts');
assert.ok(capacity.error.length > 0, 'capacity error should explain itself');
assert.ok(capacity.current.length > 0, 'capacity error should list current entries verbatim');

const consolidated = await memory.runRememberFact(TENANT, 'agent:personal test', {
  subjectType: 'user',
  subjectId: 'U-memcheck',
  category: 'preference',
  body: 'Consolidated: prefers concise, low-noise updates',
  removeFactId: capacity.current[0]!.id,
});
assert.ok(consolidated.ok, 'retry after consolidation should succeed');

await closeAppDb();
console.log('memory tools ok');
