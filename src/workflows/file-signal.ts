// file-signal workflow — turns an incoming signal into a fully-shaped proposed
// case and files it, exactly like the product's domain agents will.
//
//   bun run agent:demo                                        file the sample signal
//   bunx flue run file-signal --input "$(cat signals/foo.json)"
//   POST /workflows/file-signal  { input: <signal> }
import { defineAgent, defineWorkflow } from "@flue/runtime";
import type { WorkflowRouteHandler, WorkflowRunsHandler } from "@flue/runtime";
import * as v from "valibot";
import { buildCase, createCase, nextCaseId, SignalSchema } from "../cases.ts";

export default defineWorkflow({
  // ponytail: template-driven for now — the agent's model is never prompted.
  // Swap run() internals for harness.session().prompt(...) investigation when
  // real signal sources are wired up.
  agent: defineAgent(() => ({ model: "anthropic/claude-haiku-4-5" })),
  input: SignalSchema,
  output: v.object({ id: v.string() }),

  async run({ input, log }) {
    const id = await createCase(buildCase(input, await nextCaseId()));
    log.info("filed case", { id, title: input.title });
    return { id };
  },
});

// No auth yet — single-operator local product; add requireUser middleware with auth.
export const route: WorkflowRouteHandler = (_c, next) => next();
export const runs: WorkflowRunsHandler = (_c, next) => next();
