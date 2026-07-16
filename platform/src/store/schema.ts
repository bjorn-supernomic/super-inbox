import { bigint, index, pgTable, text, uniqueIndex } from 'drizzle-orm/pg-core';

// The tsv column (generated tsvector over content + GIN index) lives only in
// the bootstrap DDL (db.ts) — search queries it raw; drizzle never writes it.
export const messages = pgTable(
  'messages',
  {
    id: bigint('id', { mode: 'number' }).primaryKey().generatedAlwaysAsIdentity(),
    instanceId: text('instance_id').notNull(),
    agentName: text('agent_name').notNull(),
    tenant: text('tenant').notNull(),
    role: text('role', { enum: ['user', 'assistant', 'tool'] }).notNull(),
    content: text('content').notNull(),
    toolName: text('tool_name'),
    eventIndex: bigint('event_index', { mode: 'number' }).notNull(),
    ts: text('ts').notNull(),
  },
  (table) => [
    uniqueIndex('messages_instance_event').on(table.instanceId, table.eventIndex),
    index('messages_tenant').on(table.tenant),
  ],
);

export const facts = pgTable(
  'facts',
  {
    id: bigint('id', { mode: 'number' }).primaryKey().generatedAlwaysAsIdentity(),
    tenant: text('tenant').notNull(),
    subjectType: text('subject_type', { enum: ['user', 'channel', 'team', 'company'] }).notNull(),
    subjectId: text('subject_id').notNull(),
    category: text('category').notNull(),
    body: text('body').notNull(),
    provenance: text('provenance').notNull(),
    status: text('status', { enum: ['active', 'pending'] }).notNull().default('active'),
    createdAt: text('created_at').notNull(),
  },
  (table) => [index('facts_subject').on(table.tenant, table.subjectType, table.subjectId, table.status)],
);
