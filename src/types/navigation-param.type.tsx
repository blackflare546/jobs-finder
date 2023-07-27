import { NavigatorScreenParams } from "@react-navigation/native";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList, EntryStackParamList {}
  }
}
export type RootStackParamList = {
  Entry: NavigatorScreenParams<EntryStackParamList> | undefined;
};

export type EntryStackParamList = {
  Landing: undefined;
  Signin: undefined;
};
