import { Checkbox } from '~/components/ui/checkbox';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '~/components/ui/table';

// TODO - Add a modal for viewing job details on click

type ApplicationStatus =
  | 'Applied'
  | 'Interviewing'
  | 'Offer'
  | 'Rejected'
  | 'Withdrawn'
  | 'Other';

type JobDescription = {
  responsibilities: string[];
  requirements: string[];
};

type Job = {
  title: string;
  company: string;
  description: JobDescription;
  remote: Boolean;
  location: string;
  salary: string;
};

type JobApplication = {
  job: Job;
  appliedOn: Date;
  lastHeard: Date;
  status: ApplicationStatus;
  followedUp: Boolean;
  followUpCount: number;
};

const jobApplications = [
  {
    job: {
      title: 'Frontend Developer',
      company: 'Tech Innovators Inc.',
      description: {
        responsibilities: [
          'Build and maintain web applications',
          'Collaborate with design teams',
          'Ensure cross-browser compatibility',
        ],
        requirements: [
          'Proficient in React',
          'Experience with CSS/HTML',
          'Familiarity with REST APIs',
        ],
      },
      remote: true,
      location: 'Dallas, TX',
      salary: '$85,000',
    },
    appliedOn: new Date('2024-08-15'),
    lastHeard: new Date('2024-08-22'),
    status: 'Interviewing',
    followedUp: true,
    followUpCount: 0,
  },
  {
    job: {
      title: 'Backend Engineer',
      company: 'Data Wizards LLC',
      description: {
        responsibilities: [
          'Develop and optimize server-side logic',
          'Manage database architecture',
          'Ensure high performance',
        ],
        requirements: [
          'Strong knowledge of Node.js',
          'Experience with PostgreSQL',
          'Familiarity with cloud services',
        ],
      },
      remote: false,
      location: 'Austin, TX',
      salary: '$95,000',
    },
    appliedOn: new Date('2024-08-10'),
    lastHeard: new Date('2024-08-20'),
    status: 'Applied',
    followedUp: false,
    followUpCount: 3,
  },
  {
    job: {
      title: 'Full Stack Developer',
      company: 'Future Tech Solutions',
      description: {
        responsibilities: [
          'Work on both frontend and backend',
          'Develop APIs',
          'Collaborate with cross-functional teams',
        ],
        requirements: [
          'Experience with JavaScript frameworks',
          'Understanding of database systems',
          'Strong problem-solving skills',
        ],
      },
      remote: true,
      location: 'Remote',
      salary: '$100,000',
    },
    appliedOn: new Date('2024-07-30'),
    lastHeard: new Date('2024-08-05'),
    status: 'Offer',
    followedUp: true,
    followUpCount: 2,
  },
  {
    job: {
      title: 'DevOps Engineer',
      company: 'Cloud Pioneers',
      description: {
        responsibilities: [
          'Manage CI/CD pipelines',
          'Automate infrastructure',
          'Monitor system performance',
        ],
        requirements: [
          'Proficient in AWS',
          'Experience with Docker/Kubernetes',
          'Knowledge of scripting languages',
        ],
      },
      remote: false,
      location: 'San Francisco, CA',
      salary: '$120,000',
    },
    appliedOn: new Date('2024-08-01'),
    lastHeard: new Date('2024-08-12'),
    status: 'Rejected',
    followedUp: true,
    followUpCount: 4,
  },
  {
    job: {
      title: 'UI/UX Designer',
      company: 'Creative Minds',
      description: {
        responsibilities: [
          'Design user interfaces',
          'Create prototypes',
          'Conduct user research',
        ],
        requirements: [
          'Proficient in Figma',
          'Experience with user-centered design',
          'Strong visual design skills',
        ],
      },
      remote: true,
      location: 'New York, NY',
      salary: '$75,000',
    },
    appliedOn: new Date('2024-08-05'),
    lastHeard: new Date('2024-08-15'),
    status: 'Withdrawn',
    followedUp: false,
    followUpCount: 1,
  },
];

export function ApplicationTrackerTable() {
  return (
    <Table>
      <TableCaption>A list of your submitted job applications. </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Job Title</TableHead>
          <TableHead>Company Name</TableHead>
          <TableHead className="">Status</TableHead>
          <TableHead className="text-center">Applied On</TableHead>
          <TableHead className="text-center">Last Heard</TableHead>
          <TableHead className="text-center">Followed Up</TableHead>
          <TableHead className="text-center">Follow Up Count</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {jobApplications.map((application, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">
              {application.job.title}
            </TableCell>
            <TableCell>{application.job.company}</TableCell>
            <TableCell className="">{application.status}</TableCell>
            <TableCell className="text-center">
              {application.appliedOn.toLocaleDateString()}
            </TableCell>
            <TableCell className="text-center">
              {application.lastHeard.toLocaleDateString()}
            </TableCell>
            <TableCell className="text-center">
              <Checkbox checked={application.followedUp} />
            </TableCell>
            <TableCell className="text-center">
              {application.followUpCount}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>

      <TableFooter></TableFooter>
    </Table>
  );
}
