import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { ISigninFormData } from "../../../stores/interface/signin-form.interface";
import { useNavigation } from "@react-navigation/native";
import { useSigninStore } from "../store";
import { loginValidateSchema } from "../validations/login.validate";

export const useSignin = () => {
  const navigation = useNavigation();

  const { email, updateEmail } = useSigninStore((state) => state);

  const defaultValues: ISigninFormData = {
    email,
    password: "",
  };

  const {
    handleSubmit,
    control,
    formState: { isValid, errors },
  } = useForm({
    defaultValues,
    mode: "all",
    resolver: yupResolver(loginValidateSchema),
  });

  const onSubmit = (formData: ISigninFormData) => {
    if (formData) {
      updateEmail(formData?.email);
      console.log(formData);
      // Navigate to Main Screen
      navigation.navigate("Main", { screen: "My Profile" });
    }
  };

  return {
    handleSubmit,
    control,
    isValid,
    errors,
    onSubmit,
  };
};
