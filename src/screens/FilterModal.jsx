import React, { useState } from "react";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ScrollView,
  Dimensions,
  KeyboardAvoidingView,
} from "react-native";
// import Ionicons from 'react-native-vector-icons/Ionicons/FontAwesome';
const { width, height } = Dimensions.get("window");

const FilterModal = ({ visible, closeModal }) => {
  const [selectedFilter, setSelectedFilter] = useState(null); // Track the selected filter
  const [selectedSports, setSelectedSports] = useState([]); // Track selected sports
  const [sportOptions, setSportOptions] = useState({}); // Track selected options for each sport

  const sportSpecificOptions = {
    Cricket: ["Batsman", "Bowler", "All Rounder", "Wicket Keeper"],
    Football: ["Forward", "Midfielder", "Defender", "Goalkeeper"],
    Basketball: ["Point Guard", "Shooting Guard", "Small Forward", "Power Forward", "Center"],
    Tennis: ["Singles", "Doubles", "Mixed Doubles"],
    Baseball: ["Pitcher", "Catcher", "Infielder", "Outfielder"],
  };

  const toggleSportSelection = (sport) => {
    setSelectedSports((prevState) =>
      prevState.includes(sport)
        ? prevState.filter((item) => item !== sport)
        : [...prevState, sport]
    );
  };

  const toggleOptionSelection = (sport, option) => {
    setSportOptions((prevState) => {
      const updatedSportOptions = { ...prevState };
      if (!updatedSportOptions[sport]) {
        updatedSportOptions[sport] = [];
      }

      if (updatedSportOptions[sport].includes(option)) {
        updatedSportOptions[sport] = updatedSportOptions[sport].filter(
          (item) => item !== option
        );
      } else {
        updatedSportOptions[sport].push(option);
      }

      return updatedSportOptions;
    });
  };

  const selectAllSports = () => {
    setSelectedSports(Object.keys(sportSpecificOptions));
  };

  const clearAllSelections = () => {
    setSelectedSports([]);
    setSportOptions({});
  };

  const renderSportOptions = (sport) => {
    const options = sportSpecificOptions[sport] || [];
    return options.map((option, index) => (
      <View key={index} style={styles.checkboxRow}>
        <Text style={styles.sportNameText}>{option}</Text>
        <TouchableOpacity
          onPress={() => toggleOptionSelection(sport, option)}
        >
          <View
            style={[
              styles.radioButton,
              sportOptions[sport]?.includes(option) &&
                styles.radioButtonSelected,
            ]}
          >
            {sportOptions[sport]?.includes(option) && (
              <View style={styles.tickMark}></View>
            )}
          </View>
        </TouchableOpacity>
      </View>
    ));
  };

  const getContentForFilter = (filter) => {
    if (filter === "Sport") {
      return (
        <View style={styles.checkboxContainer}>
          <View style={styles.selectAllRow}>
            <TouchableOpacity onPress={selectAllSports}>
              <Text style={styles.selectAllText}>Select All</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={clearAllSelections}>
              <Text style={styles.clearAllText}>Clear All</Text>
            </TouchableOpacity>
          </View>
          {Object.keys(sportSpecificOptions).map((sport, index) => (
            <View key={index} style={styles.checkboxRow}>
              <Text style={styles.sportNameText}>{sport}</Text>
              <TouchableOpacity onPress={() => toggleSportSelection(sport)}>
                <View
                  style={[
                    styles.radioButton,
                    selectedSports.includes(sport) &&
                      styles.radioButtonSelected,
                  ]}
                >
                  {selectedSports.includes(sport) && (
                    <View style={styles.tickMark}></View>
                  )}
                </View>
              </TouchableOpacity>
            </View>
          ))}
          {selectedSports.length === 0 && (
            <Text style={styles.placeholderText}>No sports selected</Text>
          )}
          {selectedSports.map((sport) => (
            <View key={sport} style={styles.sportOptionsContainer}>
              <Text style={styles.subHeaderText}>{sport} Options</Text>
              {renderSportOptions(sport)}
            </View>
          ))}
        </View>
      );
    }
    return <Text>Content for {filter} filter</Text>;
  };

  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={styles.modalOverlay}>
        <KeyboardAvoidingView>
        <View style={styles.modalContent}>
          <View style={styles.headerRow}>
            <Text style={styles.headerTitle}>Filters</Text>
            <TouchableOpacity onPress={clearAllSelections}>
              <Text style={styles.clearAllText}>Clear All</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.horizontalRuler} />
          <ScrollView
            style={styles.filterOptionsContainer}
            contentContainerStyle={styles.scrollContent}
          >
            <View style={styles.filterOptionsRow}>
              <View style={styles.columnWithLeftBorder}>
                {["Sport", "Rating", "Radius", "Experience", "Gender", "City", "College", "Organization", "Coaching Institute", "Price"].map((label, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => setSelectedFilter(label)}
                  >
                    <Text
                      style={[
                        styles.filterLabelWithBorders,
                      ]}
                    >
                      {label}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
              <View style={styles.column}>
                <View style={styles.searchBarContainer}>
                  {/* <Icon
                    name="search"
                    size={15}
                    color="gray"
                    style={styles.searchIcon}
                  /> */}
                  <TextInput
                    style={styles.searchBar}
                    placeholder="Search..."
                    placeholderTextColor="gray"
                  />
                </View>
                {selectedFilter && (
                  <View style={styles.filterContentContainer}>
                    {getContentForFilter(selectedFilter)}
                  </View>
                )}
              </View>
            </View>
          </ScrollView>
          <View style={styles.horizontalRuler} />
          <View style={styles.buttonRow}>
            <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.applyFilterButton}>
              <Text style={styles.applyFilterButtonText}>Apply Filter</Text>
            </TouchableOpacity>
          </View>
        </View>
        </KeyboardAvoidingView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "100%",
    height: height * 0.93,
    paddingVertical: height * 0.02,
    backgroundColor: "white",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    justifyContent: "space-between",
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: "5%",
    marginBottom: height * 0.01,
  },
  headerTitle: {
    fontSize: width * 0.05,
    fontWeight: "bold",
  },
  clearAllText: {
    fontSize: width * 0.04,
    color: "blue",
    textDecorationLine: "underline",
  },
  horizontalRuler: {
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    width: "100%",
  },
  filterOptionsContainer: {
    flex: 1,
  },
  filterOptionsRow: {
    flexDirection: "row",
  },
  columnWithLeftBorder: {
    width: "40%",
    borderRightWidth: 1,
    borderRightColor: "gray",
  },
  filterLabelWithBorders: {
    fontSize: width * 0.045,
    paddingVertical: height * 0.02,
    paddingHorizontal: "5%",
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    textAlign: "center",
  },
  noBottomBorder: {
    borderBottomWidth: 0,
  },
  column: {
    width: "60%",
    paddingLeft: "5%",
    paddingTop: height * 0.02,
  },
  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    paddingHorizontal: "5%",
    backgroundColor: "#f9f9f9",
  },
  searchBar: {
    flex: 1,
    fontSize: width * 0.04,
    paddingVertical: height * 0.01,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: "5%",
    paddingVertical: height * 0.02,
  },
  closeButton: {
    width: "47%",
    backgroundColor: "gray",
    paddingVertical: height * 0.015,
    alignItems: "center",
    borderRadius: 5,
  },
  applyFilterButton: {
    width: "47%",
    backgroundColor: "#3b82f6",
    paddingVertical: height * 0.015,
    alignItems: "center",
    borderRadius: 5,
  },
  closeButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  applyFilterButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  checkboxRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  sportNameText: {
    fontSize: width * 0.04,
  },
  checkboxContainer: {
    marginTop: 10,
  },
  radioButton: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: "gray",
    borderRadius: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  radioButtonSelected: {
    backgroundColor: "green",
    borderColor: "green",
  },
  tickMark: {
    width: 10,
    height: 10,
    backgroundColor: "white",
    borderRadius: 2,
  },
  sportOptionsContainer: {
    marginVertical: 10,
  },
  subHeaderText: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  selectAllRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  selectAllText: {
    fontSize: width * 0.04,
    color: "blue",
    textDecorationLine: "underline",
  },
  placeholderText: {
    fontSize: width * 0.04,
    color: "gray",
    textAlign: "center",
    marginTop: 10,
  },
});

export default FilterModal;
