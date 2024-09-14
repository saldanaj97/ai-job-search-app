'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Button } from '~/components/ui/button';
import { DialogClose } from '~/components/ui/dialog';
import {
  FormControl,
  FormDescription,
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
import { Switch } from '~/components/ui/switch';
import { toast } from '~/hooks/use-toast';
import { api } from '~/trpc/react';
import { ExistingJobApplication } from '~/types/job-applications';
import { EditJobApplicationFormSchema } from '../data/schema';

export function DataTableEditForm({
  application,
}: {
  application: ExistingJobApplication;
}) {
  const utils = api.useUtils();
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const updateMutation = api.applicationTable.updateJobApplication.useMutation({
    onSuccess: () => utils.applicationTable.getAllJobApplications.invalidate(),
  });

  const form = useForm<ExistingJobApplication>({
    resolver: zodResolver(EditJobApplicationFormSchema),
    defaultValues: {
      jobTitle: application.jobTitle || '',
      company: application.company || '',
      location: application.location || '',
      salary: application.salary || '',
      appliedOn: application.appliedOn,
      lastHeard: application.lastHeard,
      status: application.status,
      followedUp: application.followedUp || false,
      followUpCount: application.followUpCount || 0,
      user_id: application.user_id,
      watching: application.watching || false,
    },
  });

  function onSubmit(updatedApplicationData: ExistingJobApplication) {
    setSuccess(null);
    // Verify whether anything in the existing application has changed
    // before making unnecessary API calls
    if (
      updatedApplicationData.jobTitle === application.jobTitle &&
      updatedApplicationData.company === application.company &&
      updatedApplicationData.location === application.location &&
      updatedApplicationData.salary === application.salary &&
      updatedApplicationData.appliedOn === application.appliedOn &&
      updatedApplicationData.lastHeard === application.lastHeard &&
      updatedApplicationData.status === application.status &&
      updatedApplicationData.followedUp === application.followedUp &&
      updatedApplicationData.followUpCount === application.followUpCount &&
      updatedApplicationData.watching === application.watching
    ) {
      setError(
        'No changes detected. If you want to update the job application, feel free to make your changes below.'
      );
      return;
    }
    // Keep the same ID as the original application
    updatedApplicationData.id = application.id;

    updateMutation.mutate(updatedApplicationData, {
      onSuccess: () => {
        toast({
          title: 'Success!',
          description: `Application for role of ${updatedApplicationData.jobTitle} at ${updatedApplicationData.company} has been updated!`,
        });
        setError(null);
        setSuccess('Job application updated successfully!');
      },
      onError: (error) => {
        console.error('Error updating job application:', error);
        setError(`Error: ${error.message}`);
      },
    });
  }

  return (
    <FormProvider {...form}>
      {error && <FormMessage>{error}</FormMessage>}
      {success && <FormMessage>{success}</FormMessage>}
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {/* Job Title */}
        <FormField
          control={form.control}
          name="jobTitle"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base">Job Title</FormLabel>
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
              <FormLabel className="text-base">Company</FormLabel>
              <FormControl>
                <Input {...field} value={field.value || ''} />
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
              <FormLabel className="text-base">Location</FormLabel>
              <FormControl>
                <Input {...field} value={field.value || ''} />
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
              <FormLabel className="text-base">Salary</FormLabel>
              <FormControl>
                <Input {...field} value={field.value || ''} />
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
              <FormLabel className="text-base">Applied On</FormLabel>
              <FormControl>
                <Input
                  type="date"
                  {...field}
                  value={field.value || ''}
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
              <FormLabel className="text-base">Last Heard From</FormLabel>
              <FormControl>
                <Input
                  type="date"
                  {...field}
                  value={field.value || ''}
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
              <FormLabel className="text-base">Status</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder={field.value} />
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

        {/* Watching */}
        <FormField
          control={form.control}
          name="watching"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between">
              <div className="space-y-0.5">
                <FormLabel className="text-base">Watching</FormLabel>
                <FormDescription>
                  Add this job application to your watchlist
                </FormDescription>
              </div>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
            </FormItem>
          )}
        />

        {/* Submit and Close Buttons */}
        <div className="flex w-full flex-row justify-center gap-4 pb-2 pt-4">
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
