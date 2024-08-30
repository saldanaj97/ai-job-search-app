import { promises as fs } from 'fs';
import Image from 'next/image';
import path from 'path';
import { z } from 'zod';

import { columns } from './components/columns';
import { DataTable } from './components/data-table';
import { JobApplicationSchema } from './data/schema';

// Simulate a database read for tasks.
async function getJobApplications() {
  const data = await fs.readFile(
    path.join(
      process.cwd(),
      'src/app/members/application-tracker/data/job-applications.json'
    )
  );

  const applications = JSON.parse(data.toString());

  return z.array(JobApplicationSchema).parse(applications);
}

export default async function TaskPage() {
  const jobApplications = await getJobApplications();

  return (
    <>
      <div className="md:hidden">
        <Image
          src="/examples/tasks-light.png"
          width={1280}
          height={998}
          alt="Playground"
          className="block dark:hidden"
        />
        <Image
          src="/examples/tasks-dark.png"
          width={1280}
          height={998}
          alt="Playground"
          className="hidden dark:block"
        />
      </div>
      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
            <p className="text-muted-foreground">
              Here&apos;s a list of all the jobs you are currently tracking!
            </p>
          </div>
        </div>
        <DataTable data={jobApplications} columns={columns} />
      </div>
    </>
  );
}
