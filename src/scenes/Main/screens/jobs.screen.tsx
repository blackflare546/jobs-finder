import { View, Text, FlatList, RefreshControl } from "react-native";
import { useJobs } from "../hooks/use-jobs.hooks";
import { Errors, Layout } from "../styles/jobs.styled";
import { JobPosts } from "./jobposts.screen";
import { ActivityIndicator } from "react-native";

const ErrorComponent = () => {
  return (
    <Errors>
      <Text>No Data Found</Text>
    </Errors>
  );
};

export default () => {
  const { data, isLoading, isRefetching, refetch } = useJobs();

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
            refreshControl={
              <RefreshControl refreshing={isRefetching} onRefresh={refetch} />
            }
          />
        )}
      </View>
    </Layout>
  );
};
