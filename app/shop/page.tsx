import type { Metadata } from 'next';
import { createSearchParamsCache, parseAsString } from 'nuqs/server';
import Breadcrumbs from '@/app/_components/breadcrumbs';
import getSearchProducts from '@/features/product/data-access/get-search-products';
import { serverEnvironment } from '@/lib/env/server';
import type { SearchParameters } from '@/lib/types/search-parameters';
import ProductGrid from './_components/product-grid';
import { ProductSort } from './_components/product-sort';
import ProductsSearchBar from './_components/products-search-bar';

export const metadata: Metadata = {
  alternates: {
    canonical: `${serverEnvironment.BASE_URL}/shop`,
  },
  description: 'Beli Produk Perca di Kampung Perca Sindangsari. Murah dan Berkualitas.',
  keywords: [
    'Jual Alas Mangkuk Perca',
    'Jual Appron Perca',
    'Jual Baju Anak Perca',
    'Jual Baju Pangsi',
    'Jual Baju Tidur Perca',
    'Jual Bantal Duduk',
    'Jual Bantal Kursi',
    'Jual Blouse Perca',
    'Jual Cempal Ayam',
    'Jual Daster',
    'Jual Dompet Koin',
    'Jual Gantungan Kunci',
    'Jual Goodie Bag Perca',
    'Jual Ikat Rambut',
    'Jual Keset Bentuk',
    'Jual Masker Perca',
    'Jual Lap tangan',
    'Jual Outer Perca',
    'Jual Pouch',
    'Jual Rok Perca',
    'Jual Rompi Perca',
    'Jual Baju Tidur Perca',
    'Jual Totopong',
    'Jual Notebook',
    'Jual Tempat tisu perca',
    'Jual Baju Tidur Perca',
    'Jual Tas Perca',
  ],
  robots: {
    follow: true,
    index: true,
    nocache: true,
  },
  title: 'Beli Produk',
};

