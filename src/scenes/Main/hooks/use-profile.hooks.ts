import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { profileValidateSchema } from "../validations/profile.validate";
import { useProfileStore } from "../store";
import { Alert } from "react-native";
import { IProfileFormData } from "../../../stores/interface/profile-form.interface";

export const useProfile = () => {
  const { name, age, address, updateName, updateAge, updateAddress } =
    useProfileStore((state) => state);

  const defaultValues: IProfileFormData = {
    name,
    age,
    address,
  };

  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm({
    defaultValues,
    mode: "all",
    resolver: yupResolver(profileValidateSchema),
  });

  const onSubmit = (data: IProfileFormData) => {
    updateName(data?.name);
    updateAge(data?.age);
    updateAddress(data.address);

    console.log(data);
    Alert.alert("Data Save");
  };

  return {
    control,
    isValid,
    errors,
    handleSubmit,
    onSubmit,
  };
};
