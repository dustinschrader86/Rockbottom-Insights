import React from "react";
import { View, Text } from "react-native";
import { Card } from "../Card/Card";

type InsightItemProps = {
  type: "warning" | "info" | "action" | "summary";
  title: string;
  message: string;
  confidence: number;
};

export const InsightItem: React.FC<InsightItemProps> = ({
  type,
  title,
  message,
  confidence,
}) => {
  const color = {
    warning: "#F87171",
    info: "#60A5FA",
    action: "#34D399",
    summary: "#A78BFA",
  }[type];

  return (
    <Card style={{ borderLeftWidth: 4, borderLeftColor: color }}>
      <Text
        style={{
          color,
          fontSize: 16,
          fontWeight: "700",
          marginBottom: 6,
        }}
      >
        {title}
      </Text>

      <Text
        style={{
          color: "#E5E7EB",
          fontSize: 14,
          marginBottom: 8,
        }}
      >
        {message}
      </Text>

      <Text
        style={{
          color: "#9CA3AF",
          fontSize: 12,
        }}
      >
        Confidence: {(confidence * 100).toFixed(1)}%
      </Text>
    </Card>
  );
};
