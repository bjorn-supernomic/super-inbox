# Agent Platform — Architecture Analysis & Implementation Plan

Personal agent (a colleague in Slack) + scoped domain agents, on Flue. Multi-tenant,
self-learning (skills + playbooks), eval-gated, with heartbeats that continuously learn
facts about users, teams, channels, and the company — and searchable history so context
is never lost.

Sources: Flue docs (agent/workflow/action/skill/schedule/eval/observability surfaces),
[hermes-agent](https://github.com/nousresearch/hermes-agent) (self-learning loop, memory,
session search), OpenViktor (Slack colleague, heartbeats, multi-tenant ops), and this
repo's Action Inbox (operator approval surface + decision ledger).

---

## 1. What Flue gives us (and what it doesn't)

**Gives us:**

- **Agents** = files default-exporting `defineAgent(({ id, env }) => config)`. The
  instance `id` is an arbitrary string chosen at dispatch time and is **the isolation
  and multi-tenancy unit**: one durable append-only conversation stream, one ordered
  submission queue, one live owner per instance. The initializer runs per harness init,
  so tools/skills/instructions/model can be computed fresh per instance — this is where
  tenant scoping happens.
- **Subagents** = `defineAgentProfile` listed on a parent; model-invoked via the built-in
  `task` capability or programmatic `session.task()`. Child gets only the delegated
  request + its own config — never the parent transcript.
- **Actions** = `defineAction({ input, output, run({ harness, input, log }) })` — the
  reusable finite unit. Dual-exposable: bind to a workflow (inspectable run) *and* to an
  agent's `actions` (model-invoked, isolated child harness). Write once, use both ways.
- **Workflows** = discovered files wrapping exactly one Action + an agent; invoked via
  `invoke()`, HTTP, SDK, or CLI; every invocation is a durable, streamable run record.
  **No step-level checkpointing** — a workflow is one `run()`; keep them short/idempotent.
- **Skills** = agentskills.io `SKILL.md` directories. Two load paths:
  build-time import (`with { type: 'skill' }` — bundled, shared) and **runtime discovery
  from `<cwd>/.agents/skills/` in the sandbox** — the door for per-tenant, learned,
  DB-materialized skills. Name collisions between the two fail init.
- **Schedules**: none built in. External cron (Croner dev / BullMQ prod on Node,
  Cron Triggers on Cloudflare) calls `dispatch(agent, { id: stableId, input })` —
  idempotent by dispatch id, ordered with normal messages in the instance queue. This is
  the documented heartbeat pattern.
- **Slack** (`@flue/slack`): verified inbound events (mentions, DMs, reactions —
  unfiltered), `conversationKey({ teamId, channelId, threadTs })` helpers, outbound
  is app-owned via `@slack/web-api` (incl. `chatStream` and assistant status). No dedup —
  claim `event_id` ourselves.
- **Observability**: durable, offset-replayable event streams per run and per agent
  instance (turns w/ usage+cost, tool calls, tasks, compaction, app `log`/`data` events);
  live `observe()` for everything incl. full `turn_request`. Braintrust observer for
  content-bearing traces; OTel for vendor-neutral.
- **Evals**: `flue add tooling vitest-evals` — suites prompt a deployed agent over HTTP
  (`FLUE_BASE_URL`), assert on output + tool calls + judges, exit non-zero on failure.
  A clean CI/promotion gate.

**Doesn't give us (we build in the app layer):**

- No transcript search, no memory abstraction, no vector store → **our own memory +
  session-mirror layer** (Postgres/Drizzle, per the stack decision).
- No scheduler → BullMQ.
- No skill registry/DB loading → we materialize tenant skills into the sandbox
  workspace before init.
- No tenant registry, budgets, quotas, cross-instance queries → our own tables, fed by
  `observe()` / event streams.

**Gotchas to design around:** Node needs sticky instance→owner routing (no
active-active); Valibot everywhere (not Zod); pre-1.0 storage is reset-only migrations;
external side effects need idempotency keys (at-least-once); conversation streams are
append-only and replayed from the start (rely on compaction; prefer bounded-lifetime
instances).

---

## 2. Agent topology

Tenant = Slack workspace. Instance id scheme: `t:<tenant>:<kind>:<...>` — parsed in
every initializer; `route`/dispatch code enforces "may this principal touch this id".