export default async function Shop({
  searchParams,
}: Readonly<{
  searchParams: SearchParameters;
}>) {
  const searchParameters = await searchParams;

  const search = createSearchParamsCache({
    q: parseAsString,
    sort: parseAsString,
  }).parse(searchParameters);

  const products = await getSearchProducts(search.q, search.sort);

  return (
    <main className="container mx-auto">
      {/* <!-- breadcrums --> */}
      <Breadcrumbs
        params={{
          slug: 'Shop',
        }}
      />
      {/* <!-- end breadcrums --> */}

      {/* <!-- shop wrapper --> */}
      <div className="container grid items-start gap-6 pt-4 pb-16 md:grid-cols-4">
        {/* <!-- side bar --> */}
        <div className="col-span-1 px-4 pb-6 bg-white rounded-sm shadow-sm">
          <div className="space-y-5 divide-y divide-gray-200">
            {/* <!-- search --> */}
            <ProductsSearchBar />
            {/* <!-- end search --> */}

            {/* <!-- category filter --> */}
            <div className="hidden">
              <h3 className="mb-3 text-xl font-medium text-gray-800 uppercase">Categories</h3>
              <div className="space-y-2">
                {/* <!-- single category --> */}
                <div className="flex items-center">
                  <input
                    className="rounded-xs cursor-pointer text-primary focus:ring-0"
                    id="cat-1"
                    type="checkbox"
                  />
                  <label className="ml-3 text-gray-600 cursor-pointer" htmlFor="cat-1">
                    Baju
                  </label>
                  {/* <div className="ml-auto text-sm text-gray-600">(15)</div> */}
                </div>
                <div className="flex items-center">
                  <input
                    className="rounded-xs cursor-pointer text-primary focus:ring-0"
                    id="cat-2"
                    type="checkbox"
                  />
                  <label className="ml-3 text-gray-600 cursor-pointer" htmlFor="cat-2">
                    Celana
                  </label>
                  {/* <div className="ml-auto text-sm text-gray-600">(20)</div> */}
                </div>
                <div className="flex items-center">
                  <input
                    className="rounded-xs cursor-pointer text-primary focus:ring-0"
                    id="cat-3"
                    type="checkbox"
                  />
                  <label className="ml-3 text-gray-600 cursor-pointer" htmlFor="cat-3">
                    Tas
                  </label>
                  {/* <div className="ml-auto text-sm text-gray-600">(30)</div> */}
                </div>
                <div className="flex items-center">
                  <input
                    className="rounded-xs cursor-pointer text-primary focus:ring-0"
                    id="cat-4"
                    type="checkbox"
                  />
                  <label className="ml-3 text-gray-600 cursor-pointer" htmlFor="cat-4">
                    Souvenir
                  </label>
                  {/* <div className="ml-auto text-sm text-gray-600">(40)</div> */}
                </div>
              </div>
            </div>
            {/* <!-- end category filter --> */}

            {/* <!-- category filter 2 -->
          <div className="pt-4">
            <h3 className="pt-6 mb-3 text-xl font-medium text-gray-800 uppercase">
              Brands
            </h3>
            <div className="space-y-2">
              <!-- single category -->
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="cat-5"
                  className="rounded-xs cursor-pointer text-primary focus:ring-0"
                />
                <label htmlFor="cat-5" className="ml-3 text-gray-600 cursor-pointer"
                  >Opsi 1</label>
                <div className="ml-auto text-sm text-gray-600">(15)</div>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="cat-6"
                  className="rounded-xs cursor-pointer text-primary focus:ring-0"
                />
                <label htmlFor="cat-6" className="ml-3 text-gray-600 cursor-pointer"
                  >Opsi 2</label>
                <div className="ml-auto text-sm text-gray-600">(20)</div>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="cat-7"
                  className="rounded-xs cursor-pointer text-primary focus:ring-0"
                />
                <label htmlFor="cat-7" className="ml-3 text-gray-600 cursor-pointer"
                  >Opsi 3</label>
                <div className="ml-auto text-sm text-gray-600">(30)</div>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="cat-8"
                  className="rounded-xs cursor-pointer text-primary focus:ring-0"
                />
                <label htmlFor="cat-8" className="ml-3 text-gray-600 cursor-pointer"
                  >Opsi 4</label>
                <div className="ml-auto text-sm text-gray-600">(40)</div>
              </div>
            </div>
          </div>
          <!-- end category filter 2 --> */}

            {/* <!-- price filter --> */}
            <div className="hidden pt-4">
              <h3 className="pt-6 mb-3 text-xl font-medium text-gray-800 uppercase">Price</h3>
              <div className="flex items-center mt-4">
                <input
                  className="w-full px-3 py-1 text-sm text-gray-600 border-gray-300 rounded-sm shadow-xs focus:border-primary focus:ring-0"
                  placeholder="min"
                  type="text"
                />
                <span className="mx-3 text-gray-500">-</span>
                <input
                  className="w-full px-3 py-1 text-sm text-gray-600 border-gray-300 rounded-sm shadow-xs focus:border-primary focus:ring-0"
                  placeholder="max"
                  type="text"
                />
              </div>
            </div>
            {/* <!-- end price filter --> */}

            {/* <!-- size filter --> */}
            {/* <div className="pt-4">
              <h3 className="pt-6 mb-3 text-xl font-medium text-gray-800 uppercase">
                Size
              </h3>
              <div className="flex items-center gap-2">
                <div className="size-selector">
                  <input
                    type="radio"
                    name="size"
                    className="hidden"
                    id="size-xs"
                  />
                  <label
                    htmlFor="size-xs"
                    className="items-center justify-center w-6 h-6 text-xs text-gray-600 border border-gray-200 rounded-xs shadow-xs cursor-pointer flexl"
                  >
                    XS
                  </label>
                </div>
                <div className="size-selector">
                  <input
                    type="radio"
                    name="size"
                    className="hidden"
                    id="size-s"
                  />
                  <label
                    htmlFor="size-s"
                    className="items-center justify-center w-6 h-6 text-xs text-gray-600 border border-gray-200 rounded-xs shadow-xs cursor-pointer flexl"
                  >
                    S
                  </label>
                </div>
                <div className="size-selector">
                  <input
                    type="radio"
                    name="size"
                    className="hidden"
                    id="size-m"
                  />
                  <label
                    htmlFor="size-m"
                    className="items-center justify-center w-6 h-6 text-xs text-gray-600 border border-gray-200 rounded-xs shadow-xs cursor-pointer flexl"
                  >
                    M
                  </label>
                </div>
                <div className="size-selector">
                  <input
                    type="radio"
                    name="size"
                    className="hidden"
                    id="size-l"
                  />
                  <label
                    htmlFor="size-l"
                    className="items-center justify-center w-6 h-6 text-xs text-gray-600 border border-gray-200 rounded-xs shadow-xs cursor-pointer flexl"
                  >
                    L
                  </label>
                </div>
                <div className="size-selector">
                  <input
                    type="radio"
                    name="size"
                    className="hidden"
                    id="size-xl"
                  />
                  <label
                    htmlFor="size-xl"
                    className="items-center justify-center w-6 h-6 text-xs text-gray-600 border border-gray-200 rounded-xs shadow-xs cursor-pointer flexl"
                  >
                    XL
                  </label>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        {/* <!-- end side bar --> */}

        {/* <!-- product wrapper --> */}
        <div className="col-span-3">
          {/* <!-- sorting --> */}
          <div className="flex items-center mb-4">
            <ProductSort />

            <div className="flex gap-2 ml-auto sm:hidden">
              <div className="flex items-center justify-center w-10 text-white border rounded-sm cursor-pointer border-primary h-9 bg-primary">
                <i className="fas fa-th"></i>
              </div>
              <div className="flex items-center justify-center w-10 text-gray-600 border border-gray-300 rounded-sm cursor-pointer sm:hidden h-9">
                <i className="fas fa-list"></i>
              </div>
            </div>
          </div>
          {/* <!-- sorting end --> */}

          {/* <!-- produk grid --> */}
          <ProductGrid products={products} />
          {/* <!-- end produk grid --> */}
        </div>
      </div>
      {/* <!-- end shop wrapper --> */}
    </main>
  );
}
