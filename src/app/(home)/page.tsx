import { cookies } from 'next/headers';
import Hero from '~/components/hero/hero';
import { createClient } from '~/utils/supabase/server';
import DashboardPage from '../dashboard/page';
import { CallToAction } from './cta';
import HowItWorks from './how-it-works';
import MainFeatures from './main-features';

export default async function LandingPage() {
  const supabase = createClient(cookies());

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="flex flex-col">
      {user ? (
        <DashboardPage user={user} />
      ) : (
        <>
          <Hero />
          <HowItWorks />
          <MainFeatures />
          <CallToAction />
        </>
      )}
    </div>
  );
}
