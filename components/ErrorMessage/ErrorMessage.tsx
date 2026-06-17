import React from "react";
import { View, Text } from "react-native";

type ErrorMessageProps = {
  message: string;
};

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  if (!message) return null;

  return (
    <View
      style={{
        backgroundColor: "#B91C1C",
        padding: 12,
        borderRadius: 8,
        marginVertical: 8,
      }}
    >
      <Text
        style={{
          color: "#FEE2E2",
          fontSize: 14,
          fontWeight: "600",
        }}
      >
        {message}
      </Text>
    </View>
  );
};
