// Deterministic agent worker — files fully-shaped cases from signal JSONs
// without an LLM. The real investigation path is the Flue workflow in
// src/workflows/investigate-signal.ts; this stays as the offline fallback.
//
//   bun run agents/worker.ts --demo             file the built-in sample signal
//   bun run agents/worker.ts signals/foo.json   file one or more signal files
import { fileCase, type Signal } from "./case-shape.ts";

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
  const id = await fileCase(sig);
  console.log(`filed ${id} — ${sig.title}`);
}

const args = process.argv.slice(2);
if (args.includes("--demo")) await file(DEMO);
for (const path of args.filter((a) => !a.startsWith("--"))) await file(JSON.parse(await Bun.file(path).text()));
if (!args.length) console.log("usage: bun run agents/worker.ts --demo | <signal.json> ...");
