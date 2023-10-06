import { Metadata } from 'next';
import { TitleTemplate } from '@/app/lib/meta/index';
import { getBlogDetail } from '@/app/lib/client/microcms';
import Article from '@/app/components/page/dynamic/Article';

type Props = {
  params: {
    slug: string;
  };
  searchParams: {
    dk: string;
  };
};

// revalidate
// キャッシュを利用しない => SSRと同等
// キャッシュを〇秒間利用する => ISR同等

export const revalidate = 60;

export async function generateMetadata({
  params,
  searchParams,
}: Props): Promise<Metadata> {
  const data = await getBlogDetail(params.slug, {
    draftKey: searchParams.dk,
  });

  return {
    title: `${data.title} | ${TitleTemplate}`,
    description: data.description,
    // Open Graph Protocolでシェア時にサムネイル付きカード表示
    openGraph: {
      type: 'article',
      title: data.title,
      description: data.description,
      siteName: `${TitleTemplate}`,
      images: [
        `${data?.thumbnail?.url}?txt=${data.title}&txt-size=45&txt-align=middle,center&txt-shad=5` ||
          '',
      ],
    },
    twitter: {
      card: 'summary_large_image',
    },
  };
}

export default async function Page({ params, searchParams }: Props) {
  const data = await getBlogDetail(params.slug, {
    draftKey: searchParams.dk,
  });

  return <Article data={data} />;
}
