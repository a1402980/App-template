import { DefaultTheme, Theme } from "@react-navigation/native";
import { useTheme } from "../contexts/ThemeContext";

export interface ThemeColors {
  primary: string;
  secondary: string;
  background: string;
  card: string;
  text: string;
  border: string;
  notification: string;
}

export type ThemeColorConfig = {
  light: ThemeColors;
  dark: ThemeColors;
};

export interface BrandConfig {
  name: string;
  logo: string;
  colors: ThemeColorConfig;
}

const defaultColors: ThemeColorConfig = {
  light: {
    primary: "#007AFF",
    secondary: "#5856D6",
    background: "#F2F2F7",
    card: "#FFFFFF",
    text: "#000000",
    border: "#C6C6C8",
    notification: "#FF3B30",
  },
  dark: {
    primary: "#0A84FF",
    secondary: "#5E5CE6",
    background: "#000000",
    card: "#1C1C1E",
    text: "#FFFFFF",
    border: "#38383A",
    notification: "#FF453A",
  },
};

// Default brand configuration
let currentBrand: BrandConfig = {
  name: "App Template",
  logo: "../assets/images/logo.svg",
  colors: defaultColors,
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

export const useThemeColors = (): ThemeColors => {
  const { isDarkMode } = useTheme();
  const baseColors = isDarkMode
    ? currentBrand.colors.dark
    : currentBrand.colors.light;

  return baseColors;
};

// Export navigation theme
export const useNavigationTheme = (): Theme => {
  const { isDarkMode } = useTheme();

  const colors = isDarkMode
    ? currentBrand.colors.dark
    : currentBrand.colors.light;

  const navigationTheme = {
    ...DefaultTheme,
    dark: isDarkMode,
    colors: {
      primary: colors.primary,
      background: colors.background,
      card: colors.card,
      text: colors.text,
      border: colors.border,
      notification: colors.notification,
    },
  };

  return navigationTheme;
};

// Export brand config getter
export const getBrandConfig = () => {
  return currentBrand;
};
