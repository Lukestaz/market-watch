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

function escapeRegex(text: string): string {
  return text.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
}

/**
 * Checks if a keyword matches as a standalone word/phrase.
 * Avoids substring bugs like 'ego' matching 'lego' or 'category', or '65' matching '76284'.
 */
export function wordBoundaryMatch(corpus: string, keyword: string): boolean {
  const clean = keyword.trim().toLowerCase();
  if (!clean) return false;

  // Handle screen size notations (e.g. 65" or 65in)
  if (clean === "65") {
    const rx = /(?:^|[^a-zA-Z0-9])(?:65["”']?|65\s*(?:inch|in|-inch)|oled65|65oled)(?:[^a-zA-Z0-9]|$)/i;
    return rx.test(corpus);
  }
  if (clean === "77") {
    const rx = /(?:^|[^a-zA-Z0-9])(?:77["”']?|77\s*(?:inch|in|-inch)|oled77|77oled)(?:[^a-zA-Z0-9]|$)/i;
    return rx.test(corpus);
  }

  const escaped = escapeRegex(clean);
  const regex = new RegExp(`(?:^|[^a-zA-Z0-9])${escaped}(?:[^a-zA-Z0-9]|$)`, "i");
  return regex.test(corpus);
}

export function matchRules(raw: RawListing, rules: SearchRule[]): MatchResult {
  const matchedRules: string[] = [];
  let priority: Priority = "normal";

  const searchSubject = `${raw.title} ${raw.modelNumber || ""} ${raw.rawText || ""}`.toLowerCase();

  for (const rule of rules) {
    const included = rule.includeKeywords.every((kw) => wordBoundaryMatch(searchSubject, kw));
    if (!included) continue;

    const excluded = (rule.excludeKeywords || []).some((kw) => wordBoundaryMatch(searchSubject, kw));
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
