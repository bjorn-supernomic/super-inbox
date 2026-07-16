// Flue runtime persistence (agent conversations, workflow runs, streams).
// App business data lives separately in shared/store.ts (inbox.db).
import { mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { sqlite } from '@flue/runtime/node';

const dataDir = join(dirname(fileURLToPath(import.meta.url)), '..', 'data');
mkdirSync(dataDir, { recursive: true });

export default sqlite(join(dataDir, 'flue.db'));
