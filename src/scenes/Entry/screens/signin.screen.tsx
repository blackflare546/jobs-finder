import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSignin } from "../hooks/use-signin.hooks";
import { Controller } from "react-hook-form";
import {
  Errors,
  Forms,
  Label,
  Layout,
  LoginButton,
  LoginText,
  TextFields,
  Welcome,
} from "../styles/signin.styled";

export default () => {
  const { control, handleSubmit, onSubmit, errors } = useSignin();

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
                <TextFields
                  autoCapitalize="none"
                  placeholder="john.doe@gmail.com"
                  onBlur={onBlur}
                  onChangeText={(text: string) => onChange(text)}
                  value={value}
                />
              )}
              name="email"
            />
            {errors.email && <Errors>{errors.email.message}.</Errors>}
          </View>

          <View>
            <Label>Password</Label>

            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextFields
                  autoCapitalize="none"
                  placeholder="john.doe@gmail.com"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  secureTextEntry
                />
              )}
              name="password"
            />
            {errors.password && <Errors>{errors.password.message}</Errors>}
          </View>

          <LoginButton onPress={handleSubmit(onSubmit)}>
            <LoginText>Login</LoginText>
          </LoginButton>
        </Forms>
      </Layout>
    </SafeAreaView>
  );
};
