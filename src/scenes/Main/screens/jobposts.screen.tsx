import { Text } from "react-native";
import { CompanyInfo, Container, JobTitle } from "../styles/jobs.styled";
import { IJobPostsProps } from "../../../stores/interface/jobs-screen.interface";

export const JobPosts: React.FC<IJobPostsProps> = ({ item }) => {
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
