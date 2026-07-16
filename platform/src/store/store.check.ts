// Self-check: `bun run src/store/store.check.ts` (needs local Postgres; see .env.example)
import assert from 'node:assert/strict';
import { sql } from 'drizzle-orm';

process.env.DATABASE_URL =
  process.env.TEST_DATABASE_URL ?? 'postgres://localhost:5432/super_inbox_test';

const { appDb, closeAppDb } = await import('./db.ts');
const { browseSessions, recordMessage, scrollSession, searchSessions } = await import('./sessions.ts');
const { SUBJECT_CAPACITY_CHARS, addFact, listFacts, removeFact, renderProfile } = await import('./facts.ts');
type MirrorMessage = import('./sessions.ts').MirrorMessage;

const db = await appDb();
await db.execute(sql`TRUNCATE messages, facts RESTART IDENTITY`);

const base = { agentName: 'personal', tenant: 'T1', role: 'user' as const };
async function seed(
  instanceId: string,
  contents: string[],
  overrides: Partial<MirrorMessage> = {},
): Promise<void> {
  for (const [eventIndex, content] of contents.entries()) {
    await recordMessage({
      ...base,
      instanceId,
      content,
      eventIndex,
      ts: `2026-07-01T00:0${Math.min(eventIndex, 9)}:00.000Z`,
      ...overrides,
    });
  }
}

// recordMessage is idempotent on (instanceId, eventIndex)
await seed('slack:T1:C1:100', ['hello there']);
await seed('slack:T1:C1:100', ['hello there duplicate attempt']);
assert.equal((await browseSessions())[0]?.messageCount, 1);

// searchSessions: content match with snippet, window, and bookends
await seed('slack:T1:C2:200', [
  'kickoff',
  'agenda review',
  'planning notes',
  'the quarterly zebra report is due friday',
  'action items',
  'wrap up',
  'follow-ups assigned',
  'closing thoughts',
]);
const [hit] = await searchSessions('zebra report');
assert.ok(hit);
assert.equal(hit.instanceId, 'slack:T1:C2:200');
assert.match(hit.snippet, /zebra/);
assert.equal(hit.window.length, 8); // ±5 clipped to the 8-message session
assert.deepEqual(hit.window.map((m) => m.eventIndex), [0, 1, 2, 3, 4, 5, 6, 7]);
assert.deepEqual(hit.bookends.first.map((m) => m.eventIndex), [0, 1, 2]);
assert.deepEqual(hit.bookends.last.map((m) => m.eventIndex), [5, 6, 7]);

// automation demotion: hb: instance with the same term ranks below the personal one
await seed('hb:daily-digest', ['the quarterly zebra report is due friday']);
const demoted = await searchSessions('zebra');
assert.deepEqual(demoted.map((h) => h.instanceId), ['slack:T1:C2:200', 'hb:daily-digest']);

// tenant filter, no-match, and punctuation-heavy queries
await seed('slack:T2:C9:300', ['zebra sightings in tenant two'], { tenant: 'T2' });
assert.deepEqual(
  (await searchSessions('zebra', { tenant: 'T2' })).map((h) => h.instanceId),
  ['slack:T2:C9:300'],
);
assert.deepEqual(await searchSessions('xylophone-nonexistent-term'), []);
assert.deepEqual(await searchSessions('   '), []);
await searchSessions('what?! (weird) "quo"tes" AND NEAR/2 col:on*');

// scrollSession: ±window around a message id
const anchor = (await searchSessions('planning'))[0]?.window.find(
  (m) => m.content === 'planning notes',
);
assert.ok(anchor);
const scrolled = await scrollSession('slack:T1:C2:200', anchor.id, 2);
assert.deepEqual(scrolled.map((m) => m.eventIndex), [0, 1, 2, 3, 4]);
assert.deepEqual(await scrollSession('slack:T1:C2:200', 999_999), []);

// browseSessions: most recent first, tenant-scoped
await seed('slack:T1:C3:400', ['newest session'], { ts: '2026-07-15T12:00:00.000Z' });
const browsed = await browseSessions({ tenant: 'T1' });
assert.equal(browsed[0]?.instanceId, 'slack:T1:C3:400');
assert.equal(browsed[0]?.preview, 'newest session');
assert.ok(browsed.every((s) => s.tenant === 'T1'));
assert.equal((await browseSessions({ limit: 1 })).length, 1);

// addFact capacity: rejection returns current entries; removal frees space
const subject = { tenant: 'T1', subjectType: 'user' as const, subjectId: 'U1' };
const big = await addFact({ ...subject, category: 'prefs', body: 'x'.repeat(2000), provenance: 'check' });
assert.ok(big.ok);
const overflow = await addFact({ ...subject, category: 'prefs', body: 'y'.repeat(300), provenance: 'check' });
assert.ok(!overflow.ok);
assert.match(overflow.error, /2000\/2200/);
assert.deepEqual(overflow.current.map((f) => f.id), [big.fact.id]);
await removeFact(big.fact.id);
assert.equal((await listFacts(subject.tenant, subject.subjectType, subject.subjectId)).length, 0);
const retry = await addFact({ ...subject, category: 'prefs', body: 'y'.repeat(300), provenance: 'check' });
assert.ok(retry.ok);
await removeFact(retry.fact.id);

// renderProfile: header math, § separator, omitted empty subjects
await addFact({ ...subject, category: 'prefs', body: 'a'.repeat(900), provenance: 'check' });
await addFact({ ...subject, category: 'style', body: 'b'.repeat(34), provenance: 'check' });
await addFact({ ...subject, category: 'later', body: 'pending note', provenance: 'check', status: 'pending' });
const profile = await renderProfile('T1', [
  { subjectType: 'user', subjectId: 'U1', label: 'Björn' },
  { subjectType: 'channel', subjectId: 'C-empty', label: 'Empty channel' },
]);
assert.match(profile, /^## Björn \[42% — 934\/2200 chars]\n/);
assert.equal(profile.split('\n§\n').length, 2);
assert.ok(!profile.includes('Empty channel'));
assert.ok(!profile.includes('pending note'));
assert.equal(SUBJECT_CAPACITY_CHARS, 2200);
assert.equal(await renderProfile('T1', [{ subjectType: 'team', subjectId: 'none', label: 'Nobody' }]), '');

await closeAppDb();
console.log('store ok');
