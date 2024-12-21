import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const YourPage = () => {
  const notifications = [
    {
      teamName: 'Team A',
      teamIcon: 'https://via.placeholder.com/40',
      date: '12 Dec 2024, 4:00 PM',
      status: '4 hours ago',
    },
    {
      teamName: 'Team B',
      teamIcon: 'https://via.placeholder.com/40',
      date: '15 Dec 2024, 5:30 PM',
      status: '1 day ago',
    },
  ];

  return (
    <View style={styles.container}>
      {notifications.map((notification, index) => (
        <View key={index} style={styles.card}>
          <View style={styles.cardContent}>
            {/* Left: Team Icon */}
            <Image source={{ uri: notification.teamIcon }} style={styles.teamIcon} />

            {/* Right: Team Details, Buttons, and Status */}
            <View style={styles.contentRight}>
              {/* Team Name and Date */}
              <View style={styles.teamDetails}>
                <View style={styles.headerRow}>
                  <Text style={styles.teamName}>{notification.teamName}</Text>
                  <TouchableOpacity style={styles.closeButton}>
                    <Ionicons name="close" size={20} color="gray" />
                  </TouchableOpacity>
                </View>
                <Text style={styles.dateText}>Date: {notification.date}</Text>
              </View>

              {/* Accept & Reject Buttons and Status */}
              <View style={styles.buttonsContainer}>
                <View style={styles.buttonGroup}>
                  <TouchableOpacity style={styles.acceptButton}>
                    <Text style={styles.acceptText}>Accept</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.rejectButton}>
                    <Text style={styles.rejectText}>Reject</Text>
                  </TouchableOpacity>
                </View>
                <Text style={styles.statusText}>{notification.status}</Text>
              </View>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  card: {
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'flex-start', // Aligns items at the top
  },
  teamIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  contentRight: {
    flex: 1, // Allows the right-side content to take the remaining space
    justifyContent: 'space-between', // Spaces out details and buttons vertically
  },
  teamDetails: {
    marginBottom: 10, // Adds spacing below team details
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  teamName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  closeButton: {
    padding: 5,
  },
  dateText: {
    fontSize: 14,
    color: '#777',
    marginTop: 5,
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Distributes buttons and status to opposite ends
  },
  buttonGroup: {
    flexDirection: 'row', // Groups Accept and Reject buttons together
    alignItems: 'center',
  },
  acceptButton: {
    backgroundColor: 'green',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginRight: 10, // Adds spacing between Accept and Reject buttons
  },
  acceptText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  rejectButton: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: 'green',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  rejectText: {
    color: 'green',
    fontSize: 14,
    fontWeight: 'bold',
  },
  statusText: {
    fontSize: 14,
    color: '#555',
  },
});

export default YourPage;
