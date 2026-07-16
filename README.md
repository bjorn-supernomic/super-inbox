# Super Inbox

Action Inbox — operator surface for reviewing and approving agent-proposed actions.
Design imported from [claude.ai/design](https://claude.ai/design/p/111b4948-aa64-4bbc-ac95-08e0956e3a1d);
repo: [bjorn-supernomic/super-inbox](https://github.com/bjorn-supernomic/super-inbox).

## Architecture

- **Frontend** — `Action Inbox.dc.html`: a self-contained React component rendered by
  the dc-runtime (`support.js`), styled by the Supernomic design system (`_ds/`).
  No build step. When the backend is present it loads from the API, listens on
  `/api/events` (SSE) for live updates, and lets the server drive decision execution;
  it falls back to the static `inbox-data.js` (with a local fake execution stepper)
  under any dumb file server.
- **Backend** — `apps/server`: a [Flue](https://flueframework.com) app (Node target,
  port 4820). `src/app.ts` (Hono) serves the static frontend + the cases API;
  `src/shared/store.ts` persists cases/discussion/ledger in SQLite (`node:sqlite`,
  `apps/server/data/inbox.db`, seeded from `inbox-data.js`); `src/db.ts` gives Flue
  its own SQLite for conversations and workflow runs. Deciding a case invokes the
  `execute-decision` workflow, which walks the held playbook steps through stub tools
  (`src/shared/tools.ts`) and streams progress as `case.updated` events.
- **Agents** — `agents/worker.ts`: turns incoming signals into fully-shaped proposed
  cases and files them through the API. Template-driven for now; swap `buildCase` for
  an LLM investigation when real signal sources are wired up.

## Run

```sh
bun install
bun run dev            # backend + frontend on http://localhost:4820
bun run agent:demo     # file a sample case through the API
bun run agents/worker.ts agents/signals/example.json
```

## Contract & architecture docs

- `docs/INVENTORY.md` — full frontend inventory (surfaces, state, mutations, shortcuts, simulated behaviors, data model, porting notes)
- `docs/CONTRACT.md` — frontend↔backend contract: API routes, realtime model, agent integration map
- `docs/ARCHITECTURE.md` — Turborepo monorepo plan, Flue backend, SQLite decision, Tauri path
- `packages/contract/` — the typed contract (`@super-inbox/contract`), imported by web and server

## API

| Route | Method | Purpose |
|---|---|---|
| `/api/inbox` | GET | cases + lifecycle + library |
| `/api/cases` | POST | file a new case (agents) |
| `/api/cases/:id/decision` | POST | record decision → runs the `execute-decision` workflow (202 `{runId}`) |
| `/api/cases/:id/dismiss` | POST | dismiss a case (negative training signal) |
| `/api/cases/:id/discussion` | POST | add a discussion comment (`{parentId, body}`) |
| `/api/decisions` | GET | decision ledger (training signal export) |
| `/api/events` | GET | SSE stream of `case.updated` / `case.created` / `discussion.updated` |

Flue's own surfaces (`/workflows`, `/runs`, `/agents`) are mounted underneath; the
`execute-decision` workflow is invoked ambiently and not exposed over HTTP.

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
