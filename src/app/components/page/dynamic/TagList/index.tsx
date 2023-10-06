import { Tag } from '@/app/lib/client/microcms';
import { TagIcon } from '@heroicons/react/24/outline';
import TagListItem from '@/app/components/page/dynamic/TagListItem';

type Props = {
  tags?: Tag[];
  hasLink?: boolean;
};

export default function TagList({ tags, hasLink = true }: Props) {
  if (!tags) {
    return null;
  }
  return (
    <ul className="flex flex-wrap gap-1 items-center">
      <TagIcon className="h-4 w-4 text-black" />
      {tags.map((tag) => (
        <li key={tag.id}>
          <TagListItem tag={tag} hasLink={hasLink} />
        </li>
      ))}
    </ul>
  );
}
