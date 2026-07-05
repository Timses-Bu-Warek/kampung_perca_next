import Skeleton from 'react-loading-skeleton';
import Breadcrumbs from '@/app/_components/breadcrumbs';

export default function Loading() {
  return (
    <main className="container mx-auto">
      <div className=" flex items-center gap-4 py-4">
        <Breadcrumbs
          params={{
            slug: 'Produk',
          }}
        />
      </div>
      <div className="container flex flex-col gap-6 md:grid md:grid-cols-4">
        <div className="md:col-span-2">
          <Skeleton height={500} />
        </div>
        <div className="md:col-span-2">
          <Skeleton className="mb-2" height={40} />
          <div className="space-y-2">
            <Skeleton count={3} />
          </div>
          <Skeleton count={3} />
        </div>
      </div>
      <Skeleton />
    </main>
  );
}
