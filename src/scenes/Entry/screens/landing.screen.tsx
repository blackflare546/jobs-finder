import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image } from "react-native";
import {
  Container,
  Footer,
  Header,
  HightLighted,
  Jobspot,
  LandingImage,
  Layout,
  MainText,
  SinginButton,
  SubTitle,
} from "../styles/landings.styled";

export default () => {
  const navigation = useNavigation();

  return (
    <Layout>
      <Container>
        <Header>
          <Jobspot>Job Spot</Jobspot>
        </Header>
        <LandingImage
          source={require("../../../../assets/Landing-Image.png")}
        />
        <Footer>
          <MainText>Find asur</MainText>
          <HightLighted>Dream Job</HightLighted>
          <MainText>Here!</MainText>
          <SubTitle>
            Explore all the most exciting job roles based on your interest and
            study major.
          </SubTitle>
          <SinginButton
            onPress={() => navigation.navigate("Entry", { screen: "Signin" })}
          >
            <Image source={require("../../../../assets/Back.png")} />
          </SinginButton>
        </Footer>
      </Container>
    </Layout>
  );
};
