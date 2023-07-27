import { createStackNavigator } from "@react-navigation/stack";
import { LandingScreen } from "../../scenes/Entry";

const Stack = createStackNavigator();

export const EntryNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Landing" component={LandingScreen} />
    </Stack.Navigator>
  );
};
