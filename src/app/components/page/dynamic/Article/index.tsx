import Image from 'next/image';
import { type Article } from '@/app/lib/client/microcms';
import TagList from '@/app/components/page/dynamic/TagList';
import PublishedDate from '@/app/components/page/dynamic/Date';
import { formatHighLight } from '@/app/lib/util/highLight';

type Props = {
  data: Article;
};

export default function Article({ data }: Props) {
  return (
    <main id="top" role="main">
      <div className="">
        <TagList tags={data.tags} />
      </div>
      <PublishedDate date={data.publishedAt || data.createdAt} />
      <h1 className="mt-6 text-center font-bold text-[20px] max-[796px]:text-[calc(100%+5px)] max-[844px]:text-[calc(100%+10px)] max-[896px]:text-[calc(100%+15px)] max-[1366px]:text-[calc(100%+25px)]">
        {data.title}
      </h1>
      <p className="text-center mt-2">{data.description}</p>
      {data.thumbnail && (
        <Image
          src={`${data.thumbnail?.url}?txt=${data.title}&txt-size=45&txt-align=middle,center&txt-shad=5`}
          alt={data.title}
          className={'pt-2 pb-2 mt-2 mb-2'}
          width={data.thumbnail?.width}
          height={data.thumbnail?.height}
          role="img"
        />
      )}
      <div
        className="article"
        role="article"
        dangerouslySetInnerHTML={{
          __html: `${formatHighLight(data.content)}`,
        }}
      />
    </main>
  );
}
