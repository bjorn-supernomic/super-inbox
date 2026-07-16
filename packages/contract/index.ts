/**
 * Frontend ↔ backend contract for Super Inbox.
 *
 * Pure types, zero dependencies — imported by both apps/web and apps/server.
 * Server-side request validation mirrors these with valibot (Flue's schema lib);
 * keep the two in sync (the valibot schemas live next to the routes that use them).
 *
 * Normalizations vs the prototype's inbox-data.js (see docs/CONTRACT.md §5):
 * timestamps replace display strings, option kinds are enums, keyboard hints
 * and derived percentages are computed client-side.
 */

// ---------------------------------------------------------------------------
// Enums
// ---------------------------------------------------------------------------

export type Domain = 'TechOps' | 'Finance' | 'Procurement';
export type CaseState = 'needs' | 'blocked' | 'executing' | 'handled';
/** Row status dot. `pending` = normal, `warn` = attention, `done` = closed. */
export type CaseDot = 'pending' | 'warn' | 'done';
export type CaseVerb = 'APPROVE' | 'RELEASE' | 'STEER' | 'REVIEW' | 'DONE';
export type OptionKind = 'recommended' | 'variant' | 'alternative';
export type PlaybookStepState = 'done' | 'held' | 'current' | 'pending';
export type ConversationRole = 'requester' | 'agent';
export type ArtifactKind = 'image' | 'file' | 'link';
/** Discussion author tag; free-form strings allowed beyond the known set. */
export type DiscussionTag = 'manager' | 'security' | 'agent' | 'it' | 'operator' | (string & {});
export type QuoteStatus = 'waiting for you' | 'blocked on vendor' | 'handled';

// ---------------------------------------------------------------------------
// Case
// ---------------------------------------------------------------------------

export interface Case {
  id: string; // 'ACT-1049'
  domain: Domain;
  title: string;
  /** Agent's first-person proposal. */
  summary: string;
  /** Why this is held / blocked / handled — the bolded suffix line. */
  hold: string;
  state: CaseState;
  dot: CaseDot;
  verb: CaseVerb;
  /** 0–100. */
  confidence: number;
  /** Breadcrumb: [agent, channel, requester, caseId, statusWord]. */
  path: [string, string, string, string, string];

  openedAt: string; // ISO — replaces `arrival` (sort by openedAt)
  updatedAt: string; // ISO — replaces `updated` / `updatedPct` (client derives)
  sla: { startedAt: string; dueAt: string } | null; // replaces `timer` / `slaPct`

  quote: CaseQuote;
  why: string[];
  /** Grouped source lines, e.g. 'okta employee record · iru device inventory'. */
  sourcesDetail: string[];
  /** Exactly one 'recommended', ordered recommended → variant → alternative. */
  options: DecisionOption[];
  /** Channels the operator can act through, e.g. ['#okta', '#slack', '#zendesk']. */
  actChannels: string[];
  context: CaseContext;
  conversation: TranscriptMessage[];
  brain: CaseBrain;

  /** Present once the operator has decided. Replaces selectedById/extraState. */
  decision?: CaseDecision;
  /** Index into brain.playbook.steps while state === 'executing'. */
  execStep?: number;
}

export interface CaseQuote {
  name: string; // initials derived client-side
  via: string; // source channel: 'Zendesk' | 'Slack' | 'NetSuite' | …
  route: string; // owning agent, e.g. 'TechOps agent'
  status: QuoteStatus;
  body: string;
}

export interface DecisionOption {
  kind: OptionKind;
  title: string;
  desc?: string; // only on recommended
  // keyboard hints (↵ / ⌥1 / ⌥2) derived client-side from array position
}

export interface CaseContext {
  identity: ContextField[];
  roster: RosterEntry[];
  devices: NamedEntry[];
  apps: NamedEntry[];
  scope: string;
  /** Related / precedent threads. */
  prior: { id: string; title: string; meta: string }[];
}

export interface ContextField {
  label: string;
  value: string;
  source: string; // 'okta' | 'ragnar' | 'netsuite' | …
  extra?: 'recall';
  tone?: 'live';
}

export interface RosterEntry {
  name: string;
  meta: string;
  tag?: 'Requester' | 'Subject';
  source: string;
}

export interface NamedEntry {
  name: string;
  meta: string;
  source: string;
}

