type PersonalInfoFormValues = {
  firstName: '';
  lastName: '';
  email: '';
  phone: '';
  city: '';
  state: '';
  country: '';
};

type ProfessionalSummaryFormValues = {
  summary: '';
};

// TODO - Add validation for date fields
//      - Add city
type EmploymentHistoryFormValues = {
  company: '';
  position: '';
  startDate: '';
  endDate: '';
  description: '';
};

type EducationFormValues = {
  school: '';
  degree: '';
  startDate: '';
  endDate: '';
  description: '';
};

type ExtraLinksFormValues = {
  title: '';
  url: '';
};

type SkillsFormValues = {
  skill: '';
};

type CertificationsFormValues = {
  certification: '';
  issuer: '';
  date: '';
};

export type {
  CertificationsFormValues,
  EducationFormValues,
  EmploymentHistoryFormValues,
  ExtraLinksFormValues,
  PersonalInfoFormValues,
  ProfessionalSummaryFormValues,
  SkillsFormValues,
};
