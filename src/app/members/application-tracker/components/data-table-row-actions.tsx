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
            description: `Added to watchlist!`,
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
              <button
                className="flex flex-row items-center"
                disabled={updateMutation.status === 'pending'}
              >
                {updateMutation.status === 'pending' ? 'Editing...' : 'Edit'}
              </button>
            </DialogTrigger>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <button
              onClick={handleCopy}
              disabled={copyMutation.status === 'pending'}
            >
              {copyMutation.status === 'pending' ? 'Copying...' : 'Make a copy'}
            </button>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <button
              onClick={handleWatch}
              disabled={updateMutation.status === 'pending'}
            >
              {updateMutation.status === 'pending' ? 'Updating...' : 'Watch'}
            </button>
          </DropdownMenuItem>
          <DropdownMenuSeparator />

          <DropdownMenuItem>
            <button
              onClick={handleDelete}
              disabled={deleteMutation.status === 'pending'}
            >
              {deleteMutation.status === 'pending' ? 'Deleting...' : 'Delete'}
            </button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <DialogContent>
        <EditJobApplicationForm application={row.original} />
      </DialogContent>
    </Dialog>
  );
}
