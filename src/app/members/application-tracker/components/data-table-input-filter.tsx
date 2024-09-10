import { Table } from '@tanstack/react-table';
import React, { useCallback } from 'react';
import { Input } from '~/components/ui/input';

interface DataTableInputFilterProps<TData> {
  table: Table<TData>;
}

export function DataTableInputFilter<TData>({
  table,
}: DataTableInputFilterProps<TData>) {
  const column = table.getColumn('jobTitle');

  const onChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      column?.setFilterValue(event.target.value);
    },
    [column]
  );

  return (
    <Input
      placeholder="Filter by title..."
      value={(column?.getFilterValue() as string) ?? ''}
      onChange={onChange}
      className="h-8 w-[150px] lg:w-[250px]"
    />
  );
}
