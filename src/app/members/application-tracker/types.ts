import { JobApplication } from './data/schema';

type JobApplicationDataCopy = Omit<
  JobApplication,
  'id' | 'userId' | 'createdAt' | 'updatedAt'
>;

export type { JobApplicationDataCopy };
