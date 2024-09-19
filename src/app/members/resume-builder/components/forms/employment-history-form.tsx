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
import { Textarea } from '~/components/ui/textarea';
import { EmploymentHistoryFormSchema } from '../../data/schema';
import { EmploymentHistoryFormValues } from '../../data/types';

export function EmploymentHistory() {
  const employmentHistoryForm = useForm<EmploymentHistoryFormValues>({
    resolver: zodResolver(EmploymentHistoryFormSchema),
    defaultValues: {
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      description: '',
    },
  });

  return (
    <Form {...employmentHistoryForm}>
      <form className="flex flex-col gap-4">
        <FormField
          name="position"
          control={employmentHistoryForm.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Job Title</FormLabel>
              <FormControl>
                <Input placeholder="Software Engineer" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="company"
          control={employmentHistoryForm.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Employer</FormLabel>
              <FormControl>
                <Input placeholder="Employer" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-row gap-0">
          <FormField
            name="startDate"
            control={employmentHistoryForm.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Start Date</FormLabel>
                <FormControl>
                  <Input placeholder="MM / YYYY" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="endDate"
            control={employmentHistoryForm.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>End Date</FormLabel>
                <FormControl>
                  <Input placeholder="MM / YYYY" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          name="description"
          control={employmentHistoryForm.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Summary of main tasks completed"
                  {...field}
                />
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
