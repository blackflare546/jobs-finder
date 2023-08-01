import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { profileValidateSchema } from "../validations/profile.validate";
import { useProfileStore } from "../store";
import { Alert } from "react-native";
import { IProfileFormData } from "../../../stores/interface/profile-form.interface";

export const useProfile = () => {
  const name = useProfileStore((state) => state.name);
  const age = useProfileStore((state) => state.age);
  const address = useProfileStore((state) => state.address);
  const updateName = useProfileStore((state) => state.updateName);
  const updateAge = useProfileStore((state) => state.updateAge);
  const updateAddress = useProfileStore((state) => state.updateAddress);

  const defaultValues = {
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
    updateName(data.name);
    updateAge(data.age);
    updateAddress(data.address);

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
