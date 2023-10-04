import './globals.css';
import type { Metadata } from 'next';
import { Zen_Antique } from 'next/font/google';

const inter = Zen_Antique({
  display: 'swap',
  weight: '400',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Next.js + Prisma + Postgres + NextAuth App.',
  description:
    'Next.js + Prisma + Postgres + NextAuthで構成されたプロジェクトです。',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
