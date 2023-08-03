import { Linking } from "react-native";
import React from "react";
import { JobRootStackParamList, JobsData } from "../../../types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ScrollView } from "react-native-gesture-handler";
import {
  Apply,
  ApplyText,
  Company,
  Container,
  Description,
  Header,
  JobTitle,
} from "../styles/job-details.styled";

type Props = NativeStackScreenProps<JobRootStackParamList, "Detail">;

const JobDetails = ({ route, navigation }: Props) => {
  const { job } = route.params;
  return (
    <ScrollView>
      <Container>
        <Header>
          <JobTitle>{job.job_title}</JobTitle>
          <Apply onPress={() => Linking.openURL(job.job_apply_link)}>
            <ApplyText>Apply</ApplyText>
          </Apply>
        </Header>
        <Company>{job.employer_name}</Company>
        <Description>{job.job_description}</Description>
      </Container>
    </ScrollView>
  );
};

export default JobDetails;