### Personal agent (`agents/personal.ts`)

The colleague. **One instance per conversation ref** — a channel-agnostic id
(`<surface>:<tenant>:<location>`) so Slack is just the first surface:

- `slack:<team>:<channel>:<threadTs>` — channel threads (mentions, proactive follow-ups)
- `slack:<team>:<dmChannel>` — DMs
- Slack **Assistant threads / app surface** — same scheme, richer UX (`assistant.threads.setStatus`, `chatStream`, App Home) once the base loop is solid
- `email:<tenant>:<threadKey>` — inbound email (Phase 7), threaded by Message-ID/References
- **Proactive channel listening**: `message.channels` events flow through a cheap
  relevance gate (tier-1 model or rules) before dispatching into the thread's
  instance — the agent helps unprompted where it's confident, per the engagement
  thresholds in §6.

Not one giant per-user instance. Continuity across instances comes from the **memory layer**
(§4), not from a single unbounded stream — the Hermes split: ~1–2k tokens of
always-present facts + unlimited on-demand episodic recall via session search.

Initializer composes per instance:
- **Instructions**: base persona + tenant profile + *subject profiles* (requesting
  user, channel, team — rendered from the facts store) + skill/playbook index
  (one-liners, OpenViktor's "[What]. Use when […]. Do NOT use for […]" format).
- **Tools**: Slack delivery tools bound to the parsed conversation key
  (`send_message`, `react`, edit — agent-owned delivery, deliberate silence allowed;
  fallback auto-post only if no send-tool fired), `session_search`, `remember_fact`,
  `read_playbook`, `delegate_to_domain`, `file_case` (→ Action Inbox), web/search, and
  tenant-enabled integrations.
- **Skills**: shared library (bundled) + tenant learned skills (workspace-materialized).
- **Subagents**: small bounded profiles — `researcher`, `writer`, `summarizer`.

### Domain agents (`agents/domain-<name>.ts`, one file per domain)

**Domains are departments.** Each domain agent is a departmental specialist bounded
by that department's tools, integrations, skills, and playbooks — the capability
boundary is the agent definition, enforced in trusted code, not prompts. Instances
per work item: `t:<tenant>:dom:<domain>:<caseId>`.

| Domain | Scope | Tools/integrations |
|---|---|---|
| **TechOps** | IT support + infra | **Native:** Okta, Iru (MDM), Meraki. **Via Composio:** Zendesk, Jira, PagerDuty, Notion, Google Workspace (Gmail, Drive, Calendar, admin) |
| **Procurement** | vendor & purchasing | vendor onboarding, contract repo, spend approvals, renewals |
| **Security** | secops + compliance | access reviews, vendor questionnaires, incident triage, audit evidence |
| **Legal** | contracts & counsel | NDA/contract review playbooks, template library, matter tracking |
| **Finance** | spend & accounting | expenses, invoices, budget lookups, ERP |

**Integration strategy.** Two tiers:

- **[Composio](https://composio.dev/) as the integration fabric** for the long tail
  (Zendesk, Jira, PagerDuty, Notion, Google Workspace, and hundreds more). Composio
  exposes per-toolkit MCP servers with managed per-tenant OAuth — maps directly onto
  Flue's `connectMcpServer()` (remote streamable-HTTP): the domain initializer
  connects the tenant's authorized Composio toolkits and gets namespaced
  `mcp__<server>__<tool>` definitions. Tenant scoping = Composio connected-account
  per tenant, selected in trusted code. Combine with the OpenViktor hot-loading
  pattern when a toolkit's schemas are big: only the skill one-liner is always
  visible; full tool schemas attach when the playbook is opened.
- **Native tool packages** (`defineTool` wrappers, our code) where we need depth,
  reliability, or APIs Composio doesn't cover well: **Okta** (lifecycle/access is
  too security-critical for a generic proxy — governance rules gate every mutating
  call), **Iru** (MDM), **Meraki** (network). Native tools read tenant credentials
  from our encrypted store, never from model context.

Note: Zendesk is integrated (via Composio) during the migration period so TechOps
can work existing tickets; Phase 7 makes it removable.

Together they form the **internal service desk that replaces Zendesk**: an employee
asks their personal agent (Slack) or emails a department address; the request is
routed to the right departmental agent's case instance, resolved via that
department's playbooks or escalated through the Action Inbox, with SLA heartbeats
nudging stale cases and the decision ledger as training signal — no separate
ticketing system. Routing is the personal agent's job on Slack (its
`delegate_to_domain` tool, guided by the domain one-liner catalog) and a triage
step on email.

