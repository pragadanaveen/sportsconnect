import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TeamsScreen = () => {
  const navigation = useNavigation(); // Initialize the navigation hook
  const [teams] = useState([
    { id: '1', name: 'Team Alpha', status: 'Won by 3 wickets', image: require('../assets/profile1.png') },
    { id: '2', name: 'Team Beta', status: 'Lost by 10 runs', image: require('../assets/profile1.png') },
    { id: '3', name: 'Team Gamma', status: 'Won by 5 wickets', image: require('../assets/profile1.png') },
    { id: '4', name: 'Team Delta', status: 'Lost by 3 wickets', image: require('../assets/profile1.png') },
  ]);

  // Function to handle navigation on item click
  const handleItemPress = (teamId) => {
    navigation.navigate('ChallengesCardPage', { teamId });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={teams}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleItemPress(item.id)} style={styles.teamItem}>
            <Image source={item.image} style={styles.teamImage} />
            <View style={styles.teamDetails}>
              <Text style={styles.teamName}>{item.name}</Text>
              <Text style={styles.teamStatus}>{item.status}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  teamItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 10,
  },
  teamImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  teamDetails: {
    flex: 1,
  },
  teamName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  teamStatus: {
    fontSize: 14,
    color: 'gray',
  },
});

export default TeamsScreen;
