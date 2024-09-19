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
import { CertificationsFormSchema } from '../../data/schema';
import { CertificationsFormValues } from '../../data/types';

export function Certifications() {
  const certificationForm = useForm<CertificationsFormValues>({
    resolver: zodResolver(CertificationsFormSchema),
    defaultValues: {
      certification: '',
      issuer: '',
      date: '',
    },
  });

  return (
    <Form {...certificationForm}>
      <form className="flex flex-col gap-4">
        <FormField
          name="certification"
          control={certificationForm.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Certification</FormLabel>
              <FormControl>
                <Input placeholder="AWS Cloud" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="issuer"
          control={certificationForm.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Issuer</FormLabel>
              <FormControl>
                <Input placeholder="AWS" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="date"
          control={certificationForm.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Date</FormLabel>
              <FormControl>
                <Input placeholder="2021-01-01" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
