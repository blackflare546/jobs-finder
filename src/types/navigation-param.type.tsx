import { NavigatorScreenParams } from "@react-navigation/native";

// TODO: Refactor Navigation

declare global {
  namespace ReactNavigation {
    interface RootParamList
      extends RootStackParamList,
        EntryStackParamList,
        MainBottomTabParamList,
        ProfileStackParamList,
        JobsStackParamList {}
  }
}

// Main Root Navigators
export type RootStackParamList = {
  Entry: NavigatorScreenParams<EntryStackParamList> | undefined;
  Main: NavigatorScreenParams<MainBottomTabParamList> | undefined;
};

// Screen Routes
export type EntryStackParamList = {
  Landing: undefined;
  Signin: undefined;
};

// Main Bottom Navigators
export type MainBottomTabParamList = {
  "My Profile": NavigatorScreenParams<ProfileStackParamList> | undefined;
  "Search Jobs": NavigatorScreenParams<JobsStackParamList> | undefined;
};

// Screen Routes
export type ProfileStackParamList = {
  "Profile Screen": undefined;
};

// Screen Routes
export type JobsStackParamList = {
  "Jobs Details": undefined;
};
