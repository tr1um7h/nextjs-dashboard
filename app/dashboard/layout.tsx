import SideNav from '@/app/ui/dashboard/sidenav';
import { Metadata } from 'next';
 
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

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}