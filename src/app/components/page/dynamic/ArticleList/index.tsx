import { Blog } from '@/app/lib/client/microcms';
import ArticleListItem from '@/app/components/page/dynamic/ArticleListItem';

type Props = {
  articles?: Blog[];
};

export default function ArticleList({ articles }: Props) {
  if (!articles) {
    return null;
  }
  if (articles.length === 0) {
    return <p>記事がありません。</p>;
  }
  return (
    <ul>
      {articles.map((article) => (
        <ArticleListItem key={article.id} blogs={article} />
      ))}
    </ul>
  );
}
