# Super Inbox — Agent Instructions

Action Inbox: operator surface for reviewing and approving agent-proposed
actions. See `README.md` for current architecture and how to run.

**Before adding backend, database, real-time, agent, or migration code, read
[`docs/stack.md`](docs/stack.md)** — it is the binding stack decision (Flue +
Hono, Drizzle + Atlas migrations, valibot, SSE real-time) including what was
rejected (Effect.ts, MongoDB, WebSockets) and why. Don't re-litigate those
choices; deviate only with a written reason in that doc.

Conventions: Bun (never npm/pnpm/npx), strict TypeScript, validate at
boundaries with valibot (Flue requires it — don't introduce zod), exceptions
for errors. Schema changes: edit `src/domain/schema.ts`, then `bun run db:diff` —
never drizzle-kit push/generate.
