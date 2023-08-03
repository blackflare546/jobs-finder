import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { EntryNavigator } from "./entry.navigator";
import {
  JobRootStackParamList,
  MainBottomTabParamList,
  RootStackParamList,
} from "../../types";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text } from "react-native";
import { JobsScreen, ProfileScreen } from "../../scenes/Main";
import JobDetails from "../../scenes/Main/screens/job-details.screen";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootNavigator() {
  const initialRouteName: keyof RootStackParamList = "Entry";

  return (
    <Stack.Navigator initialRouteName={initialRouteName}>
      <Stack.Screen
        name="Main"
        component={MainBottomTabNavigator}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Entry"
        component={EntryNavigator}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Jobs"
        component={JobStackNavigator}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator<MainBottomTabParamList>();

const MainBottomTabNavigator = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="My Profile" component={ProfileScreen} />
      <BottomTab.Screen name="Search Jobs" component={JobsScreen} />
    </BottomTab.Navigator>
  );
};

const JobStack = createStackNavigator<JobRootStackParamList>();

const JobStackNavigator = () => {
  return (
    <JobStack.Navigator>
      <JobStack.Screen name="Data" component={JobDetails} />
    </JobStack.Navigator>
  );
};
