import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { EntryNavigator } from "./entry.navigator";
import { MainBottomTabParamList, RootStackParamList } from "../../types";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text } from "react-native";

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
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator<MainBottomTabParamList>();

const MainBottomTabNavigator = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="Profile Bottom Tab" component={HomeScreen} />
      <BottomTab.Screen name="Jobs Bottom Tab" component={SettingsScreen} />
    </BottomTab.Navigator>
  );
};

const HomeScreen = () => {
  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  );
};

const SettingsScreen = () => {
  return (
    <View>
      <Text>Settings Screen</Text>
    </View>
  );
};
