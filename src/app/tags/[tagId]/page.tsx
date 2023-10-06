import { getBlogList } from '@/app/lib/client/microcms';
import { LIMIT } from '@/app/lib/constants/limit';
import ArticleList from '@/app/components/page/dynamic/ArticleList';
import Pagination from '@/app/components/ui/Pagination';

type Props = {
  params: {
    tagId: string;
  };
};

// キャッシュを利用しない => SSRと同等
// キャッシュを〇秒間利用する => ISR同等

export const revalidate = 60;

export default async function Page({ params }: Props) {
  const { tagId } = params;
  const data = await getBlogList({
    limit: LIMIT,
    filters: `tags[contains]${tagId}`,
  });

  return (
    <div className="p-4">
      <ArticleList articles={data.contents} />
      <Pagination
        totalCount={data.totalCount}
        basePath={`/tags/${tagId}`}
      />
    </div>
  );
}
