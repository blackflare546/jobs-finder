import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { EntryNavigator } from "./entry.navigator";

const Stack = createNativeStackNavigator();

export function RootNavigator() {
  return (
    <Stack.Navigator>
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
