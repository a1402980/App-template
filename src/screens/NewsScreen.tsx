import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import { useThemeColors } from '../utils/theme';
import { Ionicons } from '@expo/vector-icons';

type NewsScreenNavigationProp = NativeStackNavigationProp<RootStackParamList>;

const NewsScreen = () => {
  const navigation = useNavigation<NewsScreenNavigationProp>();
  const colors = useThemeColors();

  const newsItems = [
    {
      id: '1',
      title: 'New Product Launch',
      date: 'June 15, 2023',
      summary: 'We are excited to announce the launch of our new product line...',
    },
    {
      id: '2',
      title: 'Company Milestone',
      date: 'June 10, 2023',
      summary: 'Our company has reached an important milestone in its growth...',
    },
    {
      id: '3',
      title: 'Industry Recognition',
      date: 'June 5, 2023',
      summary: 'We are proud to announce that we have received industry recognition...',
    },
  ];

  return (
    <ScrollView 
      style={[styles.container, { backgroundColor: colors.background }]}
      contentContainerStyle={styles.contentContainer}
    >
      <Text style={[styles.sectionTitle, { color: colors.text }]}>Latest News</Text>
      
      {newsItems.map((item) => (
        <TouchableOpacity 
          key={item.id}
          style={[styles.newsCard, { backgroundColor: colors.card }]}
          onPress={() => navigation.navigate('NewsDetail', { newsId: item.id })}
        >
          <View style={styles.newsHeader}>
            <Text style={[styles.newsTitle, { color: colors.text }]}>{item.title}</Text>
            <Text style={[styles.newsDate, { color: colors.text }]}>{item.date}</Text>
          </View>
          <Text style={[styles.newsSummary, { color: colors.text }]}>{item.summary}</Text>
          <View style={styles.readMore}>
            <Text style={[styles.readMoreText, { color: colors.primary }]}>Read More</Text>
            <Ionicons name="arrow-forward" size={16} color={colors.primary} />
          </View>
        </TouchableOpacity>
      ))}
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
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  newsCard: {
    borderRadius: 12,
    marginBottom: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  newsHeader: {
    marginBottom: 8,
  },
  newsTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  newsDate: {
    fontSize: 14,
    opacity: 0.7,
    marginTop: 4,
  },
  newsSummary: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 12,
  },
  readMore: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  readMoreText: {
    fontSize: 16,
    fontWeight: '500',
    marginRight: 4,
  },
});

export default NewsScreen; 