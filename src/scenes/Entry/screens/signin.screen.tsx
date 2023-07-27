import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSignin } from "../hooks/use-signin.hooks";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { loginValidateSchema } from "../validations/login.validate";

const styles = StyleSheet.create({
  Layout: {
    justifyContent: "space-evenly",
    alignItems: "center",
    height: "100%",
  },
  Forms: {
    gap: 25,
  },
  Label: {
    color: "#0D0140",
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 10,
  },
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

export default () => {
  const { control, handleSubmit, isValid, onSubmit, errors } = useSignin();

  return (
    <SafeAreaView>
      <View style={styles.Layout}>
        <Text style={{ color: "#0D0140", fontSize: 30, fontWeight: "bold" }}>
          Welcome Back
        </Text>

        <View style={styles.Forms}>
          <View>
            <Text style={styles.Label}>Email</Text>
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
            <Text style={styles.Label}>Password</Text>

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
        </View>
      </View>
    </SafeAreaView>
  );
};
