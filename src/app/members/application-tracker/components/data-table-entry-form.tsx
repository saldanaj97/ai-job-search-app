'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { DialogClose } from '@radix-ui/react-dialog';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '~/components/ui/button';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '~/components/ui/form';
import { Input } from '~/components/ui/input';
import { addNewJobApplication } from '../actions';
import { JobApplicationSchema } from '../data/schema';

export type JobApplicationInput = z.infer<typeof JobApplicationSchema>;

export function JobApplicationEntryForm() {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const form = useForm<z.infer<typeof JobApplicationSchema>>({
    resolver: zodResolver(JobApplicationSchema),
    defaultValues: {
      jobTitle: '',
      company: '',
      location: '',
      salary: '',
      appliedOn: new Date().toISOString().split('T')[0],
      lastHeard: new Date().toISOString(),
      status: 'Applied',
      followedUp: false,
      followUpCount: 0,
    },
  });

  async function onSubmit(data: z.infer<typeof JobApplicationSchema>) {
    const result = await addNewJobApplication(data);
    if (result?.error) {
      console.error(result.error);
      setError(result.error);
      return;
    }
    setSuccess('Job application added!');
  }

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
                <Input placeholder="Company" {...field} />
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
                <Input placeholder="Location" {...field} />
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
                <Input placeholder="Salary" {...field} />
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
                <Input type="date" {...field} value={'2021-01-01'} />
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
                <Input type="date" {...field} value={'2021-01-01'} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* <FormField
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
        /> */}
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
