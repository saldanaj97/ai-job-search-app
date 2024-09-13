type ExistingJobApplication = {
  appliedOn: string;
  company: string | null;
  created_at: Date | null;
  followUpCount: number;
  followedUp: boolean;
  id: string;
  jobTitle: string;
  lastHeard: string | null;
  location: string | null;
  salary: string | null;
  status: JobApplicationStatus;
  updated_at: Date;
  user_id: string;
  watching: boolean;
};

type JobApplicationDataCopy = Omit<
  NewJobApplication,
  'id' | 'user_id' | 'created_at' | 'updated_at'
>;

type JobApplicationStatus =
  | 'Applied'
  | 'Interviewing'
  | 'Offer'
  | 'Rejected'
  | 'Withdrawn'
  | 'Other';

type JobApplicationInput = Omit<NewJobApplication, 'id' | 'user_id'>;

type NewJobApplication = Omit<ExistingJobApplication, 'id' | 'created_at'>;

export type {
  ExistingJobApplication,
  JobApplicationDataCopy,
  JobApplicationInput,
  NewJobApplication,
};
