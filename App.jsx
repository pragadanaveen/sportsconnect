import React from "react";
// import * as WebBrowser from "expo-web-browser";
// import * as Font from 'react-native-fonts';
import { AppRegistry } from 'react-native';
// import App from './App';  // Make sure to point to your main app component
// import { name as appName } from './app.json';  


// import { useFonts } from 'react-native-fonts';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaView } from "react-native"; // Import SafeAreaView
import Icon from "react-native-vector-icons/MaterialIcons"; // Import Material Icons or any other icon set
import HomePage from "./src/screens/Homepage"; // Adjust the import according to your file structure
import NearbyScreen from "./src/screens/NearByScreen"; // Create this new screen component
import Location from "./src/screens/Location"; // Import your Location component
import Chat from "./src/screens/Chat"; // Import your chat component
import Others from "./src/screens/Others"; // Import your others component
// import CoachesScreen from "./screens/CoachesScreen";
import PlayersScreen from "./src/screens/PlayersScreen";
// import GroundsScreen from "./screens/GroundsScreen";
// import GroundsDetails from "./screens/GroundsDetails"; // Ensure this path is correct
import BookingConfirmationScreen from "./src/screens/BookingConfirmationScreen"; // Ensure this path is correct
// import BookingPage from "./screens/BookingPage";
// import EditDetails from "./screens/EditDetails";
// import EditSports from "./screens/EditSports";
// import IndividualSportEdit from "./screens/IndividualSportEdit";
// import AddSport from "./screens/AddSport";
// import EditAbout from "./screens/EditAbout";
// import EditAchievements from "./screens/EditAchievements";
// import IndividualAchivementEdit from "./screens/IndividualAchivementEdit";
// import EditCertifications from "./screens/EditCertifications";
// import IndividualCertificationEdit from "./screens/IndividualCertificationEdit";
// import DeleteConfirmationPopup from "./screens/DeleteConfirmationPopup";
import FilterModal from "./src/screens/FilterModal";
// import VerifyYourSelfStudent from "./screens/VerifyYourSelfStudent";
import SelectProfile from "./src/screens/SelectProfile";
import SignUp from "./src/screens/SignUp";
import SuccessScreen from "./src/screens/SuccessScreen";
import PersonalDetailsScreen from "./src/screens/PersonalDetailsScreen";
import Personal_2 from "./src/screens/Personal_2";
import Personal_3 from "./src/screens/Personal_3";
import Personal_4 from "./src/screens/Personal_4";
import Login from "./src/screens/Login";
import TeamChat from "./src/screens/TeamChat";
// import CoachProfile from "./screens/CoachProfile";
// import EditDetails_Coache from "./screens/EditDetails_Coache";
// import EditSports_Coache from "./screens/EditSports_Coache";
// import IndividualSportEdit_Coache from "./screens/IndividualSportEdit_Coache";
// import AddSport_coache from "./screens/AddSport_coache";
// import EditAchievements_coache from "./screens/EditAchievements_coache";
// import IndividualAchivementEdit_coache from "./screens/IndividualAchivementEdit_coache";
// import EditCertifications_coache from "./screens/EditCertifications_coache";
// import IndividualCertificationEdit_coache from "./screens/IndividualCertificationEdit_coache";
// import Tabs from "./screens/Tabs";
// import JobPosts from "./screens/JobPosts";
// import CreateJob from "./screens/CreateJob";
// import CreateJobPost2 from "./screens/CreateJobPost2";
// import JobPost_SuccessScreen from "./screens/JobPost_SuccessScreen";
// import JobPreviewModal from "./screens/JobPreviewModal";
import LiveMatches_nearby from "./src/screens/LiveMatches_nearby";
// import MatchCardPage from "./screens/MatchCardPage";
// import Score_Nearby from "./screens/Score_Nearby";
// import LiveChat from "./screens/LiveChat";
// import Team from "./screens/Team";
// import MatcheDetails from "./screens/MatcheDetails";
import ComingSoon from "./src/screens/ComingSoon";
// import MatchDetails_comingsoon from "./screens/MatchDetails_comingsoon";
// import ComingSoon_cardDetails from "./screens/ComingSoon_cardDetails";
// import TeamDetails_Comingsoon from "./screens/TeamDetails_Comingsoon";
// import YourDashboard from "./screens/YourDashboard";
import AddTask from "./src/screens/AddTask";
// import MyBookings from "./screens/MyBookings";
// import VerifyYourself from "./screens/VerifyYourself";
// import VerifyedPersonScreen from "./screens/VerifyedPersonScreen";
// import FeedBackScreen from "./screens/FeedBackScreen";
// import ContactUs from "./screens/ContactUs";
// import WalletTopUpScreen from "./screens/WalletTopUpScreen";
// import OpentagJobDetails from "./screens/OpentagJobDetails";
// import JobPostContent from "./screens/JobPostContent";
// import Applicants from "./screens/Applicants";
// import ChooseListButton from "./screens/ChooseListButton";
import MyBookingsCardDetails from "./src/screens/MyBookingsCardDetails";
// import CancelConfirmationPopUp from "./screens/CancelConfirmationPopUp";
import BookingCancelled from "./src/screens/BookingCancelled";
// import Cricket from "./screens/NearBy_Cricket";
// import PlayersListView from "./screens/PlayersListView";
// import CoachesListView from "./screens/CoachesListView";
// import TeamsListView from "./screens/TeamsListView";
// import GroundsListView from "./screens/GroundsListView";
import FootBall from "./src/screens/FootBall";
// import Home_Groungmanager from "./screens/Home_Groungmanager";
// import Payments from "./screens/Payments";
// import Support from "./screens/Support";
// import Profile_Gm from "./screens/Profile_Gm";
// import Bookings from "./screens/Bookings";
// import GroundsInCardView from "./screens/GroundsInCardView";
// import GroundCardDetails from "./screens/GroundCardDetails";
// import GroundManager_Profile from "./screens/GroundManager_Profile";
// import Gm_AccountSettings from "./screens/Gm_AccountSettings";
// import Gm_MyBanners from "./screens/Gm_MyBanners";
// import Gm_Bankaccount from "./screens/Gm_Bankaccount";
// import Gm_Editgrounddetails from "./screens/Gm_Editgrounddetails";
// import Gm_Editcourtdetails from "./screens/Gm_Editcourtdetails";
// import SignUp_Gm from "./screens/SignUp_Gm";
// import Login_Gm from "./screens/Login_Gm";
// import Coach_Livematches from "./screens/Coach_Livematches";
// import RatePlayer from "./screens/RatePlayer";
// import Rate_Individualplayer from "./screens/Rate_Individualplayer";
import IndividualChatScreen from "./src/screens/IndividualChatScreen";
import CustomHeader from './src/screens/CustomHeader';
import CustomHeader_GInfo from './src/screens/CustomHeader_GInfo';
import CreateGroup from './src/screens/CreateGroup';
import GroupInfo from './src/screens/GroupInfo';
import GroupChat from './src/screens/GroupChat';
import TeamChat_CustomHeader from './src/screens/TeamChat_CustomHeader';
import TeamInfo from './src/screens/TeamInfo';
import ShareInviteModal from './src/screens/ShareInviteModal';
import ViewAllChallenges from './src/screens/ViewAllChallenges';
import ChallengesCardPage from './src/screens/ChallengesCardPage';
import CreateTeam from './src/screens/CreateTeam';
import CreatedTeamInfo from './src/screens/CreatedTeamInfo';
import TeamInfoCaptain from './src/screens/TeamInfoCaptain';
import NotificationsScreen from './src/screens/NotificationsScreen';
import CoachConnect from './src/screens/CoachConnect';
import CoachConnect_CardInfo from './src/screens/CoachConnect_CardInfo';
import ProfileScreen from "./src/screens/ProfileScreen";
// import Gm_Editbanner from "./screens/Gm_Editbanner";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
// AppRegistry.registerComponent(appName, () => App); 
const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
          headerShown: false, // Hide header for Home
        }}
      />
      <Tab.Screen
        name="Nearby"
        component={NearbyScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="near-me" color={color} size={size} /> // Updated icon for Nearby
          ),
          headerShown: false, // Hide header for Nearby
        }}
      />
      <Tab.Screen
        name="Location"
        component={Location}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="place" color={color} size={size} /> // Updated icon for Location
          ),
          headerShown: false, // Hide header for Location
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="chat" color={color} size={size} /> // Updated icon for Chat
          ),
          headerShown: false, // Hide header for Chat
        }}
      />
      <Tab.Screen
        name="Others"
        component={Others}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="more-horiz" color={color} size={size} /> // Updated icon for Others
          ),
          headerShown: false, // Hide header for Others
        }}
      />
    </Tab.Navigator>
  );
};
// const TabNavigator2 = () => {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen
//         name="MyGrounds"
//         component={Home_Groungmanager}
//         options={{
//           tabBarIcon: ({ color, size }) => (
//             <Icon name="home" color={color} size={size} /> // Icon for grounds
//           ),
//           headerShown: false, // Hide header for MyGrounds
//         }}
//       />
//       <Tab.Screen
//         name="Payments"
//         component={Payments}
//         options={{
//           tabBarIcon: ({ color, size }) => (
//             <Icon name="payments" color={color} size={size} /> // Icon for payments
//           ),
//           headerShown: false, // Hide header for Payments
//         }}
//       />
//       <Tab.Screen
//         name="Support"
//         component={Support}
//         options={{
//           tabBarIcon: ({ color, size }) => (
//             <Icon name="support-agent" color={color} size={size} /> // Icon for support
//           ),
//           headerShown: false, // Hide header for Support
//         }}
//       />
//       <Tab.Screen
//         name="Profile"
//         component={Profile_Gm}
//         options={{
//           tabBarIcon: ({ color, size }) => (
//             <Icon name="person" color={color} size={size} /> // Icon for profile
//           ),
//           headerShown: false, // Hide header for Profile
//         }}
//       />
//     </Tab.Navigator>
//   );
// };

