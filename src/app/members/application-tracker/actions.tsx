'use server';
import { cookies } from 'next/headers';
import {
  ExistingJobApplication,
  JobApplicationDataCopy,
  JobApplicationInput,
} from '~/types/job-applications';
import { createClient } from '~/utils/supabase/server';

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
    .eq('user_id', user.id);

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

  const jobApplicationData = { ...data, user_id: user.id };

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

export const copyJobApplication = async (data: JobApplicationDataCopy) => {
  if (sessionError || !user) {
    return {
      error: sessionError?.message || 'User is not authenticated',
    };
  }

  const jobApplicationData = { ...data, user_id: user.id };

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
    message: 'Job application copied!',
  };
};

export const watchJobApplication = async (id: string) => {
  if (sessionError || !user) {
    return {
      error: sessionError?.message || 'User is not authenticated',
    };
  }

  const { error } = await supabase
    .from('JobApplication')
    .update({ watching: true });

  if (error) {
    return {
      error: error.message,
    };
  }

  return {
    success: true,
    message: 'Job added to watch list!',
  };
};

export const deleteJobApplication = async (id: string) => {
  if (sessionError || !user) {
    return {
      error: sessionError?.message || 'User is not authenticated',
    };
  }

  // Perform the delete operation
  const { error } = await supabase.from('JobApplication').delete().eq('id', id);

  if (error) {
    return {
      error: error.message,
    };
  }

  return {
    success: true,
    message: 'Job application deleted!',
  };
};

export const deleteManyJobApplications = async (ids: number[]) => {
  if (sessionError || !user) {
    return {
      error: sessionError?.message || 'User is not authenticated',
    };
  }

  if (ids.length === 0) throw new Error('No ids provided');

  const { error } = await supabase
    .from('JobApplication')
    .delete()
    .in('id', ids);

  if (error) {
    return {
      error: error.message,
    };
  }

  return {
    success: true,
    message: 'Job applications deleted!',
  };
};

export const updateJobApplication = async (
  data: ExistingJobApplication
) => {
  if (sessionError || !user) {
    return {
      error: sessionError?.message || 'User is not authenticated',
    };
  }

  const { error } = await supabase
    .from('JobApplication')
    .update(data)
    .eq('id', data.id);

  if (error) {
    return {
      error: error.message,
    };
  }

  return {
    success: true,
    message: 'Job application updated!',
  };
};
