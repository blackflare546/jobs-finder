import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useJobs } from "../hooks/use-jobs.hooks";
import { CompanyInfo, Container, JobTitle } from "../styles/jobs.styled";

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

const JobPosts: React.FC<JobPostsProps> = ({ item }) => {
  return (
    <Container>
      <JobTitle>{item.job_title}</JobTitle>
      <CompanyInfo>
        <Text>{item.employer_name} | </Text>
        <Text>{item.job_country}</Text>
      </CompanyInfo>
    </Container>
  );
};

export default () => {
  const { data, isLoading } = useJobs();

  return (
    <SafeAreaView style={{ flex: 1, padding: 15, backgroundColor: "#E5E5E5" }}>
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
    </SafeAreaView>
  );
};
