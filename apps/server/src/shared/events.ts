// In-process event bus for SSE invalidation (CONTRACT.md §3 channel 1).

export type WorkspaceEvent = {
  type: 'case.updated' | 'case.created' | 'discussion.updated';
  caseId: string;
};

type Listener = (e: WorkspaceEvent) => void;

const listeners = new Set<Listener>();

export function emit(e: WorkspaceEvent): void {
  for (const fn of listeners) fn(e);
}

export function subscribe(fn: Listener): () => void {
  listeners.add(fn);
  return () => {
    listeners.delete(fn);
  };
}
