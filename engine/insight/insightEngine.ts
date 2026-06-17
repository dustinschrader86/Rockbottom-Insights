import { InsightResult } from "../capture/captureTypes";
import crypto from "crypto";

/**
 * Generates insights from OCR text.
 * This is the intelligence layer of the pipeline.
 */
export async function generateInsights(text: string): Promise<InsightResult> {
  if (!text || text.trim().length === 0) {
    return {
      summary: "No readable text found.",
      keyPoints: [],
      metadata: {},
    };
  }

  const keyPoints: string[] = [];

  // --- Money detection ---
  const moneyRegex = /\$[0-9,]+(\.\d{2})?/g;
  const moneyMatches = text.match(moneyRegex);
  if (moneyMatches) {
    keyPoints.push(`Detected money amounts: ${moneyMatches.join(", ")}`);
  }

  // --- Urgent language detection ---
  const urgentWords = ["urgent", "asap", "immediately", "important", "now"];
  const foundUrgent = urgentWords.filter((w) =>
    text.toLowerCase().includes(w)
  );
  if (foundUrgent.length > 0) {
    keyPoints.push(`Urgent language found: ${foundUrgent.join(", ")}`);
  }

  // --- Email detection ---
  const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
  const emails = text.match(emailRegex);
  if (emails) {
    keyPoints.push(`Detected email addresses: ${emails.join(", ")}`);
  }

  // --- URL detection ---
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const urls = text.match(urlRegex);
  if (urls) {
    keyPoints.push(`Detected URLs: ${urls.join(", ")}`);
  }

  // --- Crypto wallet detection (Solana / ETH style) ---
  const solRegex = /[1-9A-HJ-NP-Za-km-z]{32,44}/g;
  const solMatches = text.match(solRegex);
  if (solMatches) {
    keyPoints.push(`Possible crypto wallet(s) detected: ${solMatches.join(", ")}`);
  }

  // --- Simple summary ---
  const summary = summarize(text);

  return {
    summary,
    keyPoints,
    metadata: {
      id: crypto.randomUUID(),
      length: text.length,
      moneyDetected: moneyMatches || [],
      urgentTerms: foundUrgent,
      emails: emails || [],
      urls: urls || [],
      wallets: solMatches || [],
    },
  };
}

/**
 * Creates a simple summary from the first sentence or first 120 chars.
 */
function summarize(text: string): string {
  const sentences = text.split(".");
  const first = sentences[0]?.trim();

  if (first && first.length > 0) {
    return first + ".";
  }

  return text.slice(0, 120) + "...";
}
