import React from "react";
import {
  Errors,
  FieldText,
  Label,
  Layout,
  MultiLineText,
  Save,
  SaveButton,
} from "../styles/profile.styled";
import { useProfile } from "../hooks/use-profile.hooks";
import { Controller } from "react-hook-form";

const ProfileScreen = () => {
  const { control, handleSubmit, onSubmit, errors } = useProfile();

  return (
    <Layout>
      <Label>Name</Label>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <FieldText
            autoCapitalize="none"
            placeholder="John Doe"
            onBlur={onBlur}
            onChangeText={(text: string) => onChange(text)}
            value={value}
          />
        )}
        name="name"
      />
      {errors.name && <Errors>{errors.name.message}</Errors>}

      <Label>Age</Label>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <FieldText
            placeholder="24"
            onBlur={onBlur}
            onChangeText={(age: string) => onChange(age)}
            value={value}
          />
        )}
        name="age"
      />
      {errors.age && <Errors>{errors.age.message}</Errors>}

      <Label>Address</Label>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <MultiLineText
            placeholder="Building No., Street, City"
            onBlur={onBlur}
            multiline={true}
            numberOfLines={4}
            onChangeText={(address: string) => onChange(address)}
            value={value}
          />
        )}
        name="address"
      />
      {errors.address && <Errors>{errors.address.message}</Errors>}

      <SaveButton onPress={handleSubmit(onSubmit)}>
        <Save>Save</Save>
      </SaveButton>
    </Layout>
  );
};

export default ProfileScreen;
