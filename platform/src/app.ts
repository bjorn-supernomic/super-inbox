// Authored application entrypoint (docs: api/routing-api). Without app.ts
// Flue generates one that mounts flue() at '/'; we author it so module-level
// startup code — the session mirror's observe() registration — runs in
// `flue dev` and the built server. Mounting flue() at '/' keeps agents and
// channels at their default paths.
import { flue } from '@flue/runtime/routing';
import { Hono } from 'hono';
import { registerMirror } from './mirror.ts';

registerMirror();

const app = new Hono();
app.route('/', flue());
export default app;
