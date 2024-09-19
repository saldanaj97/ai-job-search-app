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
import { Input } from '~/components/ui/input';
import { SkillsFormSchema } from '../../data/schema';
import { SkillsFormValues } from '../../data/types';

export function Skills() {
  const skillsForm = useForm<SkillsFormValues>({
    resolver: zodResolver(SkillsFormSchema),
    defaultValues: {
      skill: '',
    },
  });

  return (
    <Form {...skillsForm}>
      <form className="flex flex-col gap-4">
        <FormField
          name="skill"
          control={skillsForm.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Relevant Skills</FormLabel>
              <FormDescription>
                Include any relevant skills you have. Separate each skill with a
                comma.
              </FormDescription>
              <FormControl>
                <Input placeholder="Photoshop, python, etc..." {...field} />
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
