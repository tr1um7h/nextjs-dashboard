import '@/app/ui/global.css';
import { Metadata } from 'next';
import { inter } from './ui/fonts';

export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard | @lllariogonzalez',
    default: 'Acme Dashboard by @tr1um7h',
  },
  description: 'The official Next.js Course Dashboard, built with App Router.',
  // metadataBase: new URL('https://nextjs-dashboard-acme.vercel.app'),
  metadataBase: new URL('https://nextjs-dashboard-git-main-tr1um7hs-projects.vercel.app'),
};
// root layout will be shared across all pages in your application. 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
