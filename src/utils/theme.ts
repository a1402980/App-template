import { DefaultTheme } from '@react-navigation/native';
import { useTheme } from '../contexts/ThemeContext';

export interface ThemeColors {
  primary: string;
  secondary: string;
  background: string;
  card: string;
  text: string;
  border: string;
  notification: string;
}

export interface BrandConfig {
  name: string;
  logo: string;
  colors: ThemeColors & {
    accent: string;
  };
}

// Default brand configuration
let currentBrand: BrandConfig = {
  name: 'App Template',
  logo: '../assets/images/logo.svg',
  colors: {
    primary: '#007AFF',
    secondary: '#5856D6',
    accent: '#FF2D55',
    background: '#F2F2F7',
    card: '#FFFFFF',
    text: '#000000',
    border: '#C6C6C8',
    notification: '#FF3B30',
  },
};

export const setBrandConfig = (config: Partial<BrandConfig>) => {
  currentBrand = {
    ...currentBrand,
    ...config,
    colors: {
      ...currentBrand.colors,
      ...(config.colors || {}),
    },
  };
};

const lightColors: ThemeColors = {
  primary: '#007AFF',
  secondary: '#5856D6',
  background: '#F2F2F7',
  card: '#FFFFFF',
  text: '#000000',
  border: '#C6C6C8',
  notification: '#FF3B30',
};

const darkColors: ThemeColors = {
  primary: '#0A84FF',
  secondary: '#5E5CE6',
  background: '#000000',
  card: '#1C1C1E',
  text: '#FFFFFF',
  border: '#38383A',
  notification: '#FF453A',
};

export const useThemeColors = (): ThemeColors => {
  const { isDarkMode } = useTheme();
  const baseColors = isDarkMode ? darkColors : lightColors;

  return {
    ...baseColors,
    primary: currentBrand.colors.primary || baseColors.primary,
    secondary: currentBrand.colors.secondary || baseColors.secondary,
  };
};

// Export navigation theme
export const useNavigationTheme = () => {
  const { isDarkMode } = useTheme();
  const colors = isDarkMode ? darkColors : lightColors;
  
  return {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: currentBrand.colors.primary || colors.primary,
      background: colors.background,
      card: colors.card,
      text: colors.text,
      border: colors.border,
      notification: colors.notification,
    },
  };
};

// Export brand config getter
export const getBrandConfig = () => {
  return currentBrand;
}; 