import React from 'react';
import { StyleSheet, Text } from 'react-native';

import { colors, spacing } from '../../helper/uiTokens';

export default function FooterNote() {
  return (
    <Text style={styles.text}>
      Copyright {'\u00A9'} Bernard Braun da Silva
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    marginTop: spacing.lg,
    color: colors.textMuted,
    fontSize: 12,
    textAlign: 'center',
  },
});
