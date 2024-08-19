import { cookies } from 'next/headers';
import Hero from '~/components/hero/hero';
import { createClient } from '~/utils/supabase/server';

export default async function LandingPage() {
  const supabase = createClient(cookies());

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="flex h-screen flex-col">
      {user ? (
        <div className="flex-column flex items-center justify-center gap-4">
          Welcome back, {user.email}! // TODO: Update this to be the users name (if they have one in the db)
        </div>
      ) : (
        <Hero />
      )}
    </div>
  );
}
