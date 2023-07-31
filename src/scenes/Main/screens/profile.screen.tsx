import React from "react";
import { Text } from "react-native";
import { useProfileStore } from "../store";
import {
  FieldText,
  Label,
  Layout,
  MultiLineText,
} from "../styles/profile.styled";

const ProfileScreen = () => {
  const name = useProfileStore((state) => state.name);
  const age = useProfileStore((state) => state.age);
  const address = useProfileStore((state) => state.address);
  const updateName = useProfileStore((state) => state.updateName);
  const updateAge = useProfileStore((state) => state.updateAge);
  const updateAddress = useProfileStore((state) => state.updateAddress);

  return (
    <Layout>
      <Label>Name</Label>
      <FieldText
        placeholder="name"
        value={name}
        onChangeText={(text: string) => updateName(text)}
      />

      <Label>Age</Label>
      <FieldText
        placeholder="Age"
        value={age}
        onChangeText={(text: string) => updateAge(text)}
      />

      <Label>Address</Label>
      <MultiLineText
        placeholder="name"
        value={address}
        multiline={true}
        numberOfLines={4}
        onChangeText={(text: string) => updateAddress(text)}
      />
    </Layout>
  );
};

export default ProfileScreen;
