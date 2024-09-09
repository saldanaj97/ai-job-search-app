import { getAllJobApplications } from './actions';
import { columns } from './components/columns';
import { DataTable } from './components/data-table';

export default async function JobApplicationTracker() {
  const { data, error } = await getAllJobApplications();

  return (
    <div className="hidden h-full flex-1 flex-col space-y-8 px-16 py-8 md:flex">
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
