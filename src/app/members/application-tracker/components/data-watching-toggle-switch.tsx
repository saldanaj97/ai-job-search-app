import { EyeNoneIcon, EyeOpenIcon } from '@radix-ui/react-icons';
import { Row } from '@tanstack/react-table';
import { useState } from 'react';
import { ExistingJobApplication } from '~/types/job-applications';
import { updateJobApplication } from '../actions';

export function DataWatchingToggleSwitch({
  row,
}: {
  row: Row<ExistingJobApplication> & { watching: boolean };
}) {
  const [isWatching, setIsWatching] = useState(row.original.watching);

  async function handleWatchingToggle() {
    const { error } = await updateJobApplication({
      ...row.original,
      watching: !isWatching,
    });
    if (error) {
      console.error('Error updating job application:', error);
      return;
    }
    row.original.watching = !isWatching;
    setIsWatching((prev) => !prev);
  }

  return (
    <div className="flex w-[100px] justify-center">
      {isWatching ? (
        <div className="text-center text-green-500">
          <button onClick={handleWatchingToggle}>
            <EyeOpenIcon />
          </button>
        </div>
      ) : (
        <div className="text-center text-red-500">
          <button onClick={handleWatchingToggle}>
            <EyeNoneIcon />
          </button>
        </div>
      )}
    </div>
  );
}
