interface IJobPostItem {
  // API uses Snake_Case
  employer_name: string;
  company: string;
  job_title: string;
  job_id: string;
  job_country: string;
  employer_logo: string;
  job_description: string;
  job_apply_link: string;
}

export interface IJobPostsProps {
  item: IJobPostItem;
}
