import { cookies } from 'next/headers';
import Hero from '~/components/hero/hero';
import { CallToAction } from '~/components/ui/cta';
import { createClient } from '~/utils/supabase/server';
import Members from '../members/page';
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
        <Members user={user} />
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
