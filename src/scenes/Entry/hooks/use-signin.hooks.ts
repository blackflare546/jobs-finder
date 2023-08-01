import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { loginValidateSchema } from "../validations/login.validate";
import { ISigninFormData } from "../../../stores/interface/signin-form.interface";
import { useNavigation } from "@react-navigation/native";
import { useSigninStore } from "../store";

export const useSignin = () => {
  const navigation = useNavigation();

  const email = useSigninStore((state) => state.email);
  const password = useSigninStore((state) => state.password);
  const updateEmail = useSigninStore((state) => state.updateEmail);

  const defaultValues = {
    email,
    password,
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
    updateEmail(formData.email);
    if (formData) {
      console.log(formData);
      // Navigate to Main Screen
      navigation.navigate("Main", { screen: "Profile Bottom Tab" });
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