**Shared brain, domain-owned everything else.** All agents in a tenant — personal
and every domain — read and write the *same* company brain: the facts store
(users/channels/teams/company profiles, §4) and the tenant-wide session mirror +
`session_search`. What a TechOps case learned about a user's setup is visible to
the Finance agent's context rendering. Domain-owned, per agent definition:

- **Tools & integrations** — computed in the domain agent's initializer; a domain
  never sees another domain's credentials.
- **Skills & playbooks** — the workspace materializer writes only that domain's
  playbooks into its sandbox; learning reviews write back to the owning domain.
- **Governance rules** — per-domain policy config (DB rows, not prompts): which
  tools auto-execute vs require Action Inbox approval, spend/blast-radius
  thresholds, escalation targets, data-sensitivity boundaries (e.g. Legal/Security
  facts can be marked domain-restricted in the facts store and filtered at profile
  rendering). Enforced in code — tool wrappers check policy before executing and
  file an Inbox case instead when the rule says so.

### Collaboration: personal ⇄ domain

- Personal agent's `delegate_to_domain(domain, brief, context)` tool: creates a case id,
  `dispatch()`es to the domain agent instance, records the handoff in our DB, returns a
  ticket. Completion flows back: the domain agent's `report_back` tool dispatches a
  summary into the originating personal-agent instance (both directions ride Flue's
  ordered queues — durable A2A with zero extra infra).
- Anything risky/outward-facing goes through the **Action Inbox** (this repo): domain
  agents file proposed actions as cases via `POST /api/cases`; the operator decision
  ledger doubles as training signal for playbook learning.

### Progressive disclosure (context economy — applies to every agent)

The Hermes/OpenViktor technique is a platform-wide rule: **the prompt carries
indexes, never bodies.** Every capability surface is a one-liner catalog in context;
full content loads on demand.

- **Skills & playbooks**: Flue-native already — registered skills contribute only
  name + description to context; the model reads `SKILL.md` bodies and
  `references/` files lazily from the sandbox when needed. Our conventions on top:
  descriptions follow **"[What]. Use when […]. Do NOT use for […]"** (the
  description *is* the router), ≤60-char names, class-level skills with support
  files instead of flat one-off entries — the whole index stays ~200 tokens per
  domain.
- **Tools**: a small **core set** is always attached (send message, delegate,
  `session_search`, `remember_fact`, `read_playbook`). Everything else — Composio
  toolkits, admin suites, native integration surfaces — lives in a **deferred-tool
  catalog** behind three bridge tools, Hermes-style: `tool_search` (keyword match
  over name+description) → `tool_describe` (full input schema) → `tool_call`
  (validated dispatch). The catalog is rebuilt statelessly at every initializer run
  (a session-keyed catalog that drifts was a real Hermes-lineage bug — never cache
  it per session). Small catalogs (≤15) inline their one-liners in the prompt;
  large ones show a count + search instruction.
- **Memory**: bounded per-subject profiles in the prompt; unlimited episodic recall
  on demand via `session_search`.

### The split — decision table

| Unit | Use when | Examples |
|---|---|---|
| **Tool** | one deterministic app function | send Slack msg, query CRM, write fact |
| **Action** | reusable finite agent-backed op, app-controlled steps, validated I/O | summarize thread, triage a signal, draft reply — bound to both workflows and agents |
| **Subagent** | in-conversation delegation; parent owns result; no persistent identity | research a question, draft a doc section |
| **Workflow** | bounded job needing an inspectable run record; scheduled or invoked | heartbeat sweeps, learning extraction, digests, eval runs, promotion pipeline |
| **Domain agent (persistent instance)** | needs its own durable conversation, domain capability boundary, or long-lived work item | support case, deal desk, incident |
| **Heartbeat dispatch** | recurring input where occurrences share conversation state | daily channel digest agent, proactivity tick |

---

