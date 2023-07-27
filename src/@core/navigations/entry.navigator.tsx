import { createStackNavigator } from "@react-navigation/stack";
import { LandingScreen, SigninScreen } from "../../scenes/Entry";
import { RootStackParamList } from "../../types";

const Stack = createStackNavigator<keyof RootStackParamList["Entry"]>();

export const EntryNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Landing" component={LandingScreen} />
      <Stack.Screen name="Signin" component={SigninScreen} />
    </Stack.Navigator>
  );
};
