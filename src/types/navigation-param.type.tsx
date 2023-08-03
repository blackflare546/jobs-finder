import { NavigatorScreenParams } from "@react-navigation/native";

// TODO: Refactor Navigation

declare global {
  namespace ReactNavigation {
    interface RootParamList
      extends RootStackParamList,
        EntryStackParamList,
        MainBottomTabParamList,
        JobRootStackParamList {}
  }
}

// Main Root Navigators
export type RootStackParamList = {
  Entry: NavigatorScreenParams<EntryStackParamList> | undefined;
  Main: NavigatorScreenParams<MainBottomTabParamList> | undefined;
  Jobs: NavigatorScreenParams<JobRootStackParamList> | undefined;
};

// Screen Routes
export type EntryStackParamList = {
  Landing: undefined;
  Signin: undefined;
};

// Main Bottom Navigators
export type MainBottomTabParamList = {
  "My Profile": undefined;
  "Search Jobs": undefined;
};

// // Screen Routes
// export type ProfileStackParamList = {
//   "Profile Screen": undefined;
// };

// Job Stack Navigator
export type JobRootStackParamList = {
  Data: undefined;
};

// // Screen Routes
// export type JobsStackParamList = {
//   Details: undefined;
// };

// export type JobsData = {
//   job_id: string;
//   job_title: string;
//   job_country: string;
// };
