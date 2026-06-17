import { RawCapture, PreppedImage, OCRResult, InsightResult, CapturePipelineResult } from "./captureTypes";
import { prepImageForOCR } from "./imagePrep";
import { extractTextFromImage } from "../ocr/textExtractor";
import { generateInsights } from "../insight/insightEngine";

/**
 * Runs the full capture → prep → OCR → insight pipeline.
 */
export async function runCapturePipeline(uri: string): Promise<CapturePipelineResult> {
  // 1. Raw capture object
  const raw: RawCapture = {
    uri,
    timestamp: Date.now(),
  };

  // 2. Prep the image for OCR
  const prepped: PreppedImage = await prepImageForOCR(raw.uri);

  // 3. Run OCR on the prepped image
  const ocr: OCRResult = await extractTextFromImage(prepped.uri);

  // 4. Generate insights from OCR text
  const insight: InsightResult = await generateInsights(ocr.text);

  // 5. Return full structured pipeline result
  return {
    raw,
    prepped,
    ocr,
    insight,
  };
}
