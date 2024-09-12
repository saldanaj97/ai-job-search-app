import { type Provider } from '@supabase/supabase-js';
import { redirect, usePathname } from 'next/navigation';
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Button } from '~/components/ui/button';
import { createClient } from '~/utils/supabase/client';

export function OAuthButton({
  provider,
}: {
  provider: Provider;
}): React.ReactElement | null {
  const pathname = usePathname();
  const supabase = createClient();

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${window.location.origin}/auth/callback?next=${pathname}`,
      },
    });

    if (error) {
      return redirect('/login?message=Could not authenticate user');
    }

    return redirect(`/auth/callback?next=${pathname}`);
  };

  if (provider === 'google') {
    return (
      <Button
        variant="outline"
        className="mb-2 w-full font-normal text-muted-foreground"
        onClick={() => handleLogin().catch(console.error)}
      >
        <div className="flex items-center gap-2">
          <FcGoogle className="h-5 w-5" />
          <p>Sign in with Google</p>
        </div>
      </Button>
    );
  }

  if (provider === 'github') {
    return (
      <Button
        variant="outline"
        className="mb-2 w-full font-normal text-muted-foreground"
        onClick={() => handleLogin().catch(console.error)}
      >
        <div className="flex items-center gap-2">
          <FaGithub className="h-5 w-5" />
          <p>Sign in with GitHub</p>
        </div>
      </Button>
    );
  }

  // Return null if no valid provider is matched
  return null;
}

export default OAuthButton;
