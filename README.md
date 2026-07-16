# Super Inbox

Action Inbox — operator surface for reviewing and approving agent-proposed actions.
Design imported from [claude.ai/design](https://claude.ai/design/p/111b4948-aa64-4bbc-ac95-08e0956e3a1d);
repo: [bjorn-supernomic/super-inbox](https://github.com/bjorn-supernomic/super-inbox).

## Architecture

- **Frontend** — `Action Inbox.dc.html`: a self-contained React component rendered by
  the dc-runtime (`support.js`), styled by the Supernomic design system (`_ds/`).
  No build step. Loads data from the backend when present (and live-polls it every 5s),
  falls back to the static `inbox-data.js` under any dumb file server.
- **Backend** — `server.ts`: Bun server on port 4820 (override with `PORT`). Serves the
  static app plus the cases API, persisted in SQLite (`data/inbox.db`, seeded from
  `inbox-data.js` on first boot).
- **Agents** — two paths, sharing the case assembly in `agents/case-shape.ts`:
  - `src/workflows/investigate-signal.ts` — the real agent, a [Flue](https://flueframework.com)
    workflow: an LLM investigates the raw signal as the domain agent and files a
    complete case (title, proposal, confidence, why, options, playbook steps, scope)
    held for operator approval. Needs `ANTHROPIC_API_KEY` in `.env`
    (or `FLUE_MODEL` for another provider).
  - `agents/worker.ts` — deterministic offline fallback fed by signal JSONs.

## Run

```sh
bun install
bun run dev            # backend + frontend on http://localhost:4820
bun run agent:demo     # file a sample case through the API (no LLM)
bun run agents/worker.ts agents/signals/example.json

# the real agent — LLM investigation via Flue:
echo 'ANTHROPIC_API_KEY="sk-ant-..."' > .env
bunx flue run investigate-signal --input '{"domain":"TechOps","requester":"Mara Voss","via":"Zendesk","body":"VPN cert for the Berlin gateway expires in 9 days. Ticket ZD-9104."}'
```

## API

| Route | Method | Purpose |
|---|---|---|
| `/api/inbox` | GET | cases + lifecycle + library |
| `/api/cases` | POST | file a new case (agents) |
| `/api/cases/:id/decision` | POST | record an operator decision |
| `/api/decisions` | GET | decision ledger (training signal export) |

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
