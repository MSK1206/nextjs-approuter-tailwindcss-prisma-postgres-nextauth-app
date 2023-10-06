import { formatDate } from '@/app/lib/util/formatDate';
import { ClockIcon } from '@heroicons/react/24/outline';

type Props = {
  date: string;
};

export default function PublishedDate({ date }: Props) {
  return (
    <span className="inline-flex items-center justify-around">
      <ClockIcon className="h-4 w-4 text-black" />
      {formatDate(date)}
    </span>
  );
}
