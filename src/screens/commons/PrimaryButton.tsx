import React from 'react';
import { Pressable, StyleSheet, Text, ViewStyle } from 'react-native';

import { colors, spacing } from '../../helper/uiTokens';

type PrimaryButtonProps = {
  label: string;
  onPress: () => void;
  tone?: 'primary' | 'secondary';
  style?: ViewStyle;
};

export default function PrimaryButton({
  label,
  onPress,
  tone = 'primary',
  style,
}: PrimaryButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        tone === 'secondary' && styles.buttonSecondary,
        pressed && styles.buttonPressed,
        style,
      ]}>
      <Text
        style={[
          styles.label,
          tone === 'secondary' && styles.labelSecondary,
        ]}>
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    minHeight: 48,
    minWidth: 132,
    paddingHorizontal: spacing.md,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  buttonSecondary: {
    backgroundColor: colors.surface,
    borderColor: colors.primary,
  },
  buttonPressed: {
    opacity: 0.88,
  },
  label: {
    color: colors.surface,
    fontSize: 15,
    fontWeight: '700',
  },
  labelSecondary: {
    color: colors.primary,
  },
});