export interface TranscriptMessage {
  author: string;
  role: ConversationRole;
  at: string; // ISO — replaces display `time`
  body: string;
  artifacts?: Artifact[];
}

export interface Artifact {
  kind: ArtifactKind;
  name: string;
  meta: string;
}

// ---------------------------------------------------------------------------
// Brain (company-brain access layer, per case)
// ---------------------------------------------------------------------------

export interface CaseBrain {
  reads: { label: string; value: string; source: string }[];
  playbook: Playbook;
  route: ModelRoute;
  boundary: Boundary;
  writes: { on: string; signal: string }[];
}

export interface Playbook {
  id: string; // 'PB-112'
  name: string;
  origin: string; // 'learned from 63 traces · zero hand-written'
  success: string; // '96% verified'
  steps: { label: string; state: PlaybookStepState }[];
}

export interface ModelRoute {
  model: string; // 'Claude Sonnet' | 'Owned adapter A-3 (open weights)' | …
  path: string; // 'GCP Vertex · europe-west4' | 'in-boundary · customer VPC'
  reason: string;
  cost: string;
  tokens: string;
}

export interface Boundary {
  sent: string[];
  withheld: string[];
  provider: string;
  retention: string;
  ledger: string; // 'LG-30412'
}

// ---------------------------------------------------------------------------
// Decisions & discussion
// ---------------------------------------------------------------------------

export interface CaseDecision {
  /** Index into Case.options. */
  option: number;
  decidedBy: string;
  decidedAt: string; // ISO
  /** Set when execution ran: workflow run id for progress/event streaming. */
  runId?: string;
}

export interface DiscussionComment {
  id: string;
  author: string;
  tag: DiscussionTag;
  at: string; // ISO
  body: string;
  /** Agent provenance: whom it answered and what it read. */
  ctx?: { to: string; read: string[] };
  replies: DiscussionComment[];
}

// ---------------------------------------------------------------------------
// Lifecycle
// ---------------------------------------------------------------------------

export type LifecycleTab = 'Employees' | 'Devices' | 'Vendors' | 'Applications';

export interface LifecycleColumn {
  id: string;
  label: string;
  source: string;
  flex: number;
  /** AI-enriched column (re-verifiable, agent-filled). */
  agent?: boolean;
}

export interface LifecycleCell {
  v: string;
  m?: string; // meta line, e.g. 'verified now'
}

export interface LifecycleTable {
  cols: LifecycleColumn[];
  rows: LifecycleCell[][]; // positional, aligned to cols
}

export type Lifecycle = Record<LifecycleTab, LifecycleTable>;

// ---------------------------------------------------------------------------
// Library (playbooks, skills, docs)
// ---------------------------------------------------------------------------

export interface Library {
  playbooks: PlaybookSummary[];
  skills: SkillSummary[];
  brain: { label: string; value: string; meta: string }[];
}

export interface PlaybookSummary {
  id: string;
  name: string;
  origin: string;
  success: string;
  domain: Domain;
}

export interface SkillSummary {
  id: string;
  name: string;
  meta: string;
  uses: string;
}

/** Editable doc token: plain text, @person, /tool, #channel. */
export type DocToken =
  | { t: 'text'; v: string }
  | { t: 'mention'; v: string }
  | { t: 'tool'; v: string }
  | { t: 'channel'; v: string };

export interface DocBlock {
  id: string;
  kind: 'p' | 'h' | 'li' | 'step';
  tokens: DocToken[];
}

export interface LibraryDoc {
  type: 'pb' | 'skill';
  id: string;
  title: string;
  meta: string;
  blocks: DocBlock[];
  updatedAt: string;
}

// ---------------------------------------------------------------------------
// Workspace settings (server-owned policy — agents read this)
// ---------------------------------------------------------------------------

export interface WorkspaceSettings {
  /** Auto-run confidence threshold, 50–99 (%). Below it, actions hold. */
  autoRun: number;
  /** Always-hold classes regardless of confidence. */
  holdIdentity: boolean;
  holdMoney: boolean;
  holdExternal: boolean;
  /** Frontier model route allowed at all. */
  frontier: boolean;
  /** Per-domain frontier allowance. */
  fd: Record<Domain, boolean>;
  escalation: 'Slack' | 'Email' | 'None';
  digest: 'Daily' | 'Weekly' | 'Off';
  /** Warn when SLA remaining drops below this %. */
  slaWarn: number;
}

