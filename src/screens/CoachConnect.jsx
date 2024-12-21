import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const YourPage = () => {
  const navigation = useNavigation();

  const jobListings = [
    {
      imageUrl: 'https://via.placeholder.com/50',
      jobTitle: 'Software Engineer',
      jobName: 'Frontend Developer',
      companyName: 'Tech Corp',
      companyAddress: '123 Tech Street, Silicon Valley',
      datePosted: '1 day ago',
      applicants: 20,
    },
    {
      imageUrl: 'https://via.placeholder.com/50',
      jobTitle: 'Product Manager',
      jobName: 'Senior Product Manager',
      companyName: 'Innovate Inc.',
      companyAddress: '456 Innovation Blvd, New York',
      datePosted: '2 days ago',
      applicants: 15,
    },
    // Add more job listings as needed
  ];

  const handleCardPress = (jobDetails) => {
    navigation.navigate('CoachConnect_CardInfo', { jobDetails });
  };

  return (
    <View style={styles.container}>
      {/* Top Row with Search Bar and Filter Button */}
      <View style={styles.topRow}>
        <View style={styles.searchBar}>
          <Ionicons name="search" size={20} color="gray" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search Jobs"
          />
        </View>
        <TouchableOpacity style={styles.filterButton}>
          <Ionicons name="filter" size={20} color="white" />
          <Text style={styles.filterText}>Filter</Text>
        </TouchableOpacity>
      </View>

      {/* Job Listings */}
      <View style={styles.cardContainer}>
        {jobListings.map((job, index) => (
          <TouchableOpacity key={index} onPress={() => handleCardPress(job)} style={styles.card}>
            <View style={styles.cardContent}>
              {/* Left side: Job Image and Details */}
              <Image source={{ uri: job.imageUrl }} style={styles.jobImage} />
              <View style={styles.jobDetails}>
                <Text style={styles.jobTitle}>{job.jobTitle}</Text>
                <Text style={styles.companyName}>{job.companyName}</Text>
                <Text style={styles.companyAddress}>{job.companyAddress}</Text>
                
                {/* Date Posted and Applicants in the same row */}
                <View style={styles.dateApplicantsRow}>
                  <Text style={styles.datePosted}>Posted on: {job.datePosted}</Text>
                  <Text style={styles.applicants}>{job.applicants} Applicants</Text>
                </View>
              </View>
            </View>
            {/* Right side: Applied text with bottom border */}
            <Text style={styles.appliedText}>Applied</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 25,
    width: '70%',
    paddingHorizontal: 15,
    height: 40,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4CAF50',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 25,
  },
  filterText: {
    color: 'white',
    marginLeft: 5,
  },
  cardContainer: {
    flex: 1,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    padding: 15,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  jobImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  jobDetails: {
    flex: 1,
  },
  jobTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  jobName: {
    fontSize: 14,
    color: '#777',
    marginTop: 5,
  },
  companyName: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
  },
  companyAddress: {
    fontSize: 12,
    color: '#777',
    marginTop: 5,
  },
  dateApplicantsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    flexWrap: 'wrap',  // Allow wrapping if the text is too long
  },
  datePosted: {
    fontSize: 12,
    color: '#777',
  },
  applicants: {
    fontSize: 12,
    color: '#4CAF50',
  },
  appliedText: {
    position: 'absolute',
    top: 15,
    right: 10,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#4CAF50',
    borderBottomWidth: 2,
    borderColor: '#4CAF50',
    paddingBottom: 3,
  },
});

export default YourPage;
