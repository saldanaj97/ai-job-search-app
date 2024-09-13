'use client';

import { ColumnDef } from '@tanstack/react-table';
import { Checkbox } from '~/components/ui/checkbox';
import { statuses } from '../data/data';
import { JobApplicationForm } from '../data/schema';
import { DataTableColumnHeader } from './data-table-column-header';
import { DataTableRowActions } from './data-table-row-actions';
import { DataWatchingToggleSwitch } from './data-watching-toggle-switch';

export const columns: ColumnDef<JobApplicationForm>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="m-4"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="m-4"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'jobTitle', // Access the entire job object
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Job Title"
        className="flex w-[100px] items-center justify-center"
      />
    ),
    cell: ({ row }) => {
      const job: string = row.getValue('jobTitle');
      return (
        <div className="flex w-[100px] justify-center text-center">{job}</div>
      );
    },
  },
  {
    accessorKey: 'company', // Access the entire job object
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Company Name" />
    ),
    cell: ({ row }) => {
      const company: string = row.getValue('company');
      return <div className="text-center">{company}</div>;
    },
  },
  {
    accessorKey: 'watching', // Access the entire job object
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Watching"
        className="w-[100px]"
      />
    ),
    cell: ({ row }) => {
      const isWatching: boolean = row.getValue('watching');
      return <DataWatchingToggleSwitch isWatching={isWatching} />;
    },
  },
  {
    accessorKey: 'status',
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Status"
        className="flex w-[100px] items-center justify-center"
      />
    ),
    cell: ({ row }) => {
      const status = statuses.find(
        (status) => status.value === row.getValue('status')
      );

      if (!status) {
        return null;
      }

      return (
        <div className="flex w-[100px] items-center justify-center">
          <span className="text-center">{status.label}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: 'appliedOn',
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Applied On"
        className="text-center"
      />
    ),
    cell: ({ row }) => {
      const appliedOnDate = new Date(
        row.getValue('appliedOn')
      ).toLocaleDateString('en-US');
      return <div className="text-center">{appliedOnDate}</div>;
    },
  },
  {
    accessorKey: 'lastHeard',
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Last Heard From"
        className="text-center"
      />
    ),
    cell: ({ row }) => {
      const lastHeardDate = new Date(
        row.getValue('lastHeard')
      ).toLocaleDateString('en-US');
      return (
        <div>
          {lastHeardDate !== 'Invalid Date' ? (
            <div className="text-center">{lastHeardDate}</div>
          ) : (
            <div className="text-center">-</div>
          )}
        </div>
      );
    },
  },
  {
    accessorKey: 'followedUp',
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Followed Up"
        className="text-center"
      />
    ),
    cell: ({ row }) => (
      <div className="text-center">
        {row.getValue('followedUp') ? 'Yes' : 'No'}
      </div>
    ),
  },
  {
    accessorKey: 'followUpCount',
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Follow Up Count"
        className="text-center"
      />
    ),
    cell: ({ row }) => (
      <div className="text-center">{row.getValue('followUpCount')}</div>
    ),
  },
  {
    id: 'actions',
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
