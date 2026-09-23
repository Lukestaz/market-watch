import type { Priority, RawListing, SearchRule } from "./models.js";

const PRIORITY_ORDER: Record<Priority, number> = {
  critical: 4,
  high: 3,
  normal: 2,
  ignore: 1
};

export interface MatchResult {
  priority: Priority;
  matchedRules: string[];
}

export function highestPriority(a: Priority, b: Priority): Priority {
  return PRIORITY_ORDER[a] >= PRIORITY_ORDER[b] ? a : b;
}

export function matchRules(raw: RawListing, rules: SearchRule[]): MatchResult {
  const matchedRules: string[] = [];
  let priority: Priority = "normal";

  const searchSubject = `${raw.title} ${raw.rawText || ""} ${raw.modelNumber || ""}`.toLowerCase();

  for (const rule of rules) {
    const included = rule.includeKeywords.every((kw) => searchSubject.includes(kw.toLowerCase()));
    if (!included) continue;

    const excluded = (rule.excludeKeywords || []).some((kw) => searchSubject.includes(kw.toLowerCase()));
    if (excluded) continue;

    if (rule.minimumPrice !== undefined && raw.price !== undefined && raw.price < rule.minimumPrice) {
      continue;
    }
    if (rule.maximumPrice !== undefined && raw.price !== undefined && raw.price > rule.maximumPrice) {
      continue;
    }

    matchedRules.push(rule.id);
    priority = highestPriority(priority, rule.priority);
  }

  return { priority, matchedRules };
}

export function evaluateRules(
  search: { rules: SearchRule[] },
  data: { title: string; rawText?: string; price?: number }
): MatchResult {
  const raw: RawListing = {
    id: "",
    title: data.title,
    url: "",
    price: data.price,
    rawText: data.rawText
  };
  return matchRules(raw, search.rules);
}

export function mergeUnique<T>(a: T[], b: T[]): T[] {
  return Array.from(new Set([...a, ...b]));
}
