// The personal agent's deferred-tool catalog. Grows with Composio toolkits and
// native integrations (per-tenant, computed in the initializer) in Phase 4.
import * as v from 'valibot';
import { client } from '../channels/slack.ts';
import type { DeferredTool } from '../shared/deferred-tools.ts';

const FETCH_MAX_CHARS = 20_000;

export function personalCatalog(): DeferredTool[] {
  return [
    {
      name: 'slack_user_info',
      description:
        'Look up a Slack user by id: name, title, timezone, status. ' +
        'Use when you need to know who someone is. Do NOT use for sending messages.',
      input: v.object({ userId: v.pipe(v.string(), v.minLength(1)) }),
      async run({ userId }) {
        const { user } = await client.users.info({ user: userId as string });
        return {
          name: user?.profile?.display_name || user?.real_name || user?.name || null,
          title: user?.profile?.title || null,
          timezone: user?.tz || null,
          status: user?.profile?.status_text || null,
        };
      },
    },
    {
      name: 'slack_channel_info',
      description:
        'Look up a Slack channel by id: name, topic, purpose, member count. ' +
        'Use when you need channel context. Do NOT use for reading messages.',
      input: v.object({ channelId: v.pipe(v.string(), v.minLength(1)) }),
      async run({ channelId }) {
        const { channel } = await client.conversations.info({ channel: channelId as string });
        return {
          name: channel?.name ?? null,
          topic: channel?.topic?.value || null,
          purpose: channel?.purpose?.value || null,
          members: channel?.num_members ?? null,
        };
      },
    },
    {
      name: 'fetch_url',
      description:
        'Fetch a public http(s) URL and return its text (truncated). ' +
        'Use when a conversation references a link you need to read. Do NOT use for internal services.',
      input: v.object({ url: v.pipe(v.string(), v.url()) }),
      async run({ url }) {
        const target = new URL(url as string);
        if (target.protocol !== 'https:' && target.protocol !== 'http:') {
          throw new Error('Only http(s) URLs are supported.');
        }
        const response = await fetch(target, { redirect: 'follow', signal: AbortSignal.timeout(15_000) });
        const body = (await response.text()).slice(0, FETCH_MAX_CHARS);
        return { status: response.status, contentType: response.headers.get('content-type'), body };
      },
    },
  ];
}
