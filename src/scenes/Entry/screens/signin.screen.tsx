import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSignin } from "../hooks/use-signin.hooks";
import { Controller } from "react-hook-form";
import { Forms, Label, Layout, Welcome } from "../styles/signin.styled";

export default () => {
  const { control, handleSubmit, isValid, onSubmit, errors } = useSignin();

  return (
    <SafeAreaView>
      <Layout>
        <Welcome>Welcome Back</Welcome>

        <Forms>
          <View>
            <Label>Email</Label>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  autoCapitalize="none"
                  placeholder="john.doe@gmail.com"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  style={styles.Inputs}
                />
              )}
              name="email"
            />
            {errors.email && (
              <Text style={{ color: "red" }}>{errors.email.message}.</Text>
            )}
          </View>

          <View>
            <Label>Password</Label>

            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  autoCapitalize="none"
                  placeholder="john.doe@gmail.com"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  style={styles.Inputs}
                  secureTextEntry
                />
              )}
              name="password"
            />
            {errors.password && (
              <Text style={{ color: "red" }}>{errors.password.message}</Text>
            )}
          </View>
          <TouchableOpacity
            style={styles.LoginButton}
            onPress={handleSubmit(onSubmit)}
          >
            <Text style={styles.LoginText}>Login</Text>
          </TouchableOpacity>
        </Forms>
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Inputs: {
    backgroundColor: "#fff",
    height: 50,
    width: 300,
    borderRadius: 10,
    padding: 15,
  },
  LoginButton: {
    marginTop: 20,
    backgroundColor: "#130160",
    height: 50,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  LoginText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
});
