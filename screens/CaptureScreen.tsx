import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { Button } from "../components/Button/Button";
import { Loader } from "../components/Loader/Loader";
import { ErrorMessage } from "../components/ErrorMessage/ErrorMessage";

import { captureScreen } from "../engine/capture/screenCaptureService";
import { extractTextFromImage } from "../engine/ocr/ocrService";
import { generateInsights } from "../engine/insight/insightEngine";

export const CaptureScreen = ({ navigation }: any) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleCapture = async () => {
    setError("");
    setLoading(true);

    try {
      const imageUri = await captureScreen();
      if (!imageUri) {
        setError("Failed to capture screen.");
        setLoading(false);
        return;
      }

      const text = await extractTextFromImage(imageUri);
      if (!text) {
        setError("OCR failed to extract text.");
        setLoading(false);
        return;
      }

      const insights = generateInsights(text);

      navigation.navigate("ResultsScreen", {
        text,
        insights,
      });
    } catch (err) {
      setError("Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        padding: 20,
        backgroundColor: "#0F172A",
      }}
    >
      <Text
        style={{
          color: "#F1F5F9",
          fontSize: 22,
          fontWeight: "700",
          marginBottom: 20,
        }}
      >
        Rockbottom Insight
      </Text>

      <Text
        style={{
          color: "#94A3B8",
          fontSize: 16,
          marginBottom: 30,
        }}
      >
        Capture your screen and let the engine analyze it.
      </Text>

      {error ? <ErrorMessage message={error} /> : null}

      {loading ? (
        <Loader />
      ) : (
        <Button label="Capture Screen" onPress={handleCapture} />
      )}
    </ScrollView>
  );
};
