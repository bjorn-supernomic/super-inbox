// Self-check: `bun run src/shared/deferred-tools.check.ts`
import assert from 'node:assert/strict';
import * as v from 'valibot';
import { callDeferredTool, deferredToolsGuidance, searchCatalog, type DeferredTool } from './deferred-tools.ts';

const catalog: DeferredTool[] = [
  {
    name: 'echo',
    description: 'Echo text back. Use when testing. Do NOT use for real work.',
    input: v.object({ text: v.string() }),
    run: async ({ text }) => ({ echoed: text }),
  },
  {
    name: 'add_numbers',
    description: 'Add two numbers. Use when arithmetic is needed.',
    input: v.object({ a: v.number(), b: v.number() }),
    run: async ({ a, b }) => (a as number) + (b as number),
  },
];

// search ranks matches and drops misses
assert.deepEqual(searchCatalog(catalog, 'echo testing').map((r) => r.name), ['echo']);
assert.equal(searchCatalog(catalog, 'zzz-nothing').length, 0);

// call validates then dispatches
assert.deepEqual(await callDeferredTool(catalog, 'echo', { text: 'hi' }), { echoed: 'hi' });
assert.equal(await callDeferredTool(catalog, 'add_numbers', { a: 2, b: 3 }), 5);
await assert.rejects(() => callDeferredTool(catalog, 'echo', { text: 42 }), /Invalid args/);
await assert.rejects(() => callDeferredTool(catalog, 'missing', {}), /Unknown tool/);

// guidance inlines small catalogs, counts large ones
assert.match(deferredToolsGuidance(catalog), /- echo:/);
const big = Array.from({ length: 20 }, (_, i) => ({ ...catalog[0]!, name: `tool_${i}` }));
assert.match(deferredToolsGuidance(big), /20 tools/);
assert.equal(deferredToolsGuidance([]), '');

console.log('deferred tools ok');
