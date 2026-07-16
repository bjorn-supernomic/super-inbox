// Self-check: `bun run src/shared/conversation.check.ts`
import assert from 'node:assert/strict';
import { formatConversationId, parseConversationId } from './conversation.ts';

const thread = { surface: 'slack', teamId: 'T1', channelId: 'C1', threadTs: '123.456' } as const;
assert.deepEqual(parseConversationId(formatConversationId(thread)), thread);

const dm = { surface: 'slack', teamId: 'T1', channelId: 'D1' } as const;
assert.deepEqual(parseConversationId(formatConversationId(dm)), dm);
assert.equal(parseConversationId('slack:T1:D1').threadTs, undefined);

assert.throws(() => parseConversationId('email:T1:x'));
assert.throws(() => parseConversationId('garbage'));

console.log('conversation ids ok');
