// Agents worker — turns incoming signals into proposed cases and files them
// through the backend API, exactly like the product's domain agents would.
//
//   bun run agents/worker.ts --demo             file the built-in sample signal
//   bun run agents/worker.ts signals/foo.json   file one or more signal files
//
// A signal is the small, honest input an integration would emit:
//   { domain, title, summary, requester, via, body, confidence?, steps? }
//
// ponytail: proposals are template-driven — each case is cloned from the
// domain's seed case so it always matches the UI's full shape, then the
// signal-specific fields are overridden. Swap buildCase's internals for an
// LLM investigation (Claude) when real signal sources are wired up.
import { CASES } from "../inbox-data.js";

const API = process.env.API_URL ?? "http://localhost:4820";

interface Signal {
  domain: string;
  title: string;
  summary: string;
  requester: string;
  via: string;
  body: string;
  confidence?: number;
  steps?: string[];
}

function assertSignal(s: unknown): asserts s is Signal {
  const o = s as Record<string, unknown>;
  for (const k of ["domain", "title", "summary", "requester", "via", "body"] as const)
    if (typeof o?.[k] !== "string" || !o[k]) throw new Error(`signal missing string field "${k}"`);
}

function initials(name: string): string {
  return name.split(/\s+/).map((w) => w[0]).join("").slice(0, 2).toUpperCase();
}

function buildCase(sig: Signal, id: string): Record<string, unknown> {
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
    why: [
      `Confidence ${confidence}% is below the auto-run threshold`,
      "Filed by an external signal — first case of its kind on this route",
    ],
  });
  if (sig.steps) {
    c.brain.playbook.steps = sig.steps.map((label, i) => ({ label, state: i === 0 ? "held" : "pending" }));
  }
  // Template residue would mislead the operator on a fresh case — but the
  // render path expects these arrays to exist, so empty them, don't delete.
  c.discussion = [];
  c.conversation = [];
  return c;
}

const DEMO: Signal = {
  domain: "TechOps",
  title: "Reset 2FA for Sam K. after phone loss",
  summary: "I can re-enroll MFA on the replacement device and revoke the lost enrollment.",
  requester: "Sam Kowal",
  via: "Slack",
  body: "Lost my phone over the weekend — need MFA moved to the new one. Manager is cc'd on the thread.",
  confidence: 83,
  steps: ["Verify identity against record", "Confirm manager approval", "Revoke lost enrollment", "Re-enroll MFA on replacement", "Notify requester"],
};

async function file(sig: Signal): Promise<void> {
  assertSignal(sig);
  const res = await fetch(`${API}/api/cases`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(buildCase(sig, await nextId())),
  });
  const out = (await res.json()) as { id?: string; error?: string };
  if (!res.ok) throw new Error(`API ${res.status}: ${out.error}`);
  console.log(`filed ${out.id} — ${sig.title}`);
}

async function nextId(): Promise<string> {
  const inbox = (await (await fetch(`${API}/api/inbox`)).json()) as { cases: { id: string }[] };
  const max = Math.max(1000, ...inbox.cases.map((c) => Number(c.id.replace(/^ACT-/, "")) || 0));
  return `ACT-${max + 1}`;
}

const args = process.argv.slice(2);
if (args.includes("--demo")) await file(DEMO);
for (const path of args.filter((a) => !a.startsWith("--"))) await file(JSON.parse(await Bun.file(path).text()));
if (!args.length) console.log("usage: bun run agents/worker.ts --demo | <signal.json> ...");
