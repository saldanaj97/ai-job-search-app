import { z } from 'zod';

const JobApplicationStatus = z.enum([
  'Applied',
  'Interviewing',
  'Offer',
  'Rejected',
  'Withdrawn',
  'Other',
]);

export const JobApplicationFormSchema = z.object({
  jobTitle: z.string().min(1),
  company: z.string().nullable(),
  location: z.string().nullable(),
  salary: z.string().nullable(),
  appliedOn: z.string(),
  lastHeard: z.string().nullable(),
  followedUp: z.boolean().default(false),
  status: JobApplicationStatus.default('Applied'),
});

export const EditJobApplicationFormSchema = z.object({
  jobTitle: z.string().min(1, 'Job title is required'),
  company: z.string().nullable(),
  location: z.string().nullable(),
  salary: z.string().nullable(),
  appliedOn: z.string(),
  lastHeard: z.string().nullable(),
  followedUp: z.boolean(),
  followUpCount: z.number().int().min(0, 'Follow up count cannot be negative'),
  user_id: z.string().uuid({ message: 'Invalid user ID' }),
  watching: z.boolean(),
  status: JobApplicationStatus,
});

export type JobApplicationStatus = z.infer<typeof JobApplicationStatus>;
export type JobApplicationForm = z.infer<typeof JobApplicationFormSchema>;
export type EditJobApplicationForm = z.infer<
  typeof EditJobApplicationFormSchema
>;
