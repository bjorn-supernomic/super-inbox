// Progressive tool disclosure (Hermes-style): the model's attached toolset stays
// small; the long tail lives in a catalog behind three bridge tools —
// tool_search → tool_describe → tool_call. The catalog is rebuilt statelessly at
// every initializer run; never cache it per session.
import { defineTool, type ToolDefinition } from '@flue/runtime';
import { toJsonSchema } from '@valibot/to-json-schema';
import * as v from 'valibot';

export interface DeferredTool {
  name: string;
  /** "[What it does]. Use when [trigger]. Do NOT use for [anti-trigger]." */
  description: string;
  input: v.ObjectSchema<v.ObjectEntries, undefined>;
  run(args: Record<string, unknown>): Promise<unknown>;
}

export function searchCatalog(
  catalog: DeferredTool[],
  query: string,
): { name: string; description: string }[] {
  const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
  return catalog
    .map((tool) => {
      const haystack = `${tool.name} ${tool.description}`.toLowerCase();
      return { tool, score: terms.filter((term) => haystack.includes(term)).length };
    })
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 10)
    .map(({ tool }) => ({ name: tool.name, description: tool.description }));
}

export async function callDeferredTool(
  catalog: DeferredTool[],
  name: string,
  args: Record<string, unknown>,
): Promise<unknown> {
  const tool = catalog.find((entry) => entry.name === name);
  if (!tool) {
    throw new Error(`Unknown tool "${name}". Use tool_search to find available tools.`);
  }
  const parsed = v.safeParse(tool.input, args);
  if (!parsed.success) {
    throw new Error(
      `Invalid args for "${name}": ${JSON.stringify(v.flatten(parsed.issues).nested ?? {})}. ` +
        'Use tool_describe to see the expected schema.',
    );
  }
  return tool.run(parsed.output as Record<string, unknown>);
}

/** One-liner index for the system prompt: full list when small, count when large. */
export function deferredToolsGuidance(catalog: DeferredTool[]): string {
  if (catalog.length === 0) return '';
  const intro =
    'Beyond your attached tools, more are available through the bridge: ' +
    'tool_search finds them, tool_describe shows the input schema, tool_call runs them.';
  if (catalog.length <= 15) {
    const lines = catalog.map((tool) => `- ${tool.name}: ${tool.description}`);
    return `${intro}\nCatalog:\n${lines.join('\n')}`;
  }
  return `${intro} The catalog has ${catalog.length} tools — search before assuming a capability is missing.`;
}

export function deferredToolBridge(catalog: DeferredTool[]): ToolDefinition[] {
  if (catalog.length === 0) return [];
  return [
    defineTool({
      name: 'tool_search',
      description:
        'Search the deferred-tool catalog by keyword. Use when your attached tools ' +
        'lack a capability. Do NOT use for tools already attached.',
      input: v.object({ query: v.pipe(v.string(), v.minLength(1)) }),
      async run({ input: { query } }) {
        return { results: searchCatalog(catalog, query) };
      },
    }),
    defineTool({
      name: 'tool_describe',
      description:
        'Show the full input schema for one deferred tool found via tool_search. ' +
        'Call before the first tool_call to a tool.',
      input: v.object({ name: v.pipe(v.string(), v.minLength(1)) }),
      async run({ input: { name } }) {
        const tool = catalog.find((entry) => entry.name === name);
        if (!tool) throw new Error(`Unknown tool "${name}". Use tool_search first.`);
        return {
          name: tool.name,
          description: tool.description,
          inputSchema: toJsonSchema(tool.input),
        };
      },
    }),
    defineTool({
      name: 'tool_call',
      description: 'Invoke a deferred tool by name with args matching its schema.',
      input: v.object({
        name: v.pipe(v.string(), v.minLength(1)),
        args: v.optional(v.record(v.string(), v.unknown()), {}),
      }),
      async run({ input: { name, args } }) {
        return callDeferredTool(catalog, name, args);
      },
    }),
  ];
}
