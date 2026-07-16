# Architecture

Goals (in priority order): speed and local feel · smallest possible stack · Flue for agents ·
convertible to a desktop app (Tauri) without rework.

## Monorepo (Turborepo + Bun workspaces)

```
super-inbox/
├─ package.json            # workspaces: apps/*, packages/*
├─ turbo.json
├─ apps/
│  ├─ web/                 # Vite + React 18 — port of Action Inbox.dc.html
│  └─ server/              # Flue app (Node target)
│     └─ src/
│        ├─ app.ts         # Hono: /api routes (CONTRACT.md §2) + app.route('/', flue())
│        ├─ db.ts          # export default sqlite('./data/flue.db')
│        ├─ agents/        # case-agent.ts · operator-assistant.ts
│        ├─ workflows/     # execute-decision.ts · enrich-lifecycle.ts
│        ├─ channels/      # (later) slack.ts, zendesk.ts …
│        └─ shared/        # tools.ts, store.ts (app DB), seed.ts
└─ packages/
   ├─ contract/            # ← already created; zero-dep types
   └─ ds/                  # Supernomic design system ported to real React + the token CSS
```

Dev: `flue dev` serves the API + agents; Vite proxies `/api`, `/agents`, `/workflows`, `/runs` to it.
One origin in prod: server serves the built web app (`serveStatic`) — same binary works as the Tauri sidecar.

## Database decision

**SQLite, twice, in one file directory — no DB server at all:**

- Flue runtime state: the built-in `sqlite('./data/flue.db')` adapter (conversations, runs, streams).
- App business data (cases, discussion, docs, lifecycle, settings, ledger): `node:sqlite` in
  `shared/store.ts` with a plain `schema.sql`. A handful of tables, most content stored as JSON
  columns matching the contract types — the contract is the schema; SQL stays a dumb document store
  with a few indexed columns (id, state, domain, updatedAt).

Why this beats the alternatives *for this product's goals*:

| Option | Verdict |
|---|---|
| **SQLite (chosen)** | Zero infra, µs reads = the "local experience" is real, not simulated. Embeds directly in Tauri (app-data dir). Boring, durable, replayable. |
| Postgres + Atlas | Right answer **later**, when this becomes multi-operator/multi-replica SaaS: swap `db.ts` → `@flue/postgres` (one line, Flue's `migrate()` is automatic) and port `store.ts` + introduce Atlas for the app schema. Contained migration; don't pay the server tax now. |
| Convex | Excellent reactive model, but it's a second backend + cloud dependency competing with Flue for ownership of functions and realtime. Conflicts with local-first and Tauri. |
| SurrealDB | Extra server binary, young ecosystem; nothing in the data model needs multi-model/graph. |
| Supermemory | Not a system of record — it's a hosted memory API. Optional later as a memory *tool* on `case-agent` (world-model recall), behind the same tool boundary. |

Kill signal for SQLite: >1 server replica needed, or first multi-tenant customer → execute the
Postgres swap above.

## Realtime

SSE for invalidation + Flue durable streams for agent/workflow liveness (CONTRACT.md §3).
No websocket infra, no client cache library needed initially — fetch + SSE-invalidate is enough
at this data size.

## Desktop (Tauri) path

- `apps/web` is a static build — Tauri wraps it unchanged.
- `apps/server` (Flue Node build) runs as a Tauri **sidecar**; SQLite files go to the OS app-data dir.
- Keep `baseUrl` for the Flue SDK client and `/api` configurable (one env var) — that's the only
  seam Tauri needs.
- Electron remains possible with the same layout; Tauri preferred for footprint.

## Build order (suggested)

1. Scaffold monorepo; port `packages/ds` (tokens + the ~15 components the inbox actually uses).
2. Port `apps/web` from the `.dc.html` against **static contract-shaped data** (mechanical seed
   conversion per CONTRACT.md §5) — pixel-parity checkpoint.
3. `apps/server`: store.ts + seed + the read routes + SSE; swap web to fetch.
4. Mutations + `execute-decision` workflow with stub tools — first real end-to-end loop
   (approve → run → handled, live-streamed).
5. `operator-assistant` (⌘K) and discussion investigations via `case-agent`.
6. Lifecycle workflows, doc storage/edit, settings-policy enforcement.
7. Channels + real tool integrations, one system at a time.
