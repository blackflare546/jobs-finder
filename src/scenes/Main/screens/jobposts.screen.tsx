import { Text } from "react-native";
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

export const JobPosts: React.FC<JobPostsProps> = ({ item }) => {
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
