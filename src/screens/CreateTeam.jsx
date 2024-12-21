import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Dropdown } from 'react-native-element-dropdown';

const YourPage = () => {
  const [roles, setRoles] = useState([{ role: '', count: '' }]);
  const [selectedSport, setSelectedSport] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedCourt, setSelectedCourt] = useState('');
  const [players, setPlayers] = useState([
    { name: 'Player 1', image: 'https://via.placeholder.com/40', selected: false },
    { name: 'Player 2', image: 'https://via.placeholder.com/40', selected: false },
    { name: 'Player 3', image: 'https://via.placeholder.com/40', selected: false },
  ]);
  const [groupName, setGroupName] = useState('');

  const taskOptions = [
    { label: 'Basketball', value: 'basketball' },
    { label: 'Football', value: 'football' },
    { label: 'Tennis', value: 'tennis' },
  ];
  const locationOptions = [
    { label: 'Location 1', value: 'location1' },
    { label: 'Location 2', value: 'location2' },
    { label: 'Location 3', value: 'location3' },
  ];
  const courtOptions = [
    { label: 'Court 1', value: 'court1' },
    { label: 'Court 2', value: 'court2' },
    { label: 'Court 3', value: 'court3' },
  ];
  const roleOptions = [
    { label: 'Striker', value: 'striker' },
    { label: 'Defender', value: 'defender' },
    { label: 'Goalkeeper', value: 'goalkeeper' },
    { label: 'Midfielder', value: 'midfielder' },
  ];

  const handleAddRow = () => {
    setRoles([...roles, { role: '', count: '' }]);
  };

  const handlePlayerSelect = (index) => {
    const updatedPlayers = [...players];
    updatedPlayers[index].selected = !updatedPlayers[index].selected;
    setPlayers(updatedPlayers);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity style={styles.cameraIcon}>
            <Ionicons name="camera" size={24} color="#fff" />
          </TouchableOpacity>
        </View>

        <TextInput
          style={styles.input}
          value={groupName}
          onChangeText={setGroupName}
          placeholder="Enter group name"
          placeholderTextColor="#888"
        />
      </View>

      {/* Sport Dropdown */}
      <View style={styles.dropdownContainer}>
        <Text style={styles.label}>Sport*</Text>
        <Dropdown
          data={taskOptions}
          labelField="label"
          valueField="value"
          value={selectedSport}
          onChange={(item) => setSelectedSport(item.value)}
          style={styles.dropdown}
          placeholder="Select Sport"
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
        />
      </View>

      {/* Minimum Required Rating Input */}
      <Text style={styles.label}>Minimum Required Rating</Text>
      <TextInput style={styles.input} placeholder="Type here" keyboardType="numeric" />

      {/* Player Location Dropdown */}
      <View style={styles.dropdownContainer}>
        <Text style={styles.label}>Player Location</Text>
        <Dropdown
          data={locationOptions}
          labelField="label"
          valueField="value"
          value={selectedLocation}
          onChange={(item) => setSelectedLocation(item.value)}
          style={styles.dropdown}
          placeholder="Select Location"
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
        />
      </View>

      {/* Total Members Required Dropdown */}
      <View style={styles.dropdownContainer}>
        <Text style={styles.label}>Total Members Required</Text>
        <Dropdown
          data={courtOptions}
          labelField="label"
          valueField="value"
          value={selectedCourt}
          onChange={(item) => setSelectedCourt(item.value)}
          style={styles.dropdown}
          placeholder="Select Court"
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
        />
      </View>

      {/* Role and Count Section */}
      <View style={styles.tableContainer}>
        <View style={styles.tableHeader}>
          <Text style={styles.tableHeaderText}>Role</Text>
          <Text style={styles.tableHeaderText}>Count</Text>
        </View>
        {roles.map((role, index) => (
          <View key={index} style={styles.tableRow}>
            <Dropdown
              data={roleOptions}
              labelField="label"
              valueField="value"
              value={role.role}
              onChange={(item) => {
                const newRoles = [...roles];
                newRoles[index].role = item.value;
                setRoles(newRoles);
              }}
              style={styles.tableInput}
              placeholder="Select Role"
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
            />
            <TextInput
              style={styles.tableInput}
              placeholder="Enter Count"
              keyboardType="numeric"
              value={role.count}
              onChangeText={(text) => {
                const newRoles = [...roles];
                newRoles[index].count = text;
                setRoles(newRoles);
              }}
            />
          </View>
        ))}
        <TouchableOpacity onPress={handleAddRow} style={styles.addRowButton}>
          <MaterialIcons name="add" size={20} color="white" />
          <Text style={styles.addRowText}>Add Row</Text>
        </TouchableOpacity>
      </View>

      {/* Share Invite Button */}
      <TouchableOpacity style={styles.shareInviteButton}>
        <Text style={styles.shareInviteText}>Share Invite</Text>
      </TouchableOpacity>

      {/* "Or" Section */}
      <View style={styles.orSection}>
        <Text style={styles.orText}>OR</Text>
      </View>

      {/* Player Selection Section */}
      <Text style={styles.shareInviteTo}>Share Invite To</Text>
      {players.map((player, index) => (
        <View key={index} style={styles.playerContainer}>
          <Image source={{ uri: player.image }} style={styles.playerImage} />
          <Text style={styles.playerName}>{player.name}</Text>
          <CheckBox
            value={player.selected}
            onValueChange={() => handlePlayerSelect(index)}
            style={[
              styles.checkbox,
              player.selected && styles.selectedCheckbox,
            ]}
          />
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30, // Increased margin to add more space at the top
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  cameraIcon: {
    backgroundColor: '#808080', // gray color
    padding: 20,
    borderRadius: 10, // Square shape
  },
  input: {
    borderBottomWidth: 1, // Bottom border only
    borderColor: '#ccc',
    paddingVertical: 12,
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#333',
    backgroundColor: '#fff',
    flex: 1,
  },
  dropdownContainer: {
    marginBottom: 30, // Increased margin to add more space between fields
  },
  dropdown: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 10,
  },
  placeholderStyle: {
    color: '#aaa',
  },
  selectedTextStyle: {
    color: '#000',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  tableContainer: {
    marginBottom: 30, // Increased margin to add more space between the role and count section
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tableHeaderText: {
    fontWeight: 'bold',
    width: '45%',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15, // Increased space between rows
  },
  tableInput: {
    width: '45%',
    borderWidth: 1,
    paddingLeft: 10,
  },
  addRowButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'blue',
    padding: 10,
    marginTop: 15, // Increased top margin to give more space
  },
  addRowText: {
    color: 'white',
    marginLeft: 5,
    alignSelf: 'center',
  },
  shareInviteButton: {
    backgroundColor: 'green',
    padding: 15,
    alignItems: 'center',
    marginBottom: 30, // Increased bottom margin to add more space
  },
  shareInviteText: {
    color: 'white',
    fontSize: 18,
  },
  orSection: {
    alignItems: 'center',
    marginVertical: 20, // Increased vertical margin for more space
  },
  orText: {
    fontSize: 18,
    color: '#aaa',
  },
  shareInviteTo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10, // Added bottom margin to separate from the next section
  },
  playerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    paddingBottom:15 // Increased vertical margin between players
  },
  playerImage: {
    width: 40,
    height: 40,
    borderRadius: 20, // Circular image
    marginRight: 10,
  },
  playerName: {
    flex: 1,
    fontSize: 16,
  },
  checkbox: {
    marginLeft: 10,
    height: 20,
    width: 20,
  },
  selectedCheckbox: {
    backgroundColor: 'green',
    borderColor: 'green',
  },
});

export default YourPage;

