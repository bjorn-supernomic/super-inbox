# Target Stack

Decided 2026-07-16. Super-inbox grows fast — backend, databases, multi-tenancy,
agents — so every layer below was chosen to scale with feature velocity, not
just to work today. Deviate only with a written reason here.

| Layer | Choice |
|---|---|
| Agent harness + workflows | [Flue](https://flue.dev) (`@flue/cli`, docs via `flue docs read <path>`) |
| HTTP/routing | Hono — Flue's native layer, mounted in `src/app.ts` |
| Domain DB | SQLite now → Postgres at multi-tenancy; Drizzle ORM schema in TS |
| Migrations | [Atlas](https://atlasgo.io) via its Drizzle integration |
| Validation | valibot at every boundary (Flue hard-requires Valibot schemas for workflow/action contracts, so it's the single validation library — zod would mean two) |
| Agent→UI real-time | Flue Durable Streams + `@flue/react` (`useFlueAgent` / `useFlueWorkflow`) |
| App real-time | One SSE endpoint (`GET /api/events`) |
| Frontend | Current no-build `Action Inbox.dc.html` → Vite + React + TS when velocity starts |
| Hygiene | `bunx fallow` in CI |

## Rules

- **Flue is the chassis.** Agents, workflows, channels, durable execution,
  streaming, and observability come from Flue — don't rebuild any of it.
  Custom routes live in the Hono app alongside `app.route('/', flue())`.
- **Drizzle schema is the single source of truth; Atlas is the only migration
  tool.** `atlas migrate diff/lint/apply` — never `drizzle-kit push/generate`.
  Atlas lint gates agent-generated migrations in CI (destructive-change
  detection, drift detection). Same workflow on SQLite and Postgres.
- **Multi-tenancy** (when it lands): `tenant_id` column on every domain table
  + one Hono middleware resolving tenant from the auth token. Postgres RLS as
  backstop. Not tenant-per-database.
- **Real-time is SSE, two lanes.** Agent conversations/workflow runs stream
  through Flue Durable Streams (resumable offsets, survives restarts). Domain
  events (case filed/decided) fan out through one SSE endpoint fed by an
  in-process EventEmitter — swap for Postgres LISTEN/NOTIFY at multi-replica.
  No WebSockets unless presence/typing is needed.
- **Multi-operator safety**: decision writes use optimistic concurrency
  (`UPDATE ... WHERE state != 'handled'`, 409 on zero rows).

## Rejected

- **Effect.ts** — two reasons, one per half of what Effect is. Its ecosystem
  (retries, streams, concurrency, resource management, observability) overlaps
  what Flue/Hono/Drizzle/zod already provide here. Its core pattern (errors
  and dependencies tracked in the type system) is viral and pays off in deep
  call graphs of pure domain code — but a Flue app is mostly thin
  promise-based adapters between framework surfaces, where every boundary
  needs `tryPromise` wrappers carrying untyped errors, so the paradigm cost
  isn't recouped. Also reverses the "exceptions for errors" convention.
  Revisit if a substantial pure-TS domain core (e.g. a policy engine for
  agent auto-run decisions) emerges outside the framework surfaces — adopt it
  incrementally in that module only, as a conscious convention change.
- **MongoDB Atlas** — cases-as-JSON-blobs fit documents, but Atlas (atlasgo)
  is SQL-only and the relational path won for multi-tenancy + migrations.
- **fallow.run (paid runtime layer)** — deferred until production traffic
  makes "is this path cold?" a real question. Static `bunx fallow` config must
  exclude generated bundles (`_ds/`, `*-toolbar.js`, `glimm-sweep.js`) —
  they're false positives.

## Sequencing

1. ✅ (2026-07-16) `flue init`; `server.ts` → Hono `src/app.ts`;
   `agents/worker.ts` → the `file-signal` Flue workflow; Drizzle schema for
   cases/decisions on SQLite; Atlas migrations; valibot at API boundaries;
   SSE `/api/events` + optimistic decision guard landed early.
   Operational gotchas learned: exclude `data/**` from the Vite watcher
   (`flue.config.ts`) or SQLite writes reload-loop the dev server; don't run
   `flue run` while `flue dev` holds the same `data/flue.db` (two owners →
   run replays) — invoke workflows over HTTP instead.
2. When frontend features accelerate: Vite + React + TS, Hono RPC client,
   `@flue/react` streaming hooks, SSE domain events replace 5s polling.
3. At multi-tenancy: Postgres (Flue adapter + domain DB), tenant middleware,
   auth.
4. Ongoing: fallow in CI; OTel export from Flue for production observability.
