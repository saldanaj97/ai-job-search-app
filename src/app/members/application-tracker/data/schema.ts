import { z } from 'zod';

export const JobApplicationSchema = z.object({
  jobTitle: z.string().min(1),
  company: z.string().nullable(),
  location: z.string().nullable(),
  salary: z.string().nullable(),
  appliedOn: z.date(),
  lastHeard: z.date().nullable(),
  status: z.enum([
    'Applied',
    'Interviewing',
    'Offer',
    'Rejected',
    'Withdrawn',
    'Other',
  ]),
  followedUp: z.boolean().default(false),
  followUpCount: z
    .number()
    .int()
    .min(0, 'Follow up count cannot be negative')
    .default(0),
  createdAt: z.date().default(() => new Date()),
});

export const JobApplicationEditSchema = z.object({
  jobTitle: z.string().min(1, 'Job title is required'),
  company: z.string().nullable(),
  location: z.string().nullable(),
  salary: z.string().nullable(),
  appliedOn: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: 'Invalid date format. Use YYYY-MM-DD',
  }),
  lastHeard: z
    .string()
    .refine((date) => date === '' || !isNaN(Date.parse(date)), {
      message: 'Invalid date format. Use YYYY-MM-DD',
    })
    .nullable(),
  status: z.enum([
    'Applied',
    'Interviewing',
    'Offer',
    'Rejected',
    'Withdrawn',
    'Other',
  ]),
  followedUp: z.boolean(),
  followUpCount: z
    .number()
    .int()
    .min(0, 'Follow up count cannot be negative')
    .default(0),
  userId: z.string().uuid({ message: 'Invalid user ID' }),
});

export type JobApplication = z.infer<typeof JobApplicationSchema>;
export type EditJobApplication = z.infer<typeof JobApplicationEditSchema>;
