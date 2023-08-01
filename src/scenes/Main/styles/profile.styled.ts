import styled from "styled-components/native";

export const Layout = styled.View`
  flex: 1;
  padding: 15px;
  background-color: #e5e5e5;
`;

export const FieldText = styled.TextInput`
  background-color: #fff;
  height: 50px;
  border-radius: 10px;
  padding: 15px;
`;

export const Label = styled.Text`
  margin-vertical: 15px;
`;

export const MultiLineText = styled.TextInput`
  background-color: #fff;
  height: 100px;
  border-radius: 10px;
  padding: 15px;
`;

export const Errors = styled.Text`
  color: red;
`;

export const SaveButton = styled.TouchableOpacity`
  margin-top: 15px;
  background-color: #48bf53;
  width: 50px;
  height: 30px;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
`;

export const Save = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
