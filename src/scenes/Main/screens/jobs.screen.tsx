import { View, Text, FlatList } from "react-native";
import { useJobs } from "../hooks/use-jobs.hooks";
import { Layout } from "../styles/jobs.styled";
import { JobPosts } from "./jobposts.screen";
import { ActivityIndicator } from "react-native";

const ErrorComponent = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>No Data Found</Text>
    </View>
  );
};

export default () => {
  const { data, isLoading } = useJobs();

  return (
    <Layout>
      <View style={{ padding: 10 }}>
        {isLoading ? (
          <ActivityIndicator size="large" />
        ) : (
          <FlatList
            data={data.data}
            renderItem={({ item }) => <JobPosts item={item} />}
            keyExtractor={(item, index) => index.toString()}
            ListEmptyComponent={ErrorComponent}
          />
        )}
      </View>
    </Layout>
  );
};
