import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import { useThemeColors } from '../utils/theme';
import { Ionicons } from '@expo/vector-icons';

type ProductsScreenNavigationProp = NativeStackNavigationProp<RootStackParamList>;

const ProductsScreen = () => {
  const navigation = useNavigation<ProductsScreenNavigationProp>();
  const colors = useThemeColors();

  const products = [
    {
      id: '1',
      name: 'Product A',
      price: '$99.99',
      description: 'High-quality product with amazing features.',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: '2',
      name: 'Product B',
      price: '$149.99',
      description: 'Premium product with advanced capabilities.',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: '3',
      name: 'Product C',
      price: '$199.99',
      description: 'Professional-grade product for experts.',
      image: 'https://via.placeholder.com/150',
    },
  ];

  return (
    <ScrollView 
      style={[styles.container, { backgroundColor: colors.background }]}
      contentContainerStyle={styles.contentContainer}
    >
      <Text style={[styles.sectionTitle, { color: colors.text }]}>Our Products</Text>
      
      {products.map((product) => (
        <TouchableOpacity 
          key={product.id}
          style={[styles.productCard, { backgroundColor: colors.card }]}
          onPress={() => navigation.navigate('ProductDetail', { id: product.id })}
        >
          <Image 
            source={{ uri: product.image }} 
            style={styles.productImage} 
          />
          <View style={styles.productInfo}>
            <Text style={[styles.productName, { color: colors.text }]}>{product.name}</Text>
            <Text style={[styles.productPrice, { color: colors.primary }]}>{product.price}</Text>
            <Text style={[styles.productDescription, { color: colors.text }]}>{product.description}</Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color={colors.text} style={styles.chevron} />
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
  productCard: {
    flexDirection: 'row',
    borderRadius: 12,
    marginBottom: 16,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  productInfo: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'center',
  },
  productName: {
    fontSize: 18,
    fontWeight: '600',
  },
  productPrice: {
    fontSize: 16,
    fontWeight: '500',
    marginTop: 4,
  },
  productDescription: {
    fontSize: 14,
    opacity: 0.7,
    marginTop: 4,
  },
  chevron: {
    alignSelf: 'center',
    marginLeft: 12,
  },
});

export default ProductsScreen; 