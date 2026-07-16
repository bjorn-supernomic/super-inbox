# Frontend Inventory — Action Inbox

Complete inventory of `Action Inbox.dc.html` (2,093 lines) + `inbox-data.js` + `support.js` + `_ds/`.
This is the source of truth the contract in `docs/CONTRACT.md` and `packages/contract/index.ts` was derived from.

The app: an operator surface for reviewing and approving agent-proposed actions. Today it is a
self-contained prototype — dc-runtime renders the `.dc.html` template, all data is static
(`inbox-data.js`), and every "live" behavior is simulated with `setTimeout` + canned strings.

---

## 1. Screens & surfaces

Top-level route is `state.active`: `inbox` | `<case id>` | `library` | `lifecycle` | `settings` | `doc`.

**Persistent chrome (all screens)**
- Top bar: sidebar toggle, history popover (recently viewed), back/forward chevrons (decorative), Inbox tab (`INBOX · N NEED YOU`), open-case tabs, "Ask {agent} ⌘K".
- CommandBar (bottom): free-text input routed to the agent, keyboard legend.
- Toast, floating AskAgentButton, ⌘K command palette (agent chat thread + fuzzy command list).
- Navigation rail: Inbox / Lifecycle / Library / Settings with counts + ⇧-shortcuts.

**A. Inbox list** — sheet tabs (Needs / Blocked / Handled / All) with counts, `N threads on this sheet`,
meter-mode toggle (g), sort toggle (o), ThreadRow list (title, path breadcrumb, verb, verbKey, meter), empty state.

**B. Case view** — three-column:
- Center: position label (`N of M`), §01 Signal (status banner, title, summary + hold, glance row → brain,
  QuoteBlock, Why disclosure, Sources disclosure), §02 Decision (3 DecisionOptions + ActionRow),
  §03 Event history (synthesized timeline, show-more), §04 Reference (Context / Conversation / Discussion / Brain links with counts).
- Split thread pane (resizable, opened from related/prior threads; live case or archived-precedent stub).
- Right context panel, tabbed:
  - **Context** (c): Requester identity FieldRows, Roster, Devices & apps link-outs (logo.dev logos), Scope, Related threads.
  - **Conversation** (m): pre-handover transcript requester ↔ agent, with artifacts.
  - **Brain** (w): playbook + steps, world-model reads, model route, boundary sent/withheld, writes-back / training signals.
  - **Discussion** (u): threaded internal comments (humans + agent), composer, agent typing indicator, "ask {agent}" per branch.

