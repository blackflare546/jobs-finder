import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { loginValidateSchema } from "../validations/login.validate";
import { ISigninForm } from "../../../stores/interface/signin-form.interface";

export const useSignin = () => {
  const defaultValues = {
    email: "",
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

  const onSubmit = (formData: ISigninForm) => {
    if (formData) {
      // Navigate to Main Screen
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
