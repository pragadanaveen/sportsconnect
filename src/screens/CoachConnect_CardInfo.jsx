import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const JobDetailScreen = () => {
  // Hardcoded job data
  const job = {
    title: "Software Developer",
    company: "ABC Tech",
    address: "123 Tech Avenue, Silicon Valley",
    type: "Full Time",
    postedOn: "01 November, 2024",
    applications: 12,
    description: "Develop and maintain software applications.",
    responsibilities: ["Write code", "Fix bugs", "Collaborate with teams"],
    qualifications: [
      "Bachelor's degree in Computer Science",
      "Experience with React",
    ],
    skills: ["JavaScript", "React Native", "Node.js"],
    poster: {
      avatar: "https://example.com/avatar.jpg",
      name: "John Doe",
      title: "HR Manager",
    },
    connections: ["Syam", "Rupa"],
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Job Title and "Not for Me" text */}
        <View style={styles.jobHeader}>
          <Text style={styles.jobTitle}>{job.title}</Text>
          <TouchableOpacity style={styles.notForMeButton}>
            <Text style={styles.notForMeText}>Not for Me</Text>
          </TouchableOpacity>
        </View>

        {/* Company Name, Address, and Job Type */}
        <View style={styles.jobDetailRow}>
          <Text style={styles.jobDetailText}>
            <Text style={styles.icon}>🏢 </Text>
            {job.company} | {job.address}
          </Text>
        </View>
        <View style={styles.jobDetailRow}>
          <Text style={styles.jobDetailText}>
            <Ionicons name="briefcase" size={16} color="gray" />
            {job.type}
          </Text>
        </View>

        {/* Posted On and Applications */}
        <View style={styles.jobDetailRow}>
          <Text style={styles.jobDetailText}>
            Posted on: {job.postedOn}, {job.applications} Applicants
          </Text>
        </View>

        {/* Connections */}
        <View style={styles.jobDetailRow}>
          <Text style={styles.jobDetailText}>
            {job.connections.join(", ")} + {job.connections.length - 2} connections work here
          </Text>
        </View>

        {/* Poster Section */}
        <View style={styles.posterSection}>
          <Text style={styles.subTitle}>Posted by</Text>
          <View style={styles.posterInfo}>
            <Image source={{ uri: job.poster.avatar }} style={styles.avatar} />
            <View>
              <Text style={styles.posterName}>{job.poster.name}</Text>
              <Text style={styles.posterTitle}>{job.poster.title}</Text>
            </View>
          </View>
        </View>

        {/* Job Description */}
        <Text style={styles.subTitle}>Job Description</Text>
        <Text style={styles.descriptionText}>{job.description}</Text>

        {/* Responsibilities */}
        <Text style={styles.subTitle}>Responsibilities</Text>
        <View style={styles.list}>
          {job.responsibilities.map((responsibility, index) => (
            <View key={index} style={styles.listItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.listText}>{responsibility}</Text>
            </View>
          ))}
        </View>

        {/* Qualifications */}
        <Text style={styles.subTitle}>Qualifications</Text>
        <View style={styles.list}>
          {job.qualifications.map((qualification, index) => (
            <View key={index} style={styles.listItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.listText}>{qualification}</Text>
            </View>
          ))}
        </View>

        {/* Required Skills */}
        <Text style={styles.subTitle}>Required Skills</Text>
        <View style={styles.list}>
          {job.skills.map((skill, index) => (
            <View key={index} style={styles.listItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.listText}>{skill}</Text>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Button positioned at the bottom */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.closeButton} activeOpacity={0.8}>
          <Text style={styles.closeButtonText}>Close Job</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9", // Prevent background change on touch
  },
  scrollContainer: {
    padding: 20,
    backgroundColor: "#fff",
    paddingBottom: 20,
  },
  jobHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  jobTitle: {
    fontSize: 18,
    fontFamily: "HankenGroteskBold",
    color: "#000",
    flex: 1,
  },
  notForMeButton: {
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  notForMeText: {
    color: "#ff0000",
    fontWeight: "bold",
    fontSize: 14,
  },
  jobDetailRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  jobDetailText: {
    fontFamily: "HankenGroteskRegular",
    fontSize: 14,
    color: "#525252",
  },
  icon: {
    fontSize: 16,
  },
  subTitle: {
    fontSize: 17,
    fontFamily: "HankenGroteskBold",
    marginBottom: 10,
    color: "#333",
  },
  posterSection: {
    marginBottom: 20,
  },
  posterInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  posterName: {
    fontSize: 16,
    fontFamily: "HankenGroteskBold",
    color: "#3D3D3D",
  },
  posterTitle: {
    fontSize: 12,
    color: "#666666",
  },
  descriptionText: {
    fontSize: 14,
    fontFamily: "HankenGroteskRegular",
    color: "#3D3D3D",
    marginBottom: 15,
  },
  list: {
    marginLeft: 10,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  bullet: {
    fontFamily: "HankenGroteskRegular",
    color: "#3D3D3D",
    marginRight: 10,
    lineHeight: 20,
  },
  listText: {
    fontSize: 14,
    fontFamily: "HankenGroteskRegular",
    color: "#3D3D3D",
  },
  buttonContainer: {
    justifyContent: "flex-end",
    padding: 10,
  },
  closeButton: {
    backgroundColor: "green",
    padding: 15,
    borderRadius: 20,
  },
  closeButtonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default JobDetailScreen;
