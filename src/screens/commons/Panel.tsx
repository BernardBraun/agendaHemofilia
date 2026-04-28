import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';

import { colors, shadows, spacing } from '../../helper/uiTokens';

type PanelProps = ViewProps & {
  padded?: boolean;
};

export default function Panel({
  style,
  children,
  padded = true,
  ...rest
}: PanelProps) {
  return (
    <View
      style={[styles.panel, padded && styles.padded, style]}
      {...rest}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  panel: {
    backgroundColor: colors.surface,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: colors.border,
    ...shadows.card,
  },
  padded: {
    padding: spacing.lg,
  },
});
