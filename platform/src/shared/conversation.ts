// A conversation ref is the channel-agnostic identity of a personal-agent
// instance: surface + tenant + location, encoded as the Flue instance id.
// Slack today; email refs (`email:<tenant>:<threadKey>`) join in Phase 7.

export interface SlackConversationRef {
  surface: 'slack';
  /** Slack workspace id — the tenant for Slack-originated conversations. */
  teamId: string;
  channelId: string;
  /** Absent for DMs: replies go to the channel, not a thread. */
  threadTs?: string;
}

export type ConversationRef = SlackConversationRef;

export function formatConversationId(ref: ConversationRef): string {
  const parts = [ref.surface, ref.teamId, ref.channelId];
  if (ref.threadTs) parts.push(ref.threadTs);
  return parts.join(':');
}

export function parseConversationId(id: string): ConversationRef {
  const [surface, teamId, channelId, threadTs] = id.split(':');
  if (surface !== 'slack' || !teamId || !channelId) {
    throw new Error(`Unrecognized conversation id: ${id}`);
  }
  return { surface, teamId, channelId, ...(threadTs ? { threadTs } : {}) };
}
