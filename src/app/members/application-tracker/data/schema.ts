import { z } from 'zod';

const ApplicationStatusSchema = z.enum([
  'Applied',
  'Interviewing',
  'Offer',
  'Rejected',
  'Withdrawn',
  'Other',
]);

const dateOrNull = z
  .union([z.string(), z.date(), z.null()])
  .refine((val) => val === null || !isNaN(new Date(val).getTime()), {
    message: 'Invalid date format',
  })
  .transform((val) => {
    if (val === null) return null;
    const date = new Date(val);
    return date.toISOString(); // Format date as ISO string
  });

export const JobApplicationSchema = z.object({
  jobTitle: z.string(),
  company: z.string(),
  location: z.string(),
  salary: z.string(),
  appliedOn: dateOrNull,
  lastHeard: dateOrNull,
  status: ApplicationStatusSchema,
  followedUp: z.boolean(),
  followUpCount: z.number(),
});

export type JobApplication = z.infer<typeof JobApplicationSchema>;
