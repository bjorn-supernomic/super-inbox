// Facts store with Hermes capacity semantics: each subject has a hard char
// budget; hitting it returns the current entries so the model can consolidate
// and retry within the same turn instead of silently dropping knowledge.
import { and, asc, eq } from 'drizzle-orm';
import { appDb } from './db.ts';
import { facts } from './schema.ts';

export type SubjectType = 'user' | 'channel' | 'team' | 'company';

export interface Fact {
  id: number;
  tenant: string;
  subjectType: SubjectType;
  subjectId: string;
  category: string;
  body: string;
  provenance: string;
  status: 'active' | 'pending';
  createdAt: string;
}

export const SUBJECT_CAPACITY_CHARS = 2200;

export type AddFactResult = { ok: true; fact: Fact } | { ok: false; error: string; current: Fact[] };

export async function addFact(input: {
  tenant: string;
  subjectType: SubjectType;
  subjectId: string;
  category: string;
  body: string;
  provenance: string;
  status?: 'active' | 'pending';
}): Promise<AddFactResult> {
  const current = await listFacts(input.tenant, input.subjectType, input.subjectId);
  const used = current.reduce((sum, fact) => sum + fact.body.length, 0);
  if (used + input.body.length > SUBJECT_CAPACITY_CHARS) {
    return {
      ok: false,
      error:
        `Subject ${input.subjectType}:${input.subjectId} is at capacity ` +
        `(${used}/${SUBJECT_CAPACITY_CHARS} chars; adding ${input.body.length} would exceed it). ` +
        'Consolidate or remove existing entries, then retry adding this fact in the same turn.',
      current,
    };
  }
  const status = input.status ?? 'active';
  const createdAt = new Date().toISOString();
  const db = await appDb();
  const inserted = await db
    .insert(facts)
    .values({
      tenant: input.tenant,
      subjectType: input.subjectType,
      subjectId: input.subjectId,
      category: input.category,
      body: input.body,
      provenance: input.provenance,
      status,
      createdAt,
    })
    .returning({ id: facts.id });
  return {
    ok: true,
    fact: {
      id: inserted[0]!.id,
      tenant: input.tenant,
      subjectType: input.subjectType,
      subjectId: input.subjectId,
      category: input.category,
      body: input.body,
      provenance: input.provenance,
      status,
      createdAt,
    },
  };
}

export async function listFacts(
  tenant: string,
  subjectType: SubjectType,
  subjectId: string,
): Promise<Fact[]> {
  const db = await appDb();
  return db
    .select()
    .from(facts)
    .where(
      and(
        eq(facts.tenant, tenant),
        eq(facts.subjectType, subjectType),
        eq(facts.subjectId, subjectId),
        eq(facts.status, 'active'),
      ),
    )
    .orderBy(asc(facts.id));
}

export async function removeFact(id: number): Promise<void> {
  const db = await appDb();
  await db.delete(facts).where(eq(facts.id, id));
}

export async function renderProfile(
  tenant: string,
  subjects: { subjectType: SubjectType; subjectId: string; label: string }[],
): Promise<string> {
  const blocks: string[] = [];
  for (const { subjectType, subjectId, label } of subjects) {
    const entries = await listFacts(tenant, subjectType, subjectId);
    if (entries.length === 0) continue;
    const used = entries.reduce((sum, fact) => sum + fact.body.length, 0);
    const percent = Math.round((used / SUBJECT_CAPACITY_CHARS) * 100);
    const header = `## ${label} [${percent}% — ${used}/${SUBJECT_CAPACITY_CHARS} chars]`;
    blocks.push(`${header}\n${entries.map((fact) => fact.body).join('\n§\n')}`);
  }
  return blocks.join('\n\n');
}
