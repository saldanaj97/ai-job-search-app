'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { JobApplication } from '@prisma/client';
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select';
import { updateJobApplication } from '../actions';
import { JobApplicationEditSchema } from '../data/schema';

// TODO - Show animation after user has sucessfully submitted the form (in the onSubmit function)

type JobApplicationStatus =
  | 'Applied'
  | 'Interviewing'
  | 'Offer'
  | 'Rejected'
  | 'Withdrawn'
  | 'Other';

const formatDate = (date: Date | null): string => {
  let currentDate = (date ?? new Date()).toString().split('T')[0] ?? '';
  return currentDate;
};

export function DataTableEditForm({
  application,
}: {
  application: JobApplication;
}) {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const form = useForm<z.infer<typeof JobApplicationEditSchema>>({
    resolver: zodResolver(JobApplicationEditSchema),
    defaultValues: {
      jobTitle: application.jobTitle || '',
      company: application.company || '',
      location: application.location || '',
      salary: application.salary || '',
      appliedOn: formatDate(application.appliedOn),
      lastHeard: formatDate(application.lastHeard),
      status: application.status as JobApplicationStatus,
      followedUp: application.followedUp || false,
      followUpCount: application.followUpCount || 0,
      userId: application.userId,
    },
  });

  async function onSubmit(
    updatedApplicationData: z.infer<typeof JobApplicationEditSchema>
  ) {
    const jobApplicationId = application.id;
    const result = await updateJobApplication(
      jobApplicationId,
      updatedApplicationData
    );

    // Verify whether anything in the existing application has changed
    // before making unnecessary API calls
    if (
      updatedApplicationData.jobTitle === application.jobTitle &&
      updatedApplicationData.company === application.company &&
      updatedApplicationData.location === application.location &&
      updatedApplicationData.salary === application.salary &&
      updatedApplicationData.appliedOn === formatDate(application.appliedOn) &&
      updatedApplicationData.lastHeard === formatDate(application.lastHeard) &&
      updatedApplicationData.status === application.status &&
      updatedApplicationData.followedUp === application.followedUp &&
      updatedApplicationData.followUpCount === application.followUpCount
    ) {
      setError(
        'No changes detected. If you want to update the job application, feel free to make your changes below.'
      );
      return;
    }

    if (result?.error) {
      console.error(result.error);
      setError(result.error);
      return;
    }

    setError(null);
    setSuccess('Job application updated!');
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  }

  return (
    <FormProvider {...form}>
      {error && <FormMessage>{error}</FormMessage>}
      {success && <FormMessage>{success}</FormMessage>}
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-8">
        {/* Job Title */}
        <FormField
          control={form.control}
          name="jobTitle"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Job Title</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Company */}
        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company</FormLabel>
              <FormControl>
                <Input
                  placeholder={field.value ?? ''}
                  value={field.value ?? ''}
                  onChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Location */}
        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Location</FormLabel>
              <FormControl>
                <Input
                  placeholder={field.value ?? ''}
                  value={field.value ?? ''}
                  onChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Salary */}
        <FormField
          control={form.control}
          name="salary"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Salary</FormLabel>
              <FormControl>
                <Input
                  placeholder={field.value ?? ''}
                  value={field.value ?? ''}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Applied On */}
        <FormField
          control={form.control}
          name="appliedOn"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Applied On</FormLabel>
              <FormControl>
                <Input
                  type="date"
                  value={field.value ?? ''}
                  onChange={(e) => field.onChange(e.target.value)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Last Heard */}
        <FormField
          control={form.control}
          name="lastHeard"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Heard From</FormLabel>
              <FormControl>
                <Input
                  type="date"
                  value={field.value ?? ''}
                  onChange={(e) => field.onChange(e.target.value)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Status */}
        <FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Status</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder={application.status} />
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

        {/* Submit and Close Buttons */}
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
