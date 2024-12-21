import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const YourPage = () => {
  const players = [
    { name: 'Player 1', image: 'https://via.placeholder.com/40', role: 'Captain', showButtons: true },
    { name: 'Player 2', image: 'https://via.placeholder.com/40', role: 'Bowler', showButtons: false },
    { name: 'Player 3', image: 'https://via.placeholder.com/40', role: 'Wicket Keeper', showButtons: true },
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

            {/* Conditionally render role if not showing buttons */}
            {!player.showButtons && <Text style={styles.playerRole}>{player.role}</Text>}

            {/* Accept and Reject Buttons */}
            {player.showButtons && (
              <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.rejectButton}>
                  <Text style={styles.rejectText}>Reject</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.acceptButton}>
                  <Text style={styles.acceptText}>Accept</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        ))}
      </View>

      {/* Bottom Buttons */}
      <View style={styles.bottomButtons}>
        <TouchableOpacity style={styles.rejectButton2}>
          <Text style={styles.rejectText2}>Reject</Text>
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
    justifyContent: 'space-between', // Ensure the buttons stay on the right end
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
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rejectButton: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: 'red',
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignItems: 'center',
    marginRight: 10,
    borderRadius: 5,
  },
  rejectButton2: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: 'green',
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center', // Centers the text vertically
    marginRight: 10,
    borderRadius: 25,
    width: "50%",
    flexDirection: 'row', // Ensures the button can align items horizontally
  },
  
  rejectText: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
  },
  rejectText2: {
    color: 'green',
    fontSize: 14,
    fontWeight: 'bold',
    verticalAlign:"center"
  },
  acceptButton: {
    backgroundColor: 'green',
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  acceptText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  bottomButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 'auto', // Ensures the buttons stay at the bottom
  },
  joinButton: {
    flex: 1,
    backgroundColor: 'green',
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 25,
  },
  joinText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default YourPage;
