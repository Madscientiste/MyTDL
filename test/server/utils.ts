import { context, createResponseComposition } from "msw";

import { TTodoItem } from "@/type";

export const delayedResponse = createResponseComposition(undefined, [context.delay(0)]);

export function sortTasks<T extends TTodoItem>(a: T, b: T) {
  const getSortField = (t: T) => (t.completed ? new Date(t.updated_at).valueOf() : 0);

  if (getSortField(a) == getSortField(b)) {
    return new Date(b.created_at).valueOf() - new Date(a.created_at).valueOf();
  }

  if (getSortField(a) === null) return 1;
  if (getSortField(b) === null) return -1;

  return getSortField(a) - getSortField(b);
}
