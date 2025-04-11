import React from 'react';
import { Image, StyleSheet, View, Text, ImageSourcePropType } from 'react-native';
import { SvgUri } from 'react-native-svg';
import { getBrandConfig } from '../utils/theme';
import { Asset } from 'expo-asset';

interface BrandLogoProps {
  size?: 'small' | 'medium' | 'large';
  showText?: boolean;
  style?: any;
}

type LogoSource = string | ImageSourcePropType | { uri: string };

const BrandLogo: React.FC<BrandLogoProps> = ({ 
  size = 'medium', 
  showText = false,
  style 
}) => {
  const brand = getBrandConfig();
  
  const getSize = () => {
    switch (size) {
      case 'small':
        return { width: 100, height: 30 };
      case 'large':
        return { width: 200, height: 60 };
      case 'medium':
      default:
        return { width: 150, height: 45 };
    }
  };

  const dimensions = getSize();
  const logo = brand.logo as LogoSource;
  
  // Debug logging
  console.log('Logo source:', logo);
  
  // Handle string paths (local files)
  if (typeof logo === 'string' && !logo.startsWith('http')) {
    // For local SVG files
    if (logo.toLowerCase().endsWith('.svg')) {
      return (
        <View style={[styles.container, style]}>
          <SvgUri
            width={dimensions.width}
            height={dimensions.height}
            uri={Asset.fromModule(require('../../assets/images/logo.svg')).uri}
            onError={(error) => console.error('SVG loading error:', error)}
          />
          {showText && (
            <Text style={[styles.text, { color: brand.colors.text }]}>
              {brand.name}
            </Text>
          )}
        </View>
      );
    }
    
    // For other local image files
    return (
      <View style={[styles.container, style]}>
        <Image
          source={require('../../assets/images/logo.svg')}
          style={[styles.logo, dimensions]}
          resizeMode="contain"
          onError={(error) => console.error('Image loading error:', error.nativeEvent)}
        />
        {showText && (
          <Text style={[styles.text, { color: brand.colors.text }]}>
            {brand.name}
          </Text>
        )}
      </View>
    );
  }

  // Handle remote SVG files
  const isSvg = typeof logo === 'object' && 'uri' in logo && logo.uri?.toLowerCase().endsWith('.svg');
  const svgUri = typeof logo === 'string' ? logo : (logo as { uri: string }).uri;

  if (!logo) {
    console.warn('No logo provided to BrandLogo component');
    return null;
  }

  return (
    <View style={[styles.container, style]}>
      {isSvg && svgUri ? (
        <SvgUri
          width={dimensions.width}
          height={dimensions.height}
          uri={svgUri}
          onError={(error) => console.error('SVG loading error:', error)}
        />
      ) : (
        <Image
          source={typeof logo === 'string' ? { uri: logo } : logo}
          style={[styles.logo, dimensions]}
          resizeMode="contain"
          onError={(error) => console.error('Image loading error:', error.nativeEvent)}
        />
      )}
      {showText && (
        <Text style={[styles.text, { color: brand.colors.text }]}>
          {brand.name}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
});

export default BrandLogo; 