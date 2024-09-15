'use client';
import { DotsHorizontalIcon } from '@radix-ui/react-icons';
import { Row } from '@tanstack/react-table';
import { useState } from 'react';
import { LoadingSpinner } from '~/components/spinner';
import { Button } from '~/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '~/components/ui/dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '~/components/ui/dropdown-menu';
import { useToast } from '~/hooks/use-toast';
import { api } from '~/trpc/react';
import {
  ExistingJobApplication,
  JobApplicationDataCopy,
} from '~/types/job-applications';
import { EditJobApplicationForm } from './data-table-edit-entry';

interface DataTableRowActionsProps<TData extends ExistingJobApplication> {
  row: Row<TData>;
}

export function DataTableRowActions<TData extends ExistingJobApplication>({
  row,
}: DataTableRowActionsProps<TData>) {
  const utils = api.useUtils();
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const deleteMutation = api.applicationTable.deleteJobApplication.useMutation({
    onSuccess: () => utils.applicationTable.getAllJobApplications.invalidate(),
  });

  const copyMutation = api.applicationTable.copyJobApplication.useMutation({
    onSuccess: () => utils.applicationTable.getAllJobApplications.invalidate(),
  });

  const updateMutation = api.applicationTable.updateJobApplication.useMutation({
    onSuccess: () => utils.applicationTable.getAllJobApplications.invalidate(),
  });

  const handleDelete = () => {
    const applicationId = row.original.id;
    setLoading(true);
    if (!applicationId) {
      alert('Error: Application ID not found!');
      return;
    }
    if (confirm('Are you sure you want to delete this job application?')) {
      deleteMutation.mutate(
        { id: applicationId },
        {
          onSuccess: () => {
            toast({
              title: 'Success!',
              description: `Application for ${row.original.jobTitle} at ${row.original.company} has been deleted!`,
            });
          },
          onError: (error) => alert(`Error: ${error.message}`),
          onSettled: () => setLoading(false),
        }
      );
    }
  };

  const handleCopy = () => {
    const { id, created_at, status, ...applicationData } = row.original;
    const applicationDataToCopy: JobApplicationDataCopy = {
      ...applicationData,
      status: 'Applied',
      followUpCount: 0,
      followedUp: false,
    };
    setLoading(true);
    copyMutation.mutate(applicationDataToCopy, {
      onSuccess: () => {
        toast({
          title: 'Success!',
          description: `Application has been copied!`,
        });
      },
      onError: (error) => alert(`Error: ${error.message}`),
      onSettled: () => setLoading(false),
    });
  };

  const handleWatch = () => {
    const isWatching = row.original.watching;
    setLoading(true);
    updateMutation.mutate(
      {
        ...row.original,
        watching: !isWatching,
      },
      {
        onSuccess: () => {
          toast({
            title: 'Success!',
            description: `${isWatching ? 'Unwatched' : 'Now watching'} application for ${row.original.jobTitle} at ${row.original.company}!`,
          });
        },
        onError: (error) => {
          console.error('Error updating job application:', error);
          alert(`Error: ${error.message}`);
        },
        onSettled: () => setLoading(false),
      }
    );
  };

  const DropdownMenuItemButton = ({
    mutation,
    mutationFunction,
    operation,
  }: {
    mutation:
      | typeof deleteMutation
      | typeof copyMutation
      | typeof updateMutation;
    mutationFunction: () => void;
    operation: string;
  }) => {
    return (
      <button
        onClick={mutationFunction}
        disabled={mutation.status === 'pending'}
      >
        {operation}
      </button>
    );
  };

  const EditJobApplicationFormButton = () => {
    return (
      <button disabled={updateMutation.status === 'pending'}>
        {updateMutation.status === 'pending' ? 'Editing...' : 'Edit'}
      </button>
    );
  };

  return (
    <Dialog>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          {!loading ? (
            <Button
              variant="ghost"
              className="m-4 flex h-8 w-8 p-0 data-[state=open]:bg-muted"
            >
              <DotsHorizontalIcon className="h-4 w-4" />
              <span className="sr-only">Open menu</span>
            </Button>
          ) : (
            <div className="m-4 flex h-8 w-8 p-0 data-[state=open]:bg-muted">
              <LoadingSpinner />
            </div>
          )}
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[160px]">
          <DropdownMenuItem>
            <DialogTrigger asChild>
              <EditJobApplicationFormButton />
            </DialogTrigger>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <DropdownMenuItemButton
              mutation={copyMutation}
              mutationFunction={handleCopy}
              operation={'Copy'}
            />
          </DropdownMenuItem>
          <DropdownMenuItem>
            <DropdownMenuItemButton
              mutation={updateMutation}
              mutationFunction={handleWatch}
              operation={row.original.watching ? 'Unwatch' : 'Watch'}
            />
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <DropdownMenuItemButton
              mutation={deleteMutation}
              mutationFunction={handleDelete}
              operation={'Delete'}
            />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <DialogContent>
        <EditJobApplicationForm application={row.original} />
      </DialogContent>
    </Dialog>
  );
}
