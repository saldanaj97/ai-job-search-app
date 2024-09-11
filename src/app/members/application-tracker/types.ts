import { JobApplication } from './data/schema';

type JobApplicationDataCopy = Omit<
  JobApplication,
  'id' | 'userId' | 'createdAt' | 'updatedAt'
>;

type JobApplicationInput = Omit<JobApplication, 'id' | 'userId'>;

export type { JobApplicationDataCopy, JobApplicationInput };
