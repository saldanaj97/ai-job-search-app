'use client';

import { DotsHorizontalIcon } from '@radix-ui/react-icons';
import { Row } from '@tanstack/react-table';
import { Button } from '~/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '~/components/ui/dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '~/components/ui/dropdown-menu';
import {
  ExistingJobApplication,
  JobApplicationDataCopy,
  NewJobApplication,
} from '~/types/job-applications';
import { copyJobApplication, deleteJobApplication } from '../actions';
import { EditJobApplicationForm } from './data-table-edit-entry';

//TODO - Add type for the application parameter in the edit form component

interface DataTableRowActionsProps<
  TData extends NewJobApplication | ExistingJobApplication,
> {
  row: Row<TData>;
}

export function DataTableRowActions<
  TData extends NewJobApplication | ExistingJobApplication,
>({ row }: DataTableRowActionsProps<TData>) {
  async function handleDelete() {
    const application = row.original as ExistingJobApplication;
    const applicationId = application.id;
    if (confirm('Are you sure you want to delete this job application?')) {
      if (!applicationId) {
        alert('Error: Application ID not found!');
        return;
      }
      const result = await deleteJobApplication(applicationId);
      if (result.error) {
        alert(`Error: ${result.error}`);
      } else {
        alert('Job application deleted!');
        window.location.reload();
      }
    }
  }

  async function handleCopy() {
    const { id, created_at, status, ...applicationData } =
      row.original as ExistingJobApplication;

    const applicationDataToCopy: JobApplicationDataCopy = {
      ...applicationData,
      status: 'Applied', // Reset for the new copy
      followUpCount: 0, // Reset for the new copy
      followedUp: false, // Reset for the new copy1
    };

    const result = await copyJobApplication(applicationDataToCopy);
    if (result.error) {
      alert(`Error: ${result.error}`);
    } else {
      window.location.reload();
    }
  }

  async function handleWatch() {
    console.log('Watched!');
  }

  return (
    <Dialog>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="m-4 flex h-8 w-8 p-0 data-[state=open]:bg-muted"
          >
            <DotsHorizontalIcon className="h-4 w-4" />
            <span className="sr-only">Open menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[160px]">
          <DropdownMenuItem>
            <DialogTrigger asChild>
              <button className="flex flex-row items-center">Edit</button>
            </DialogTrigger>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <button onClick={handleCopy}>Make a copy</button>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <button onClick={handleWatch}>Watch</button>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <button onClick={handleDelete}>Delete</button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <DialogContent className="fixed z-50 flex flex-col items-center justify-center sm:max-w-md">
        <EditJobApplicationForm
          application={row.original as ExistingJobApplication}
        />
      </DialogContent>
    </Dialog>
  );
}
