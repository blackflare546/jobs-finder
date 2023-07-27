import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";

export default () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View>
        <Text>Landing Screen</Text>
        <TouchableOpacity>
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
