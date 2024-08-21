'use server';

import { cookies } from 'next/headers';
import Link from 'next/link';
import { createClient } from '~/utils/supabase/server';
import ThemeToggleSwitch from '../theme/ThemeToggleSwitch';
import { Button } from '../ui/button';
import ProfileButton from './ProfileButton';

export default async function AuthComponent() {
  const supabase = createClient(cookies());

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user ? (
    <div className="flex flex-row justify-end gap-4">
      <ThemeToggleSwitch />
      <ProfileButton user={user} />
    </div>
  ) : (
    <div className="hidden items-center justify-end gap-4 sm:flex">
      <Link href="/signup" className="w-full sm:w-auto">
        <Button variant="default" size="sm" className="w-full">
          Sign Up
        </Button>
      </Link>
      <Link href="/login" className="w-full sm:w-auto">
        <Button variant="secondary" size="sm" className="w-full">
          Log In
        </Button>
      </Link>
    </div>
  );
}
