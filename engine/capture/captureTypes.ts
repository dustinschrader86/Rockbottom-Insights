export interface RawCapture {
  uri: string;            // original image URI
  width?: number;         // optional metadata
  height?: number;        // optional metadata
  timestamp: number;      // when the capture happened
}

export interface PreppedImage {
  uri: string;            // processed image URI
  width: number;          // resized width
  height: number;         // resized height
}

export interface OCRResult {
  text: string;           // extracted text
  confidence?: number;    // optional confidence score
  rawBlocks?: any[];      // optional raw OCR blocks
}

export interface InsightResult {
  summary: string;        // high-level summary
  keyPoints: string[];    // extracted insights
  metadata?: any;         // optional extra data
}

export interface CapturePipelineResult {
  raw: RawCapture;        // original capture
  prepped: PreppedImage;  // cleaned image
  ocr: OCRResult;         // OCR output
  insight: InsightResult; // final intelligence
}

