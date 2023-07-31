import { View, Text, FlatList } from "react-native";
import { useJobs } from "../hooks/use-jobs.hooks";
import { Layout } from "../styles/jobs.styled";
import { JobPosts } from "./jobposts.screen";

export default () => {
  const { data, isLoading } = useJobs();

  return (
    <Layout>
      <View>
        {isLoading ? (
          <Text>Loading...</Text>
        ) : data ? (
          <FlatList
            data={data.data}
            renderItem={({ item }) => <JobPosts item={item} />}
            keyExtractor={(item, index) => index.toString()}
          />
        ) : (
          <Text>Whoops No Data Available</Text>
        )}
      </View>
    </Layout>
  );
};
