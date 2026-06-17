import React from "react";
import { View, ViewStyle } from "react-native";
import { styles } from "./styles";

type CardProps = {
  children: React.ReactNode;
  style?: ViewStyle | ViewStyle[];
};

export const Card: React.FC<CardProps> = ({ children, style }) => {
  return <View style={[styles.card, style]}>{children}</View>;
};
