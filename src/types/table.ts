import { Row } from '@tanstack/react-table';
import { ExistingJobApplication } from './job-applications';

type DataTableRowActionsProps<TData extends ExistingJobApplication> = {
  row: Row<TData>;
};

export type { DataTableRowActionsProps };
