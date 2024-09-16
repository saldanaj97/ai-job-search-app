import { User } from '@supabase/supabase-js';
import { Metadata } from 'next';
import { Button } from '~/components/ui/button';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Member Dashboard',
};

export default function Members({ user }: { user: User }) {
  if (!user) {
    return <div>Loading User Data...</div>;
  }
  return (
    <div className="flex h-screen flex-col justify-evenly text-center">
      <div className="flex flex-col gap-8">
        <div className="text-center">Hi, Bulby</div>
        <div className="text-2xl font-semibold">Dashboard Screen</div>
        <a
          href="../members/application-tracker"
          className="flex w-full flex-row justify-center"
        >
          <Button>Application Tracker</Button>
        </a>
        <a
          href="../members/resume-builder"
          className="flex w-full flex-row justify-center"
        >
          <Button>Resume Builder</Button>
        </a>
      </div>
    </div>
  );
}
