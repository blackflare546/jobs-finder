import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, TouchableOpacity } from "react-native";
import {
  Container,
  Footer,
  Header,
  HightLighted,
  Jobspot,
  Layout,
  MainText,
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
        <Image
          style={{ resizeMode: "contain", width: "100%" }}
          source={require("../../../../assets/Landing-Image.png")}
        />
        <Footer>
          <MainText>Find Your</MainText>
          <HightLighted>Dream Job</HightLighted>
          <MainText>Here!</MainText>
          <SubTitle>
            Explore all the most exciting job roles based on your interest and
            study major.
          </SubTitle>
          <TouchableOpacity
            style={{ marginLeft: "auto" }}
            onPress={() => navigation.navigate("Entry", { screen: "Signin" })}
          >
            <Image source={require("../../../../assets/Back.png")} />
          </TouchableOpacity>
        </Footer>
      </Container>
    </Layout>
  );
};
