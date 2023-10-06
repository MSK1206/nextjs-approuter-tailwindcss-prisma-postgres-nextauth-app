import { Suspense } from 'react';
import Loading from './loading';
import { ContactTitle, TitleTemplate } from '@/app/lib/meta';

export const metadata = {
  title: `${ContactTitle} - ${TitleTemplate}`,
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
