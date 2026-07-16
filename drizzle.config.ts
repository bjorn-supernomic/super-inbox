// Used ONLY by `drizzle-kit export` (Atlas's external_schema program).
// Migrations are managed by Atlas — see atlas.hcl and docs/stack.md.
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "sqlite",
  schema: "./src/domain/schema.ts",
});
