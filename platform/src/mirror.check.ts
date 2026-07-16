// Self-check: `bun run src/mirror.check.ts`
// Exercises only the pure mapper — the session store is not imported.
import assert from 'node:assert/strict';
import type { FlueObservation } from '@flue/runtime';
import { mirrorObservation } from './mirror.ts';

// Synthetic observations: envelope defaults + the documented variant fields.
function obs(variant: Record<string, unknown>): FlueObservation {
  return {
    v: 3,
    eventIndex: 7,
    timestamp: '2026-07-16T12:00:00.000Z',
    instanceId: 'slack:T042:C123:1700.42',
    agentName: 'personal',
    ...variant,
  } as unknown as FlueObservation;
}

// dispatched slack input → role 'user' with the submitted text, slack tenant
const user = mirrorObservation(
  obs({
    type: 'message_end',
    turnId: 'turn_1',
    message: {
      role: 'user',
      content: JSON.stringify({
        type: 'slack.app_mention',
        eventId: 'Ev123',
        user: 'U9',
        text: 'hello there',
      }),
    },
  }),
);
assert.deepEqual(user, [
  {
    instanceId: 'slack:T042:C123:1700.42',
    agentName: 'personal',
    tenant: 'T042',
    role: 'user',
    content: 'hello there',
    eventIndex: 7,
    ts: '2026-07-16T12:00:00.000Z',
  },
]);

// non-dispatch user text (direct prompt, content parts) passes through verbatim
const direct = mirrorObservation(
  obs({
    type: 'message_end',
    turnId: 'turn_1',
    message: { role: 'user', content: [{ type: 'text', text: 'plain prompt' }] },
  }),
);
assert.equal(direct[0]?.role, 'user');
assert.equal(direct[0]?.content, 'plain prompt');

// assistant message → role 'assistant' with only the plain text parts
const assistant = mirrorObservation(
  obs({
    type: 'message_end',
    turnId: 'turn_2',
    message: {
      role: 'assistant',
      content: [
        { type: 'thinking', thinking: 'pondering' },
        { type: 'text', text: 'Hi!' },
        { type: 'toolCall', id: 'tc_1', name: 'send_slack_message', arguments: { text: 'Hi!' } },
      ],
    },
  }),
);
assert.equal(assistant.length, 1);
assert.equal(assistant[0]?.role, 'assistant');
assert.equal(assistant[0]?.content, 'Hi!');

// tool end event → role 'tool' with toolName and a truncated args/result summary
const tool = mirrorObservation(
  obs({
    type: 'tool',
    toolName: 'send_slack_message',
    toolCallId: 'tc_1',
    isError: false,
    result: { ts: '1700.99' },
    durationMs: 42,
    args: { text: 'x'.repeat(600) },
  }),
);
assert.equal(tool.length, 1);
assert.equal(tool[0]?.role, 'tool');
assert.equal(tool[0]?.toolName, 'send_slack_message');
assert.match(tool[0]?.content ?? '', /^args=/);
assert.ok((tool[0]?.content ?? '').length <= 500);

// deltas and thinking are skipped
assert.deepEqual(mirrorObservation(obs({ type: 'text_delta', text: 'H' })), []);
assert.deepEqual(mirrorObservation(obs({ type: 'thinking_delta', delta: 'hm', contentIndex: 0 })), []);

// tool results ride along with `tool` events, not as messages
assert.deepEqual(
  mirrorObservation(
    obs({
      type: 'message_end',
      turnId: 'turn_2',
      message: { role: 'toolResult', toolCallId: 'tc_1', toolName: 'send_slack_message', content: [], isError: false },
    }),
  ),
  [],
);

// events without an instanceId (workflow-only) are skipped
assert.deepEqual(
  mirrorObservation(
    obs({
      type: 'message_end',
      turnId: 'turn_1',
      instanceId: undefined,
      message: { role: 'user', content: 'hi' },
    }),
  ),
  [],
);

// unparseable instance ids fall back to the 'unknown' tenant
const foreign = mirrorObservation(
  obs({
    type: 'message_end',
    turnId: 'turn_1',
    instanceId: 'email:acme:thread-1',
    message: { role: 'user', content: 'hi' },
  }),
);
assert.equal(foreign[0]?.tenant, 'unknown');

console.log('mirror ok');
