# Frontend ↔ Backend Contract

Types live in `packages/contract/index.ts` (zero-dep TypeScript, imported by web and server).
This doc is the behavioral half: routes, realtime, and where agents plug in.
Derived from the full frontend inventory in `docs/INVENTORY.md`.

## 0. Implementation status (post-merge with main)

A vertical slice exists on main — `server.ts` (Bun + bun:sqlite, JSON-blob cases + decisions
ledger) and `agents/worker.ts` (template-driven case filer). Implemented vs this contract:

| Contract route | Today |
|---|---|
| `GET /api/cases` | ✅ as `GET /api/inbox` (cases + lifecycle + library in one payload) |
| `POST /api/cases/:id/decision` | ⚠️ records ledger row + flips state to `handled` — **no `executing` phase, no playbook-step execution, no runId** |
| `GET /api/events` (SSE) | ⚠️ 5s polling in the frontend instead |
| `POST /api/cases` (agent intake) | ✅ (not in v1 contract — adopted into it; worker.ts is the caller) |
| `GET /api/decisions` | ✅ ledger export (adopted; maps to the training-signal/ledger concept) |
| dismiss, reply, steer, discussion, lifecycle enrich/columns, docs, settings, ledger export | ❌ client-side only |

The wire shape today is still the prototype's display-string shape (`updated: "2m ago"`,
`timer`, `arrival`…) — the §5 normalizations apply when `apps/web` is ported; until then the
server keeps serving the prototype shape and the contract types describe the target.

## 1. Ownership split

| Concern | Owner |
|---|---|
| Cases, discussion threads, lifecycle tables, library docs, workspace settings, ledger | **App DB** (server) |
| Agent conversations (palette chat, per-case transcript), workflow runs & events | **Flue persistence** (`db.ts`) |
| Sheets/sort/meter filtering, counts, event-timeline synthesis, fuzzy search, keyboard hints, relative times & SLA/freshness bars | **Client** (derived from contract data) |
| Theme, sidebar, open tabs, recently viewed, sort/meter prefs, split width, lifecycle filters | **Client localStorage** (upgrade to `/api/me/prefs` only when multi-device matters) |

## 2. HTTP API (Hono routes in `apps/server/src/app.ts`, mounted next to `flue()`)

| Route | Req → Res types | Notes |
|---|---|---|
| `GET /api/cases` | → `ListCasesResponse` | Full list; client does sheets/sort locally (11–100s of cases, local-feel) |
| `GET /api/cases/:id` | → `GetCaseResponse` | Case + discussion tree |
| `POST /api/cases/:id/decision` | `DecideRequest` → `DecideResponse` 202 | Records decision, invokes `execute-decision` workflow, returns `runId` |
| `POST /api/cases/:id/dismiss` | → `DismissResponse` | Closes case + negative training signal |
| `POST /api/cases/:id/reply` | `OutboundMessageRequest` → 202 | Outbound via the requester's channel (`quote.via`) |
| `POST /api/cases/:id/steer` | `OutboundMessageRequest` → 202 | `dispatch()` steering note into `case-agent` |
| `POST /api/cases/:id/discussion` | `PostCommentRequest` → `PostCommentResponse` 201 | Persists comment; `@agent` mention or reply-to-agent also dispatches an investigation |
| `GET /api/lifecycle` | → `GetLifecycleResponse` | |
| `POST /api/lifecycle/:tab/enrich` | → `EnrichResponse` 202 | Re-verify agent columns (workflow) |
| `POST /api/lifecycle/:tab/columns` | `AddColumnRequest` → `AddColumnResponse` 202 | Persist column, agent fills values (workflow) |
| `GET /api/library` | → `GetLibraryResponse` | |
| `GET /api/docs/:type/:id` | → `GetDocResponse` | Playbook/skill as stored doc blocks |
| `PATCH /api/docs/:type/:id` | `PatchDocRequest` → `GetDocResponse` | Inline edits + appended blocks; effective next run |
| `GET /api/settings` | → `GetSettingsResponse` | |
| `PATCH /api/settings` | `PatchSettingsRequest` → `GetSettingsResponse` | Policy agents read (autoRun, hold classes, frontier routing, notifications) |
| `POST /api/ledger/export` | → `ExportLedgerResponse` 202 | Disclosure ledger → escalation channel |
| `GET /api/events` | SSE of `WorkspaceEvent` | Invalidation only — see §3 |

Validation: valibot schemas at the route boundary (same lib Flue uses); types in the contract package are the source of truth.

## 3. Realtime model

Two channels, deliberately:

1. **`GET /api/events`** (plain SSE, server-owned): coarse invalidation events (`case.updated`,
   `discussion.updated`, …). Client refetches the affected resource. No payloads beyond ids —
   keeps the server dumb and the client cache simple.
