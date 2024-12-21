import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const MatchDetailsScreen = () => {
  const [match] = useState({
    teamImage: require('../assets/profile1.png'), // Replace with actual image path
    teamName: 'Team Alpha',
    teamStatus: 'Won by 3 wickets',
    date: '2024-12-20',
    time: '5:00 PM',
    venue: 'Stadium A',
    refereeImage: require('../assets/coach.png'), // Replace with actual image path
  });

  return (
    <View style={styles.container}>
      {/* Team Image and Info */}
      <View style={styles.teamSection}>
        <Image source={match.teamImage} style={styles.teamImage} />
        <View style={styles.teamDetails}>
          <Text style={styles.teamName}>{match.teamName}</Text>
          <Text style={styles.teamStatus}>{match.teamStatus}</Text>
        </View>
      </View>

      {/* Date, Time, and Venue */}
      <View style={styles.detailsSection}>
        <Text style={styles.detailsText}>Date: {match.date}</Text>
        <Text style={styles.detailsText}>Time: {match.time}</Text>
        <Text style={styles.detailsText}>Venue: {match.venue}</Text>
      </View>

      {/* Referee Info */}
      <View style={styles.refereeContainer}>
        <View style={styles.refereeSection}>
          <Image source={match.refereeImage} style={styles.refereeImage} />
          <View style={styles.refereeDetails}>
            <Text style={styles.refereeText}>Need a Referee?</Text>
            <TouchableOpacity style={styles.button} onPress={() => {}}>
              <Text style={styles.buttonText}>Find Here</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', // White background for the whole page
    padding: 20,
  },
  teamSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  teamImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 15,
  },
  teamDetails: {
    flex: 1,
  },
  teamName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  teamStatus: {
    fontSize: 16,
    color: 'gray',
  },
  detailsSection: {
    marginBottom: 20,
  },
  detailsText: {
    fontSize: 16,
    marginBottom: 5,
  },
  refereeContainer: {
    backgroundColor: '#BBDDFF', // Background color for the referee section
    padding: 20,
    borderRadius: 10, // Rounded corners for the referee section
    marginTop: 20,
    alignItems: 'center', // Center-aligning everything in the section
  },
  refereeSection: {
    flexDirection: 'row', // Horizontal layout for image and text/button
    alignItems: 'center',
  },
  refereeImage: {
    width: 100, // Larger size for the image
    height: 150, // Larger height
    borderRadius: 10, // Optional: rounded corners for image
    marginRight: 20, // Space between image and text/button
  },
  refereeDetails: {
    flexDirection: 'column', // Stack the text and button vertically
    alignItems: 'center', // Center align the content
  },
  refereeText: {
    fontSize: 18, // Slightly larger text
    fontWeight: 'bold',
    marginBottom: 10, // Space between text and button
  },
  button: {
    backgroundColor: '#4A90E2', // Button background color
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
    width: '60%', // Adjusted width for the button
    alignSelf: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16, // Larger text for better visibility
    textAlign: 'center',
  },
});

export default MatchDetailsScreen;
