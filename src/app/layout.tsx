import './styles/globals.css';
import { Zen_Antique } from 'next/font/google';

const inter = Zen_Antique({
  display: 'swap',
  weight: '400',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
