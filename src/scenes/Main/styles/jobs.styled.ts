import styled from "styled-components/native";

export const Layout = styled.SafeAreaView`
  flex: 1;
  background-color: #e5e5e5;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const Container = styled.View`
  background-color: #fff;
  height: 150px;
  border-radius: 20px;
  padding: 15px;
  justify-content: space-evenly;
  margin-vertical: 10px;
`;

export const Logo = styled.Image`
  width: 66px;
  height: 58px;
`;

export const JobTitle = styled.Text`
  color: #150a33;
  font-size: 14px;
  font-weight: bold;
`;

export const CompanyInfo = styled.View`
  flex-direction: row;
  color: #524b6b;
`;

export const Errors = styled.View`
  flex: 1;
  justify-content: center;
  aligni-items: center;
`;
