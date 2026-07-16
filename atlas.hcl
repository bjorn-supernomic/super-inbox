# Atlas migration config — Drizzle schema (src/db/schema.ts) is the desired
# state; Atlas plans, lints, and applies. See docs/stack.md.
data "external_schema" "drizzle" {
  program = ["bunx", "drizzle-kit", "export"]
}

env "local" {
  dev = "sqlite://dev?mode=memory"
  schema {
    src = data.external_schema.drizzle.url
  }
  migration {
    dir = "file://migrations"
  }
}
