import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <View style={styles.placeholderContainer}>
        <Text style={styles.placeholderText}>User Profile</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2ecc71',
    padding: 15,
    textAlign: 'center',
  },
  placeholderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    fontSize: 18,
    color: '#95a5a6',
  },
});
