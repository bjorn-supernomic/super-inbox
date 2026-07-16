// Shared case assembly for agent workers — clones a domain-matched seed case
// so filed cases always match the UI's full shape, then overrides the fields
// the agent actually determined.
import { CASES } from "../inbox-data.js";

export const API = process.env.API_URL ?? "http://localhost:4820";

export interface Signal {
  domain: string;
  title: string;
  summary: string;
  requester: string;
  via: string;
  body: string;
  confidence?: number;
  steps?: string[];
  why?: string[];
  options?: { kind: string; title: string; desc?: string; keys: string | string[] }[];
  scope?: string;
}

export function assertSignal(s: unknown): asserts s is Signal {
  const o = s as Record<string, unknown>;
  for (const k of ["domain", "title", "summary", "requester", "via", "body"] as const)
    if (typeof o?.[k] !== "string" || !o[k]) throw new Error(`signal missing string field "${k}"`);
}

function initials(name: string): string {
  return name.split(/\s+/).map((w) => w[0]).join("").slice(0, 2).toUpperCase();
}

export function buildCase(sig: Signal, id: string): Record<string, unknown> {
  const template = CASES.find((c: any) => c.domain === sig.domain && c.state === "needs") ?? CASES[0];
  const c = structuredClone(template) as any;
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
    quote: { initials: initials(sig.requester), name: sig.requester, via: sig.via, route: agent, status: "waiting for you", body: sig.body },
    why: sig.why ?? [
      `Confidence ${confidence}% is below the auto-run threshold`,
      "Filed by an external signal — first case of its kind on this route",
    ],
  });
  if (sig.options) c.options = sig.options;
  if (sig.scope) c.context.scope = sig.scope;
  if (sig.steps) {
    c.brain.playbook.steps = sig.steps.map((label, i) => ({ label, state: i === 0 ? "held" : "pending" }));
  }
  // Template residue would mislead the operator on a fresh case — but the
  // render path expects these arrays to exist, so empty them, don't delete.
  c.discussion = [];
  c.conversation = [];
  return c;
}

export async function nextId(): Promise<string> {
  const inbox = (await (await fetch(`${API}/api/inbox`)).json()) as { cases: { id: string }[] };
  const max = Math.max(1000, ...inbox.cases.map((c) => Number(c.id.replace(/^ACT-/, "")) || 0));
  return `ACT-${max + 1}`;
}

export async function fileCase(sig: Signal): Promise<string> {
  assertSignal(sig);
  const res = await fetch(`${API}/api/cases`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(buildCase(sig, await nextId())),
  });
  const out = (await res.json()) as { id?: string; error?: string };
  if (!res.ok) throw new Error(`API ${res.status}: ${out.error}`);
  return out.id!;
}