**C. Library** — search, Playbooks table (derived from cases' `brain.playbook`, deduped), Skills list, Company-brain stat cards.

**D. Library document** — playbook/skill rendered as an editable doc: breadcrumb, copy-as-markdown,
inline block editing + append editor with `@` people / `/` tools / `#` channels autocomplete.

**E. Lifecycle** — tabs (Employees / Devices / Vendors / Applications), data table with per-column filters,
"enrich" action on the agent column (e), add-custom-column popover (agent fills values).

**F. Settings** — Workspace (theme, default sheet, density), Agent autonomy (auto-run threshold stepper,
hold-class toggles: identity / money / external), Boundary (frontier route toggle + per-domain chips,
recommendation card, ledger export), Notifications (escalation channel, digest cadence, SLA warn %).

---

## 2. Data model (from `inbox-data.js`)

Three exports: `CASES` (11), `LIFECYCLE`, `LIBRARY`. All plain data.

### Case (top level)

| Field | Type | Values observed |
|---|---|---|
| `id` | string | `ACT-1048`…`ACT-1058` |
| `tab` | string | truncated tab label |
| `dot` | enum | `pending` · `warn` · `done` |
| `domain` | enum | `TechOps` · `Finance` · `Procurement` |
| `title`, `summary`, `hold` | string | hold = why held / blocked / handled line |
| `path` | string[5] | `[agent, channel, requester, caseId, status]` |
| `verb` | enum | `APPROVE` · `RELEASE` · `STEER` · `REVIEW` · `DONE` |
| `verbKey` | string | `A` · `S` · `R` · `''` |
| `timer` | string | SLA countdown text (`8h 11m`, `—`) |
| `confidence` | number | 68–96 |
| `state` | enum | `needs` · `blocked` · `handled` (+ runtime `executing`) |
| `updated`, `updatedPct` | string, number | relative text + freshness bar |
| `slaPct` | number | SLA consumed |
| `arrival` | number | stable sort ordinal |
| `quote` | object | `{initials, name, via, route, status, body}` — via: Zendesk/Slack/NetSuite/Expensify/AWS/HiBob; status: `waiting for you` · `blocked on vendor` · `handled` |
| `why` | string[] | handover reasons |
| `sources`, `sourcesDetail` | string, string[] | `"6 examined"` + grouped lines |
| `options` | object[] | `{kind, title, desc?, keys}` — kind: `"Recommended - agent's proposal"` · `Variant` · `Alternative`; keys `'↵'` or `['⌥','1']` |
| `via` | string | command-bar hint (`Act via #okta · #slack …`) |
| `context` | object | see below |
| `conversation` | object[] | `{author, role: requester\|agent, time, body, artifacts?[{kind: image\|file\|link, name, meta}]}` |
| `discussion` | object[] recursive | `{author, tag: manager\|security\|agent\|it\|operator, time, body, ctx?{to, read[]}, replies[]}` (≤4 levels observed) |
| `brain` | object | see below |

**`context`**: `identity[{label, value, source, extra?: 'recall', tone?: 'live'}]`, `roster[{name, meta, tag?: Requester|Subject, source}]`,
`devices[{name, meta, source}]`, `apps[{name, meta, source}]`, `scope: string`, `prior[{id, title, meta}]`.
Source strings span okta, ragnar, netsuite, docusign, github, hibob, figma, confluence, email, Iru, Zendesk, Slack, CI, NetSuite, DocuSign, Expensify, AWS, Jira, Linear, Miro (case-mixed).

**`brain`**:
- `reads[{label, value, source}]` — sources like `okta · 30s`, `world model · recall`, `event log`, `policy · v14`, `ragnar · synthesis`
- `playbook {id: PB-###, name, origin, success, steps[{label, state: done|held|current|pending}]}`
- `route {model, path, reason, cost, tokens}` — model: `Claude Sonnet` (frontier via Vertex) or `Owned adapter A-3/A-7 (open weights)` (in-boundary)
- `boundary {sent[], withheld[], provider, retention, ledger: LG-#####}`
- `writes[{on, signal}]` — training signal per decision

### LIFECYCLE
Keyed by `Employees | Devices | Vendors | Applications`; each `{cols[{label, source, flex, agent?}], rows: cell[][]}`,
cell = `{v, m?}`. The last column of every tab has `agent: true` (AI-enriched). Rows cross-reference case ids.

### LIBRARY
`skills[{name, meta, uses}]` (6) + `brain[{label, value, meta}]` (4 stat tiles: Entities 2,340 · Playbooks 412 · Traces 11,204 · Eval cases 388).
Playbook/skill doc bodies are generated client-side (`docViewFor` / `skillDoc` dictionary) — not in the data.

### Case list (11)
needs: 1049, 1050, 1053 (TechOps) · 1052 (Finance, RELEASE) · 1051, 1054 (Procurement; 1054 STEER) · 1056 (Finance) · 1055 (TechOps, conf 94).
blocked: 1058 (Finance, REVIEW). handled: 1057 (Procurement), 1048 (Finance).
Precedent ids referenced in `prior`: ACT-0611…0997, TKT-4776, TKT-4744.

---

## 3. State inventory & classification

(a) pure UI (stays client) · (b) persistent user/workspace state (needs storage) · (c) server data.

| Class | State vars |
|---|---|
| **(c) server data** | `cases`, `lf` (lifecycle), `lib` (library) |
| **(b) server-owned, agents read it** | `settings` — `autoRun: 92`, `holdIdentity/holdMoney/holdExternal: true`, `frontier: true`, `fd{TechOps,Finance,Procurement}`, `recApplied/recDismissed`, `escalation: 'Slack'`, `digest: 'Daily'`, `slaWarn: 25` |
| **(b) persistent case state** | `selectedById` (decision per case), `extraState` (state/dot/execStep overlay), `disc` (discussion trees) |
| **(b) persistent content** | `docEdits`/`docExtra` (playbook & skill doc edits), `lfCustom` (agent-added lifecycle columns) |
| **(b) operator prefs** (localStorage is fine initially) | `theme`, `sheet`, `sort`, `meterMode`, `sidebarOpen`, `openTabs`, `hist` (recently viewed), `splitW`, `lfFilters`, `thread` (palette chat — moves to Flue agent transcript) |
| **(a) pure UI** | `active`, `focus`, `whyOpen`, `srcOpen`, `panelTab`, `toast`, `paletteOpen`, `pq`, `pHi`, `thinking`, `spin`, `doneFx`, `discReply/discText/discTyping`, `historyOpen`, `lfTab`, `lfProg/lfFill`, `docType/docId`, `editBlock/edTokens/edText/edMenu/edHi`, `addColOpen/addColText`, `lfFilterOpen`, `evExpanded`, `split`, `libQ` |

Component props: `agentName` (default "Supe", fallback "Ragnar"), `autoOpenBrain`, `sidebarStartsOpen`.
Instance data: `EDTOOLS` tool catalog — `/okta.unlock`, `/okta.reset`, `/okta.grant`, `/iru.posture`,
`/github.revoke`, `/zendesk.reply`, `/netsuite.release`, `/slack.post`, `/hold`, `/verify`.

---

## 4. Actions & mutations (what a backend must do)

| Action | Trigger | Backend obligation |
|---|---|---|
| Approve recommended | ↵/a, palette | Record decision (option 0) → execute held playbook steps via tools → stream progress → verified outcome + ledger entry + positive training signal |
| Variant / Alternative | ⌥1 / ⌥2 | Same, for that branch; alternative often = escalate / negative signal |
| Dismiss | x | Close case, record negative training signal |
| Reply to requester | r | Send message back through the requester's channel (`quote.via`) |
| Steer agent | s | Deliver steering note to the case agent + training signal |
| Post discussion comment | composer ↵ | Persist comment; on `@agent` mention or reply-to-agent, run scoped agent investigation and post its answer (with `ctx.read` provenance) |
| Ask agent (palette / command bar) | ⌘K, `/` | Real agent Q&A grounded in the focused case |
| Lifecycle enrich | e | Agent re-verifies the agent column against live sources, per row |
| Add custom column | popover ↵ | Persist column def; agent computes a value per row |
| Doc inline edit / append block | doc editor | Persist playbook/skill edits — "takes effect next run" |
| Settings changes | steppers/toggles | Persist policy; agents must read autoRun threshold, hold classes, frontier routing |
| Apply routing recommendation | card | Reassign a playbook class to another model route (PB-207 → adapter A-3) |
| Export ledger | button | Export disclosure-ledger (LG-*) to the escalation channel |
| Open case / tabs / history / prefs | various | Client-side persistence (localStorage) initially |

---

## 5. Keyboard shortcuts

Global: `⌘K` palette · `Esc` cascading close · `⌘1` inbox, `⌘2..9` open tabs · `[` sidebar ·
`⇧I/⇧L/⇧B/⇧S` nav · `/` focus search/command bar · `?` palette · `t` theme · `w` brain.
Inbox: `↓/j` `↑/k` focus · `↵/a` open · `o` sort · `g` meter.
Case: `↵/a` approve · `⌥1/⌥2` variant/alternative · `i` why · `o` sources · `c/m/u/w` panel tabs ·
`n` next · `x` dismiss · `r` reply · `s` steer.
Lifecycle: `e` enrich. Palette/editors: arrows + `↵` + `Esc`, `Backspace` deletes last token.

---

## 6. Simulated behavior → real integration points

Every one of these is a stub to replace (see CONTRACT.md §4 for the mapping to Flue):

1. **Decision execution** — `choose()` → `setTimeout(advance, 1400)` steps `execStep` through playbook steps, then flips to `handled`. Needs real execution + streamed progress.
2. **Discussion agent reply** — `agentThreadReply`: 2.6 s delay, keyword-regex canned answers.
3. **Palette agent Q&A** — `ask()` → `replyFor()`: 750 ms delay, regex-branched canned replies.
4. **Spinner/typing animations** — braille spinner, done-frames, fake "reading this thread… checking {source}…" steps. Cosmetic; keep, but drive off real events.
5. **Lifecycle enrich** — `runEnrich`/`runFill` timers; cells show "verifying…" then the same value.
6. **Custom column values** — synthesized via index math from a hardcoded verdicts array.
7. **Optimistic status transitions** — approve/dismiss mutate `extraState` locally with no server; done-reveal replays every 5 s.
8. **Routing recommendation card** — hardcoded; apply flips a flag.
9. **Logos** — `img.logo.dev` with an embedded token (external dependency to keep or vendor).
10. **Playbook/skill docs** — generated client-side from case fields + `skillDoc` dictionary; must become stored artifacts.

---

## 7. Derived / computed data (stays client-side)

- Sheets: Needs=`state==='needs'`, Blocked=`blocked`, Handled=`handled|executing`, All. Counts per sheet.
- Sort: Arrival asc · SLA (`slaPct` asc) · Confidence desc · Last update (`updatedPct` desc).
- Meter per state: executing=`running k/n`, handled=`✓ done`, blocked=`◌ blocked`, SLA mode shows `timer` (critical <40%), default `{confidence}%`.
- `merged()` = cases + `extraState` overlay. Event timeline is synthesized from quote/conversation/steps/discussion/decision/ledger.
- Library playbooks deduped from cases; fuzzy search; lifecycle filters are substring matches per column.
- Settings computed: escalation estimate from threshold, per-domain impact map, hint strings.

---

## 8. Porting notes (dc-runtime → real React)

`support.js` is a generated bundle of a proprietary mini-framework (dc-runtime) that renders `.dc.html`
at runtime: React 18.3.1 UMD from unpkg, `{{ }}` interpolation via a custom expression mini-evaluator,
`sc-for`/`sc-if`/`x-import`/`sc-helmet` tags, logic classes eval'd with `new Function`, `style-hover`
compiled to generated CSS classes, streaming/preview machinery for the claude.ai/design editor,
postMessage host bridge. No routing, no network to any backend (only static import + CDN).

Port mapping: template → JSX (`{{x}}`→`{x}`, `sc-for`→`.map()`, `sc-if`→`{cond && …}`), `DCLogic` class →
hooks, `style-hover` → CSS, `x-import component-from-global-scope` → direct imports from the ported DS package.
`inbox-data.js` is already plain data — swap the static import for API fetches returning the same schema.

## 9. Design system (`_ds/` → `packages/ds`)

Global-scope IIFE bundle `SupernomicDesignSystem_8d0f5d` (no ES exports; also ships `window.INBOX_CASES` demo data).
30 public components; props map 1:1 onto the Case schema:

- Core: `Icon{name,size,strokeWidth}`, `StatusDot`, `Badge`, `Button`, `KeyHint`
- Case: `SectionRule{index,label,active,meta}`, `QuoteBlock{initials,name,via,route,status}`, `DisclosureLine{label,summary,keys,open,onToggle}`, `DecisionStack`, `DecisionOption{kind,title,desc,keys,selected,onSelect}`, `ActionRow{actions,via,viaKey}`, `ProposalCard`
- Context: `FieldRow{label,value,source,sourceExtra,sourceTone}`, `TranscriptMessage{author,role,time,artifacts}`, `ThreadedComment{author,time,tag,replies}`, `ArtifactChip{kind,name,meta}`, `SourceChip`, `PanelSection`, `LinkOutCard{name,meta,system,href}`, `AskAgentButton`
- Inbox: `CaseTab{label,dot,active,hint,onClose,icon}`, `ThreadRow{title,path,verb,verbKey,meter,focused}`, `Meter{value,label,tone,width,bar}`, `CommandBar{placeholder,legend,inputRef,onSubmit}`
- Other: `CommandPalette{open,groups,placeholder,onClose,onRun}`, `Card`, `MetricTile`, `Input`, `Select`, `Sweep` (motion)

Tokens: Geist / Geist Mono; dark-default + light themes switched by `data-theme`; ~71 semantic color vars
(signal orange `#ee6018`, metric green `#a0ca92`); 8px spacing grid; radii 3/10/20; hairline shadows only;
CLI-like motion easings. Type scale 12→72px, weights 400/500 only.

## 10. Non-product files

`agentation-toolbar.js` + `agentation-src.jsx` + `skills-lock.json` — Agentation feedback tooling, not product.
`index.html` — meta-refresh redirect to the `.dc.html`. `ds-base.js` — injects DS css+bundle.
