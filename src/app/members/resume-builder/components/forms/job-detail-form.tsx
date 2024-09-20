'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '~/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '~/components/ui/form';
import { Input } from '~/components/ui/input';
import { JobDetailsFormSchema } from '../../data/schema';
import { JobDetailsFormValues } from '../../data/types';

export function JobDetails() {
  const jobDetailsForm = useForm<JobDetailsFormValues>({
    resolver: zodResolver(JobDetailsFormSchema),
    defaultValues: {
      jobTitle: '',
      company: '',
      description: '',
      keywords: '',
    },
  });

  return (
    <Form {...jobDetailsForm}>
      <form className="flex flex-col gap-4">
        <FormField
          name="jobTitle"
          control={jobDetailsForm.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Job Title</FormLabel>
              <FormControl>
                <Input placeholder="Project Manager" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="company"
          control={jobDetailsForm.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company</FormLabel>
              <FormControl>
                <Input placeholder="Google" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="description"
          control={jobDetailsForm.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input placeholder="Manage projects" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="keywords"
          control={jobDetailsForm.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Keywords</FormLabel>
              <FormControl>
                <Input placeholder="Project Management, Agile" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Save</Button>
      </form>
    </Form>
  );
}
