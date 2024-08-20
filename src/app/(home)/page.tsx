import { cookies } from 'next/headers';
import Hero from '~/components/hero/hero';
import { createClient } from '~/utils/supabase/server';
import DashboardPage from '../dashboard/page';

// TODO: Update the welcome message to be the users name instead of email (if they have one in the db)
export default async function LandingPage() {
  const supabase = createClient(cookies());

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="flex h-screen flex-col">
      {user ? <DashboardPage user={user} /> : <Hero />}
    </div>
  );
}
