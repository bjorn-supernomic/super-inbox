// Super Inbox application entrypoint — Hono app composing the cases API,
// the SSE domain-event stream, static frontend serving, and Flue's routes.
import { serveStatic } from "@hono/node-server/serve-static";
import { flue } from "@flue/runtime/routing";
import { Hono } from "hono";
import { streamSSE } from "hono/streaming";
import * as v from "valibot";
import {
  AlreadyHandledError,
  CaseInputSchema,
  createCase,
  DecisionSchema,
  DuplicateCaseError,
  listCases,
  recordDecision,
  UnknownCaseError,
} from "./cases.ts";
import { db } from "./domain/client.ts";
import { decisions } from "./domain/schema.ts";
import { events, type CaseEvent } from "./events.ts";
import { LIBRARY, LIFECYCLE } from "../inbox-data.js";

const app = new Hono();

app.get("/api/inbox", async (c) =>
  c.json({ cases: await listCases(), lifecycle: LIFECYCLE, library: LIBRARY }));

app.get("/api/decisions", async (c) =>
  c.json(await db.select().from(decisions).orderBy(decisions.seq)));

app.post("/api/cases", async (c) => {
  const parsed = v.safeParse(CaseInputSchema, await c.req.json().catch(() => null));
  if (!parsed.success) return c.json({ error: "case needs at least a title" }, 400);
  try {
    return c.json({ ok: true, id: await createCase(parsed.output) }, 201);
  } catch (err) {
    if (err instanceof DuplicateCaseError) return c.json({ error: err.message }, 409);
    throw err;
  }
});

app.post("/api/cases/:id/decision", async (c) => {
  const parsed = v.safeParse(DecisionSchema, await c.req.json().catch(() => null));
  if (!parsed.success) return c.json({ error: "expected { option: number, title: string }" }, 400);
  try {
    await recordDecision(c.req.param("id"), parsed.output);
    return c.json({ ok: true });
  } catch (err) {
    if (err instanceof UnknownCaseError) return c.json({ error: err.message }, 404);
    if (err instanceof AlreadyHandledError) return c.json({ error: err.message }, 409);
    throw err;
  }
});

// Live domain events for every connected operator (case filed / decided).
app.get("/api/events", (c) =>
  streamSSE(c, async (stream) => {
    const send = (event: CaseEvent) =>
      stream.writeSSE({ event: "case", data: JSON.stringify(event) });
    events.on("case", send);
    stream.onAbort(() => events.off("case", send));
    while (!stream.aborted) {
      await stream.sleep(15_000);
      await stream.writeSSE({ event: "ping", data: "" });
    }
  }));

// Flue: exposed workflows (POST /workflows/file-signal), agents, runs.
app.route("/", flue());

// Static frontend — everything else in the repo root, minus non-public dirs.
app.use("/*", async (c, next) => {
  if (/^\/(data|node_modules|src|migrations|dist|\.)/.test(c.req.path)) {
    return c.text("not found", 404);
  }
  await next();
});
app.use("/*", serveStatic({ root: "./" }));

export default app;
