import { useWindowDimensions } from 'react-native';

export default function useResponsive() {
  const { width } = useWindowDimensions();

  const isTablet = width >= 768;
  const isDesktop = width >= 1120;
  const contentWidth = Math.min(width - 24, isDesktop ? 1160 : isTablet ? 920 : 560);

  return {
    width,
    isTablet,
    isDesktop,
    contentWidth,
  };
}
