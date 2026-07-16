// Case domain logic, shared by the HTTP API (app.ts) and the file-signal workflow.
import { and, eq, ne, sql } from "drizzle-orm";
import * as v from "valibot";
import { CASES } from "../inbox-data.js";
import { db } from "./db/client.ts";
import { cases, decisions } from "./db/schema.ts";
import { emitCase } from "./events.ts";

export const SignalSchema = v.object({
  domain: v.pipe(v.string(), v.nonEmpty()),
  title: v.pipe(v.string(), v.nonEmpty()),
  summary: v.pipe(v.string(), v.nonEmpty()),
  requester: v.pipe(v.string(), v.nonEmpty()),
  via: v.pipe(v.string(), v.nonEmpty()),
  body: v.pipe(v.string(), v.nonEmpty()),
  confidence: v.optional(v.number()),
  steps: v.optional(v.array(v.string())),
});
export type Signal = v.InferOutput<typeof SignalSchema>;

// Loose on purpose: cases are rich display blobs; only title is load-bearing.
export const CaseInputSchema = v.looseObject({
  title: v.pipe(v.string(), v.nonEmpty()),
  id: v.optional(v.string()),
  state: v.optional(v.string()),
});
export type CaseInput = v.InferOutput<typeof CaseInputSchema>;

export const DecisionSchema = v.object({
  option: v.number(),
  title: v.pipe(v.string(), v.nonEmpty()),
});

export class DuplicateCaseError extends Error {}
export class UnknownCaseError extends Error {}
export class AlreadyHandledError extends Error {}

export async function listCases(): Promise<unknown[]> {
  const rows = await db
    .select({ state: cases.state, data: cases.data })
    .from(cases)
    .orderBy(sql`rowid`);
  return rows.map((r) => ({ ...JSON.parse(r.data), state: r.state }));
}

export async function nextCaseId(): Promise<string> {
  const rows = await db.select({ id: cases.id }).from(cases);
  const numbers = rows
    .map((r) => Number(r.id.replace(/^ACT-/, "")))
    .filter((n) => Number.isFinite(n));
  return `ACT-${Math.max(1000, ...numbers) + 1}`;
}

export async function createCase(input: CaseInput): Promise<string> {
  const id = input.id?.trim() || (await nextCaseId());
  const state = input.state ?? "needs";
  const existing = await db.select({ id: cases.id }).from(cases).where(eq(cases.id, id));
  if (existing.length > 0) throw new DuplicateCaseError(`${id} already exists`);
  await db.insert(cases).values({ id, state, data: JSON.stringify({ ...input, id, state }) });
  emitCase({ type: "case.filed", id });
  return id;
}

export async function recordDecision(
  caseId: string,
  decision: v.InferOutput<typeof DecisionSchema>,
): Promise<void> {
  // Optimistic concurrency: two operators can't double-decide a case.
  const updated = await db
    .update(cases)
    .set({ state: "handled", updatedAt: sql`(datetime('now'))` })
    .where(and(eq(cases.id, caseId), ne(cases.state, "handled")));
  if (updated.rowsAffected === 0) {
    const exists = await db.select({ id: cases.id }).from(cases).where(eq(cases.id, caseId));
    if (exists.length === 0) throw new UnknownCaseError(`unknown case ${caseId}`);
    throw new AlreadyHandledError(`${caseId} already handled`);
  }
  await db.insert(decisions).values({ caseId, optionIndex: decision.option, title: decision.title });
  emitCase({ type: "case.decided", id: caseId });
}

function initials(name: string): string {
  return name.split(/\s+/).map((w) => w[0]).join("").slice(0, 2).toUpperCase();
}

// ponytail: proposals are template-driven — each case is cloned from the
// domain's seed case so it always matches the UI's full shape, then the
// signal-specific fields are overridden. Swap for an LLM investigation
// (harness.session().prompt) when real signal sources are wired up.
export function buildCase(sig: Signal, id: string): CaseInput {
  const templates = CASES as { domain: string; state: string }[];
  const template = templates.find((c) => c.domain === sig.domain && c.state === "needs") ?? templates[0];
  const c = structuredClone(template) as Record<string, unknown> & { brain?: { playbook?: { steps: unknown } } };
  const agent = `${sig.domain} agent`;
  const confidence = sig.confidence ?? 80;

  Object.assign(c, {
    id,
    tab: `${id} ${sig.title.slice(0, 16)}…`,
    dot: "pending",
    domain: sig.domain,
    title: sig.title,
    summary: sig.summary,
    hold: `Confidence ${confidence}% — held for operator approval.`,
    path: [agent, sig.via.toLowerCase(), sig.requester.toLowerCase(), id.toLowerCase(), "awaiting you"],
    verb: "APPROVE",
    verbKey: "A",
    confidence,
    state: "needs",
    updated: "just now",
    updatedPct: 100,
    arrival: Date.now() / 1e3,
    quote: {
      initials: initials(sig.requester),
      name: sig.requester,
      via: sig.via,
      route: agent,
      status: "waiting for you",
      body: sig.body,
    },
    why: [
      `Confidence ${confidence}% is below the auto-run threshold`,
      "Filed by an external signal — first case of its kind on this route",
    ],
  });
  if (sig.steps && c.brain?.playbook) {
    c.brain.playbook.steps = sig.steps.map((label, i) => ({ label, state: i === 0 ? "held" : "pending" }));
  }
  // Template residue that would mislead the operator on a fresh case:
  delete c.discussion;
  delete c.conversation;
  return c as CaseInput;
}
