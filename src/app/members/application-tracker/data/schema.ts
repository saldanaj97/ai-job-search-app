import { z } from 'zod';

const ApplicationStatusSchema = z.enum([
  'Applied',
  'Interviewing',
  'Offer',
  'Rejected',
  'Withdrawn',
  'Other',
]);

// const dateOrNull = z
//   .union([z.string(), z.date(), z.null()])
//   .refine((val) => val === null || !isNaN(new Date(val).getTime()), {
//     message: 'Invalid date format',
//   })
//   .transform((val) => {
//     if (val === null) return null;
//     const date = new Date(val);
//     return date.toISOString(); // Format date as ISO string
//   });

export const JobApplicationSchema = z.object({
  id: z.string().optional(), // ID is often auto-generated, so making it optional
  jobTitle: z.string().nonempty('Job Title is required'), // Add validation messages
  company: z.string().nonempty('Company is required'),
  location: z.string().nonempty('Location is required'),
  salary: z.string().optional(), // Salary may be optional
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
  status: ApplicationStatusSchema, // Make sure this schema is correctly imported or defined
  followedUp: z.boolean(),
  followUpCount: z.number().min(0, 'Follow up count cannot be negative'), // Adding a validation rule for non-negative numbers
});

export type JobApplication = z.infer<typeof JobApplicationSchema>;
