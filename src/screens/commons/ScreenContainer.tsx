import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import useResponsive from '../../helper/useResponsive';
import { colors, spacing } from '../../helper/uiTokens';

type ScreenContainerProps = {
  children: React.ReactNode;
  scrollable?: boolean;
};

export default function ScreenContainer({
  children,
  scrollable = false,
}: ScreenContainerProps) {
  const { contentWidth } = useResponsive();

  const content = (
    <View style={[styles.content, { maxWidth: contentWidth }]}>{children}</View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      {scrollable ? (
        <ScrollView contentContainerStyle={styles.scrollContent}>
          {content}
        </ScrollView>
      ) : (
        <View style={styles.fill}>{content}</View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  fill: {
    flex: 1,
    alignItems: 'center',
  },
  scrollContent: {
    alignItems: 'center',
    paddingBottom: spacing.xl,
  },
  content: {
    width: '100%',
    flexGrow: 1,
    paddingHorizontal: spacing.md,
    paddingTop: spacing.md,
  },
});
