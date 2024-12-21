import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image,TextInput, TouchableOpacity, ScrollView, Modal, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MembersScreen = () => {
  const navigation = useNavigation();
  const [members] = useState([
    { name: 'TeamInfo', role: 'Captain', image: require('../assets/profile1.png') },
    { name: 'Rami Reddy', role: 'Bowler', image: require('../assets/profile1.png') },
  ]);

  const [challenges] = useState([
    { name: 'Team Alpha', status: 'Upcoming', image: require('../assets/profile1.png') },
    { name: 'Team Beta', status: 'Won', image: require('../assets/profile1.png') },
    { name: 'Team Gamma', status: 'Lost', image: require('../assets/profile1.png') },
  ]);

  const [isModalVisible, setIsModalVisible] = useState(false); // State to control the modal visibility
//   const [isModalVisible, setIsModalVisible] = useState(false); // State to control the modal visibility
  const [selectedOption, setSelectedOption] = useState(null);
  const handleshare = () => {
    setIsModalVisible(true); // Show modal when share button is clicked
    console.log('Add Member clicked');
  };

  const handleViewAllChallenges = () => {
    navigation.navigate("ViewAllChallenges")
    console.log('View All Challenges clicked');
  };

  const closeModal = () => {
    setIsModalVisible(false); // Hide modal when closed
  };
  const handleSelectOption = (option) => {
    setSelectedOption(option);
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Challenges Section */}
      <View style={styles.challengesHeader}>
        <Text style={styles.challengesTitle}>Challenges</Text>
        <TouchableOpacity onPress={handleViewAllChallenges}>
          <Text style={styles.viewAll}>View All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.challengesDivider} />

      {/* Horizontal Scroll of Team Pics */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.challengesScrollView}>
        {challenges.map((challenge, index) => (
          <View key={index} style={styles.challengeItem}>
            <Image source={challenge.image} style={styles.challengeImage} />
            <Text style={styles.challengeName}>{challenge.name}</Text>
            <Text style={styles.challengeStatus}>{challenge.status}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Atlet Members Header Section */}
      <View style={styles.atletHeader}>
        <Text style={styles.atletTitle}>Atlet Members</Text>
        <View style={styles.iconContainer}>
          <TouchableOpacity>
            <Image source={require('../assets/profile1.png')} style={styles.icon}  />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleshare}>
            <Image source={require('../assets/profile1.png')} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Team Members Section */}
      <View style={styles.membersList}>
        {members.map((member, index) => (
          <View key={index} style={styles.memberItem}>
            <Image source={member.image} style={styles.memberImage} />
            <View style={styles.memberDetails}>
              <Text style={styles.memberName}>{member.name}</Text>
              <Text style={styles.memberRole}>{member.role}</Text>
            </View>
          </View>
        ))}
      </View>

      {/* Share Invite Modal */}
      {/* Share Invite Modal */}
      <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={closeModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            {/* Modal Header */}
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Share Invite On</Text>
              <TouchableOpacity onPress={closeModal}>
                <Text style={styles.closeButton}>X</Text>
              </TouchableOpacity>
            </View>

            {/* Link Section */}
            <View style={styles.linkSection}>
              <TextInput
                style={styles.linkInput}
                value="https://your-invite-link.com"
                editable={false}
              />
              <View style={styles.linkActions}>
                <Text style={styles.separator}>|</Text>
                <TouchableOpacity>
                  <Image
                    source={require('../assets/profile1.png')}
                    style={styles.copyIcon}
                  />
                </TouchableOpacity>
              </View>
            </View>

            {/* Divider */}
            <Text style={styles.orText}>OR</Text>

            {/* Share On Section */}
            <View style={styles.shareOnSection}>
              <Text style={styles.sectionTitle}>Share On</Text>
              <View style={styles.socialIconsContainer}>
                <Image
                  source={require('../assets/profile1.png')}
                  style={styles.socialIcon}
                />
                <Image
                  source={require('../assets/profile1.png')}
                  style={styles.socialIcon}
                />
                <Image
                  source={require('../assets/profile1.png')}
                  style={styles.socialIcon}
                />
              </View>
            </View>

            {/* Divider */}
            <Text style={styles.orText}>OR</Text>

            {/* Send Notification Section */}
            <View style={styles.notificationSection}>
              <Text style={styles.sectionTitle}>Send Notification</Text>
              <View style={styles.radioContainer}>
                {['Everyone', 'Captain', 'Bowler'].map((option) => (
                  <TouchableOpacity
                    key={option}
                    style={styles.radioButton}
                    onPress={() => handleSelectOption(option)}
                  >
                    <View
                      style={[
                        styles.radioCircle,
                        selectedOption === option && styles.radioCircleSelected,
                      ]}
                    >
                      {selectedOption === option && (
                        <Text style={styles.tickMark}>&#10003;</Text>
                      )}
                    </View>
                    <Text style={styles.radioText}>{option}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            {/* Send Button */}
            <TouchableOpacity style={styles.sendButton}>
              <Text style={styles.sendButtonText}>Send</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  challengesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  challengesTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  viewAll: {
    fontSize: 16,
    color: 'blue',
    textDecorationLine: 'underline',
  },
  challengesDivider: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 5,
  },
  challengesScrollView: {
    marginVertical: 5,
  },
  challengeItem: {
    alignItems: 'center',
    marginRight: 15,
  },
  challengeImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 5,
  },
  challengeName: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  challengeStatus: {
    fontSize: 12,
    color: 'gray',
  },
  atletHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  atletTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  iconContainer: {
    flexDirection: 'row',
  },
  icon: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
  membersList: {
    marginTop: 10,
  },
  memberItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  memberImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  memberDetails: {
    flex: 1,
  },
  memberName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  memberRole: {
    fontSize: 14,
    color: 'gray',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  modalDescription: {
    fontSize: 16,
    marginVertical: 10,
    textAlign: 'center',
  },
//   
modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  closeButton: {
    fontSize: 18,
    color: 'red',
  },
  linkSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  linkInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  linkActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  separator: {
    fontSize: 18,
    color: '#ddd',
    marginRight: 10,
  },
  copyIcon: {
    width: 20,
    height: 20,
  },
  orText: {
    textAlign: 'center',
    fontSize: 16,
    marginVertical: 10,
  },
  shareOnSection: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  socialIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  socialIcon: {
    width: 30,
    height: 30,
  },
  notificationSection: {
    marginBottom: 20,
  },
  radioContainer: {
    marginTop: 10,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  radioCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioCircleSelected: {
    backgroundColor: 'green',
    borderColor: 'green',
  },
  tickMark: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  radioText: {
    fontSize: 14,
  },
  sendButton: {
    backgroundColor: 'blue',
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
  },
  sendButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MembersScreen;
