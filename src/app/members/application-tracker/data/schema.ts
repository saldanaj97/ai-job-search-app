import { z } from 'zod';

const ApplicationStatusSchema = z.enum([
  'Applied',
  'Interviewing',
  'Offer',
  'Rejected',
  'Withdrawn',
  'Other',
]);

// Define the updated JobApplication schema
export const JobApplicationSchema = z.object({
  jobTitle: z.string(), // Corresponds to job.title
  company: z.string(), // Corresponds to job.company
  // description: z.object({
  //   responsibilities: z.array(z.string()), // Responsibilities and requirements are now in the description field
  //   requirements: z.array(z.string()),
  // }),
  remote: z.boolean(), // Corresponds to job.remote
  location: z.string(), // Corresponds to job.location
  salary: z.string(), // Corresponds to job.salary
  appliedOn: z.union([z.string(), z.date()]).transform((val) => new Date(val)),
  lastHeard: z.union([z.string(), z.date()]).transform((val) => new Date(val)),
  status: ApplicationStatusSchema, // Use the enum schema for application status
  followedUp: z.boolean(),
  followUpCount: z.number(),
});

export type JobApplication = z.infer<typeof JobApplicationSchema>;
