import { Suspense } from 'react';
import Loading from './loading';
import { TagsTitle, TitleTemplate } from '@/app/lib/meta';

export const metadata = {
  title: `${TagsTitle} - ${TitleTemplate}`,
  description: 'MSK1206のブログページ',
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </>
  );
}
