import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { EntryNavigator } from "./entry.navigator";
import { MainBottomTabParamList, RootStackParamList } from "../../types";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text } from "react-native";
import { JobsScreen, ProfileScreen } from "../../scenes/Main";

const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootNavigator() {
  const initialRouteName: keyof RootStackParamList = "Main";

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
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator<MainBottomTabParamList>();

const MainBottomTabNavigator = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="Profile Bottom Tab" component={ProfileScreen} />
      <BottomTab.Screen name="Jobs Bottom Tab" component={JobsScreen} />
    </BottomTab.Navigator>
  );
};
