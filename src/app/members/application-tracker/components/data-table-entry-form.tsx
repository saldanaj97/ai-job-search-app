'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { DialogClose } from '@radix-ui/react-dialog';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Button } from '~/components/ui/button';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '~/components/ui/form';
import { Input } from '~/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select';
import { NewJobApplication } from '~/types/job-applications';
import { addNewJobApplication } from '../actions';
import { JobApplicationFormSchema } from '../data/schema';

// TODO - Show animation after user has sucessfully submitted the form (in the onSubmit function)

export function JobApplicationEntryForm() {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const form = useForm<NewJobApplication>({
    resolver: zodResolver(JobApplicationFormSchema),
    defaultValues: {
      jobTitle: '',
      company: '',
      location: '',
      salary: '',
      appliedOn: new Date().toDateString(),
      lastHeard: '',
      status: 'Applied',
      followedUp: false,
      followUpCount: 0,
    },
  });

  async function onSubmit(data: NewJobApplication) {
    const result = await addNewJobApplication(data);
    if (result?.error) {
      setError(result.error);
      return;
    }
    setSuccess('Job application added!');
    form.reset();
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  }

  console.log('Form errors:', form.formState.errors);
  return (
    <FormProvider {...form}>
      {error && <FormMessage>{error}</FormMessage>}
      {success && <FormMessage>{success}</FormMessage>}
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="jobTitle"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Job Title</FormLabel>
              <FormControl>
                <Input placeholder="Job Title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company</FormLabel>
              <FormControl>
                <Input
                  placeholder="Company"
                  value={field.value ?? ''}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Location</FormLabel>
              <FormControl>
                <Input
                  placeholder="Location"
                  value={field.value ?? ''}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="salary"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Salary</FormLabel>
              <FormControl>
                <Input
                  placeholder="Salary"
                  value={field.value ?? ''}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="appliedOn"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Applied On</FormLabel>
              <FormControl>
                <Input
                  type="date"
                  value={field.value?.toString().split('T')[0]}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastHeard"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Heard From</FormLabel>
              <FormControl>
                <Input
                  type="date"
                  value={field.value?.toString().split('T')[0]}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Status</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Applied">Applied</SelectItem>
                    <SelectItem value="Interviewing">Interviewing</SelectItem>
                    <SelectItem value="Offer">Offer</SelectItem>
                    <SelectItem value="Rejected">Rejected</SelectItem>
                    <SelectItem value="Withdrawn">Withdrawn</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex w-full flex-row justify-center gap-8">
          <Button type="submit">Submit</Button>
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </div>
      </form>
    </FormProvider>
  );
}
