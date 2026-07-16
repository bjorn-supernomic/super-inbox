# Super Inbox

Action Inbox — operator surface for reviewing and approving agent-proposed actions.
Design imported from [claude.ai/design](https://claude.ai/design/p/111b4948-aa64-4bbc-ac95-08e0956e3a1d);
repo: [bjorn-supernomic/super-inbox](https://github.com/bjorn-supernomic/super-inbox).

## Architecture

Target stack and the reasoning behind it: [`docs/stack.md`](docs/stack.md).

- **Frontend** — `Action Inbox.dc.html`: a self-contained React component rendered by
  the dc-runtime (`support.js`), styled by the Supernomic design system (`_ds/`).
  No build step. Loads data from the backend when present (and live-polls it every 5s),
  falls back to the static `inbox-data.js` under any dumb file server.
- **Backend** — [Flue](https://flueframework.com) app on port 4820: `src/app.ts` is a
  Hono router serving the static app, the cases API, an SSE domain-event stream
  (`/api/events`), and Flue's agent/workflow routes. Domain data lives in SQLite
  (`data/inbox.db`) behind Drizzle (`src/domain/`), seeded from `inbox-data.js` on first
  boot; Flue state lives in `data/flue.db`.
- **Agents** — `src/workflows/file-signal.ts`: a Flue workflow that turns incoming
  signals into fully-shaped proposed cases (durable runs, inspectable at
  `/runs/:runId`). Template-driven for now; swap `run()` internals for an LLM
  investigation when real signal sources are wired up.
- **Migrations** — Drizzle schema (`src/domain/schema.ts`) is the desired state;
  [Atlas](https://atlasgo.io) plans and applies (`migrations/`, `atlas.hcl`).

## Run

```sh
bun install
bun run dev            # migrate + backend + frontend on http://localhost:4820
bun run agent:demo     # file the sample signal through the file-signal workflow
bun run db:diff        # generate a migration after editing src/domain/schema.ts
```

## API

| Route | Method | Purpose |
|---|---|---|
| `/api/inbox` | GET | cases + lifecycle + library |
| `/api/cases` | POST | file a new case directly |
| `/api/cases/:id/decision` | POST | record an operator decision (409 if already handled) |
| `/api/decisions` | GET | decision ledger (training signal export) |
| `/api/events` | GET | SSE stream of domain events (`case.filed`, `case.decided`) |
| `/workflows/file-signal` | POST | file a case from a signal (`?wait=result` for sync) |
| `/runs/:runId` | GET | durable workflow-run event history |

## Working in the inbox

- `j` / `k` (or ↑/↓) move through cases — on the list and inside a case.
- `↵` approves the recommended option; `⌥1`/`⌥2` pick variants; `x` dismisses.
- Deciding records to the ledger and sweeps to the next case in the queue —
  a [glimm](https://www.npmjs.com/package/glimm) shader band (`glimm-sweep.js`),
  with a native WAAPI fallback if the bundle isn't loaded.
- `⌘K` command palette · `t` theme · `w` brain panel · `?` help.

## Local bundles

Page overlays are bundled locally (no CDN at runtime) from `devDependencies`:

```sh
bun run build:toolbar   # agentation-src.jsx → agentation-toolbar.js (feedback toolbar)
bun run build:glimm     # glimm-src.jsx → glimm-sweep.js (decision sweep)
```

Annotate any element with the Agentation toolbar and paste the copied markdown
to your agent for precise UI feedback.
