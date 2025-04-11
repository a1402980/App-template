import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useThemeColors } from '../utils/theme';
import { Ionicons } from '@expo/vector-icons';
import BrandLogo from '../components/BrandLogo';

const HomeScreen = () => {
  const colors = useThemeColors();

  return (
    <ScrollView 
      style={[styles.container, { backgroundColor: colors.background }]}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={[styles.logoContainer, { backgroundColor: colors.card }]}>
        <BrandLogo size="large" />
      </View>

      <View style={[styles.card, { backgroundColor: colors.card }]}>
        <View style={styles.cardHeader}>
          <Ionicons name="home" size={24} color={colors.primary} />
          <Text style={[styles.cardTitle, { color: colors.text }]}>Welcome Home</Text>
        </View>
        <Text style={[styles.cardText, { color: colors.text }]}>
          This is a sample home screen to demonstrate the theme system. 
          The colors should change based on the dark mode setting.
        </Text>
      </View>

      <View style={[styles.card, { backgroundColor: colors.card }]}>
        <View style={styles.cardHeader}>
          <Ionicons name="information-circle" size={24} color={colors.primary} />
          <Text style={[styles.cardTitle, { color: colors.text }]}>Theme Information</Text>
        </View>
        <Text style={[styles.cardText, { color: colors.text }]}>
          Go to the Settings screen and toggle Dark Mode to see the theme change throughout the app.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
  },
  logoContainer: {
    borderRadius: 12,
    marginBottom: 16,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  card: {
    borderRadius: 12,
    marginBottom: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 12,
  },
  cardText: {
    fontSize: 16,
    lineHeight: 24,
  },
});

export default HomeScreen; 