const App = () => {
  
  
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
          <Stack.Navigator initialRouteName="Location">
        <Stack.Screen
            name="Location"
            component={Location}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SelectProfile"
            component={SelectProfile}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{ headerShown: false }} // Hide header for TabNavigator
          />
          <Stack.Screen
            name="SuccessScreen"
            component={SuccessScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PersonalDetailsScreen"
            component={PersonalDetailsScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ChallengesCardPage"
            component={ChallengesCardPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CreateTeam"
            component={CreateTeam}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Personal_2"
            component={Personal_2}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Personal_3"
            component={Personal_3}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Personal_4"
            component={Personal_4}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CreateGroup"
            component={CreateGroup}
            options={{ headerShown: true }} // Hide header for TabNavigator
          />
          <Stack.Screen
        name="GroupChat"
        component={GroupChat} // Your screen component
        options={{
          headerShown: true, // Show the header
          headerTitle: () => <CustomHeader/>, // Custom header with player icon and name
          headerLeft: () => null, // Remove the default back button
          headerStyle: { backgroundColor: '#fff' }, // Style the header
        }}
      /> 
       <Stack.Screen
            name="TabNavigator"
            component={TabNavigator}
            options={{ headerShown: false }} // Hide header for TabNavigator
          />
          <Stack.Screen
            name="AddTask"
            component={AddTask}
            options={{ headerShown: true }} // Hide header for TabNavigator
          />
          <Stack.Screen
            name="ShareInviteModal"
            component={ShareInviteModal}
            options={{ headerShown: true }} // Hide header for TabNavigator
          />
          <Stack.Screen
            name="ViewAllChallenges"
            component={ViewAllChallenges}
            options={{ headerShown: true }} // Hide header for TabNavigator
          />
          <Stack.Screen
            name="BookingConfirmationScreen"
            component={BookingConfirmationScreen}
          />
          <Stack.Screen
            name="MyBookingsCardDetails"
            component={MyBookingsCardDetails}
            options={{ headerShown: true }} // Hide header for TabNavigator
          />
           <Stack.Screen
            name="BookingCancelled"
            component={BookingCancelled}
            options={{ headerShown: true }} // Hide header for TabNavigator
          />
           <Stack.Screen
            name="LiveMatches_nearby"
            component={LiveMatches_nearby}
            options={{ headerShown: true }} // Hide header for TabNavigator
          />
          <Stack.Screen
            name="ComingSoon"
            component={ComingSoon}
            options={{ headerShown: true }} // Hide header for TabNavigator
          />
          <Stack.Screen
            name="FootBall"
            component={FootBall}
            options={{ headerShown: true }} // Hide header for TabNavigator
          />
          <Stack.Screen
            name="GroupInfo"
            component={GroupInfo}
            options={{ headerShown: true, headerTitle: () => <CustomHeader_GInfo />, headerLeft: () => null, // Remove the default back button
              headerStyle: { backgroundColor: '#fff' }, }} // Hide header for TabNavigator
          />
          <Stack.Screen
            name="TeamInfo"
            component={TeamInfo}
            options={{ headerShown: true, headerTitle: () => <CustomHeader_GInfo />, headerLeft: () => null, // Remove the default back button
              headerStyle: { backgroundColor: '#fff' }, }} // Hide header for TabNavigator
          />
          <Stack.Screen


            name="CustomHeader"
            component={CustomHeader}
            options={{ headerShown: false }} // Hide header for TabNavigator
          />
          <Stack.Screen


            name="NotificationsScreen"
            component={NotificationsScreen}
            options={{ headerShown: false }} // Hide header for TabNavigator
          />
          <Stack.Screen


            name="CoachConnect"
            component={CoachConnect}
            options={{ headerShown: false }} // Hide header for TabNavigator
          />
          <Stack.Screen


            name="CoachConnect_CardInfo"
            component={CoachConnect_CardInfo}
            options={{ headerShown: false }} // Hide header for TabNavigator
          />
          <Stack.Screen


            name="TeamChat"
            component={TeamChat}
            options={{ headerShown: true, // Show the header
              headerTitle: () => <TeamChat_CustomHeader/>, // Custom header with player icon and name
              headerLeft: () => null, // Remove the default back button
              headerStyle: { backgroundColor: '#fff' }, }} // Hide header for TabNavigator
          />
          <Stack.Screen


            name="CreatedTeamInfo"
            component={CreatedTeamInfo}
            options={{ headerShown: true, // Show the header
              headerTitle: () => <TeamChat_CustomHeader/>, // Custom header with player icon and name
              headerLeft: () => null, // Remove the default back button
              headerStyle: { backgroundColor: '#fff' }, }} // Hide header for TabNavigator
          />
          <Stack.Screen


            name="TeamInfoCaptain"
            component={TeamInfoCaptain}
            options={{ headerShown: true, // Show the header
              headerTitle: () => <TeamChat_CustomHeader/>, // Custom header with player icon and name
              headerLeft: () => null, // Remove the default back button
              headerStyle: { backgroundColor: '#fff' }, }} // Hide header for TabNavigator
          />
          <Stack.Screen
        name="IndividualChatScreen"
        component={IndividualChatScreen} // Your screen component
        options={{
          headerShown: true, // Show the header
          headerTitle: () => <CustomHeader />, // Custom header with player icon and name
          headerLeft: () => null, // Remove the default back button
          headerStyle: { backgroundColor: '#fff' }, // Style the header
        }}
      />
      <Stack.Screen
            name="PlayersScreen"
            component={PlayersScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="FilterModal"
            component={FilterModal}
            options={{ headerShown: true }}
          />
           <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
          {/* Stack screens that might show a header */}
          {/* <Stack.Screen name="GroundsDetails" component={GroundsDetails} />
          <Stack.Screen name="BookingPage" component={BookingPage} />
          
         
          
          <Stack.Screen
            name="CoachesScreen"
            component={CoachesScreen}
            options={{ headerShown: false }}
          /> */}
          {/* <Stack.Screen
            name="TeamsScreen"
            component={TeamsScreen}
            options={{ headerShown: false }}
          /> */}
          {/* <Stack.Screen
            name="GroundsScreen"
            component={GroundsScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="EditDetails"
            component={EditDetails}
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name="EditSports"
            component={EditSports}
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name="IndividualSportEdit"
            component={IndividualSportEdit}
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name="AddSport"
            component={AddSport}
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name="EditAbout"
            component={EditAbout}
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name="EditAchievements"
            component={EditAchievements}
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name="IndividualAchivementEdit"
            component={IndividualAchivementEdit}
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name="EditCertifications"
            component={EditCertifications}
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name="IndividualCertificationEdit"
            component={IndividualCertificationEdit}
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name="DeleteConfirmationPopup"
            component={DeleteConfirmationPopup}
            options={{ headerShown: true }}
          />
          
          <Stack.Screen
            name="VerifyYourSelfStudent"
            component={VerifyYourSelfStudent}
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{ headerShown: false }}
          />
          
          
          <Stack.Screen
            name="Personal_2"
            component={Personal_2}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Personal_3"
            component={Personal_3}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Personal_4"
            component={Personal_4}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
         
          <Stack.Screen
            name="TabNavigator2"
            component={TabNavigator2}
            options={{ headerShown: false }} // Hide header for TabNavigator
          />
          <Stack.Screen
            name="CoachProfile"
            component={CoachProfile}
            options={{ headerShown: true }} // Hide header for TabNavigator
          />
          <Stack.Screen
            name="EditDetails_Coache"
            component={EditDetails_Coache}
            options={{ headerShown: true }} // Hide header for TabNavigator
          />
          <Stack.Screen
            name="EditSports_Coache"
            component={EditSports_Coache}
            options={{ headerShown: true }} // Hide header for TabNavigator
          />
          <Stack.Screen
            name="IndividualSportEdit_Coache"
            component={IndividualSportEdit_Coache}
            options={{ headerShown: true }} // Hide header for TabNavigator
          />
          <Stack.Screen
            name="AddSport_coache"
            component={AddSport_coache}
            options={{ headerShown: true }} // Hide header for TabNavigator
          />
          <Stack.Screen
            name="EditAchievements_coache"
            component={EditAchievements_coache}
            options={{ headerShown: true }} // Hide header for TabNavigator
          />
          <Stack.Screen
            name="IndividualAchivementEdit_coache"
            component={IndividualAchivementEdit_coache}
            options={{ headerShown: true }} // Hide header for TabNavigator
          />
          <Stack.Screen
            name="EditCertifications_coache"
            component={EditCertifications_coache}
            options={{ headerShown: true }} // Hide header for TabNavigator
          />
          <Stack.Screen
            name="IndividualCertificationEdit_coache"
            component={IndividualCertificationEdit_coache}
            options={{ headerShown: true }} // Hide header for TabNavigator
          />
          <Stack.Screen
            name="Tabs"
            component={Tabs}
            options={{ headerShown: true }} // Hide header for TabNavigator
          />
          <Stack.Screen
            name="JobPosts"
            component={JobPosts}
            options={{ headerShown: true }} // Hide header for TabNavigator
          />
          <Stack.Screen
            name="CreateJob"
            component={CreateJob}
            options={{ headerShown: true }} // Hide header for TabNavigator
          />
          <Stack.Screen
            name="CreateJobPost2"
            component={CreateJobPost2}
            options={{ headerShown: true }} // Hide header for TabNavigator
          />
          <Stack.Screen
            name="JobPost_SuccessScreen"
            component={JobPost_SuccessScreen}
            options={{ headerShown: true }} // Hide header for TabNavigator
          />
          <Stack.Screen
            name="JobPreviewModal"
            component={JobPreviewModal}
            options={{ headerShown: true }} // Hide header for TabNavigator
          />
         
          <Stack.Screen
            name="MatchCardPage"
            component={MatchCardPage}
            options={{ headerShown: true }} // Hide header for TabNavigator
          />
          <Stack.Screen
            name="Score_Nearby"
            component={Score_Nearby}
            options={{ headerShown: true }} // Hide header for TabNavigator
          />
          <Stack.Screen
            name="LiveChat"
            component={LiveChat}
            options={{ headerShown: true }} // Hide header for TabNavigator
          />
          <Stack.Screen
            name="Team"
            component={Team}
            options={{ headerShown: true }} // Hide header for TabNavigator
          />
          <Stack.Screen
            name="MatcheDetails"
            component={MatcheDetails}
            options={{ headerShown: true }} // Hide header for TabNavigator
          />
          
          <Stack.Screen
            name="MatchDetails_comingsoon"
            component={MatchDetails_comingsoon}
            options={{ headerShown: true }} // Hide header for TabNavigator
          />
          <Stack.Screen
            name="ComingSoon_cardDetails"
            component={ComingSoon_cardDetails}
            options={{ headerShown: true }} // Hide header for TabNavigator
          />
          <Stack.Screen
            name="TeamDetails_Comingsoon"
            component={TeamDetails_Comingsoon}
            options={{ headerShown: true }} // Hide header for TabNavigator
          />
          <Stack.Screen
            name="YourDashboard"
            component={YourDashboard}
            options={{ headerShown: true }} // Hide header for TabNavigator
          />
          
          
          <Stack.Screen
            name="MyBookings"
            component={MyBookings}
            options={{ headerShown: true }} // Hide header for TabNavigator
          />
          <Stack.Screen
            name="VerifyYourself"
            component={VerifyYourself}
            options={{ headerShown: true }} // Hide header for TabNavigator
          />
          <Stack.Screen
            name="VerifyedPersonScreen"
            component={VerifyedPersonScreen}
            options={{ headerShown: true }} // Hide header for TabNavigator
          />
          <Stack.Screen
            name="FeedBackScreen"
            component={FeedBackScreen}
            options={{ headerShown: true }} // Hide header for TabNavigator
          />
          <Stack.Screen
            name="ContactUs"
            component={ContactUs}
            options={{ headerShown: true }} // Hide header for TabNavigator
          />
          
          <Stack.Screen
            name="WalletTopUpScreen"
            component={WalletTopUpScreen}
            options={{ headerShown: true }} // Hide header for TabNavigator
          />
          
          <Stack.Screen
            name="OpentagJobDetails"
            component={OpentagJobDetails}
            options={{ headerShown: true }} // Hide header for TabNavigator
          />
          <Stack.Screen
            name="JobPostContent"
            component={JobPostContent}
            options={{ headerShown: true }} // Hide header for TabNavigator
          />
          <Stack.Screen
            name="Applicants"
            component={Applicants}
            options={{ headerShown: true }} // Hide header for TabNavigator
          />
          <Stack.Screen
            name="ChooseListButton"
            component={ChooseListButton}
            options={{ headerShown: false }} // Hide header for TabNavigator
          />
          
          <Stack.Screen
            name="CancelConfirmationPopUp"
            component={CancelConfirmationPopUp}
            options={{ headerShown: true }} // Hide header for TabNavigator
          />
         
          <Stack.Screen
            name="Cricket"
            component={Cricket}
            options={{ headerShown: true }} // Hide header for TabNavigator
          />
          <Stack.Screen
            name="PlayersListView"
            component={PlayersListView}
            options={{ headerShown: true }} // Hide header for TabNavigator
          />
          <Stack.Screen
            name="CoachesListView"
            component={CoachesListView}
            options={{ headerShown: true }} // Hide header for TabNavigator
          />
          <Stack.Screen
            name="TeamsListView"
            component={TeamsListView}
            options={{ headerShown: true }} // Hide header for TabNavigator
          />
          <Stack.Screen
            name="GroundsListView"
            component={GroundsListView}
            options={{ headerShown: true }} // Hide header for TabNavigator
          />
          
          <Stack.Screen
            name="Home_Groungmanager"
            component={Home_Groungmanager}
            options={{ headerShown: false }} // Hide header for TabNavigator
          />
          <Stack.Screen
            name="Payments"
            component={Payments}
            options={{ headerShown: false }} // Hide header for TabNavigator
          />
          <Stack.Screen
            name="Support"
            component={Support}
            options={{ headerShown: false }} // Hide header for TabNavigator
          />
          <Stack.Screen
            name="Profile_Gm"
            component={Profile_Gm}
            options={{ headerShown: false }} // Hide header for TabNavigator
          />
          <Stack.Screen
            name="Bookings"
            component={Bookings}
            options={{ headerShown: false }} // Hide header for TabNavigator
          />
          <Stack.Screen
            name="GroundsInCardView"
            component={GroundsInCardView}
            options={{ headerShown: true }} // Hide header for TabNavigator
          />
          <Stack.Screen
            name="GroundCardDetails"
            component={GroundCardDetails}
            options={{ headerShown: true }} // Hide header for TabNavigator
          />
          <Stack.Screen
            name="GroundManager_Profile"
            component={GroundManager_Profile}
            options={{ headerShown: true }} // Hide header for TabNavigator
          />
          <Stack.Screen
            name="Gm_AccountSettings"
            component={Gm_AccountSettings}
            options={{ headerShown: true }} // Hide header for TabNavigator
          />
          <Stack.Screen
            name="Gm_MyBanners"
            component={Gm_MyBanners}
            options={{ headerShown: true }} // Hide header for TabNavigator
          />
          <Stack.Screen
            name="Gm_Bankaccount"
            component={Gm_Bankaccount}
            options={{ headerShown: true }} // Hide header for TabNavigator
          />
          <Stack.Screen
            name="Gm_Editgrounddetails"
            component={Gm_Editgrounddetails}
            options={{ headerShown: true }} // Hide header for TabNavigator
          />
          <Stack.Screen
            name="Gm_Editcourtdetails"
            component={Gm_Editcourtdetails}
            options={{ headerShown: true }} // Hide header for TabNavigator
          />
          
          <Stack.Screen
            name="Login_Gm"
            component={Login_Gm}
            options={{ headerShown: false }} // Hide header for TabNavigator
          />
          <Stack.Screen
            name="Coach_Livematches"
            component={Coach_Livematches}
            options={{ headerShown: false }} // Hide header for TabNavigator
          />
          <Stack.Screen
            name="RatePlayer"
            component={RatePlayer}
            options={{ headerShown: false }} // Hide header for TabNavigator
          />
          <Stack.Screen
            name="Rate_Individualplayer"
            component={Rate_Individualplayer}
            options={{ headerShown: false }} // Hide header for TabNavigator
          />
          
          
          
          
          */}

          
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
