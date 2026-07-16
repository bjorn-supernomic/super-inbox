// Domain schema — single source of truth; Atlas generates migrations from it
// (atlas migrate diff), never drizzle-kit push/generate. See docs/stack.md.
import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

// ponytail: whole-case JSON blobs, no column-per-field schema — the case shape
// is rich display data; promote fields to columns when we actually query them.
export const cases = sqliteTable("cases", {
  id: text("id").primaryKey(),
  state: text("state").notNull(),
  data: text("data").notNull(),
  createdAt: text("created_at").notNull().default(sql`(datetime('now'))`),
  updatedAt: text("updated_at").notNull().default(sql`(datetime('now'))`),
});

export const decisions = sqliteTable("decisions", {
  seq: integer("seq").primaryKey({ autoIncrement: true }),
  caseId: text("case_id").notNull().references(() => cases.id),
  optionIndex: integer("option_index").notNull(),
  title: text("title").notNull(),
  decidedAt: text("decided_at").notNull().default(sql`(datetime('now'))`),
});
