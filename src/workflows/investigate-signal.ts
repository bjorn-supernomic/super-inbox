// The real agent: an inbound signal goes in, an LLM investigates it as the
// domain agent, and a fully-shaped case lands in the inbox held for operator
// approval.
//
//   bunx flue run investigate-signal --input '{"domain":"TechOps","requester":"Sam Kowal","via":"Slack","body":"..."}'
//
// Needs ANTHROPIC_API_KEY in .env (or set FLUE_MODEL to another provider's
// model specifier).
import { defineAgent, defineWorkflow } from "@flue/runtime";
import * as v from "valibot";
import { buildCase, nextId, API } from "../../agents/case-shape.ts";

const MODEL = process.env.FLUE_MODEL ?? "anthropic/claude-sonnet-4-6";

const Investigation = v.object({
  title: v.pipe(v.string(), v.minLength(8), v.maxLength(90)),
  summary: v.pipe(v.string(), v.minLength(20), v.maxLength(240)),
  confidence: v.pipe(v.number(), v.minValue(50), v.maxValue(99)),
  why: v.pipe(v.array(v.pipe(v.string(), v.maxLength(120))), v.minLength(2), v.maxLength(4)),
  options: v.pipe(
    v.array(v.object({
      title: v.pipe(v.string(), v.maxLength(90)),
      desc: v.pipe(v.string(), v.maxLength(140)),
    })),
    v.length(3),
  ),
  steps: v.pipe(v.array(v.pipe(v.string(), v.maxLength(60))), v.minLength(3), v.maxLength(6)),
  scope: v.pipe(v.string(), v.maxLength(90)),
});

export default defineWorkflow({
  agent: defineAgent(() => ({
    model: MODEL,
    instructions: [
      "You are a company operations agent working a specific domain (TechOps, Finance, Procurement, Access, or Security).",
      "An inbound signal arrives from a business system. Investigate it and propose ONE concrete action for a human operator to approve — you never execute without approval.",
      "Voice: first person, calm, specific ('I can unlock the account and require a password reset').",
      "confidence: your genuine certainty the recommended action is right (50–99). Cases reach an operator because they were held below the 92% auto-run threshold, so most land 70–91; only near-mechanical follow-ups score higher.",
      "why: the specific reasons this was held for a human (policy touched, system of record, anomaly).",
      "options: exactly 3 — [0] your recommended action, [1] a variant of it, [2] a more cautious alternative (escalate, ask for confirmation).",
      "steps: the playbook you would execute, in order, as short imperative labels.",
      "scope: one compact line of what the action touches, instrument-panel style ('Unlock account · require password reset · SLA 22m').",
    ].join("\n"),
  })),
  input: v.object({
    domain: v.string(),
    requester: v.string(),
    via: v.string(),
    body: v.string(),
  }),
  output: v.object({
    id: v.string(),
    title: v.string(),
    confidence: v.number(),
  }),

  async run({ harness, input }) {
    const session = await harness.session();
    const inv = await session.prompt(
      `Signal from ${input.via}, filed by ${input.requester}, domain ${input.domain}:\n\n${input.body}`,
      { result: Investigation },
    );

    const kinds = ["Recommended - agent's proposal", "Variant", "Alternative"];
    const keys: (string | string[])[] = ["↵", ["⌥", "1"], ["⌥", "2"]];
    const caseData = buildCase(
      {
        ...input,
        title: inv.data.title,
        summary: inv.data.summary,
        confidence: Math.round(inv.data.confidence),
        why: inv.data.why,
        options: inv.data.options.map((o, i) => ({ kind: kinds[i], title: o.title, desc: o.desc, keys: keys[i] })),
        steps: inv.data.steps,
        scope: inv.data.scope,
      },
      await nextId(),
    );

    const res = await fetch(`${API}/api/cases`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(caseData),
    });
    const out = (await res.json()) as { id?: string; error?: string };
    if (!res.ok) throw new Error(`inbox API ${res.status}: ${out.error}`);

    return { id: out.id!, title: inv.data.title, confidence: Math.round(inv.data.confidence) };
  },
});
