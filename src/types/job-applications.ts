type JobApplicationStatus =
  | 'Applied'
  | 'Interviewing'
  | 'Offer'
  | 'Rejected'
  | 'Withdrawn'
  | 'Other';

type ExistingJobApplication = {
  appliedOn: string;
  company: string | null;
  created_at: string | null;
  followUpCount: number;
  followedUp: boolean;
  id: string;
  jobTitle: string;
  lastHeard: string;
  location: string | null;
  salary: string | null;
  status: JobApplicationStatus;
  updatedAt: Date;
  user_id: string;
  watching: boolean;
};

type NewJobApplication = Omit<ExistingJobApplication, 'id' | 'created_at'>;

type JobApplicationDataCopy = Omit<
  NewJobApplication,
  'id' | 'user_id' | 'created_at' | 'updated_at'
>;

type JobApplicationInput = Omit<NewJobApplication, 'id' | 'user_id'>;

export type {
  ExistingJobApplication,
  JobApplicationDataCopy,
  JobApplicationInput,
  NewJobApplication,
};
