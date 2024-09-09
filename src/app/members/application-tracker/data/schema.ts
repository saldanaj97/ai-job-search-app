import { z } from 'zod';

const ApplicationStatusSchema = z.enum([
  'Applied',
  'Interviewing',
  'Offer',
  'Rejected',
  'Withdrawn',
  'Other',
]);

export const JobApplicationSchema = z.object({
  id: z.string().optional(),
  jobTitle: z.string().nonempty('Job Title is required'),
  company: z.string().nonempty('Company is required'),
  location: z.string().nonempty('Location is required'),
  salary: z.string().optional(),
  appliedOn: z
    .union([
      z.date(),
      z.string().refine((val) => !isNaN(Date.parse(val)), 'Invalid date'),
    ]) // Allow both Date objects and valid date strings
    .transform((val) => (val instanceof Date ? val : new Date(val))), // Ensure it's always a Date
  lastHeard: z
    .union([
      z.date(),
      z.string().refine((val) => !isNaN(Date.parse(val)), 'Invalid date'),
    ]) // Same for lastHeard
    .transform((val) => (val instanceof Date ? val : new Date(val))),
  status: ApplicationStatusSchema,
  followedUp: z.boolean(),
  followUpCount: z.number().min(0, 'Follow up count cannot be negative'), // Adding a validation rule for non-negative numbers
});

export type JobApplication = z.infer<typeof JobApplicationSchema>;
