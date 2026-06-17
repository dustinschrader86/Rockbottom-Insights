import React from "react";
import { ScrollView, Text, View } from "react-native";
import { InsightItem } from "../components/InsightItem/InsightItem";
import { Card } from "../components/Card/Card";

export const ResultsScreen = ({ route }: any) => {
  const { text, insights } = route.params;

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
        Insights
      </Text>

      <Card>
        <Text
          style={{
            color: "#94A3B8",
            fontSize: 14,
            marginBottom: 6,
            fontWeight: "600",
          }}
        >
          Extracted Text
        </Text>

        <Text
          style={{
            color: "#E2E8F0",
            fontSize: 14,
            lineHeight: 20,
          }}
        >
          {text}
        </Text>
      </Card>

      <View style={{ marginTop: 20 }}>
        {insights.map((insight: any) => (
          <InsightItem
            key={insight.id}
            type={insight.type}
            title={insight.title}
            message={insight.message}
            confidence={insight.confidence}
          />
        ))}
      </View>
    </ScrollView>
  );
};
