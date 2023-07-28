import Skeleton from "react-loading-skeleton";

export default function Loading() {
  return (
    <main>
      <div className="container grid md:grid-cols-4 gap-6 pt-16 pb-16 items-start">
        <div className="col-span-1 bg-white px-4 pb-6">
          <div className="bg-gray-200 w-full h-10 overflow-hidden rounded-md  p-3 shadow before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/50 hover:shadow-lg before:animate-[shimmer_20.5s_infinite]"></div>
        </div>
        <div className="col-span-3">
          <div></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 shadow before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/50 hover:shadow-lg before:animate-[shimmer_20.5s_infinite]">
            <div className="bg-white relative w-60 space-y-3 overflow-hidden rounded-md  p-3  group flex justify-between flex-col">
              <div className="h-[300px] w-full rounded-lg bg-gray-200"></div>
              <div className="space-y-3">
                <div className="h-5 w-8/12 rounded-full bg-gray-200"></div>
                <div className="space-y-1">
                  <div className="pt-4 pb-3 px-4 bg-gray-300 w-full h-6"></div>
                  <div className="pt-4 pb-3 px-4 bg-gray-300 w-full h-6"></div>
                </div>
              </div>
            </div>
            <div className="bg-white relative w-60 space-y-3 overflow-hidden rounded-md  p-3  group flex justify-between flex-col">
              <div className="h-[300px] w-full rounded-lg bg-gray-200"></div>
              <div className="space-y-3">
                <div className="h-5 w-8/12 rounded-full bg-gray-200"></div>
                <div className="space-y-1">
                  <div className="pt-4 pb-3 px-4 bg-gray-300 w-full h-6"></div>
                  <div className="pt-4 pb-3 px-4 bg-gray-300 w-full h-6"></div>
                </div>
              </div>
            </div>
            <div className="bg-white relative w-60 space-y-3 overflow-hidden rounded-md  p-3  group flex justify-between flex-col">
              <div className="h-[300px] w-full rounded-lg bg-gray-200"></div>
              <div className="space-y-3">
                <div className="h-5 w-8/12 rounded-full bg-gray-200"></div>
                <div className="space-y-1">
                  <div className="pt-4 pb-3 px-4 bg-gray-300 w-full h-6"></div>
                  <div className="pt-4 pb-3 px-4 bg-gray-300 w-full h-6"></div>
                </div>
              </div>
            </div>
            <div className="bg-white relative w-60 space-y-3 overflow-hidden rounded-md  p-3  group flex justify-between flex-col">
              <div className="h-[300px] w-full rounded-lg bg-gray-200"></div>
              <div className="space-y-3">
                <div className="h-5 w-8/12 rounded-full bg-gray-200"></div>
                <div className="space-y-1">
                  <div className="pt-4 pb-3 px-4 bg-gray-300 w-full h-6"></div>
                  <div className="pt-4 pb-3 px-4 bg-gray-300 w-full h-6"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
