// Super Inbox server — Hono API routes + static frontend + Flue surfaces.
// Run: flue dev --port 4820 (from apps/server; root `bun run dev` does this).
import { readFile } from 'node:fs/promises';
import { dirname, extname, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { invoke } from '@flue/runtime';
import { flue } from '@flue/runtime/routing';
import { Hono } from 'hono';
import { streamSSE } from 'hono/streaming';
import { emit, subscribe } from './shared/events.ts';
import {
  addComment,
  createCase,
  getCase,
  LIBRARY,
  LIFECYCLE,
  listCases,
  listDecisions,
  nextCaseId,
  recordDecision,
  updateCase,
} from './shared/store.ts';
import executeDecision from './workflows/execute-decision.ts';

// Repo root: apps/server/src/app.ts → three levels up. The dc-runtime frontend
// (Action Inbox.dc.html, _ds/, inbox-data.js, assets/, support.js, index.html)
// still lives there until the apps/web port lands.
const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..', '..', '..');

const app = new Hono();

// ---------------------------------------------------------------------------
// API
// ---------------------------------------------------------------------------

app.get('/api/inbox', (c) =>
  c.json({ cases: listCases(), lifecycle: LIFECYCLE, library: LIBRARY }),
);

app.get('/api/decisions', (c) => c.json(listDecisions()));

app.post('/api/cases', async (c) => {
  const body = (await c.req.json().catch(() => null)) as Record<string, unknown> | null;
  if (!body || typeof body.title !== 'string' || !body.title.trim())
    return c.json({ error: 'case needs at least a title' }, 400);
  const id = typeof body.id === 'string' && body.id.trim() ? body.id : nextCaseId();
  if (getCase(id)) return c.json({ error: `${id} already exists` }, 409);
  const state = typeof body.state === 'string' ? body.state : 'needs';
  createCase({ ...body, id, state });
  emit({ type: 'case.created', caseId: id });
  return c.json({ ok: true, id }, 201);
});

app.post('/api/cases/:id/decision', async (c) => {
  const id = c.req.param('id');
  const kase = getCase(id);
  if (!kase) return c.json({ error: `unknown case ${id}` }, 404);
  const body = (await c.req.json().catch(() => null)) as {
    option?: unknown;
    title?: unknown;
  } | null;
  if (!body || typeof body.option !== 'number' || typeof body.title !== 'string')
    return c.json({ error: 'expected { option: number, title: string }' }, 400);

  recordDecision(id, body.option, body.title);

  const steps: Array<{ state?: string }> = kase.brain?.playbook?.steps ?? [];
  const firstOpen = steps.findIndex((s) => s.state !== 'done');
  const execStep = firstOpen === -1 ? Math.max(0, steps.length - 1) : firstOpen;
  updateCase(id, { state: 'executing', execStep, decidedOption: body.option });

  const { runId } = await invoke(executeDecision, {
    input: { caseId: id, option: body.option, title: body.title },
  });

  emit({ type: 'case.updated', caseId: id });
  return c.json({ ok: true, runId }, 202);
});

app.post('/api/cases/:id/dismiss', (c) => {
  const id = c.req.param('id');
  if (!getCase(id)) return c.json({ error: `unknown case ${id}` }, 404);
  updateCase(id, { state: 'handled', dot: 'done' });
  recordDecision(id, -1, 'Dismissed');
  emit({ type: 'case.updated', caseId: id });
  return c.json({ ok: true });
});

app.post('/api/cases/:id/discussion', async (c) => {
  const id = c.req.param('id');
  if (!getCase(id)) return c.json({ error: `unknown case ${id}` }, 404);
  const body = (await c.req.json().catch(() => null)) as {
    parentId?: unknown;
    body?: unknown;
    author?: unknown;
    tag?: unknown;
    ctx?: unknown;
  } | null;
  if (!body || typeof body.body !== 'string' || !body.body.trim())
    return c.json({ error: 'expected { parentId: string|null, body: string }' }, 400);
  const parentId = typeof body.parentId === 'string' && body.parentId ? body.parentId : null;
  const author = typeof body.author === 'string' && body.author.trim() ? body.author : 'You';
  const tag = typeof body.tag === 'string' && body.tag.trim() ? body.tag : 'operator';
  const time = new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });

  let comment: unknown;
  try {
    comment = addComment(id, parentId, { author, tag, time, body: body.body, ctx: body.ctx });
  } catch (err) {
    return c.json({ error: err instanceof Error ? err.message : 'bad request' }, 400);
  }
  emit({ type: 'discussion.updated', caseId: id });
  return c.json({ comment }, 201);
});

// SSE invalidation stream — coarse events only, client refetches (CONTRACT.md §3).
app.get('/api/events', (c) =>
  streamSSE(c, async (stream) => {
    const unsubscribe = subscribe((e) => {
      void stream.writeSSE({ data: JSON.stringify(e) });
    });
    const heartbeat = setInterval(() => {
      void stream.write(': heartbeat\n\n');
    }, 25_000);
    await new Promise<void>((resolveClosed) => {
      stream.onAbort(() => {
        clearInterval(heartbeat);
        unsubscribe();
        resolveClosed();
      });
    });
  }),
);

// ---------------------------------------------------------------------------
// Static frontend (repo root) — served when the file exists; everything else
// falls through to the flue() mount below.
// ---------------------------------------------------------------------------

const MIME: Record<string, string> = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.jsx': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain; charset=utf-8',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.map': 'application/json',
};

const FLUE_PATHS = /^\/(api|agents|workflows|runs|channels)(\/|$)/;

app.use('*', async (c, next) => {
  if (c.req.method !== 'GET') return next();
  let path = decodeURIComponent(new URL(c.req.url).pathname);
  if (FLUE_PATHS.test(path)) return next();
  if (path === '/') path = '/index.html';
  // Path traversal guard: normalized path must stay inside the repo root.
  const full = resolve(`${ROOT}${path}`);
  if (full !== ROOT && !full.startsWith(`${ROOT}${sep}`)) return c.text('nope', 403);
  try {
    const data = await readFile(full);
    return c.body(new Uint8Array(data).buffer as ArrayBuffer, 200, {
      'content-type': MIME[extname(full).toLowerCase()] ?? 'application/octet-stream',
    });
  } catch {
    return next();
  }
});

// Flue surfaces: /workflows, /runs, /agents, /channels.
app.route('/', flue());

export default app;
