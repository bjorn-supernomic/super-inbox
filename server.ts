// Super Inbox backend — serves the static app and a small cases API.
// bun run server.ts   (default http://localhost:3000)
//
// Storage: bun:sqlite, one JSON blob per case + a decisions ledger.
// ponytail: whole-case JSON blobs, no column-per-field schema — the case shape
// is rich display data; promote fields to columns when we actually query them.
import { Database } from "bun:sqlite";
import { resolve } from "node:path";
import { CASES, LIFECYCLE, LIBRARY } from "./inbox-data.js";

const ROOT = import.meta.dir;
const PORT = Number(process.env.PORT ?? 4820);

const db = new Database(`${ROOT}/data/inbox.db`, { create: true });
db.run(`
  CREATE TABLE IF NOT EXISTS cases (
    id TEXT PRIMARY KEY,
    state TEXT NOT NULL,
    data TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT (datetime('now')),
    updated_at TEXT NOT NULL DEFAULT (datetime('now'))
  );
  CREATE TABLE IF NOT EXISTS decisions (
    seq INTEGER PRIMARY KEY AUTOINCREMENT,
    case_id TEXT NOT NULL REFERENCES cases(id),
    option_index INTEGER NOT NULL,
    title TEXT NOT NULL,
    decided_at TEXT NOT NULL DEFAULT (datetime('now'))
  );
`);

const caseCount = (db.query("SELECT count(*) AS n FROM cases").get() as { n: number }).n;
if (caseCount === 0) {
  const insert = db.prepare("INSERT INTO cases (id, state, data) VALUES (?, ?, ?)");
  for (const c of CASES) insert.run(c.id, c.state, JSON.stringify(c));
  console.log(`seeded ${CASES.length} cases from inbox-data.js`);
}

function listCases(): unknown[] {
  return (db.query("SELECT state, data FROM cases ORDER BY rowid").all() as { state: string; data: string }[])
    .map((r) => ({ ...JSON.parse(r.data), state: r.state }));
}

function json(body: unknown, status = 200): Response {
  return Response.json(body, { status });
}

function nextCaseId(): string {
  const ids = (db.query("SELECT id FROM cases").all() as { id: string }[])
    .map((r) => Number(r.id.replace(/^ACT-/, "")))
    .filter((n) => Number.isFinite(n));
  return `ACT-${Math.max(1000, ...ids) + 1}`;
}

async function api(req: Request, url: URL): Promise<Response> {
  const decision = url.pathname.match(/^\/api\/cases\/([^/]+)\/decision$/);

  if (req.method === "GET" && url.pathname === "/api/inbox")
    return json({ cases: listCases(), lifecycle: LIFECYCLE, library: LIBRARY });

  if (req.method === "GET" && url.pathname === "/api/decisions")
    return json(db.query("SELECT * FROM decisions ORDER BY seq").all());

  if (req.method === "POST" && decision) {
    const id = decodeURIComponent(decision[1]);
    const row = db.query("SELECT id FROM cases WHERE id = ?").get(id);
    if (!row) return json({ error: `unknown case ${id}` }, 404);
    const body = await req.json().catch(() => null) as { option?: number; title?: string } | null;
    if (!body || typeof body.option !== "number" || typeof body.title !== "string")
      return json({ error: "expected { option: number, title: string }" }, 400);
    db.run("INSERT INTO decisions (case_id, option_index, title) VALUES (?, ?, ?)", [id, body.option, body.title]);
    db.run("UPDATE cases SET state = 'handled', updated_at = datetime('now') WHERE id = ?", [id]);
    return json({ ok: true });
  }

  if (req.method === "POST" && url.pathname === "/api/cases") {
    const c = await req.json().catch(() => null) as Record<string, unknown> | null;
    if (!c || typeof c.title !== "string" || !c.title.trim())
      return json({ error: "case needs at least a title" }, 400);
    const id = typeof c.id === "string" && c.id.trim() ? c.id : nextCaseId();
    if (db.query("SELECT id FROM cases WHERE id = ?").get(id)) return json({ error: `${id} already exists` }, 409);
    const state = typeof c.state === "string" ? c.state : "needs";
    db.run("INSERT INTO cases (id, state, data) VALUES (?, ?, ?)", [id, state, JSON.stringify({ ...c, id, state })]);
    return json({ ok: true, id }, 201);
  }

  return json({ error: "not found" }, 404);
}

Bun.serve({
  port: PORT,
  async fetch(req) {
    const url = new URL(req.url);
    if (url.pathname.startsWith("/api/")) return api(req, url);

    let path = decodeURIComponent(url.pathname);
    if (path === "/") path = "/index.html";
    // Path traversal guard: normalized path must stay inside the project root.
    const full = resolve(`${ROOT}${path}`);
    if (full !== ROOT && !full.startsWith(`${ROOT}/`)) return new Response("nope", { status: 403 });
    const file = Bun.file(full);
    if (await file.exists()) return new Response(file);
    return new Response("not found", { status: 404 });
  },
});

console.log(`super-inbox on http://localhost:${PORT}`);
