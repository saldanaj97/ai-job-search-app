import { User } from '@supabase/supabase-js';
import { Button } from '~/components/ui/button';

export default function Dashboard({ user }: { user: User }) {
  return (
    <div className="flex h-screen flex-col justify-evenly text-center">
      <div className="text-2xl font-semibold">Dashboard Screen</div>
      <a
        href="../members/application-tracker"
        className="flex w-full flex-row justify-center"
      >
        <Button>Application Tracker</Button>
      </a>

      <div className="text-center">Hello, {user.email}</div>
    </div>
  );
}
