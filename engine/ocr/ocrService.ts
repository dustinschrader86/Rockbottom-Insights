// engine/ocr/ocrService.ts

import * as FileSystem from "expo-file-system";
import { manipulateAsync, SaveFormat } from "expo-image-manipulator";
import axios from "axios";

export async function extractTextFromImage(imageUri: string): Promise<string | null> {
  try {
    // Normalize image (resize + compress) for faster OCR
    const processed = await manipulateAsync(
      imageUri,
      [{ resize: { width: 1080 } }],
      { compress: 0.9, format: SaveFormat.PNG }
    );

    const base64 = await FileSystem.readAsStringAsync(processed.uri, {
      encoding: FileSystem.EncodingType.Base64,
    });

    // Send to OCR endpoint (local or cloud)
    const response = await axios.post("http://localhost:3000/ocr", {
      image: base64,
    });

    if (!response?.data?.text) return null;

    return response.data.text;
  } catch (error) {
    console.error("OCR failed:", error);
    return null;
  }
}
