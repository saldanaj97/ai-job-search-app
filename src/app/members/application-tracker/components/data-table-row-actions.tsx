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
import { deleteJobApplication } from '../actions';
import { JobApplication } from '../data/schema';
import { EditJobApplicationForm } from './data-table-edit-entry';

interface DataTableRowActionsProps<TData extends JobApplication> {
  row: Row<TData>;
}

export function DataTableRowActions<TData extends JobApplication>({
  row,
}: DataTableRowActionsProps<TData>) {
  // Function to handle deletion with confirmation
  const handleDelete = async () => {
    const applicationId = row.original.id.toString();
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
  };

  return (
    <Dialog>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
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
          <DropdownMenuItem>Make a copy</DropdownMenuItem>
          <DropdownMenuItem>Favorite</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <button onClick={handleDelete}>Delete</button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <DialogContent className="fixed z-50 flex flex-col items-center justify-center sm:max-w-md">
        <EditJobApplicationForm application={row.original as JobApplication} />
      </DialogContent>
    </Dialog>
  );
}