## 3. Slack channel

`flue add channel slack`, then in the events callback:

1. Verify → **claim `event_id`** in Postgres (unique insert) before dispatch — Slack
   retries, Flue doesn't dedup.
2. Route: DMs + mentions + replies-in-participating-threads → personal agent instance
   via `conversationKey`. Ignore bot messages/noise subtypes. (Thread-participation
   check = our `threads` table, OpenViktor-style.)
3. Ambient signals: `:hourglass:` reaction on accept, remove on settle (from instance
   event stream `idle`); `:eyes:` on messages queued behind a running turn (Flue's
   per-instance queue gives us mid-run buffering for free — the message becomes the
   next turn).
4. Keep `trigger_id`/`response_url` out of dispatch input and model context.
5. Multi-workspace: `teamId → tenant` map, per-tenant encrypted bot tokens, tenant
   allowlist enforced at the channel boundary.

---

## 4. Memory & session search (app-owned, Postgres + Drizzle)

**Facts store** — `facts(tenant, subject_type[user|channel|team|company], subject_id,
category[preference|process|technical|correction|relationship], body, provenance
{instance, run, event_offset}, confidence, status[active|pending|archived],
created/expires)`.

- Written by: the `remember_fact` tool (foreground), background review (§5), heartbeat
  sweeps (§6).
- Read by: initializers render **bounded per-subject profiles** (Hermes rules baked into
  the writer prompt: declarative facts not instructions; nothing that's stale in a week;
  hard char budget with capacity-error-driven consolidation — over-budget writes return
  current entries and force same-turn merge).
- `pending` status + Action Inbox review for background-written facts (write approval).

**Session mirror** — an `observe()` consumer (plus offset-replay catch-up on boot for
missed events) writes every turn/tool event into `sessions` + `messages` tables with a
Postgres full-text index (tsvector). This is required anyway for budgets/analytics; FTS
is nearly free on top.

**`session_search` tool** — one tool, three shapes, zero LLM cost (straight port of
Hermes's design): *discovery* (query → top sessions, snippet, ±5-message window, session
bookends), *scroll* (session + anchor), *browse* (recent). Automation-generated sessions
(heartbeats, workflows) are **demoted, not excluded**, in ranking. System prompt nudge:
search before asking the user to repeat themselves. Result: "never really context loss"
without vector infra; add pgvector later only if BM25/tsvector measurably falls short.

---

## 5. Learning loop: skills & playbooks

Vocabulary: **skill** = curated, shared-across-tenants capability document (bundled at
build, eval-gated). **Playbook** = tenant-learned procedure (DB row, materialized into
the tenant workspace at init as a runtime-discovered skill directory). A playbook can
graduate into a shared skill.

**Storage** — `playbooks(tenant, name, description(≤60 chars), content, version,
category, status[pending|active|stale|archived], provenance, usage{views,uses,patches,
last_used})`. Materializer writes active playbooks to the instance sandbox
`.agents/skills/<name>/SKILL.md` before init; Flue's workspace discovery picks them up.
Shared skills live in-repo under `src/skills/` and are imported/bundled.

