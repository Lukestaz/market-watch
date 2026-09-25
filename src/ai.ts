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
 * Evaluates candidate listings using Google Gemini 2.0/1.5 Flash.
 * If GEMINI_API_KEY is not configured or an error occurs, falls back gracefully.
 */
export async function evaluateListingWithGemini(
  listing: EnrichedListing,
  targetContext: string
): Promise<AiEvaluation | null> {
  const apiKey = process.env.GEMINI_API_KEY?.trim();
  if (!apiKey) {
    return null;
  }

  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

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
      console.warn(`[AI Evaluator] Gemini HTTP ${res.status}: ${errText.slice(0, 150)}`);
      return null;
    }

    const data = (await res.json()) as GeminiResponse;
    const rawText = data.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!rawText) return null;

    const parsed = JSON.parse(rawText);
    return {
      isTruePositive: Boolean(parsed.isTruePositive),
      score: typeof parsed.score === "number" ? parsed.score : 5,
      verdict: String(parsed.verdict || "Fair Price"),
      reason: String(parsed.reason || "")
    };
  } catch (err) {
    console.warn(`[AI Evaluator] Error evaluating "${listing.title}":`, err);
    return null;
  }
}
