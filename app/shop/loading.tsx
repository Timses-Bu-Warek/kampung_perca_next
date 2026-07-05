import Skeleton from 'react-loading-skeleton';
import Breadcrumbs from '../_components/breadcrumbs';

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
              <div
                className="bg-white w-60 space-y-3 overflow-hidden rounded-md p-3 group flex justify-between flex-col shadow-xs "
                key={index}
              >
                <div className="h-75 w-full rounded-lg bg-gray-200"></div>
                <div className="space-y-3">
                  <div className="h-5 w-8/12 rounded-full bg-gray-200"></div>
                  <div className="space-y-1">
                    <div className="pt-4 pb-3 px-4 bg-gray-300 w-full h-6"></div>
                    <div className="pt-4 pb-3 px-4 bg-gray-300 w-full h-6"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
