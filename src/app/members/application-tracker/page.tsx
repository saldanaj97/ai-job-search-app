import { getAllJobApplications } from './actions';
import { columns } from './components/columns';
import { DataTable } from './components/data-table';

// TODO - Find better way to display table/data to a mobile user

export default async function JobApplicationTracker() {
  const { data, error } = await getAllJobApplications();

  return (
    <div className="hidden h-full flex-col space-y-8 px-6 py-8 md:flex lg:px-16">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
          <p className="text-muted-foreground">
            Here&apos;s a list of all the jobs you are currently tracking!
          </p>
        </div>
      </div>
      <DataTable columns={columns} data={data || []} error={error ?? null} />
    </div>
  );
}
