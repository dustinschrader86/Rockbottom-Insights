import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";

type ButtonProps = {
  label: string;
  onPress: () => void;
  disabled?: boolean;
};

export const Button: React.FC<ButtonProps> = ({ label, onPress, disabled }) => {
  return (
    <TouchableOpacity
      style={[styles.button, disabled && styles.buttonDisabled]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.8}
    >
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};
