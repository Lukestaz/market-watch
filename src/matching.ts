import type { Priority } from "./models.js";

const rank: Record<Priority, number> = {
  ignore: 0,
  normal: 1,
  high: 2,
  critical: 3
};

export function highestPriority(a: Priority, b: Priority): Priority {
  return rank[a] >= rank[b] ? a : b;
}

export function mergeUnique(values: string[], additions: string[]): string[] {
  return [...new Set([...values, ...additions])];
}
