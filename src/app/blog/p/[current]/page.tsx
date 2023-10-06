import { getBlogList } from '@/app/lib/client/microcms';
import { LIMIT } from '@/app/lib/constants/limit';
import Pagination from '@/app/components/ui/Pagination';
import ArticleList from '@/app/components/page/dynamic/ArticleList';

type Props = {
  params: {
    current: string;
  };
};

// revalidate
// キャッシュを利用しない => SSRと同等
// キャッシュを〇秒間利用する => ISR同等

export const revalidate = 60;

export default async function Page({ params }: Props) {
  const current = parseInt(params.current as string, 10);
  const data = await getBlogList({
    limit: LIMIT,
    offset: LIMIT * (current - 1),
  });

  return (
    <div className="p-4">
      <ArticleList articles={data.contents} />
      <Pagination
        totalCount={data.totalCount}
        current={current}
        basePath="/blog"
      />
    </div>
  );
}
