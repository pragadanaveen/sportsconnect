import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const YourPage = () => {
  const players = [
    { name: 'Player 1', image: 'https://via.placeholder.com/40', role: 'Captain' },
    { name: 'Player 2', image: 'https://via.placeholder.com/40', role: 'Bowler' },
    { name: 'Player 3', image: 'https://via.placeholder.com/40', role: 'Wicket Keeper' },
  ];

  return (
    <View style={styles.container}>
      {/* Top Section */}
      <View style={styles.topSection}>
        <Text style={styles.createdByText}>Created By</Text>
        <Text style={styles.sportText}>Sport: Cricket</Text>
        <Text style={styles.sizeText}>Size: 11 players</Text>
      </View>

      {/* Members Section */}
      <View style={styles.membersSection}>
        <Text style={styles.membersHeading}>Members</Text>
        {players.map((player, index) => (
          <View key={index} style={styles.playerRow}>
            <Image source={{ uri: player.image }} style={styles.playerImage} />
            <Text style={styles.playerName}>{player.name}</Text>
            <Text style={styles.playerRole}>{player.role}</Text>
          </View>
        ))}
      </View>

      {/* Bottom Buttons */}
      <View style={styles.bottomButtons}>
        <TouchableOpacity style={styles.rejectButton}>
          <Text style={styles.rejectText}>Reject</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.joinButton}>
          <Text style={styles.joinText}>Join Team</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensures the content takes up all available space
    padding: 20,
    backgroundColor: '#fff',
  },
  topSection: {
    marginBottom: 20, // Spacing between the top section and members section
  },
  createdByText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  sportText: {
    fontSize: 16,
    marginTop: 10,
  },
  sizeText: {
    fontSize: 16,
    marginTop: 5,
  },
  membersSection: {
    marginBottom: 30, // Spacing between the members section and bottom buttons
  },
  membersHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  playerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  playerImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  playerName: {
    flex: 1,
    fontSize: 16,
  },
  playerRole: {
    fontSize: 16,
    color: '#555',
  },
  bottomButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 'auto', // Ensures the buttons stay at the bottom
  },
  rejectButton: {
    flex: 1,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: 'green',
    paddingVertical: 15,
    alignItems: 'center',
    marginRight: 10,
    borderRadius: 5,
  },
  rejectText: {
    color: 'green',
    fontSize: 16,
    fontWeight: 'bold',
  },
  joinButton: {
    flex: 1,
    backgroundColor: 'green',
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  joinText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default YourPage;
