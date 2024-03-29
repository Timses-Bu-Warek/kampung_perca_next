"use client"

import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import getAllProducts from "@/lib/getAllProducts";
import ProductCompSearch from "../components/ProductCompSearch";
import Breadcrumbs from "@/app/components/breadcrumbs";
import { useSearchParams } from "next/navigation";
import ProductsSearchBar from "../components/ProductsSearchBar";
import { Suspense, useCallback } from "react";
import Loading from "./loading"
import { ProductSortSearch } from "../components/ProductSortSearch";

// export const metadata: Metadata = {
//   title: "Shop Kampung Perca Products",
//   description: "Beli produk kampung perca",
// };


export default function Shop() {

  // Return as Object (so must be converted! Convertion can read below)
  // console.log("searchParams: " + searchParams)

  // Retrieve Key from searchParams 
  // Example: /shop/search?NamaProduk=tas
  // retrive NamaProduk
  // let searchQueryKeys : any = Object.keys(searchParams);
  // console.log("searchQueryKeys: " + searchQueryKeys)

  // Retrieve Values from searchParams 
  // Example: /shop/search?NamaProduk=tas
  // retrive tas
  // const searchQueryValues: any = Object.values(searchParams);
  // console.log("searchQueryValues: " + searchQueryValues)

  // Retrieve Entries (key, values) from searchParams 
  // Example: /shop/search?NamaProduk=tas
  // retrive NamaProduk,tas
  // const searchQueryEntries: any = Object.entries(searchParams);
  // console.log("searchQueryEntries: " + searchQueryEntries)

  const searchParams: any = useSearchParams()!

  const searchNamaProdukValues: any = searchParams.get("NamaProduk");
  const sortValues: any = searchParams.get("sort");

  return (
    <Suspense fallback={<Loading />}>
      <main>
        {/* <!-- breadcrums --> */}
        <Breadcrumbs params={{
          slug: "Shop"
        }} />
        {/* <!-- end breadcrums --> */}

        {/* <!-- shop wrapper --> */}
        <div className="container grid md:grid-cols-4 gap-6 pt-4 pb-16 items-start">
          {/* <!-- side bar --> */}
          <div className="col-span-1 bg-white px-4 pb-6 shadow rounded">
            <div className="divide-y divide-gray-200 space-y-5">
              {/* <!-- search --> */}
              <ProductsSearchBar />
              {/* <!-- end search --> */}

              {/* <!-- category filter --> */}
              <div className="hidden">
                <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
                  Categories
                </h3>
                <div className="space-y-2">
                  {/* <!-- single category --> */}
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="cat-1"
                      className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                    />
                    <label
                      htmlFor="cat-1"
                      className="text-gray-600 ml-3 cursor-pointer"
                    >
                      Baju
                    </label>
                    {/* <div className="ml-auto text-gray-600 text-sm">(15)</div> */}
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="cat-2"
                      className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                    />
                    <label
                      htmlFor="cat-2"
                      className="text-gray-600 ml-3 cursor-pointer"
                    >
                      Celana
                    </label>
                    {/* <div className="ml-auto text-gray-600 text-sm">(20)</div> */}
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="cat-3"
                      className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                    />
                    <label
                      htmlFor="cat-3"
                      className="text-gray-600 ml-3 cursor-pointer"
                    >
                      Tas
                    </label>
                    {/* <div className="ml-auto text-gray-600 text-sm">(30)</div> */}
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="cat-4"
                      className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                    />
                    <label
                      htmlFor="cat-4"
                      className="text-gray-600 ml-3 cursor-pointer"
                    >
                      Souvenir
                    </label>
                    {/* <div className="ml-auto text-gray-600 text-sm">(40)</div> */}
                  </div>
                </div>
              </div>
              {/* <!-- end category filter --> */}

              {/* <!-- category filter 2 -->
          <div className="pt-4">
            <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium pt-6">
              Brands
            </h3>
            <div className="space-y-2">
              <!-- single category -->
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="cat-5"
                  className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                />
                <label htmlFor="cat-5" className="text-gray-600 ml-3 cursor-pointer"
                  >Opsi 1</label>
                <div className="ml-auto text-gray-600 text-sm">(15)</div>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="cat-6"
                  className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                />
                <label htmlFor="cat-6" className="text-gray-600 ml-3 cursor-pointer"
                  >Opsi 2</label>
                <div className="ml-auto text-gray-600 text-sm">(20)</div>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="cat-7"
                  className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                />
                <label htmlFor="cat-7" className="text-gray-600 ml-3 cursor-pointer"
                  >Opsi 3</label>
                <div className="ml-auto text-gray-600 text-sm">(30)</div>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="cat-8"
                  className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                />
                <label htmlFor="cat-8" className="text-gray-600 ml-3 cursor-pointer"
                  >Opsi 4</label>
                <div className="ml-auto text-gray-600 text-sm">(40)</div>
              </div>
            </div>
          </div>
          <!-- end category filter 2 --> */}

              {/* <!-- price filter --> */}
              <div className="hidden pt-4">
                <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium pt-6">
                  Price
                </h3>
                <div className="mt-4 flex items-center">
                  <input
                    type="text"
                    className="w-full border-gray-300 focus:border-primary focus:ring-0 px-3 py-1 text-gray-600 text-sm shadow-sm rounded"
                    placeholder="min"
                  />
                  <span className="mx-3 text-gray-500">-</span>
                  <input
                    type="text"
                    className="w-full border-gray-300 focus:border-primary focus:ring-0 px-3 py-1 text-gray-600 text-sm shadow-sm rounded"
                    placeholder="max"
                  />
                </div>
              </div>
              {/* <!-- end price filter --> */}

              {/* <!-- size filter --> */}
              {/* <div className="pt-4">
              <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium pt-6">
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
                    className="text-xs border border-gray-200 rounded-sm h-6 w-6 flexl items-center justify-center cursor-pointer shadow-sm text-gray-600"
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
                    className="text-xs border border-gray-200 rounded-sm h-6 w-6 flexl items-center justify-center cursor-pointer shadow-sm text-gray-600"
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
                    className="text-xs border border-gray-200 rounded-sm h-6 w-6 flexl items-center justify-center cursor-pointer shadow-sm text-gray-600"
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
                    className="text-xs border border-gray-200 rounded-sm h-6 w-6 flexl items-center justify-center cursor-pointer shadow-sm text-gray-600"
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
                    className="text-xs border border-gray-200 rounded-sm h-6 w-6 flexl items-center justify-center cursor-pointer shadow-sm text-gray-600"
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
            {/* Sortir */}
            <div className="flex items-center mb-4">
              <ProductSortSearch />

              <div className="flex gap-2 ml-auto">
                <div className="border border-primary w-10 h-9 flex items-center justify-center text-white bg-primary rounded cursor-pointer">
                  <i className="fas fa-th"></i>
                </div>
                <div className="border border-gray-300 w-10 h-9 flex items-center justify-center text-gray-600 rounded cursor-pointer">
                  <i className="fas fa-list"></i>
                </div>
              </div>
            </div>
            {/* <!-- sorting end --> */}

            {/* <!-- produk grid --> */}
            <ProductCompSearch params={{
              NamaProduk: searchNamaProdukValues,
              sort: sortValues
            }} />

            {/* <!-- end produk grid --> */}
          </div>
        </div>
        {/* <!-- end shop wrapper --> */}
      </main>
    </Suspense>
  );
}
