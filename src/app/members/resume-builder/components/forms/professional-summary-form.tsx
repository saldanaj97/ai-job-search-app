'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '~/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '~/components/ui/form';
import { Textarea } from '~/components/ui/textarea';
import { ProfessionalSummaryFormSchema } from '../../data/schema';
import { ProfessionalSummaryFormValues } from '../../data/types';

export function ProfessionalSummary() {
  const professionalSummaryForm = useForm<ProfessionalSummaryFormValues>({
    resolver: zodResolver(ProfessionalSummaryFormSchema),
    defaultValues: {
      summary: '',
    },
  });

  return (
    <Form {...professionalSummaryForm}>
      <form className="flex flex-col gap-4">
        <FormField
          name="summary"
          control={professionalSummaryForm.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Summary</FormLabel>
              <FormDescription>
                Write a brief summary of your professional background.
              </FormDescription>
              <FormControl>
                <Textarea placeholder="Summary" {...field} />
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
