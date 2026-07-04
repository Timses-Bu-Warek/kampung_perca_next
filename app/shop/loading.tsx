import Skeleton from 'react-loading-skeleton';
import Breadcrumbs from '../components/breadcrumbs';

export default function Loading() {
  const newArray = [...Array(30)];

  return (
    <main className="container mx-auto">
      <Breadcrumbs
        params={{
          slug: 'Shop',
        }}
      />
      <div className="container grid items-start gap-6 pt-4 pb-16 md:grid-cols-4">
        <div className="col-span-1 px-4 pb-6 bg-white rounded-sm shadow-sm">
          <Skeleton count={2} />
        </div>
        <div className="col-span-3">
          <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {newArray.map((_, index) => (
              <div key={index}>
                <Skeleton height={300} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
