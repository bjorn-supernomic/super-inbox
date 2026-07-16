/**
 * execute-decision — runs the held playbook steps after an operator decision.
 *
 * Deterministic: no model prompt is ever issued. `agent` is required by
 * `defineWorkflow()`, so a private agent is configured, but `run()` never
 * opens a session — no LLM call, no API key needed.
 *
 * No `route`/`runs` exports: HTTP access stays private; the app invokes this
 * ambiently via `invoke()` from the decision route.
 */
import { defineAgent, defineWorkflow } from '@flue/runtime';
import * as v from 'valibot';
import { emit } from '../shared/events.ts';
import { getCase, updateCase } from '../shared/store.ts';
import { runStubTool, toolForStep } from '../shared/tools.ts';

interface PlaybookStep {
  label: string;
  state: 'done' | 'held' | 'current' | 'pending';
}

const STEP_PACE_MS = 700; // pace execution so the UI shows per-step progress

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default defineWorkflow({
  agent: defineAgent(() => ({ model: 'anthropic/claude-haiku-4-5' })),
  input: v.object({
    caseId: v.string(),
    option: v.number(),
    title: v.string(),
  }),
  output: v.object({
    caseId: v.string(),
    executed: v.array(v.string()),
    outcome: v.literal('handled'),
  }),

  async run({ input }) {
    const kase = getCase(input.caseId);
    if (!kase) throw new Error(`execute-decision: case ${input.caseId} not found`);

    const steps: PlaybookStep[] = (kase.brain?.playbook?.steps ?? []).map((s: PlaybookStep) => ({
      ...s,
    }));
    const executed: string[] = [];

    for (let i = 0; i < steps.length; i++) {
      if (steps[i].state === 'done') continue;

      updateCase(input.caseId, { state: 'executing', execStep: i });
      emit({ type: 'case.updated', caseId: input.caseId });

      const tool = toolForStep(steps[i].label);
      runStubTool(tool, input.caseId, steps[i].label);
      executed.push(tool);
      steps[i].state = 'done';

      await sleep(STEP_PACE_MS);
    }

    const patch: Record<string, unknown> = { state: 'handled', dot: 'done', execStep: null };
    if (kase.brain?.playbook) {
      patch.brain = { ...kase.brain, playbook: { ...kase.brain.playbook, steps } };
    }
    updateCase(input.caseId, patch);
    emit({ type: 'case.updated', caseId: input.caseId });

    return { caseId: input.caseId, executed, outcome: 'handled' as const };
  },
});