2. **Flue durable streams** (via `@flue/react`):
   - `useFlueWorkflow({ runId })` — live progress of `execute-decision` / `enrich-lifecycle` runs.
     Run events carry `{ step: number }` logs → drives `execStep` animation, replacing the
     `setTimeout(advance, 1400)` fake. Terminal event → server marks case `handled` → `case.updated`.
   - `useFlueAgent({ name: 'operator-assistant', id: operatorId })` — the ⌘K palette chat,
     replacing the canned `replyFor()`.
   - `case-agent` instances (id = case id) back per-case agent work; discussion answers arrive
     as persisted comments via `discussion.updated` rather than raw stream rendering.

Optimistic UI stays: decisions/dismissals render immediately; server events reconcile.

## 4. Agent integration map (fake → real)

Each simulated behavior in INVENTORY.md §6 maps to one Flue construct in `apps/server/src/`:

| # | Fake today | Real mechanism |
|---|---|---|
| 1 | Decision execution stepper | `workflows/execute-decision.ts` — input `{caseId, option}`; session runs the held playbook steps using **scoped tools** (see below); emits one log event per step; writes outcome + ledger entry + training signal to app DB |
| 2 | Canned discussion replies | `POST /discussion` handler detects @mention → `dispatch(caseAgent, {id: caseId, input: {type:'discussion.question', commentId, branch}})`; agent has tools `read_discussion(caseId)` + case-scoped source readers; posts answer with `ctx.read` provenance via a `post_discussion_comment` tool |
| 3 | Canned palette Q&A | `agents/operator-assistant.ts` — instance per operator; tools: `get_case`, `list_cases`, `get_settings`; frontend uses `useFlueAgent` |
| 4 | Fake "investigating…" steps | Drive the same UI off real agent/workflow stream events |
| 5 | Fake lifecycle enrich | `workflows/enrich-lifecycle.ts` — re-verifies agent columns against source tools, per row; run events update cells |
| 6 | Index-math column values | Same workflow, `{mode:'fill', column}` input |
| 7 | Optimistic-only transitions | Keep optimistic render; server is authoritative via `case.updated` |
| 8 | Hardcoded routing recommendation | Server computes from run stats; `PATCH /api/settings` applies route-class reassignment; Flue model specifiers (`anthropic/claude-sonnet-4-6` vs owned/in-boundary routes) implement it per agent/workflow |
| 9 | logo.dev token in source | Move token to server config or vendor the logos |
| 10 | Client-generated playbook/skill docs | `LibraryDoc` stored in app DB; edits via `PATCH /api/docs`; `execute-decision` reads the doc at run time ("effective next run") |

**Tools** (`src/shared/tools.ts`, from the `TOOLS` catalog in the contract): `defineTool` per system —
`okta.unlock`, `okta.reset`, `okta.grant`, `iru.posture`, `github.revoke`, `zendesk.reply`,
`netsuite.release`, `slack.post`, `hold`, `verify`. Trusted code binds credentials + the case-scoped
target (agent picks *whether*, never *which tenant*). Stub implementations first (write to app DB +
event log) so the whole loop works end-to-end before any real integration.

**Channels** (inbound case creation, later): `src/channels/slack.ts`, `zendesk`, etc. — verified
webhooks → create/update cases → `dispatch()` into `case-agent`. Not needed for the first loop
(seed from `inbox-data.js`).

**Policy**: agents/workflows read `WorkspaceSettings` at run start — `autoRun` threshold decides
hold-vs-auto-run, `holdIdentity/Money/External` force holds, `frontier`+`fd` gate model routing.

## 5. Normalizations vs the prototype data

The web app derives what the prototype hardcoded:

| Prototype field | Contract | Client derives |
|---|---|---|
| `arrival` | `openedAt` | sort ordinal |
| `updated` / `updatedPct` | `updatedAt` | relative text + freshness bar |
| `timer` / `slaPct` | `sla {startedAt, dueAt}` | countdown text + consumed % |
| `options[].kind` display string | `OptionKind` enum | `"Recommended - agent's proposal"` label |
| `options[].keys` | — | ↵ / ⌥1 / ⌥2 from index |
| `quote.initials` | — | from `quote.name` |
| `via` hint string | `actChannels[]` | `"Act via #okta · #slack — or @{agent}, /commands — type to act"` |
| `tab` label | — | truncate `id + title` |
| `sources` ("6 examined") | — | `sourcesDetail` count |
| discussion `time` / conversation `time` | `at` ISO | relative/clock text |

Everything else in `inbox-data.js` carries over 1:1, so the seed data converts mechanically.
