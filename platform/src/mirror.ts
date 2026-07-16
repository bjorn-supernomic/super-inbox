// Session mirror: an observe() consumer that writes every agent conversation
// (user inputs, assistant messages, tool calls) into the app store.
//
// Event mapping (docs: api/events-reference):
// - `message_end` — authoritative completed messages; role 'user' and
//   'assistant' are mirrored, 'toolResult' is covered by `tool` events.
// - `tool` — ended tool executions, summarized as role 'tool'.
// - Everything else (deltas, thinking, turns, operations, compaction, logs)
//   is skipped; workflow-only events without an instanceId are skipped too.

import { observe, type FlueObservation } from '@flue/runtime';
import { parseConversationId } from './shared/conversation.ts';
import type { MirrorMessage } from './store/sessions.ts';

const TOOL_SUMMARY_MAX_CHARS = 500;

/** instanceId is a conversation ref for our agents; anything else → 'unknown'. */
function tenantFor(instanceId: string): string {
  try {
    return parseConversationId(instanceId).teamId;
  } catch {
    return 'unknown';
  }
}

function safeStringify(value: unknown): string {
  try {
    return JSON.stringify(value) ?? String(value);
  } catch {
    return String(value);
  }
}

function truncate(text: string, maxChars: number): string {
  return text.length <= maxChars ? text : `${text.slice(0, maxChars - 1)}…`;
}

// Raw message payloads mirror pi-agent-core's AgentMessage and are pre-1.0
// unstable, so extraction is defensive: returns the joined plain-text parts
// for recognized shapes, null when the shape is unrecognized.
function extractText(content: unknown): string | null {
  if (typeof content === 'string') return content;
  if (!Array.isArray(content)) return null;
  return content
    .filter(
      (part): part is { type: 'text'; text: string } =>
        typeof part === 'object' &&
        part !== null &&
        (part as { type?: unknown }).type === 'text' &&
        typeof (part as { text?: unknown }).text === 'string',
    )
    .map((part) => part.text)
    .join('\n');
}

// Dispatched input arrives as the JSON of the dispatch payload; unwrap our
// slack dispatch shape ({ type: 'slack.app_mention' | 'slack.dm', text })
// to the submitted text, otherwise keep the raw string.
function unwrapDispatchedInput(raw: string): string {
  try {
    const parsed: unknown = JSON.parse(raw);
    if (
      typeof parsed === 'object' &&
      parsed !== null &&
      ((parsed as { type?: unknown }).type === 'slack.app_mention' ||
        (parsed as { type?: unknown }).type === 'slack.dm') &&
      typeof (parsed as { text?: unknown }).text === 'string'
    ) {
      return (parsed as { text: string }).text;
    }
  } catch {
    // Not JSON — a directly prompted message; keep as-is.
  }
  return raw;
}

/** Pure mapper from one runtime observation to mirror records (usually 0 or 1). */
export function mirrorObservation(observation: FlueObservation): MirrorMessage[] {
  const { instanceId } = observation;
  if (!instanceId) return []; // workflow-only activity — skip for now

  const base = {
    instanceId,
    agentName: observation.agentName ?? 'unknown',
    tenant: tenantFor(instanceId),
    eventIndex: observation.eventIndex,
    ts: observation.timestamp,
  };

  switch (observation.type) {
    case 'message_end': {
      const message = observation.message as { role?: unknown; content?: unknown };
      if (message.role === 'user') {
        const text = extractText(message.content);
        const content = text === null ? safeStringify(message) : unwrapDispatchedInput(text);
        return [{ ...base, role: 'user', content }];
      }
      if (message.role === 'assistant') {
        const text = extractText(message.content);
        if (text === '') return []; // tool-call-only turn — `tool` events cover it
        return [{ ...base, role: 'assistant', content: text ?? safeStringify(message) }];
      }
      return []; // toolResult and future roles
    }
    case 'tool': {
      const outcome = observation.isError ? 'error' : 'result';
      const summary = `args=${safeStringify(observation.args)} ${outcome}=${safeStringify(observation.result)}`;
      return [
        {
          ...base,
          role: 'tool',
          toolName: observation.toolName,
          content: truncate(summary, TOOL_SUMMARY_MAX_CHARS),
        },
      ];
    }
    default:
      return [];
  }
}

let unsubscribe: (() => void) | null = null;

// Registers the mirror once (idempotent). The store is imported lazily so the
// pure mapper stays importable on its own (mirror.check.ts); records observed
// before the import settles — microtasks at startup — are buffered.
export function registerMirror(): void {
  if (unsubscribe) return;

  const pending: MirrorMessage[] = [];
  let record: ((msg: MirrorMessage) => void) | null = null;
  void import('./store/sessions.ts').then(
    (store) => {
      // Fire-and-forget: observe() callbacks must stay synchronous and light.
      record = (msg) => {
        store.recordMessage(msg).catch((error: unknown) => {
          console.error('[mirror] failed to write mirrored message', error);
        });
      };
      for (const msg of pending.splice(0)) record(msg);
    },
    (error: unknown) => console.error('[mirror] session store unavailable; mirroring disabled', error),
  );

  unsubscribe = observe((observation) => {
    // Observation must never break the runtime: swallow mapper/store errors.
    try {
      for (const msg of mirrorObservation(observation)) {
        if (record) record(msg);
        else pending.push(msg);
      }
    } catch (error) {
      console.error('[mirror] failed to mirror observation', error);
    }
  });
}
