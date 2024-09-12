'use client';

import { ColumnDef } from '@tanstack/react-table';
import { Checkbox } from '~/components/ui/checkbox';
import { statuses } from '../data/data';
import { JobApplicationForm } from '../data/schema';
import { DataTableColumnHeader } from './data-table-column-header';
import { DataTableRowActions } from './data-table-row-actions';

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
    accessorKey: 'jobTitle', // Access the entire job object
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Job Title" />
    ),
    cell: ({ row }) => {
      const job: string = row.getValue('jobTitle');
      return <div>{job}</div>;
    },
  },
  {
    accessorKey: 'company', // Access the entire job object
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Company Name" />
    ),
    cell: ({ row }) => {
      const company: string = row.getValue('company');
      return <div>{company}</div>;
    },
  },
  {
    accessorKey: 'status',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const status = statuses.find(
        (status) => status.value === row.getValue('status')
      );

      if (!status) {
        return null;
      }

      return (
        <div className="flex w-[100px] items-center">
          {/* {status.icon && (
            <status.icon className="mr-2 h-4 w-4 text-muted-foreground" />
          )} */}
          <span>{status.label}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  // cell: ({ row }) => <div>{row.getValue('status')}</div>,
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
      // return <div className="text-center">{lastHeardDate}</div>;
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
