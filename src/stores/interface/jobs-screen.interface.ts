interface IJobPostItem {
  // API uses Snake_Case
  employer_name: string;
  company: string;
  job_title: string;
  job_country: string;
  employer_logo: string;
}

export interface IJobPostsProps {
  item: IJobPostItem;
}
