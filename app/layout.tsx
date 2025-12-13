import type { Metadata } from 'next';
import { Anton, DM_Sans } from 'next/font/google';
import { I18nProvider } from '@/src/context/i18n.context';
import './globals.css';

const anton = Anton({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-title',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: 'InFlow Software House',
  description:
    'Software House especializada em criar soluções digitais sob medida do zero e do jeito que o seu projeto exige.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${anton.variable} ${dmSans.variable}`}>
      <body className={`antialiased`}>
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
