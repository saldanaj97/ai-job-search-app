'use server';
import { cookies } from 'next/headers';
import { createClient } from '~/utils/supabase/server';
import type { JobApplicationInput } from './components/data-table-entry-form';

const supabase = createClient(cookies());

export const getAllJobApplications = async () => {
  // Retrieve the session to get the signed-in user
  const {
    data: { user },
    error: sessionError,
  } = await supabase.auth.getUser();

  if (sessionError || !user) {
    return {
      error: sessionError?.message || 'User is not authenticated',
    };
  }

  // Query the job applications table filtered by the user's ID
  const { data, error } = await supabase
    .from('JobApplication')
    .select('*')
    .eq('userId', user.id); // Assuming you have a 'user_id' column

  if (error) {
    return {
      error: error.message,
    };
  }

  return {
    success: true,
    data,
  };
};

export const addNewJobApplication = async (data: JobApplicationInput) => {
  // Retrieve the session to get the signed-in user
  const {
    data: { user },
    error: sessionError,
  } = await supabase.auth.getUser();

  if (sessionError || !user) {
    return {
      error: sessionError?.message || 'User is not authenticated',
    };
  }

  // Add user_id to the job application data
  const jobApplicationData = { ...data, userId: user.id };

  // Insert the new job application
  const { error } = await supabase
    .from('JobApplication')
    .insert(jobApplicationData);

  if (error) {
    return {
      error: error.message,
    };
  }

  return {
    success: true,
    message: 'Job application added!',
  };
};
