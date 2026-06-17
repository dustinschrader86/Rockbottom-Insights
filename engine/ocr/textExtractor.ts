import { OCRResult } from "../capture/captureTypes";

/**
 * Extracts text from an image URI.
 * This is the OCR engine used by the capture pipeline.
 *
 * NOTE:
 * This is a placeholder implementation that simulates OCR.
 * You can replace this with a real OCR library later.
 */
export async function extractTextFromImage(uri: string): Promise<OCRResult> {
  try {
    console.log("Running OCR on:", uri);

    // Placeholder OCR logic
    // Replace with real OCR (ML Kit, Tesseract, VisionCamera, etc.)
    const fakeExtractedText = `
      Sample OCR text from image:
      (Replace this with real OCR output)
    `;

    return {
      text: fakeExtractedText.trim(),
      confidence: 0.85,
      rawBlocks: [],
    };
  } catch (error) {
    console.error("OCR failed:", error);

    return {
      text: "",
      confidence: 0,
      rawBlocks: [],
    };
  }
}
