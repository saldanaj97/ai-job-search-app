import { cookies } from "next/headers";
import Hero from "~/components/hero/hero";
import { createClient } from "~/utils/supabase/server";

export default async function LandingPage() {
  const supabase = createClient(cookies());

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="flex h-screen flex-col">
      {user ? (
        <div className="flex-column flex items-center justify-center gap-4">
          Hey, {user.email}!
        </div>
      ) : (
        <Hero />
      )}
    </div>
  );
}
