// ShareInviteModal Component
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TextInput,
  Image,
} from 'react-native';

const ShareInviteModal = ({ visible, onClose }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelectOption = (option) => {
    setSelectedOption(option);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          {/* Header */}
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Share Invite On</Text>
            <TouchableOpacity onPress={onClose}>
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
  );
};

const styles = StyleSheet.create({
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

export default ShareInviteModal;