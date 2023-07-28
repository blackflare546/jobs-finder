import { SafeAreaProvider } from "react-native-safe-area-context";
import { IntlProvider } from "react-intl";
import { NavigationContainer } from "@react-navigation/native";
import { RootNavigator } from "./src/@core/navigations";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 2 } },
});

export default function App() {
  return (
    <IntlProvider locale="en">
      <SafeAreaProvider>
        <NavigationContainer>
          <QueryClientProvider client={queryClient}>
            <RootNavigator />
          </QueryClientProvider>
        </NavigationContainer>
      </SafeAreaProvider>
    </IntlProvider>
  );
}
