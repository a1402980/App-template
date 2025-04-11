import { BrandConfig } from '../utils/theme';

// Example client brand configuration
export const clientBrand: BrandConfig = {
  name: 'TechCorp Solutions',
  // Use SVG logo - using a direct path instead of require
  logo: '../../assets/images/logo.svg',
  colors: {
    primary: '#0066CC',      // Primary brand color
    secondary: '#FF9900',    // Secondary brand color
    accent: '#00CC99',       // Accent color for highlights
    background: '#F8F9FA',   // Light background
    card: '#FFFFFF',         // Card background
    text: '#2C3E50',         // Main text color
    border: '#E9ECEF',       // Border color
    notification: '#DC3545', // Notification/error color
  },
}; 