**Acquisition — background review** (the Hermes crown jewel, rebuilt on Flue
primitives): counters per instance (every N user turns / M tool iterations, tracked in
the session mirror) trigger a **`learning-review` workflow** that replays the instance's
durable event stream (transcript digest), and runs a reviewer agent whose *only* tools
are `write_fact` and `playbook_manage` — capability whitelist enforced in the agent
definition, and it never touches the live session (separate harness, so Hermes's
"agent became the curator" contamination bug can't happen). Port the
`_SKILL_REVIEW_PROMPT` discipline verbatim:

- Be ACTIVE — a no-op pass is a missed learning opportunity.
- **Patch-first ladder**: patch the playbook used this session → patch an existing
  umbrella → add a `references/`/`templates/`/`scripts/` support file → only then create
  a new *class-level* playbook. Ban "fix-X-today" names.
- User frustration is a first-class playbook signal, not just a memory signal.
- **Anti-capture blacklist**: no environment-dependent failures, no negative capability
  claims ("X doesn't work" hardens into refusals), no transient errors, no one-off
  narratives. Capture the fix, never "tool broken".

Second path: an explicit `/learn`-style flow — the personal agent authors a playbook
from a conversation or provided sources on request, via `playbook_manage`.

**Curator** — weekly per-tenant workflow: usage telemetry drives
`active → stale(30d) → archived(90d, never deleted)`; optional consolidation pass
(cheap model) merges narrow near-duplicates into umbrellas; snapshot before every run.

**Promotion & evals (multi-tenant safety):**

1. Learned playbook lands `pending` → **Action Inbox case** with diff + provenance;
   operator (or tenant admin) approves → `active` for that tenant only.
2. Tenant→shared graduation: candidate is anonymized, added to the shared library
   branch, and must pass the **vitest-evals suite** (deterministic assertions +
   independent judge) against a preview deploy — exit code gates the merge; Braintrust
   traces (`runId`/`instanceId` correlated) attached to the promotion case for review.
3. Every shared skill carries its own eval cases; CI runs the suite on any skill change.
   The decision ledger (`/api/decisions`) feeds eval fixtures: approved/rejected cases
   become regression examples.

---

## 6. Heartbeats

BullMQ repeatable jobs (Postgres/Redis-backed, per-tenant rows so tenants can tune
cadence), each job → `dispatch()` to a stable agent instance or `invoke()` a workflow:

| Heartbeat | Default cadence | Mechanism | Learns / does |
|---|---|---|---|
| **Proactivity tick** | 8,11,14,17 weekdays (tenant TZ) | dispatch → `t:<t>:pa:heartbeat` | OpenViktor's priority menu: answer open questions → follow up (2h) → escalate blockers → offer help → nudge stale items → *no action*. |
| **Fact sweep: users/channels** | daily | workflow per active channel/user | reads yesterday's mirrored sessions + Slack history → writes `pending` facts (roles, preferences, ownership, processes). |
| **Team/company profile refresh** | weekly | workflow | consolidates facts into team + company profiles (the bounded prose injected into every initializer). |
| **Discovery** | 2×/week | workflow | per-person workflow-automation opportunities, max 2 proposals/person/run → Action Inbox or DM. |
| **Curator + eval telemetry** | weekly | workflow | §5 curator; skill usage report. |

Hard rules, encoded in prompts *and* code:

- **Deep Work Rule**: heartbeats never do real work inline — they `dispatch` to domain
  agents, `invoke` workflows, or file Inbox cases.
- **Engagement thresholds** (per user, tracked in DB): stop outreach after 5 unread
  bot messages; reactive-only after 7 days of silence; max 1 nudge per item. The
  proactivity tick *reads* these before sending anything.
- **Cost tiers**: a cheap-model (or pure-SQL) condition check runs first and can skip
  the LLM run; per-tenant monthly budget (from mirrored `turn` usage events) blocks
  scheduled work when exceeded; heartbeats run tier-1 models, escalate only on dispatch.
- Idempotency: dispatch id = `hb:<job>:<tenant>:<scheduledAt>` — Flue dedups retries.

---

## 7. Multi-tenancy summary

| Layer | Mechanism |
|---|---|
| Identity | tenant = Slack workspace; `teamId → tenant` at the channel boundary |
| Conversation state | instance id prefix `t:<tenant>:…`; Flue stream/queue per id |
| Capabilities | initializer computes tools/integrations from tenant config; tool params are never the authz boundary |
| Guidance | shared skills bundled; tenant playbooks workspace-materialized; profiles rendered per tenant |
| Data | every app table keyed by tenant; per-tenant encrypted Slack tokens; sandbox dir per tenant with path-escape checks |
| HTTP | `route` middleware parses id, verifies principal ↔ tenant |
| Cost | usage mirrored per tenant from turn events; budgets gate heartbeats first, then interactive |
| Skill sharing | only via the eval-gated promotion pipeline (§5) — never raw copy |

---

## 8. Implementation phases

Each phase ships something usable and is a natural PR boundary.

**Phase 1 — Foundation (personal agent MVP).**
Flue project (Node target, Hono routing, `@flue/postgres`), Slack channel with event
claiming + tenant map, `personal` agent with conversation-key instances, agent-owned
delivery tools + ambient reactions, base persona. *Done when:* it converses in DMs and
threads across two test workspaces with isolated state, survives a restart mid-turn.

**Phase 2 — Memory + session search.**
Session mirror (`observe()` + replay catch-up), facts store + `remember_fact` +
profile rendering into initializers, `session_search` tool (3 shapes). **Postgres from
the start** (tenants run >2k employees; multi-replica bot processes need one shared
brain and host-loss durability): app store on Drizzle + Postgres full-text search,
Flue persistence on `@flue/postgres`, one `DATABASE_URL` (any Postgres 15+). The
store module isolates SQL behind a fixed contract, so backend choices never touch
the mirror, tools, or agents.
*Done when:* the agent recalls a fact told last week in a different thread, and finds a
past conversation by content without being reminded.

**Phase 3 — Heartbeats + fact learning.**
BullMQ scheduler + per-tenant job rows, proactivity tick with engagement thresholds,
daily fact sweeps writing `pending` facts, weekly profile refresh, budget/tier gating.
*Done when:* facts accumulate autonomously and outreach respects thresholds (verified in
the ledger), under budget caps.

**Phase 4 — Domain agents + collaboration + Inbox wiring.**
First two departmental agents from a shared template (TechOps first — highest request
volume, clearest playbooks; then Procurement or Security). Integration plumbing:
Composio MCP connections per tenant (Zendesk, Jira, PagerDuty, Notion, Google
Workspace first) + native Okta/Iru/Meraki tool packages. Per-domain governance
rules (policy table + tool wrappers), `delegate_to_domain` / `report_back` loop,
shared Actions library (dual-exposed), gated actions filed as Action Inbox cases,
decision ledger feeding back. *Done when:* a Slack ask flows personal → TechOps →
Inbox approval → executed → reported back in-thread, and a policy change flips a
tool from auto-execute to approval-gated without a deploy.

**Phase 5 — Learning loop.**
Playbook store + workspace materializer, `learning-review` workflow with
whitelisted reviewer agent + ported review prompt, `/learn` flow, curator workflow,
pending-playbook approval via Inbox. *Done when:* a repeated correction in conversation
shows up as a playbook patch that changes behavior in the next session.

**Phase 6 — Eval-gated promotion + observability hardening.**
vitest-evals harness per shared skill + per domain agent (CI gate), Braintrust observer
wired with id correlation, promotion pipeline (tenant → anonymize → preview deploy →
eval suite → Inbox case → shared library version), decision-ledger → eval-fixture
export. *Done when:* a tenant playbook graduates to the shared library only by passing
evals, with traces attached to the promotion case.

**Phase 7 — Email ingress (Zendesk replacement complete).**
Inbound email channel (Resend inbound or Postmark webhook → `email:<tenant>:<threadKey>`
conversation refs, threaded by Message-ID/References), `send_email` tool bound in
trusted code, routing: known-thread replies continue the case instance; new mail hits
a triage step that routes to the right departmental agent (per-department addresses
like `it@`/`legal@` route directly) which auto-resolves via playbooks or escalates
through the Action Inbox, SLA heartbeat nudging stale cases. Slack Assistant-surface polish
(streamed replies, status, App Home) rides along here. *Done when:* an inbound support
email is answered end-to-end — triaged, drafted, approved where needed, replied by
email — with the whole exchange searchable and no Zendesk in the loop.

**Not now:** pgvector/semantic search (tsvector first, measure), Cloudflare target
(Node first; the architecture keeps the door open), runtime tool synthesis (playbooks +
`scripts/` cover it — Hermes's conclusion too), surfaces beyond Slack + email,
mid-run message *injection* (queueing suffices; revisit if users complain).

---

## 9. Risks

- **Flue pre-1.0**: reset-only storage migrations; raw message shapes unstable. Mitigate:
  the session mirror is our system of record for history; treat Flue stores as rebuildable.
- **Single-owner instances on Node**: run one bot process per shard initially; sticky
  routing before horizontal scale.
- **Workflow non-resumability**: keep workflows idempotent + short; long work belongs in
  durable agent instances.
- **Learning quality**: the anti-capture blacklist + write-approval + curator are the
  defense; evals catch regressions at promotion time, the Inbox catches them at write time.
- **Prompt-injection via learned content**: playbooks/facts land in system prompts —
  scan on write (Hermes `skills_guard` pattern), and background-written content is
  `pending` until approved.
