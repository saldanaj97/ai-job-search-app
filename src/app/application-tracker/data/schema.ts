import { z } from 'zod';

const ApplicationStatusSchema = z.enum([
  'Applied',
  'Interviewing',
  'Offer',
  'Rejected',
  'Withdrawn',
  'Other',
]);

// Define your schema (example, assuming JobApplicationSchema is already defined)
export const JobApplicationSchema = z.object({
  job: z.object({
    title: z.string(),
    company: z.string(),
    description: z.object({
      responsibilities: z.array(z.string()),
      requirements: z.array(z.string()),
    }),
    remote: z.boolean(),
    location: z.string(),
    salary: z.string(),
  }),
  appliedOn: z.union([z.string(), z.date()]).transform((val) => new Date(val)),
  lastHeard: z.union([z.string(), z.date()]).transform((val) => new Date(val)),
  status: z.string(),
  followedUp: z.boolean(),
  followUpCount: z.number(),
});

export type JobApplication = z.infer<typeof JobApplicationSchema>;
