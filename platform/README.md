# Agent Platform

Flue app for the personal + domain agents. Full architecture and phase plan:
[`../docs/agent-platform-plan.md`](../docs/agent-platform-plan.md). Currently at
**Phase 2**: a personal agent reachable via @mention (thread-scoped instance) and DM
(channel-scoped instance) with agent-owned message delivery, plus the company brain —
every conversation mirrored into a searchable store (`session_search`), durable facts
with bounded profiles (`remember_fact`), progressive tool disclosure.

## Layout

- `src/agents/personal.ts` — the colleague; instance per conversation ref
- `src/channels/slack.ts` — verified Slack ingress + `send_slack_message` tool
- `src/shared/conversation.ts` — channel-agnostic instance-id scheme (Slack now, email in Phase 7)
- `src/shared/deferred-tools.ts` — progressive tool disclosure: attached toolset stays
  small; the catalog (`src/tools/catalog.ts`) sits behind `tool_search` /
  `tool_describe` / `tool_call` bridges (Hermes-style)
- `src/store/` — the company brain: session mirror + full-text search, facts with
  Hermes capacity semantics (Postgres; >2k employees/tenant, multi-replica processes)
- `src/mirror.ts` — `observe()` consumer feeding the store
- `src/tools/memory.ts` — `session_search` (discovery/scroll/browse) + `remember_fact`
- `src/db.ts` — Flue conversation persistence (`@flue/postgres` on the same database)

## Run

```sh
bun install
cp .env.example .env   # fill in keys
bun run dev            # dev server on http://localhost:3583
bun run typecheck
bun run build          # production artifact in dist/
```

Expose `http://<host>/channels/slack/events` as the Slack app's Event Subscriptions
request URL (use a tunnel locally, e.g. `cloudflared tunnel --url http://localhost:3583`).

## Slack app requirements

- **Event subscriptions**: `app_mention`, `message.im`
- **Bot scopes**: `app_mentions:read`, `im:history`, `chat:write`, `users:read`, `channels:read`
- Enable the Messages tab in App Home so users can DM the bot.

## Docs

`bun run docs` lists the version-matched Flue documentation; `bunx flue docs read <path>` prints a page.
