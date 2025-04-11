import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useThemeColors } from '../utils/theme';
import { Ionicons } from '@expo/vector-icons';

const ProfileScreen = () => {
  const colors = useThemeColors();

  const userProfile = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Customer',
    joinDate: 'January 2023',
    avatar: 'https://via.placeholder.com/150',
  };

  const menuItems = [
    { id: '1', icon: 'person-outline', label: 'Personal Information' },
    { id: '2', icon: 'card-outline', label: 'Payment Methods' },
    { id: '3', icon: 'location-outline', label: 'Shipping Addresses' },
    { id: '4', icon: 'heart-outline', label: 'Favorites' },
    { id: '5', icon: 'time-outline', label: 'Order History' },
  ];

  return (
    <ScrollView 
      style={[styles.container, { backgroundColor: colors.background }]}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={[styles.profileHeader, { backgroundColor: colors.card }]}>
        <Image 
          source={{ uri: userProfile.avatar }} 
          style={styles.avatar} 
        />
        <Text style={[styles.name, { color: colors.text }]}>{userProfile.name}</Text>
        <Text style={[styles.email, { color: colors.text }]}>{userProfile.email}</Text>
        <Text style={[styles.role, { color: colors.primary }]}>{userProfile.role}</Text>
        <Text style={[styles.joinDate, { color: colors.text }]}>Member since {userProfile.joinDate}</Text>
      </View>

      <View style={[styles.menuSection, { backgroundColor: colors.card }]}>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>Account</Text>
        
        {menuItems.map((item) => (
          <TouchableOpacity 
            key={item.id}
            style={[styles.menuItem, { borderBottomColor: colors.border }]}
          >
            <View style={styles.menuItemContent}>
              <Ionicons name={item.icon as any} size={22} color={colors.primary} style={styles.menuIcon} />
              <Text style={[styles.menuLabel, { color: colors.text }]}>{item.label}</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color={colors.text} />
          </TouchableOpacity>
        ))}
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
  profileHeader: {
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
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  email: {
    fontSize: 16,
    marginBottom: 8,
  },
  role: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
  },
  joinDate: {
    fontSize: 14,
    opacity: 0.7,
  },
  menuSection: {
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    padding: 16,
    paddingBottom: 8,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
  },
  menuItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuIcon: {
    marginRight: 12,
  },
  menuLabel: {
    fontSize: 16,
  },
});

export default ProfileScreen; 