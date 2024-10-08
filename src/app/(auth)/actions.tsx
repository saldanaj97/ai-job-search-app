'use server';

import { cookies, headers } from 'next/headers';
import { createClient } from '~/utils/supabase/server';
import { type LoginInput } from './login/page';
import type { SignupInput } from './signup/page';

const supabase = createClient(cookies());
const origin = headers().get('origin');

export const signUp = async (data: SignupInput) => {
  const { error } = await supabase.auth.signUp({
    email: data.email,
    password: data.password,
    options: {
      emailRedirectTo: `${origin}/auth/callback`,
    },
  });

  if (error) {
    return {
      error: error.message,
    };
  }

  return {
    success: true,
    message:
      'Sign up successful! Please check your email for a confirmation link.',
  };
};

export const signIn = async (data: LoginInput) => {
  const { error } = await supabase.auth.signInWithPassword({
    email: data.email,
    password: data.password,
  });

  if (error) {
    return {
      error: error.message,
    };
  }

  return {
    success: true,
    message: 'Sign in successful!',
  };
};
