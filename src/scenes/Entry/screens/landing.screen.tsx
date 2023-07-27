import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

const styles = StyleSheet.create({
  Layout: {
    flex: 1,
    backgroundColor: "#fff",
  },
  Container: {
    padding: 15,
    flex: 1,
    justifyContent: "space-between",
    alignContent: "center",
    gap: 25,
  },
  JobSpot: {
    color: "#000000",
    fontSize: 18,
    fontWeight: "700",
  },
  MainText: {
    fontSize: 40,
    color: "#000",
  },
  DreamJob: {
    color: "#FCA34D",
    fontSize: 40,
    fontWeight: "700",
    textDecorationLine: "underline",
  },
  Footer: { marginBottom: 10 },
  Subtitle: {
    color: "#524B6B",
    fontSize: 14,
  },
});

export default () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.Layout}>
      <View style={styles.Container}>
        <View style={{ alignItems: "flex-end" }}>
          <Text style={styles.JobSpot}>Jobs Spot</Text>
        </View>
        <Image source={require("../../../../assets/Landing-Image.png")} />
        <View style={styles.Footer}>
          <Text style={styles.MainText}>Find Your</Text>
          <Text style={styles.DreamJob}>Dream Job</Text>
          <Text style={styles.MainText}>Here</Text>
          <Text style={styles.Subtitle}>
            Explore all the most exciting job roles based on your interest and
            study major.
          </Text>
          <TouchableOpacity style={{ marginLeft: "auto" }}>
            <Image source={require("../../../../assets/Back.png")} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
