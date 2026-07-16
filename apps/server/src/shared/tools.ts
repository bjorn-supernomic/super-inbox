/**
 * Stub tool catalog — mirrors TOOLS in packages/contract/index.ts.
 *
 * Each tool is a Flue `defineTool` wrapper around `runStubTool`, which logs
 * and returns without touching any external system. Trusted code would bind
 * credentials + case-scoped targets here later; for now the whole loop works
 * end-to-end on stubs (CONTRACT.md §4).
 */
import { defineTool } from '@flue/runtime';
import * as v from 'valibot';

export const TOOL_NAMES = [
  'okta.unlock',
  'okta.reset',
  'okta.grant',
  'iru.posture',
  'github.revoke',
  'zendesk.reply',
  'netsuite.release',
  'slack.post',
  'hold',
  'verify',
] as const;

export type ToolName = (typeof TOOL_NAMES)[number];

export interface StubToolResult {
  ok: true;
  note: 'stub — no external effect';
}

/** Plain callable behind every stub tool — workflows invoke this directly. */
export function runStubTool(tool: ToolName, caseId: string, step: string): StubToolResult {
  console.log('[tool:%s] case=%s step=%s (stub — no external effect)', tool, caseId, step);
  return { ok: true, note: 'stub — no external effect' };
}

const stubInput = v.object({
  caseId: v.string(),
  step: v.string(),
});

const stubOutput = v.object({
  ok: v.literal(true),
  note: v.literal('stub — no external effect'),
});

function stubTool(name: ToolName) {
  return defineTool({
    name,
    description: `Stub for ${name} — logs the call and reports success without external effect.`,
    input: stubInput,
    output: stubOutput,
    run: ({ input }) => runStubTool(name, input.caseId, input.step),
  });
}

/** The full catalog, keyed by contract tool name — attach to agents as needed. */
export const tools = Object.fromEntries(TOOL_NAMES.map((name) => [name, stubTool(name)])) as Record<
  ToolName,
  ReturnType<typeof stubTool>
>;

/** Map a playbook-step label to a tool name (ports the frontend's toolFor heuristic). */
export function toolForStep(label: string): ToolName {
  if (/unlock/i.test(label)) return 'okta.unlock';
  if (/reset|password/i.test(label)) return 'okta.reset';
  if (/grant|provision|seat/i.test(label)) return 'okta.grant';
  if (/posture|device/i.test(label)) return 'iru.posture';
  if (/revoke|rotate/i.test(label)) return 'github.revoke';
  if (/reply|note|notify|post/i.test(label)) return 'zendesk.reply';
  if (/release|payment/i.test(label)) return 'netsuite.release';
  if (/escalate|slack/i.test(label)) return 'slack.post';
  if (/verify|check|confirm/i.test(label)) return 'verify';
  return 'verify';
}
