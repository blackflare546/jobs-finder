import { NavigatorScreenParams } from "@react-navigation/native";

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

// Job Stack Navigator
export type JobRootStackParamList = {
  Detail: { job: JobsData };
};

export type JobsData = {
  employer_name: string;
  company: string;
  job_title: string;
  job_id: string;
  job_country: string;
  employer_logo: string;
  job_description: string;
  job_apply_link: string;
};
