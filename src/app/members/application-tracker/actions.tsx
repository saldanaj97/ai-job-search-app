'use server';
import { cookies } from 'next/headers';
import { createClient } from '~/utils/supabase/server';
import type { JobApplicationInput } from './components/data-table-entry-form';

const supabase = createClient(cookies());
const {
  data: { user },
  error: sessionError,
} = await supabase.auth.getUser();

export const getAllJobApplications = async () => {
  if (sessionError || !user) {
    return {
      error: sessionError?.message || 'User is not authenticated',
    };
  }

  const { data, error } = await supabase
    .from('JobApplication')
    .select('*')
    .eq('userId', user.id);

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
  if (sessionError || !user) {
    return {
      error: sessionError?.message || 'User is not authenticated',
    };
  }

  const jobApplicationData = { ...data, userId: user.id };

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

export const deleteJobApplication = async (id: string) => {
  console.log('Deleting job application with id:', id);
  console.log('User:', user);

  if (sessionError || !user) {
    return {
      error: sessionError?.message || 'User is not authenticated',
    };
  }

  // Perform the delete operation
  const { data, error, status } = await supabase
    .from('JobApplication')
    .delete()
    .eq('id', id);

  if (error) {
    console.log('Error:', error);
    return {
      error: error.message,
    };
  }

  console.log('Data:', data);
  console.log('Status:', status);

  return {
    success: true,
    message: 'Job application deleted!',
  };
};
