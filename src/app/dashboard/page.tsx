/* eslint-disable prettier/prettier */
import { type User } from '@supabase/supabase-js';

function DashboardPage({ user }: { user: User }) {
  const { email } = user;

  return (
    <div className="flex h-screen flex-col items-center">
      <div className="flex-column flex items-center justify-center gap-4">
        Dashboard
      </div>
      <div>Hello, {email}</div>
    </div>
  );
}

export default DashboardPage;
