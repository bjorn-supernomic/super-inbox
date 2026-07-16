// Domain event fan-out for the SSE endpoint.
// ponytail: in-process EventEmitter — swap for Postgres LISTEN/NOTIFY when
// the app runs multiple replicas (docs/stack.md).
import { EventEmitter } from "node:events";

export interface CaseEvent {
  type: "case.filed" | "case.decided";
  id: string;
}

export const events = new EventEmitter();

export function emitCase(event: CaseEvent): void {
  events.emit("case", event);
}
