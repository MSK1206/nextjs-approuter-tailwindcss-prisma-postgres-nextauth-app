import Link from 'next/link';
import { LIMIT } from '@/app/lib/constants/limit';

type Props = {
  totalCount: number;
  current?: number;
  basePath?: string;
  q?: string;
};

export default function Pagination({
  totalCount,
  current = 1,
  basePath = '',
  q,
}: Props) {
  const pages = Array.from({
    length: Math.ceil(totalCount / LIMIT),
  }).map((_, i) => i + 1);
  return (
    <ul className="flex items-center justify-center text-2xl mt-5">
      {pages.map((p) => (
        <li
          key={p}
          className="border border-solid pt-1 pb-1 pr-2 pl-2 first:rounded-l last:rounded-r"
        >
          {current !== p ? (
            <Link href={`${basePath}/p/${p}` + (q ? `?q=${q}` : '')}>{p}</Link>
          ) : (
            <span className="text-blue-700">{p}</span>
          )}
        </li>
      ))}
    </ul>
  );
}
