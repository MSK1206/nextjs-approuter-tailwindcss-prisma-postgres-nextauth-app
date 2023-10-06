import Link from 'next/link';
import { Tag } from '@/app/lib/client/microcms';

type Props = {
  tag: Tag;
  hasLink?: boolean;
};

export default function TagListItem({ tag, hasLink = true }: Props) {
  if (hasLink) {
    return (
      <Link
        href={`/tags/${tag.id}`}
        className="bg-slate-200 py-1 px-2 rounded-lg whitespace-nowrap"
      >
        {tag.name}
      </Link>
    );
  }
  return (
    <span className="bg-slate-200 py-1 px-2 rounded-lg whitespace-nowrap">
      {tag.name}
    </span>
  );
}
