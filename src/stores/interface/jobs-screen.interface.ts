interface IJobPostItem {
  employer_name: string;
  company: string;
  job_title: string;
  job_country: string;
  employer_logo: string;
}

export interface IJobPostsProps {
  item: IJobPostItem;
}
