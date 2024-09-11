import { JobApplication } from '@prisma/client';
import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '~/components/ui/dialog';
import { DataTableEditForm } from './data-table-edit-form';

export function EditJobApplicationForm({
  application,
}: {
  application: JobApplication;
}) {
  return (
    <div className="flex flex-col gap-8">
      <DialogHeader className="flex w-full flex-col">
        <DialogTitle>Edit an application</DialogTitle>
        <DialogDescription>
          Fill in the form below to edit an existing application.
        </DialogDescription>
      </DialogHeader>
      <DataTableEditForm application={application} />
    </div>
  );
}
