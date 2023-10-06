import Link from 'next/link';
import Image from 'next/image';
import { Blog } from '@/app/lib/client/microcms';
import PublishedDate from '@/app/components/page/dynamic/Date';

import styles from './index.module.css'

type Props = {
  blogs: Blog;
};

export default function ArticleListItem({ blogs }: Props) {
  return (
    <li className="border-solid border-b border-b-gray-300 last:border-b-[0]">
      <Link href={`/blog/${blogs.id}`} className={styles.articlelist}>
        {blogs?.thumbnail ? (
          <Image
            src={
              `${blogs?.thumbnail?.url}?txt=${blogs.title}&txt-size=45&txt-align=middle,center&txt-shad=5` ||
              ''
            }
            alt={blogs.title}
            className={`w-[200px] h-auto rounded max-sm:hidden ${styles.image}`}
            width={blogs.thumbnail?.width}
            height={blogs.thumbnail?.height}
            priority
          />
        ) : (
          <Image
            src={'/no-img.jpg'}
            alt={'No-Image'}
            className="w-[200px] h-auto rounded max-sm:hidden"
            width={1200}
            height={630}
            priority
          />
        )}
        <dl className={styles.publishdesc}>
          <dt className="text-[1rem] font-bold">{blogs.title}</dt>
          <dd className="flex items-center gap-4">
            <span className="pt-1 pb-1 pr-2">更新情報</span>
            <PublishedDate date={blogs.publishedAt || blogs.createdAt} />
          </dd>
        </dl>
      </Link>
    </li>
  );
}
