/* eslint-disable prettier/prettier */
import { type User } from '@supabase/supabase-js';
import fs from 'fs/promises';
import { Metadata } from 'next';
import path from 'path';
import { z } from 'zod';
import { JobApplicationSchema } from '~/app/application-tracker/data/schema';
import { ApplicationTrackerTable } from './application-tracker-table';

export const metadata: Metadata = {
  title: 'Job Application Tracker',
  description: 'Track your job applications and interviews.',
};

// Simulate a database read for tasks.
async function getTasks() {
  const data = await fs.readFile(
    path.join(
      process.cwd(),
      'components/application-tracker/data/job-applications.json'
    )
  );

  const applications = JSON.parse(data.toString());

  return z.array(JobApplicationSchema).parse(applications);
}

function DashboardPage({ user }: { user: User }) {
  // const { email } = user;

  return (
    <div className="flex h-screen flex-col items-center">
      <div className="flex-column flex items-center justify-center gap-4"></div>
      <ApplicationTrackerTable />
    </div>
  );
}

export default DashboardPage;
