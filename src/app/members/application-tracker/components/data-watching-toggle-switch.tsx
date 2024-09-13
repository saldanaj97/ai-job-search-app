import { EyeNoneIcon, EyeOpenIcon } from '@radix-ui/react-icons';

export function DataWatchingToggleSwitch({
  isWatching,
}: {
  isWatching: boolean;
}) {
  return (
    <div className="flex w-[100px] justify-center">
      {isWatching ? (
        <div className="text-center text-5xl text-green-500">
          <EyeOpenIcon />
        </div>
      ) : (
        <div className="text-center text-red-500">
          <EyeNoneIcon />
        </div>
      )}
    </div>
  );
}
