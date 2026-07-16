import { defineTool, dispatch } from '@flue/runtime';
import { createSlackChannel } from '@flue/slack';
import { WebClient } from '@slack/web-api';
import * as v from 'valibot';
import personal from '../agents/personal.ts';
import { formatConversationId, type SlackConversationRef } from '../shared/conversation.ts';

export const client = new WebClient(process.env.SLACK_BOT_TOKEN);

// Slack retries deliveries; Flue does not dedup dispatches.
// ponytail: in-memory claim, one process — becomes a Postgres claim table in Phase 2.
const claimedEvents = new Map<string, number>();
const CLAIM_TTL_MS = 60 * 60 * 1000;
function claim(eventId: string): boolean {
  const now = Date.now();
  for (const [id, at] of claimedEvents) {
    if (now - at > CLAIM_TTL_MS) claimedEvents.delete(id);
  }
  if (claimedEvents.has(eventId)) return false;
  claimedEvents.set(eventId, now);
  return true;
}

export const channel = createSlackChannel({
  signingSecret: process.env.SLACK_SIGNING_SECRET!,

  // Phase 1 colleague surfaces: @mentions in channels (thread-scoped instance)
  // and DMs (channel-scoped instance). Proactive channel listening, Assistant
  // threads, and email land in later phases.
  async events({ payload }) {
    if (payload.type !== 'event_callback') return;
    if (!claim(payload.event_id)) return;
    const event = payload.event;

    if (event.type === 'app_mention') {
      await dispatch(personal, {
        id: formatConversationId({
          surface: 'slack',
          teamId: payload.team_id,
          channelId: event.channel,
          threadTs: event.thread_ts ?? event.ts,
        }),
        input: {
          type: 'slack.app_mention',
          eventId: payload.event_id,
          user: event.user ?? null,
          text: event.text ?? '',
        },
      });
      return;
    }

    if (event.type === 'message' && event.channel_type === 'im' && !event.subtype && !event.bot_id) {
      await dispatch(personal, {
        id: formatConversationId({
          surface: 'slack',
          teamId: payload.team_id,
          channelId: event.channel,
        }),
        input: {
          type: 'slack.dm',
          eventId: payload.event_id,
          user: event.user ?? null,
          text: event.text ?? '',
        },
      });
    }
  },
});

// Destination is bound in trusted code from the parsed instance id; the model
// only chooses the text (agent-owned delivery — it may also stay silent).
export function slackSend(ref: SlackConversationRef) {
  return defineTool({
    name: 'send_slack_message',
    description:
      'Send a Slack message to the conversation you are working in. ' +
      'Replies in-thread for channel conversations, in-channel for DMs.',
    input: v.object({ text: v.pipe(v.string(), v.minLength(1)) }),
    async run({ input: { text } }) {
      const result = await client.chat.postMessage({
        channel: ref.channelId,
        ...(ref.threadTs ? { thread_ts: ref.threadTs } : {}),
        text,
      });
      return { ts: result.ts ?? null };
    },
  });
}
