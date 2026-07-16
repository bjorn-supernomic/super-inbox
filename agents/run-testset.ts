// Eyeball harness for the LLM agent: plays every signal in agents/testset/
// through the investigate-signal Flue workflow, then compares what landed in
// the inbox against each file's `expect` block.
//
//   bun run agents/run-testset.ts            all cases
//   bun run agents/run-testset.ts 02 04      only matching files
//
// Needs ANTHROPIC_API_KEY in .env and the backend running (API_URL to point
// elsewhere than :4820). Expectations are review aids, not hard asserts —
// a FLAG means "look at this one", not "broken".
import { readdirSync } from "node:fs";
import { API } from "./case-shape.ts";

const dir = `${import.meta.dir}/testset`;
const filters = process.argv.slice(2);
const files = readdirSync(dir).filter((f) => f.endsWith(".json") && (!filters.length || filters.some((x) => f.includes(x)))).sort();

interface Expect { confidence: [number, number]; keywords: string[]; notes: string }
let flags = 0;

for (const f of files) {
  const { signal, expect } = JSON.parse(await Bun.file(`${dir}/${f}`).text()) as { signal: object; expect: Expect };
  process.stdout.write(`\n━━ ${f}\n`);
  const proc = Bun.spawn(["bunx", "flue", "run", "investigate-signal", "--input", JSON.stringify(signal)], {
    cwd: `${import.meta.dir}/..`,
    stdout: "pipe",
    stderr: "pipe",
  });
  const out = await new Response(proc.stdout).text();
  const err = await new Response(proc.stderr).text();
  if ((await proc.exited) !== 0) {
    console.log(`  RUN FAILED\n${(err || out).split("\n").slice(-6).join("\n")}`);
    flags++;
    continue;
  }
  const json = out.match(/\{[^]*\}/)?.[0];
  const result = json ? (JSON.parse(json) as { id: string; title: string; confidence: number }) : null;
  if (!result) { console.log("  could not parse result:", out.slice(-200)); flags++; continue; }

  const inbox = (await (await fetch(`${API}/api/inbox`)).json()) as { cases: any[] };
  const c = inbox.cases.find((x) => x.id === result.id);

  console.log(`  ${result.id} · confidence ${result.confidence}%`);
  console.log(`  title:   ${c.title}`);
  console.log(`  summary: ${c.summary}`);
  console.log(`  rec:     ${c.options[0].title} — ${c.options[0].desc ?? ""}`);
  console.log(`  alt:     ${c.options[2].title}`);
  console.log(`  why:     ${c.why.join(" · ")}`);

  const [lo, hi] = expect.confidence;
  const confOk = result.confidence >= lo && result.confidence <= hi;
  const hay = `${c.title} ${c.summary} ${c.options.map((o: any) => `${o.title} ${o.desc ?? ""}`).join(" ")}`.toLowerCase();
  const kwOk = expect.keywords.some((k) => hay.includes(k.toLowerCase()));
  if (!confOk) { console.log(`  FLAG confidence ${result.confidence} outside [${lo}, ${hi}]`); flags++; }
  if (!kwOk) { console.log(`  FLAG none of [${expect.keywords}] found in title/options`); flags++; }
  if (confOk && kwOk) console.log("  ok");
  console.log(`  intent: ${expect.notes}`);
}

console.log(`\n${files.length} signals, ${flags} flag(s) to review`);
