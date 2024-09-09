'use client';

import { DotsHorizontalIcon } from '@radix-ui/react-icons';
import { Row } from '@tanstack/react-table';
import { Button } from '~/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '~/components/ui/dropdown-menu';
import { deleteJobApplication } from '../actions';
import { JobApplication } from '../data/schema';

interface DataTableRowActionsProps<TData extends JobApplication> {
  row: Row<TData>;
}

export function DataTableRowActions<TData extends JobApplication>({
  row,
}: DataTableRowActionsProps<TData>) {
  const applicationId = row.original.id;

  // Function to handle deletion with confirmation
  const handleDelete = async () => {
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
        <DropdownMenuItem>Edit</DropdownMenuItem>
        <DropdownMenuItem>Make a copy</DropdownMenuItem>
        <DropdownMenuItem>Favorite</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <button onClick={handleDelete}>Delete</button>
          <DropdownMenuShortcut>⌘ ⌫</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
