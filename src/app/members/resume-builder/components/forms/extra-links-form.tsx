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
import { ExtraLinksFormSchema } from '../../data/schema';
import { ExtraLinksFormValues } from '../../data/types';

// TODO - Dropdown menu for type of link (title field)
export function ExtraLinks() {
  const extraLinksForm = useForm<ExtraLinksFormValues>({
    resolver: zodResolver(ExtraLinksFormSchema),
    defaultValues: {
      title: '',
      url: '',
    },
  });

  return (
    <Form {...extraLinksForm}>
      <form className="flex flex-col gap-4">
        <FormField
          name="title"
          control={extraLinksForm.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Type</FormLabel>
              <FormControl>
                <Input placeholder="Portfolio" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="url"
          control={extraLinksForm.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>URL</FormLabel>
              <FormControl>
                <Input placeholder="https://example.com" {...field} />
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
