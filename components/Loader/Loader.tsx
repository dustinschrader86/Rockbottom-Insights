import React from "react";
import { View, ActivityIndicator } from "react-native";

export const Loader = () => {
  return (
    <View
      style={{
        paddingVertical: 20,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ActivityIndicator size="large" color="#60A5FA" />
    </View>
  );
};
