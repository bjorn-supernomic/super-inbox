// Domain database client. Schema changes go through Atlas migrations
// (bun run db:diff / db:migrate) — this module assumes tables exist.
import { mkdirSync } from "node:fs";
import { resolve } from "node:path";
import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";
import { CASES } from "../../inbox-data.js";
import { cases } from "./schema.ts";

// cwd-anchored, not import.meta.dirname — module paths are virtual inside
// Vite's in-memory runtime (flue dev); commands always run from project root.
const dataDir = resolve(process.cwd(), "data");
mkdirSync(dataDir, { recursive: true });

export const db = drizzle(createClient({ url: `file:${dataDir}/inbox.db` }));

const seeded = await db.select({ id: cases.id }).from(cases).limit(1);
if (seeded.length === 0) {
  await db.insert(cases).values(
    (CASES as { id: string; state: string }[]).map((c) => ({
      id: c.id,
      state: c.state,
      data: JSON.stringify(c),
    })),
  );
  console.log(`seeded ${(CASES as unknown[]).length} cases from inbox-data.js`);
}
