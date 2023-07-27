import Skeleton from "react-loading-skeleton";

export default function Loading() {
  return (
    <main>
      <div className="container py-4 flex items-center gap-4">
        <div className="animate-pulse"></div>
      </div>
      <div className="container grid md:grid-cols-4 gap-6 pt-4 pb-16 items-start">
        search bar
        <div className="col-span-1 bg-white px-4 pb-6 shadow rounded">
          <div className="divide-y divide-gray-200 space-y-5"></div>
        </div>
      </div>
    </main>
  );
}
