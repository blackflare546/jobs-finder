import React from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";
import { useProfileStore } from "../store";

const ProfileScreen = () => {
  const name = useProfileStore((state) => state.name);
  const age = useProfileStore((state) => state.age);
  const address = useProfileStore((state) => state.address);
  const updateName = useProfileStore((state) => state.updateName);
  const updateAge = useProfileStore((state) => state.updateAge);
  const updateAddress = useProfileStore((state) => state.updateAddress);

  return (
    <View style={{ padding: 15 }}>
      <Text>Name</Text>
      <TextInput
        placeholder="name"
        style={styles.TextField}
        value={name}
        onChangeText={(text) => updateName(text)}
      />

      <Text>Age</Text>
      <TextInput
        placeholder="Age"
        style={styles.TextField}
        value={age}
        onChangeText={(text) => updateAge(text)}
      />

      <Text>Address</Text>
      <TextInput
        placeholder="name"
        style={styles.Address}
        value={address}
        multiline={true}
        numberOfLines={4}
        onChangeText={(text) => updateAddress(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  TextField: {
    backgroundColor: "#fff",
    height: 50,
    borderRadius: 10,
    padding: 15,
  },
  Address: {
    backgroundColor: "#fff",
    height: 100,
    borderRadius: 10,
    padding: 15,
  },
});

export default ProfileScreen;
