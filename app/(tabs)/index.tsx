import React, { useState, useCallback } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  ScrollView, 
  SafeAreaView,
  RefreshControl,
  Alert
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const [userPoints, setUserPoints] = useState(0);
  const [refreshing, setRefreshing] = useState(false);
  const navigation = useNavigation();

  // Pull to refresh implementation
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    // Simulate data fetch
    setTimeout(() => {
      setUserPoints(prev => prev + 10);
      setRefreshing(false);
    }, 1000);
  }, []);

  // Render methods
  const QuickActionButton = ({ icon, title, onPress }) => (
    <TouchableOpacity style={styles.quickActionButton} onPress={onPress}>
      <Ionicons name={icon} size={30} color="#2ecc71" />
      <Text style={styles.quickActionText}>{title}</Text>
    </TouchableOpacity>
  );

  // Card Component
  const HomeCard = ({ icon, title, description, onPress }) => (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.cardIconContainer}>
        <Ionicons name={icon} size={30} color="#2ecc71" />
      </View>
      <View style={styles.cardTextContainer}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardDescription}>{description}</Text>
      </View>
      <Ionicons name="chevron-forward" size={24} color="#95a5a6" />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView 
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={['#2ecc71']}
          />
        }
      >
        {/* Header Section */}
        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}>Carbon Grove</Text>
          <View style={styles.headerPointsContainer}>
            <Text style={styles.headerPointsText}>{userPoints} 🌳</Text>
          </View>
        </View>

        {/* Cards Section */}
        <View style={styles.cardsContainer}>
          <HomeCard 
            icon="list-outline"
            title="Orders"
            description="View your recent orders"
            onPress={() => navigation.navigate('orders')}
          />
          <HomeCard 
            icon="leaf-outline"
            title="Garden"
            description="Manage your green space"
            onPress={() => navigation.navigate('garden')}
          />
          <HomeCard 
            icon="person-outline"
            title="Profile"
            description="Edit your profile"
            onPress={() => navigation.navigate('profile')}
          />
        </View>

        {/* Quick Actions */}
        <View style={styles.quickActionsContainer}>
          <QuickActionButton 
            icon="document-text" 
            title="Upload Bill" 
            onPress={() => Alert.alert('Upload Bill', 'Feature coming soon!')} 
          />
          <QuickActionButton 
            icon="recycle" 
            title="Waste Pickup" 
            onPress={() => Alert.alert('Waste Pickup', 'Feature coming soon!')} 
          />
          <QuickActionButton 
            icon="wallet" 
            title="Wallet" 
            onPress={() => Alert.alert('Wallet', 'Feature coming soon!')} 
          />
        </View>

        {/* Community Posts Placeholder */}
        <View style={styles.communityContainer}>
          <Text style={styles.sectionTitle}>Community Highlights</Text>
          <View style={styles.communityPostContainer}>
            <Text style={styles.communityPostContent}>
              No community posts available yet.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: 'white',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2ecc71',
  },
  headerPointsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e8f5e9',
    padding: 8,
    borderRadius: 20,
  },
  headerPointsText: {
    marginRight: 10,
    fontWeight: 'bold',
  },
  cardsContainer: {
    padding: 15,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardIconContainer: {
    backgroundColor: '#e8f5e9',
    borderRadius: 10,
    padding: 10,
    marginRight: 15,
  },
  cardTextContainer: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 14,
    color: '#7f8c8d',
  },
  quickActionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    paddingHorizontal: 15,
  },
  quickActionButton: {
    width: 80,
    height: 80,
    backgroundColor: 'white',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  quickActionText: {
    marginTop: 5,
    fontSize: 10,
    color: '#2ecc71',
  },
  communityContainer: {
    marginTop: 20,
    paddingHorizontal: 15,
  },
  communityPostContainer: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 15,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  communityPostContent: {
    color: '#666',
    textAlign: 'center',
  },
});

export default HomeScreen;
