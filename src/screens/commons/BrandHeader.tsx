import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import logo from '../../assets/LogoDiario.png';
import useResponsive from '../../helper/useResponsive';
import { colors, spacing } from '../../helper/uiTokens';

type BrandHeaderProps = {
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
};

export default function BrandHeader({
  title,
  subtitle,
  align = 'left',
}: BrandHeaderProps) {
  const { isTablet } = useResponsive();

  return (
    <View
      style={[
        styles.container,
        isTablet && styles.containerTablet,
        align === 'center' && styles.center,
      ]}>
      <Image source={logo} style={[styles.logo, isTablet && styles.logoTablet]} />
      <View style={styles.copy}>
        <Text style={[styles.title, align === 'center' && styles.titleCenter]}>
          {title}
        </Text>
        {subtitle ? (
          <Text
            style={[
              styles.subtitle,
              align === 'center' && styles.subtitleCenter,
            ]}>
            {subtitle}
          </Text>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.lg,
  },
  containerTablet: {
    marginBottom: spacing.xl,
  },
  center: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  logo: {
    width: 88,
    height: 118,
    resizeMode: 'contain',
    marginRight: spacing.md,
  },
  logoTablet: {
    width: 108,
    height: 140,
  },
  copy: {
    flex: 1,
  },
  title: {
    color: colors.primary,
    fontSize: 28,
    lineHeight: 34,
    fontWeight: '800',
  },
  titleCenter: {
    textAlign: 'center',
  },
  subtitle: {
    marginTop: spacing.xs,
    color: colors.textMuted,
    fontSize: 15,
    lineHeight: 22,
  },
  subtitleCenter: {
    textAlign: 'center',
  },
});
