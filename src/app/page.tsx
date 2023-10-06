import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { getMeta } from '@/app/lib/client/microcms';
import { Title } from '@/app/lib/meta';

export const revalidate = 0;

export async function generateMetadata(): Promise<Metadata> {
  const canonicalUrl = process.env.NEXT_PUBLIC_CANONICAL_URL as string;
  const ogUrl = process.env.NEXT_PUBLIC_BASE_URL as string
  const data = await getMeta();
  if (!data) {
    return {};
  }

  return {
    metadataBase: new URL(
      process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000',
    ),
    title: `${Title} - ${data.titleTemplate}`,
    description: data.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: 'website',
      url: ogUrl,
      title: data.ogTitle,
      description: data.ogDescription,
      siteName: data.titleTemplate,
      images: [
        `${data?.ogImage?.url}?txt=${data.ogTitle}&txt-size=45&txt-align=middle,center&txt-shad=5` ||
          '',
      ],
    },
    twitter: {
      card: 'summary_large_image',
    },
  };
}

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-24">
      <h1>まだ開発中です</h1>
    </main>
  );
}
