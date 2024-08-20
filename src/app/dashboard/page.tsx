import { type User } from '@supabase/supabase-js';

export default function DashboardPage({ ...props }: { user: User }) {
  const { email } = props.user;

  return (
    <div className="flex h-screen flex-col">
      <div className="flex-column flex items-center justify-center gap-4">Dashboard</div>
      <div>Hello, {email}</div>
    </div>
  );
}
