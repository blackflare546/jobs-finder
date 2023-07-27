import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default () => {
  return (
    <SafeAreaView style={{ flex: 1, padding: 15, backgroundColor: "#E5E5E5" }}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <JobPosts title={item.title} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

type ItemProps = { title: string };

const JobPosts = ({ title }: ItemProps) => {
  return (
    <View style={styles.Container}>
      <Image source={require("../../../../assets/google.png")} />
      <Text style={styles.JobTitle}>UI/UX Designer</Text>
      <View style={styles.CompanyInfos}>
        <Text>Google inc . </Text>
        <Text>California, USA</Text>
      </View>
      <View style={styles.JobInfo}>
        <Text style={styles.Time}>25 minute ago</Text>
        <Text style={styles.Salary}>
          $20k
          <Text style={styles.Month}>/Mo</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    backgroundColor: "#fff",
    height: 200,
    borderRadius: 20,
    padding: 15,
    justifyContent: "space-evenly",
    marginVertical: 10,
  },
  JobTitle: {
    color: "#150A33",
    fontSize: 14,
    fontWeight: "bold",
  },
  CompanyInfos: {
    flexDirection: "row",
    color: "#524B6B",
  },
  JobInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  Time: {
    color: "#AAA6B9",
    fontWeight: "normal",
    fontSize: 12,
  },
  Salary: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#000",
  },
  Month: {
    fontWeight: "normal",
    color: "#AAA6B9",
  },
});
