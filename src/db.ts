// Flue persistence — agent conversations, workflow runs, submissions.
// Separate file from the domain DB (src/db/) on purpose: Flue owns this schema.
import { sqlite } from "@flue/runtime/node";

export default sqlite("./data/flue.db");
