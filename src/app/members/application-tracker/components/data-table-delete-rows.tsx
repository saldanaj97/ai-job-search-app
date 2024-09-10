import { Table } from '@tanstack/react-table';
import { TrashIcon } from 'lucide-react';
import { Button } from '~/components/ui/button';
import { deleteManyJobApplications } from '../actions';

interface DataTableProps<TData> {
  table: Table<TData>;
}

export function DeleteMultipleEntryButton<TData>({
  table,
}: DataTableProps<TData>) {
  const rowsSelected = table.getSelectedRowModel().rows.map((row) => row);

  async function handleDelete() {
    if (
      confirm(
        `Are you sure you want to delete ${rowsSelected.length} job applications?`
      )
    ) {
      if (rowsSelected.length === 0) {
        alert('Error: No rows selected!');
        return;
      }
      const selectedRowIds = rowsSelected.map((row) => row.original.id);
      const result = await deleteManyJobApplications(selectedRowIds);
      if (result.error) {
        alert(`Error: ${result.error}`);
      } else {
        alert(`Job applications deleted!`);
        window.location.reload();
      }
    }
  }

  return (
    <>
      {rowsSelected.length === 0 ? null : (
        <Button onClick={handleDelete} className="h-8 px-2 lg:px-3">
          Delete
          <TrashIcon className="ml-2 h-4 w-4" />
        </Button>
      )}
    </>
  );
}
