import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { CompanyInfo, Container, JobTitle, Logo } from "../styles/jobs.styled";
import { IJobPostsProps } from "../../../stores/interface/jobs-screen.interface";
import { checkImageURL } from "../../../@core/utils";
import { useNavigation } from "@react-navigation/native";

export const JobPosts: React.FC<IJobPostsProps> = ({ item }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Jobs", { screen: "Detail", params: { job: item } })
      }
    >
      <Container>
        <Logo
          source={{
            uri: checkImageURL(item.employer_logo)
              ? item.employer_logo
              : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
          }}
          resizeMode="contain"
        />
        <JobTitle>{item.job_title}</JobTitle>
        <CompanyInfo>
          <Text>{item.employer_name} | </Text>
          <Text>{item.job_country}</Text>
        </CompanyInfo>
      </Container>
    </TouchableOpacity>
  );
};
