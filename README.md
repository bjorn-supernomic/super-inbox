# Super Inbox

Action Inbox — operator surface for reviewing and approving agent-proposed actions,
imported from [claude.ai/design](https://claude.ai/design/p/111b4948-aa64-4bbc-ac95-08e0956e3a1d).

## Architecture

- **Frontend** — `Action Inbox.dc.html`: a self-contained React component rendered by
  the dc-runtime (`support.js`), styled by the Supernomic design system (`_ds/`).
  No build step. Loads data from the backend when present, falls back to the static
  `inbox-data.js` under any dumb file server.
- **Backend** — `server.ts`: Bun server on port 4820 (override with `PORT`). Serves the
  static app plus the cases API, persisted in SQLite (`data/inbox.db`, seeded from
  `inbox-data.js` on first boot).
- **Agents** — `agents/worker.ts`: turns incoming signals into fully-shaped proposed
  cases and files them through the API. Template-driven for now; swap `buildCase` for
  an LLM investigation when real signal sources are wired up.

## Run

```sh
bun run dev            # backend + frontend on http://localhost:4820
bun run agent:demo     # file a sample case through the API
bun run agents/worker.ts agents/signals/example.json
```

## API

| Route | Method | Purpose |
|---|---|---|
| `/api/inbox` | GET | cases + lifecycle + library |
| `/api/cases` | POST | file a new case (agents) |
| `/api/cases/:id/decision` | POST | record an operator decision |
| `/api/decisions` | GET | decision ledger (training signal export) |

The Agentation feedback toolbar is on every page (`agentation-toolbar.js`, rebuilt with
`bun run build:toolbar`); annotate elements and paste the markdown to your agent.
