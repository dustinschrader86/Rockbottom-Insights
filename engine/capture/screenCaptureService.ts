import * as FileSystem from "expo-file-system";
import * as ScreenCapture from "expo-screen-capture";

export async function captureScreen(): Promise<string | null> {
  try {
    const screenshot = await ScreenCapture.captureScreenAsync({
      format: "png",
      quality: 1,
    });

    if (!screenshot?.uri) return null;

    const fileName = `capture_${Date.now()}.png`;
    const newPath = `${FileSystem.cacheDirectory}${fileName}`;

    await FileSystem.moveAsync({
      from: screenshot.uri,
      to: newPath,
    });

    return newPath;
  } catch (error) {
    console.error("Screen capture failed:", error);
    return null;
  }
}
