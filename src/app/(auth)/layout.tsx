import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import React from 'react';
import { createClient } from '~/utils/supabase/server';

async function RootLayout({ children }: { children: React.ReactNode }) {
  const supabase = createClient(cookies());

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    redirect('/');
  }
  return <div>{children}</div>;
}

export default RootLayout;
