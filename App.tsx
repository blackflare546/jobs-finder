import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { IntlProvider } from "react-intl";
import { NavigationContainer } from "@react-navigation/native";
import { RootNavigator } from "./src/@core/navigations";

export default function App() {
  return (
    <IntlProvider locale="en">
      <SafeAreaProvider>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </IntlProvider>
  );
}
