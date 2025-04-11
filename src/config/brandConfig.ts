import { BrandConfig } from "../utils/theme";

// Example client brand configuration
export const clientBrand: BrandConfig = {
  name: "TechCorp Solutions",
  // Use SVG logo - using a direct path instead of require
  logo: "../../assets/images/logo.svg",
  colors: {
    light: {
      primary: "#00ff44",
      secondary: "#5856D6",
      background: "#F2F2F7",
      card: "#FFFFFF",
      text: "#000000",
      border: "#C6C6C8",
      notification: "#FF3B30",
    },
    dark: {
      primary: "#ff0aad",
      secondary: "#5E5CE6",
      background: "#000000",
      card: "#1C1C1E",
      text: "#FFFFFF",
      border: "#38383A",
      notification: "#FF453A",
    },
  },
};
