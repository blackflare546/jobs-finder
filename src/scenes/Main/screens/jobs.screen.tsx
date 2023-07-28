import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useJobs } from "../hooks/use-jobs.hooks";

const JobPosts: React.FC<JobPostsProps> = ({ item }) => {
  return (
    <View>
      <Text>{item.job_title}</Text>
    </View>
  );
};

export default () => {
  const { data, isLoading } = useJobs();

  return (
    <SafeAreaView
      style={{
        padding: 15,
        flexDirection: "row",
      }}
    >
      <View>
        {isLoading ? (
          <Text>Loading...</Text>
        ) : data ? (
          <FlatList
            data={data.data}
            renderItem={({ item }) => <JobPosts item={item} />}
            keyExtractor={(item, index) => index.toString()}
            numColumns={2}
          />
        ) : (
          <Text>Whoops No Data Available</Text>
        )}
      </View>
    </SafeAreaView>
  );
};

interface JobPostItem {
  employer_name: string;
  company: string;
  job_title: string;
  job_country: string;
  employer_logo: string;
}

interface JobPostsProps {
  item: JobPostItem;
}
