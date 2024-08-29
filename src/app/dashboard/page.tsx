/* eslint-disable prettier/prettier */
import { type User } from '@supabase/supabase-js';
import { ApplicationTrackerTable } from './application-tracker-table';

function DashboardPage({ user }: { user: User }) {
  // const { email } = user;

  return (
    <div className="flex h-screen flex-col items-center">
      <div className="flex-column flex items-center justify-center gap-4">
        Dashboard
      </div>
      <ApplicationTrackerTable />
    </div>
  );
}

export default DashboardPage;
