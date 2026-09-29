import type { EnrichedListing, AiEvaluation } from "./models.js";

interface GeminiResponse {
  candidates?: Array<{
    content?: {
      parts?: Array<{
        text?: string;
      }>;
    };
  }>;
  error?: {
    message?: string;
    code?: number;
  };
}

/**
 * Evaluates candidate listings using Google Gemini Flash.
 * Tries the primary stable model (gemini-2.5-flash) and falls back to gemini-1.5-flash.
 */
export async function evaluateListingWithGemini(
  listing: EnrichedListing,
  targetContext: string
): Promise<AiEvaluation | null> {
  const apiKey = process.env.GEMINI_API_KEY?.trim();
  if (!apiKey) {
    return null;
  }

  const prompt = `You are an expert second-hand valuation and deal assessment engine for a personal market watcher in New Zealand.
We are searching second-hand stores (Cash Converters / Dollar Dealers NZ) for: "${targetContext}".

Listing to evaluate:
- Title: "${listing.title}"
- Price: NZD $${listing.price ?? "Unknown"}
- Model Number: "${listing.modelNumber ?? "N/A"}"
- Condition: "${listing.condition ?? "N/A"}"
- Store/Seller: "${listing.seller ?? "N/A"}"
- Matched Rule IDs: "${listing.matchedRules.join(", ")}"

TASK:
1. Determine if this item is a true positive match for the intended category ("${targetContext}").
   - The item must genuinely BE the target product. A different brand or product type is NOT a match
     (e.g. a Milwaukee or AEG tool is not an EGO tool; a soundbar is not a TV; a non-OLED TV is not an OLED TV).
   - Filter OUT accessories-only, phone cases, boxes, wall brackets, completely different categories (e.g. washing machines, jewelry, wristwatches, unrelated models).
2. Rate the deal attractiveness on a scale of 1 to 10 (10 = incredible steal, 5 = average resale market price, 1 = overpriced or junk).
3. Provide a short 1-line reason for the rating and valuation.

Respond ONLY with valid, raw JSON in this exact structure:
{
  "isTruePositive": boolean,
  "score": number,
  "verdict": "Steal" | "Great Deal" | "Fair Price" | "Overpriced" | "Not Relevant",
  "reason": "1-sentence plain text summary of why it matches and if it's a good deal"
}`;

  const models = await resolveModels(apiKey);
  if (models.length === 0) return null;

  let attempt = 0;
  for (const model of models) {
    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: prompt }]
            }
          ],
          generationConfig: {
            responseMimeType: "application/json",
            temperature: 0.1
          }
        })
      });

      if (!res.ok) {
        const errText = await res.text();
        console.warn(`[AI Evaluator] Gemini (${model}) HTTP ${res.status}: ${errText.slice(0, 150)}`);
        if (res.status === 404 || res.status === 400) deadModels.add(model);
        if ((res.status === 503 || res.status === 429) && attempt < 2) {
          await new Promise((r) => setTimeout(r, 2000 * (attempt + 1)));
          attempt++;
          models.splice(models.indexOf(model) + 1, 0, model); // retry same model after backoff
        }
        continue;
      }

      const data = (await res.json()) as GeminiResponse;
      const rawText = data.candidates?.[0]?.content?.parts?.[0]?.text;
      if (!rawText) continue;

      const parsed = JSON.parse(rawText);
      return {
        isTruePositive: Boolean(parsed.isTruePositive),
        score: typeof parsed.score === "number" ? parsed.score : 5,
        verdict: String(parsed.verdict || "Fair Price"),
        reason: String(parsed.reason || "")
      };
    } catch (err) {
      console.warn(`[AI Evaluator] Error evaluating "${listing.title}" with ${model}:`, err);
    }
  }

  return null;
}

// ---- Model discovery: ask the API which models this key can use, instead of hardcoding slugs ----
const PREFERRED = ["gemini-flash-latest", "gemini-3-flash", "gemini-2.5-flash", "gemini-2.0-flash", "gemini-flash-lite-latest"];
const deadModels = new Set<string>();
let discovered: Promise<string[]> | null = null;

async function discoverModels(apiKey: string): Promise<string[]> {
  try {
    const names: string[] = [];
    let pageToken = "";
    do {
      const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?pageSize=1000&key=${apiKey}${pageToken ? `&pageToken=${pageToken}` : ""}`);
      if (!res.ok) {
        console.warn(`[AI Evaluator] Model list HTTP ${res.status}: ${(await res.text()).slice(0, 150)}`);
        return PREFERRED;
      }
      const data = (await res.json()) as { models?: { name: string; supportedGenerationMethods?: string[] }[]; nextPageToken?: string };
      for (const m of data.models ?? []) {
        if (m.supportedGenerationMethods?.includes("generateContent")) names.push(m.name.replace(/^models\//, ""));
      }
      pageToken = data.nextPageToken ?? "";
    } while (pageToken);

    const flash = names.filter((n) => /flash/.test(n) && !/(image|tts|audio|live|embedding|thinking|exp)/.test(n));
    const rank = (n: string) => {
      const p = PREFERRED.indexOf(n);
      if (p >= 0) return -100 + p;
      const v = parseFloat(n.match(/gemini-(\d+(?:\.\d+)?)/)?.[1] ?? "0");
      return -v + (/preview/.test(n) ? 0.5 : 0) + (/lite/.test(n) ? 0.2 : 0);
    };
    const ordered = [...new Set(flash)].sort((a, b) => rank(a) - rank(b)).slice(0, 4);
    console.log(`[AI Evaluator] Available flash models: ${ordered.join(", ") || "none"}`);
    return ordered.length ? ordered : PREFERRED;
  } catch (err) {
    console.warn("[AI Evaluator] Model discovery failed:", err);
    return PREFERRED;
  }
}

async function resolveModels(apiKey: string): Promise<string[]> {
  discovered ??= discoverModels(apiKey);
  const list = (await discovered).filter((m) => !deadModels.has(m));
  if (list.length === 0 && deadModels.size > 0 && !(resolveModels as any).warned) {
    (resolveModels as any).warned = true;
    console.warn("[AI Evaluator] No working Gemini model; skipping AI for the rest of this run.");
  }
  return list;
}
