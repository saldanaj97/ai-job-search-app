'use client';

import { Cross2Icon } from '@radix-ui/react-icons';
import { Table } from '@tanstack/react-table';
import { Button } from '~/components/ui/button';
import { statuses } from '../data/data';
import { DataTableNewEntry } from './data-table-add-entry';
import { DataTableFacetedFilter } from './data-table-faceted-filter';
import { DataTableInputFilter } from './data-table-input-filter';
import { DataTableViewOptions } from './data-table-view-options';

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;
  const statusColumn = table.getColumn('status');

  const StatusFilter = () => {
    return (
      <>
        {statusColumn && (
          <DataTableFacetedFilter
            column={statusColumn}
            title="Status"
            options={statuses}
          />
        )}
      </>
    );
  };

  const ResetFilterButton = () => {
    return (
      <>
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </>
    );
  };

  return (
    <div className="flex items-center justify-between gap-2">
      <div className="flex flex-1 items-center space-x-2">
        <DataTableInputFilter table={table} />
        <StatusFilter />
        <ResetFilterButton />
      </div>
      <DataTableNewEntry />
      <DataTableViewOptions table={table} />
    </div>
  );
}
