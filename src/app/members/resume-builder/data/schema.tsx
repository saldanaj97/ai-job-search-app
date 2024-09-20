import { z } from 'zod';

export const ResumePersonalInfoFormSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 characters'),
  city: z.string().min(2, 'City must be at least 2 characters'),
  state: z.string().min(2, 'State must be at least 2 characters'),
  country: z.string().min(2, 'Country must be at least 2 characters'),
});

export const ProfessionalSummaryFormSchema = z.object({
  summary: z.string().min(10, 'Summary must be at least 10 characters'),
});

// TODO - Add validation for date fields
//      - Add city
export const EmploymentHistoryFormSchema = z.object({
  company: z.string().min(2, 'Company name must be at least 2 characters'),
  position: z.string().min(2, 'Position must be at least 2 characters'),
  startDate: z.string().min(2, 'Start date must be at least 2 characters'),
  endDate: z.string().min(2, 'End date must be at least 2 characters'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
});

export const EducationFormSchema = z.object({
  school: z.string().min(2, 'School name must be at least 2 characters'),
  degree: z.string().min(2, 'Degree must be at least 2 characters'),
  startDate: z.string().min(2, 'Start date must be at least 2 characters'),
  endDate: z.string().min(2, 'End date must be at least 2 characters'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
});

export const ExtraLinksFormSchema = z.object({
  title: z.string().min(2, 'Title must be at least 2 characters'),
  url: z.string().url('Invalid URL'),
});

export const SkillsFormSchema = z.object({
  skill: z.string().min(2, 'Skill must be at least 2 characters'),
});

export const CertificationsFormSchema = z.object({
  certification: z
    .string()
    .min(2, 'Certification must be at least 2 characters'),
  issuer: z.string().min(2, 'Issuer must be at least 2 characters'),
  date: z.string().min(2, 'Date must be at least 2 characters'),
});

export const JobDetailsFormSchema = z.object({
  jobTitle: z.string().nullable(),
  company: z.string().min(2, 'Company name must be at least 2 characters'),
  description: z.string().nullable(),
  keywords: z.string().nullable(),
});
