import { defineAgent } from '@flue/runtime';
import { slackSend } from '../channels/slack.ts';
import { parseConversationId } from '../shared/conversation.ts';
import { deferredToolBridge, deferredToolsGuidance } from '../shared/deferred-tools.ts';
import { renderProfile } from '../store/facts.ts';
import { personalCatalog } from '../tools/catalog.ts';
import { rememberFact, sessionSearch } from '../tools/memory.ts';

export const description =
  'Personal agent — a colleague in the workspace, reachable via @mention and DM.';

export default defineAgent(async ({ id }) => {
  const ref = parseConversationId(id);
  const tenant = ref.teamId;
  const catalog = personalCatalog();

  // Fact profiles are best-effort: the agent must still boot if the store is
  // unavailable, so a failed render just means an empty "What you know" block.
  let profile = '';
  try {
    profile = await renderProfile(tenant, [
      { subjectType: 'company', subjectId: tenant, label: 'Company' },
      { subjectType: 'channel', subjectId: ref.channelId, label: 'This channel' },
    ]);
  } catch {
    profile = '';
  }

  return {
    model: 'anthropic/claude-sonnet-4-6',
    instructions: [
      'You are a colleague in this Slack workspace — helpful, direct, and low-noise.',
      'Every message you receive is a Slack event (mention or DM) delivered as JSON.',
      'To answer, you MUST call send_slack_message — plain text output is not delivered.',
      'Write like a teammate on Slack: concise, plain language, mrkdwn formatting',
      '(*bold*, _italic_, `code`), no headings, no essays. One message per reply',
      'unless splitting genuinely helps.',
      'If an event needs no response (e.g. a pure FYI), do nothing.',
      `Conversation context: ${ref.threadTs ? 'a channel thread' : 'a direct message'}.`,
      'Search past sessions (session_search) before asking anyone to repeat context',
      'they already gave — recall is free, re-asking is not.',
      'Remember durable facts (remember_fact) when users reveal preferences, processes,',
      'or corrections — the most valuable memory prevents future steering.',
      ...(profile ? [`What you know:\n${profile}`] : []),
      deferredToolsGuidance(catalog),
    ].join('\n'),
    tools: [
      slackSend(ref),
      sessionSearch(tenant),
      rememberFact(tenant, `agent:personal ${id}`),
      ...deferredToolBridge(catalog),
    ],
  };
});
