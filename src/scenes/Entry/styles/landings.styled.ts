import styled from "styled-components/native";

export const Layout = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

export const Container = styled.View`
  padding: 15px;
  flex: 1;
  justify-content: space-evenly;
  align-content: center;
  gap: 25px;
`;
export const Header = styled.View`
  align-items: flex-end;
`;

export const LandingImage = styled.Image`
  resize-mode: contain;
  width: 100%;
`;

export const Jobspot = styled.Text`
  color: #000;
  font-size: 18px;
  font-weight: 700;
`;

export const Footer = styled.View`
  margin-bottom: 10px;
`;

export const MainText = styled.Text`
  font-size: 40px;
  color: #000;
`;

export const HightLighted = styled.Text`
  color: #fca34d;
  font-size: 40px;
  font-weight: 700;
  text-decoration-line: underline;
`;

export const SinginButton = styled.TouchableOpacity`
  margin-left: auto;
`;

export const SubTitle = styled.Text`
  color: #524b6b;
  font-size: 14px;
`;
