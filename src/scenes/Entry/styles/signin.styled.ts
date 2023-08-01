import styled from "styled-components/native";

export const Layout = styled.View`
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
`;

export const Label = styled.Text`
  color: #0d0140;
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const TextFields = styled.TextInput`
  background-color: #fff;
  height: 50px;
  width: 300px;
  border-radius: 10px;
  padding: 15px;
`;

export const Welcome = styled.Text`
  color: #0d0140;
  font-size: 30px;
  font-weight: bold;
`;

export const Forms = styled.View`
  gap: 25px;
`;

export const LoginButton = styled.TouchableOpacity`
  margin-top: 20px;
  background-color: #130160;
  height: 50px;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
`;

export const LoginText = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
`;

export const Errors = styled.Text`
  color: red;
`;
