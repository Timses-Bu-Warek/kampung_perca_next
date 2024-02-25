import { Metadata } from "next";
import getAllProducts from "@/lib/getAllProducts";
import ProductComp from "./components/ProductComp";
import Breadcrumbs from "@/app/components/breadcrumbs";

import getSearchProducts from "@/lib/getSearchProducts";
import ProductsSearchBar from "./components/ProductsSearchBar";
import { Suspense } from "react";
import Loading from "./shopLoading";
import { ProductSort } from "./components/ProductSort";

export const metadata: Metadata = {
  title: "Beli Produk",
  description:
    "Beli Produk Perca di Kampung Perca Sindangsari. Murah dan Berkualitas.",
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
  keywords: [
    "Jual Alas Mangkuk Perca",
    "Jual Appron Perca",
    "Jual Baju Anak Perca",
    "Jual Baju Pangsi",
    "Jual Baju Tidur Perca",
    "Jual Bantal Duduk",
    "Jual Bantal Kursi",
    "Jual Blouse Perca",
    "Jual Cempal Ayam",
    "Jual Daster",
    "Jual Dompet Koin",
    "Jual Gantungan Kunci",
    "Jual Goodie Bag Perca",
    "Jual Ikat Rambut",
    "Jual Keset Bentuk",
    "Jual Masker Perca",
    "Jual Lap tangan",
    "Jual Outer Perca",
    "Jual Pouch",
    "Jual Rok Perca",
    "Jual Rompi Perca",
    "Jual Baju Tidur Perca",
    "Jual Totopong",
    "Jual Notebook",
    "Jual Tempat tisu perca",
    "Jual Baju Tidur Perca",
    "Jual Tas Perca",
  ],
};

export default function Shop() {
  return (
    <Suspense fallback={<Loading />}>
      <main>
        {/* <!-- breadcrums --> */}
        <Breadcrumbs
          params={{
            slug: "Shop",
          }}
        />
        {/* <!-- end breadcrums --> */}

        {/* <!-- shop wrapper --> */}
        <div className="container grid items-start gap-6 pt-4 pb-16 md:grid-cols-4">
          {/* <!-- side bar --> */}
          <div className="col-span-1 px-4 pb-6 bg-white rounded shadow">
            <div className="space-y-5 divide-y divide-gray-200">
              {/* <!-- search --> */}
              <ProductsSearchBar />
              {/* <!-- end search --> */}

              {/* <!-- category filter --> */}
              <div className="hidden">
                <h3 className="mb-3 text-xl font-medium text-gray-800 uppercase">
                  Categories
                </h3>
                <div className="space-y-2">
                  {/* <!-- single category --> */}
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="cat-1"
                      className="rounded-sm cursor-pointer text-primary focus:ring-0"
                    />
                    <label
                      htmlFor="cat-1"
                      className="ml-3 text-gray-600 cursor-pointer"
                    >
                      Baju
                    </label>
                    {/* <div className="ml-auto text-sm text-gray-600">(15)</div> */}
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="cat-2"
                      className="rounded-sm cursor-pointer text-primary focus:ring-0"
                    />
                    <label
                      htmlFor="cat-2"
                      className="ml-3 text-gray-600 cursor-pointer"
                    >
                      Celana
                    </label>
                    {/* <div className="ml-auto text-sm text-gray-600">(20)</div> */}
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="cat-3"
                      className="rounded-sm cursor-pointer text-primary focus:ring-0"
                    />
                    <label
                      htmlFor="cat-3"
                      className="ml-3 text-gray-600 cursor-pointer"
                    >
                      Tas
                    </label>
                    {/* <div className="ml-auto text-sm text-gray-600">(30)</div> */}
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="cat-4"
                      className="rounded-sm cursor-pointer text-primary focus:ring-0"
                    />
                    <label
                      htmlFor="cat-4"
                      className="ml-3 text-gray-600 cursor-pointer"
                    >
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
                  className="rounded-sm cursor-pointer text-primary focus:ring-0"
                />
                <label htmlFor="cat-5" className="ml-3 text-gray-600 cursor-pointer"
                  >Opsi 1</label>
                <div className="ml-auto text-sm text-gray-600">(15)</div>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="cat-6"
                  className="rounded-sm cursor-pointer text-primary focus:ring-0"
                />
                <label htmlFor="cat-6" className="ml-3 text-gray-600 cursor-pointer"
                  >Opsi 2</label>
                <div className="ml-auto text-sm text-gray-600">(20)</div>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="cat-7"
                  className="rounded-sm cursor-pointer text-primary focus:ring-0"
                />
                <label htmlFor="cat-7" className="ml-3 text-gray-600 cursor-pointer"
                  >Opsi 3</label>
                <div className="ml-auto text-sm text-gray-600">(30)</div>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="cat-8"
                  className="rounded-sm cursor-pointer text-primary focus:ring-0"
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
                <h3 className="pt-6 mb-3 text-xl font-medium text-gray-800 uppercase">
                  Price
                </h3>
                <div className="flex items-center mt-4">
                  <input
                    type="text"
                    className="w-full px-3 py-1 text-sm text-gray-600 border-gray-300 rounded shadow-sm focus:border-primary focus:ring-0"
                    placeholder="min"
                  />
                  <span className="mx-3 text-gray-500">-</span>
                  <input
                    type="text"
                    className="w-full px-3 py-1 text-sm text-gray-600 border-gray-300 rounded shadow-sm focus:border-primary focus:ring-0"
                    placeholder="max"
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
                    className="items-center justify-center w-6 h-6 text-xs text-gray-600 border border-gray-200 rounded-sm shadow-sm cursor-pointer flexl"
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
                    className="items-center justify-center w-6 h-6 text-xs text-gray-600 border border-gray-200 rounded-sm shadow-sm cursor-pointer flexl"
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
                    className="items-center justify-center w-6 h-6 text-xs text-gray-600 border border-gray-200 rounded-sm shadow-sm cursor-pointer flexl"
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
                    className="items-center justify-center w-6 h-6 text-xs text-gray-600 border border-gray-200 rounded-sm shadow-sm cursor-pointer flexl"
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
                    className="items-center justify-center w-6 h-6 text-xs text-gray-600 border border-gray-200 rounded-sm shadow-sm cursor-pointer flexl"
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
                <div className="flex items-center justify-center w-10 text-white border rounded cursor-pointer border-primary h-9 bg-primary">
                  <i className="fas fa-th"></i>
                </div>
                <div className="flex items-center justify-center w-10 text-gray-600 border border-gray-300 rounded cursor-pointer sm:hidden h-9">
                  <i className="fas fa-list"></i>
                </div>
              </div>
            </div>
            {/* <!-- sorting end --> */}

            {/* <!-- produk grid --> */}
            <ProductComp />
            {/* <!-- end produk grid --> */}
          </div>
        </div>
        {/* <!-- end shop wrapper --> */}
      </main>
    </Suspense>
  );
}
