import DashboardSkeleton from '@/app/ui/skeletons';

// (overview) 有括号，表示这是一个组，不会放到URL，下面的还是会被用到，和invoices, customers隔离开了
export default function Loading() {
    // return <div>Loading...</div>;
    // into smaller "chunks" and progressively stream them
    return <DashboardSkeleton />;
  }