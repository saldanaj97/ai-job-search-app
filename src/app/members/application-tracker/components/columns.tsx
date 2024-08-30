'use client';

import { ColumnDef } from '@tanstack/react-table';
import { Checkbox } from '~/components/ui/checkbox';
import { JobApplication } from '../data/schema';
import { DataTableColumnHeader } from './data-table-column-header';
import { DataTableRowActions } from './data-table-row-actions';

export const columns: ColumnDef<JobApplication>[] = [
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
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'job', // Access the entire job object
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Job Title" />
    ),
    cell: ({ row }) => {
      const job = row.getValue('job') as { title: string };
      return <div>{job.title}</div>;
    },
  },
  {
    accessorKey: 'job', // Access the entire job object
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Company Name" />
    ),
    cell: ({ row }) => {
      const job = row.getValue('job') as { company: string };
      return <div>{job.company}</div>;
    },
  },
  {
    accessorKey: 'status',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => <div>{row.getValue('status')}</div>,
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
    cell: ({ row }) => (
      <div className="text-center">
        {(row.getValue('appliedOn') as Date).toLocaleDateString()}
      </div>
    ),
  },
  {
    accessorKey: 'lastHeard',
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Last Heard"
        className="text-center"
      />
    ),
    cell: ({ row }) => (
      <div className="text-center">
        {(row.getValue('lastHeard') as Date).toLocaleDateString()}
      </div>
    ),
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
