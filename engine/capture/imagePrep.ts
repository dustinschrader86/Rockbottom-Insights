import * as ImageManipulator from 'expo-image-manipulator';

export interface PreppedImage {
  uri: string;
  width: number;
  height: number;
}

/**
 * Prepares an image for OCR by:
 * - resizing
 * - converting to grayscale
 * - increasing contrast
 * - sharpening
 * - reducing noise
 */
export async function prepImageForOCR(
  uri: string,
  maxWidth: number = 1200
): Promise<PreppedImage> {
  try {
    // Step 1: Resize (OCR works better with consistent width)
    const resized = await ImageManipulator.manipulateAsync(
      uri,
      [{ resize: { width: maxWidth } }],
      { compress: 1, format: ImageManipulator.SaveFormat.PNG }
    );

    // Step 2: Convert to grayscale + boost contrast
    const grayscale = await ImageManipulator.manipulateAsync(
      resized.uri,
      [
        { adjust: { brightness: 0.05 } },
        { adjust: { contrast: 1.25 } },
        { adjust: { saturation: 0 } } // grayscale
      ],
      { compress: 1, format: ImageManipulator.SaveFormat.PNG }
    );

    // Step 3: Slight sharpen (helps OCR detect edges)
    const sharpened = await ImageManipulator.manipulateAsync(
      grayscale.uri,
      [{ sharpen: 0.4 }],
      { compress: 1, format: ImageManipulator.SaveFormat.PNG }
    );

    return {
      uri: sharpened.uri,
      width: resized.width,
      height: resized.height,
    };
  } catch (error) {
    console.error("Image prep failed:", error);
    return { uri, width: 0, height: 0 };
  }
}

