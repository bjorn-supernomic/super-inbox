import { postgres, type PostgresQuery } from '@flue/postgres';
import sql from 'postgres';

// Flue conversation persistence shares the app database (DATABASE_URL).
// >2k employees/tenant + multi-replica processes → Postgres, no SQLite path.
const db = sql(process.env.DATABASE_URL!);

export default postgres({
  query: (text, params) => db.unsafe(text, params),
  transaction: <T,>(fn: (tx: { query: PostgresQuery }) => Promise<T>) =>
    db.begin((tx) => fn({ query: (text, params) => tx.unsafe(text, params) })) as Promise<T>,
  close: () => db.end(),
});
