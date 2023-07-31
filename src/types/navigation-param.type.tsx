import { NavigatorScreenParams } from "@react-navigation/native";

// TODO: Refactor Navigation

declare global {
  namespace ReactNavigation {
    interface RootParamList
      extends RootStackParamList,
        EntryStackParamList,
        ProfileStackParamList,
        JobsStackParamList {}
  }
}
export type RootStackParamList = {
  Entry: NavigatorScreenParams<EntryStackParamList> | undefined;
  Main: NavigatorScreenParams<MainBottomTabParamList> | undefined;
};

export type EntryStackParamList = {
  Landing: undefined;
  Signin: undefined;
};

export type MainBottomTabParamList = {
  "Profile Bottom Tab":
    | NavigatorScreenParams<ProfileStackParamList>
    | undefined;
  "Jobs Bottom Tab": NavigatorScreenParams<JobsStackParamList> | undefined;
};

//DASHBOARD
export type ProfileStackParamList = {
  Profile: undefined;
};

//DASHBOARD
export type JobsStackParamList = {
  Jobs: undefined;
};