// ---------------------------------------------------------------------------
// HTTP API  (all under /api; see docs/CONTRACT.md for the route table)
// ---------------------------------------------------------------------------

/** GET /api/cases — full list; sheets/sort/meter stay client-side. */
export type ListCasesResponse = { cases: Case[] };

/** GET /api/cases/:id */
export type GetCaseResponse = { case: Case; discussion: DiscussionComment[] };

/** POST /api/cases/:id/decision → 202 */
export interface DecideRequest {
  option: number; // index into Case.options
}
export type DecideResponse = { runId: string }; // execute-decision workflow run

/** POST /api/cases/:id/dismiss → 200 */
export type DismissResponse = { ok: true };

/** POST /api/cases/:id/reply and /steer → 202 */
export interface OutboundMessageRequest {
  text: string;
}

/** POST /api/cases/:id/discussion → 201; @-mentioning the agent triggers an investigation. */
export interface PostCommentRequest {
  parentId: string | null;
  body: string;
}
export type PostCommentResponse = { comment: DiscussionComment };

/** GET /api/lifecycle */
export type GetLifecycleResponse = { lifecycle: Lifecycle };

/** POST /api/lifecycle/:tab/enrich → 202 — re-verify agent columns. */
export type EnrichResponse = { runId: string };

/** POST /api/lifecycle/:tab/columns → 202 — add agent-computed column. */
export interface AddColumnRequest {
  description: string;
}
export type AddColumnResponse = { column: LifecycleColumn; runId: string };

/** GET /api/library */
export type GetLibraryResponse = { library: Library };

/** GET /api/docs/:type/:id  ·  PATCH /api/docs/:type/:id */
export type GetDocResponse = { doc: LibraryDoc };
export interface PatchDocRequest {
  /** Replace one block's tokens (inline edit) and/or append new blocks. */
  edits?: { blockId: string; tokens: DocToken[] }[];
  append?: { kind: DocBlock['kind']; tokens: DocToken[] }[];
}

/** GET /api/settings · PATCH /api/settings (partial) */
export type GetSettingsResponse = { settings: WorkspaceSettings };
export type PatchSettingsRequest = Partial<WorkspaceSettings>;

/** POST /api/ledger/export → 202 — disclosure ledger to the escalation channel. */
export type ExportLedgerResponse = { ok: true };

// ---------------------------------------------------------------------------
// Realtime
// ---------------------------------------------------------------------------

/**
 * GET /api/events — one SSE stream for workspace invalidation.
 * Agent conversations and workflow-run progress use Flue's own durable streams
 * (@flue/react useFlueAgent / useFlueWorkflow), not this channel.
 */
export type WorkspaceEvent =
  | { type: 'case.updated'; caseId: string } // state/dot/execStep/decision changed → refetch case
  | { type: 'case.created'; caseId: string }
  | { type: 'discussion.updated'; caseId: string }
  | { type: 'lifecycle.updated'; tab: LifecycleTab }
  | { type: 'doc.updated'; docType: 'pb' | 'skill'; docId: string }
  | { type: 'settings.updated' };

// ---------------------------------------------------------------------------
// Flue surfaces used by the frontend (names are load-bearing: file names in
// apps/server/src/{agents,workflows}/ — see docs/CONTRACT.md §4)
// ---------------------------------------------------------------------------

export const FLUE = {
  agents: {
    /** Per-case agent; instance id = case id. Discussion investigations and
     * steering are dispatched into it; its transcript backs the Conversation tab. */
    caseAgent: 'case-agent',
    /** Palette / command-bar assistant; instance id = operator id. */
    operatorAssistant: 'operator-assistant',
  },
  workflows: {
    /** Executes the held playbook steps after a decision; run events drive execStep. */
    executeDecision: 'execute-decision',
    /** Fills or re-verifies lifecycle agent columns. */
    enrichLifecycle: 'enrich-lifecycle',
  },
} as const;

/** Tool catalog surfaced in the doc editor (`/` autocomplete) and used by agents. */
export const TOOLS = [
  'okta.unlock',
  'okta.reset',
  'okta.grant',
  'iru.posture',
  'github.revoke',
  'zendesk.reply',
  'netsuite.release',
  'slack.post',
  'hold',
  'verify',
] as const;
export type ToolName = (typeof TOOLS)[number];
