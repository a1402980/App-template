import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../types/navigation';
import useBrandColors from '../utils/useBrandColors';

type NewsDetailScreenRouteProp = RouteProp<RootStackParamList, 'NewsDetail'>;

const NewsDetailScreen = () => {
  const route = useRoute<NewsDetailScreenRouteProp>();
  const colors = useBrandColors();
  const { id } = route.params;

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.text, { color: colors.text }]}>News Detail {id}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
  },
});

export default NewsDetailScreen; 