import { defineConfig } from '@flue/cli/config';

export default defineConfig({
  target: 'node',
});

// Native Vite config merged into the dev server (plain object — vite itself is
// not a direct dependency under Bun's isolated installs, so no defineConfig).
// The SQLite files (flue.db, inbox.db + wal/shm) live under ./data — without
// this the dev watcher reload-loops on every database write.
export const vite = {
  server: {
    watch: {
      ignored: ['**/data/**'],
    },
  },
};
