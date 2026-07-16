import { drizzle, type PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema.ts';

export type AppDb = PostgresJsDatabase<typeof schema>;

// ponytail: idempotent bootstrap DDL, kept in sync with schema.ts by hand —
// swap for Atlas-managed migrations when the schema stabilizes.
const DDL = `
CREATE TABLE IF NOT EXISTS messages (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  instance_id TEXT NOT NULL,
  agent_name TEXT NOT NULL,
  tenant TEXT NOT NULL,
  role TEXT NOT NULL,
  content TEXT NOT NULL,
  tool_name TEXT,
  event_index BIGINT NOT NULL,
  ts TEXT NOT NULL,
  tsv tsvector GENERATED ALWAYS AS (to_tsvector('english', content)) STORED
);
CREATE UNIQUE INDEX IF NOT EXISTS messages_instance_event ON messages (instance_id, event_index);
CREATE INDEX IF NOT EXISTS messages_tenant ON messages (tenant);
CREATE INDEX IF NOT EXISTS messages_instance ON messages (instance_id, event_index);
CREATE INDEX IF NOT EXISTS messages_tsv ON messages USING gin (tsv);
CREATE TABLE IF NOT EXISTS facts (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  tenant TEXT NOT NULL,
  subject_type TEXT NOT NULL,
  subject_id TEXT NOT NULL,
  category TEXT NOT NULL,
  body TEXT NOT NULL,
  provenance TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'active',
  created_at TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS facts_subject ON facts (tenant, subject_type, subject_id, status);
`;

let instance: Promise<AppDb> | null = null;
let client: ReturnType<typeof postgres> | null = null;

async function init(): Promise<AppDb> {
  const url = process.env.DATABASE_URL;
  if (!url) throw new Error('DATABASE_URL is required for the app store.');
  client = postgres(url, { max: 10, onnotice: () => {} });
  await client.unsafe(DDL);
  return drizzle(client, { schema });
}

export function appDb(): Promise<AppDb> {
  instance ??= init();
  return instance;
}

/** For checks and graceful shutdown — closes the pool and resets the singleton. */
export async function closeAppDb(): Promise<void> {
  if (!instance) return;
  await instance;
  instance = null;
  await client?.end();
  client = null;
}
