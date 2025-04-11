import { useMemo } from 'react';
import { getBrandConfig } from './theme';

export const useBrandColors = () => {
  const brand = getBrandConfig();
  
  const colors = useMemo(() => ({
    primary: brand.colors.primary,
    secondary: brand.colors.secondary,
    accent: brand.colors.accent,
    background: brand.colors.background,
    card: brand.colors.card,
    text: brand.colors.text,
    border: brand.colors.border,
    notification: brand.colors.notification,
  }), [brand]);
  
  return colors;
};

export default useBrandColors; 