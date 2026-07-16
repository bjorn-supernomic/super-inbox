import { defineConfig as defineViteConfig } from 'vite';
import { defineConfig } from '@flue/cli/config';

export default defineConfig({
	target: 'node',
});

// data/ holds SQLite files (domain + Flue state); watching them would reload
// the dev server on every write.
export const vite = defineViteConfig({
	server: {
		watch: {
			ignored: ['**/data/**'],
		},
	},
});
