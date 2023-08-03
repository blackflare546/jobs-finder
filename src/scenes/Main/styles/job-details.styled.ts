import styled from "styled-components/native";

export const Container = styled.View`
  flex: 15px;
  padding: 25px;
  background-color: #fff;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 25px;
`;

export const JobTitle = styled.Text`
  font-weight: bold;
  font-size: 32px;
  width: 75%;
  flex-wrap: wrap;
`;

export const Apply = styled.TouchableOpacity`
  background-color: #068fff;
  width: 60px;
  height: 30px;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
`;

export const ApplyText = styled.Text`
  color: #fff;
  font-weight: bold;
`;

export const Company = styled.Text`
  margin-bottom: 20px;
  font-weight: 500px;
  font-size: 20px;
`;
export const Description = styled.Text`
  margin-bottom: 50px;
  font-weight: 300px;
  font-size: 14px;
`;
