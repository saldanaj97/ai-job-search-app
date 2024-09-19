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
import { EducationFormSchema } from '../../data/schema';
import { EducationFormValues } from '../../data/types';

export function Education() {
  const educationForm = useForm<EducationFormValues>({
    resolver: zodResolver(EducationFormSchema),
    defaultValues: {
      school: '',
      degree: '',
      startDate: '',
      endDate: '',
    },
  });

  return (
    <Form {...educationForm}>
      <form className="flex flex-col gap-4">
        <FormField
          name="school"
          control={educationForm.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>School</FormLabel>
              <FormControl>
                <Input placeholder="School" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="degree"
          control={educationForm.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Degree</FormLabel>
              <FormControl>
                <Input placeholder="Degree" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-row gap-0">
          <FormField
            name="startDate"
            control={educationForm.control}
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
            control={educationForm.control}
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

        <Button type="submit">Save</Button>
      </form>
    </Form>
  );
}
