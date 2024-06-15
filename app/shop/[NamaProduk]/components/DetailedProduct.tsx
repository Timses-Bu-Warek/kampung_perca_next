"use client";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Link from "next/link";
import Image from "next/image";
import useSWR from "swr";
import { useParams } from "next/navigation";
import ImageContoh from "@/public/img/Produk/contoh_baju.webp";
import { SetStateAction, useState } from "react";
import Breadcrumbs from "@/app/components/breadcrumbs";
import RecommendationComp from "@/app/components/RecommendationComp";
import QuantityComp from "./QuantityComp";
import SizeComp from "./SizeComp";
import CldImage from "@/app/components/CldImage";

// export const dynamic = 'force-dynamic';

const fetcher = async (address: string) => {
  const response = await fetch(
    address + "?API_SECRET_KEY=" + process.env.API_SECRET_KEY
  );
  // const data = await response.json()
  // return data
  return response.json();
};

export default function DetailedProduct() {
  const params = useParams<{ NamaProduk: string }>();

  const [quantity, setQuantity] = useState(1);

  const chooseQuantity = (quantity: SetStateAction<number>) => {
    setQuantity(quantity);
  };
  const [name, setName] = useState(params.NamaProduk);
  const [ukuran, setUkuran] = useState("");

  const chooseUkuran = (ukuran: any) => {
    setUkuran(ukuran);
  };

  // const fetcher = getProduct(params.NamaProduk)
  // const fetcher = async(url: string) => {
  //      fetch(url).then(r => r.json())
  // }

  const address = `/api/shop/${params.NamaProduk}`;
  const NamaProduk = params.NamaProduk;
  // const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR(address, fetcher);
  // const { data, error } = useSWR(getProduct(params.NamaProduk));

  // console.log("address: " + address)
  // console.log("fetcher: " + fetcher)
  // console.log("data: " + data);

  if (error) return <div>Failed to fetch product</div>;
  // if (!data) return <div>Loading....</div>
  if (!data)
    return (
      <div>
        <Skeleton />
      </div>
    );

  let waAPI;
  if (data.Ukuran) {
    waAPI =
      "https://api.whatsapp.com/send/?phone=6285810096563&text=Hai kak, aku mau pesan : " +
      quantity +
      " " +
      name +
      " dengan ukuran " +
      ukuran;
  } else {
    waAPI =
      "https://api.whatsapp.com/send/?phone=6285810096563&text=Hai kak, aku mau pesan : " +
      quantity +
      " " +
      name;
  }

  // const productsData: Promise<Products> = getProduct(params.NamaProduk);
  // const detailedProduct = useSWR(productsData);
  // const detailedProduct = await productsData;
  // console.log(detailedProduct);
  return (
    <main>
      {/* <!-- breadcrums --> */}
      <div className="container flex items-center gap-4 py-4">
        <Breadcrumbs
          params={{
            slug: data.NamaProduk,
          }}
        />
      </div>
      {/* <!-- end breadcrums --> */}

      {/* <!-- product view --> */}
      <div className="container flex flex-col gap-6 md:grid md:grid-cols-4">
        <div className="md:col-span-2">
          {data.FotoProduk ? (
            <CldImage
              width={500}
              height={500}
              src={data.FotoProduk}
              alt={data.NamaProduk}
              className="w-full min-h-[200px]"
            />
          ) : (
            // <Image
            //   src={data.FotoProduk}
            //   width={500}
            //   height={500}
            //   sizes="100vw"
            //   className="w-full h-auto"
            //   alt={data.NamaProduk}
            // />
            <Image
              src={ImageContoh}
              width={500}
              height={500}
              sizes="100vw"
              className="w-full h-auto"
              alt="Contoh Produk"
            />
          )}
          {/* <div className="grid grid-cols-5 gap-4 mt-4">
                        <img
                            src="/img/Produk/rekomen.webp"
                            className="w-full border cursor-pointer border-primary"
                            alt="Rekomen"
                        />
                        <img
                            src="/img/Produk/rekomen.webp"
                            className="w-full border cursor-pointer"
                            alt="Rekomen"
                        />
                        <img
                            src="/img/Produk/rekomen.webp"
                            className="w-full border cursor-pointer"
                            alt="Rekomen"
                        />
                        <img
                            src="/img/Produk/rekomen.webp"
                            className="w-full border cursor-pointer"
                            alt="Rekomen"
                        />
                        <img
                            src="/img/Produk/rekomen.webp"
                            className="w-full border cursor-pointer"
                            alt="Rekomen"
                        />
                    </div> */}
        </div>
        {/* <!-- produk konten --> */}
        <div className="md:col-span-2">
          <h2 className="mb-2 text-3xl font-semibold uppercase font-montserrat">
            {data.NamaProduk}
          </h2>
          {/* <div className="flex items-center mb-3">
                        <div className="flex gap-1 text-sm text-yellow-400">
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                        </div>
                        <div className="ml-3 text-sm text-gray-500">(70 Reviews)</div>
                    </div> */}
          <div className="space-y-2">
            <p className="space-x-2 font-semibold text-gray-800 font-inter">
              <span>Avilability : </span>
              {data.FotoProduk ? (
                <span className="text-green-600">In Stock</span>
              ) : (
                <span className="text-red-600">Out of Stock</span>
              )}
            </p>
            <p className="space-x-2 font-semibold text-gray-800 font-inter">
              <span>Brands : </span>
              <span className="text-gray-600">Perca Has</span>
            </p>
            <p className="space-x-2 font-semibold text-gray-800 font-inter">
              <span>Category : </span>
              <span className="text-gray-600">{data.Kategori}</span>
            </p>
          </div>
          <div className="flex items-baseline mt-4 mb-1 space-x-2 font-inter">
            <p className="text-xl font-semibold text-primary">
              Rp {Intl.NumberFormat("id-ID").format(data.Harga)}
            </p>
            {/* <p className="text-base text-gray-400 line-through">Rp. 123.000</p> */}
          </div>
          <p className="mt-4 text-gray-600">{data.Keterangan}</p>
          <div className="grid grid-cols-2 md:block">
            {/* <!-- size --> */}
            {data.Ukuran ? (
              <SizeComp
                params={{
                  dataUkuran: data.Ukuran,
                  chooseUkuran: chooseUkuran,
                }}
              />
            ) : (
              ""
            )}
            {/* <!-- end size --> */}

            {/* <!-- quantity --> */}
            <QuantityComp
              params={{
                quantity: chooseQuantity,
              }}
            />
            {/* <!-- end quantity --> */}
          </div>

          {/* <!-- cart button --> */}
          <div className="flex gap-3 pb-5 mt-6 text-center border-b border-gray-200">
            <Link
              href={waAPI}
              title="Hubungi Saya"
              rel="noopener"
              target="_blank"
              className="flex items-center justify-center w-full gap-2 px-8 py-2 font-medium text-white uppercase transition border rounded bg-primary border-primary md:w-40 font-inter hover:bg-transparent hover:text-primary"
              passHref
            >
              <i className="fas fa-shopping-bag"></i>Order
            </Link>
            {/* <Link
                            href="#"
                            className="flex items-center gap-2 px-8 py-2 font-medium text-gray-600 uppercase transition border border-gray-300 rounded font-inter hover:text-primary"
                            passHref
                        >
                            <i className="fas fa-heart"></i>like
                        </Link> */}
          </div>
          {/* <!-- end cart button --> */}

          {/* <!-- social share --> */}
          <div className="flex gap-3 mt-4">
            <span>
              <p className="flex items-center justify-center text-gray-400">
                Find Us
              </p>
            </span>
            <span>
              <Link
                href="https://www.instagram.com/kampungperca_kotabogor/"
                className="w-8 h-8 hover:text-gray-500"
                passHref
              >
                <i className="fab fa-instagram"></i>{" "}
              </Link>
            </span>
          </div>
          {/* <!-- end social share --> */}
        </div>
        {/* <!-- end produk konten --> */}
      </div>
      {/* <!-- end product view --> */}

      {/* <!-- produk detail --> */}
      <div className="container pb-16">
        <h3 className="pt-6 pb-3 font-medium text-gray-800 border-b border-gray-200 font-montserrat">
          Product Detail
        </h3>
        <div className="w-3/5 pt-4">
          <div className="space-y-3 text-gray-600">{data.Keterangan}</div>
          {/* <!-- table detail --> */}
          {/* <table
                        className="mt-6 text-sm text-left text-gray-600 border-collapse table-auto"
                    >
                        <tbody>
                            <tr>
                                <td
                                    className="w-40 px-4 py-2 font-medium border border-gray-300 font-inter"
                                >
                                    Weight
                                </td>
                                <td className="px-4 py-2 border border-gray-300">55 Kg</td>
                            </tr>
                            <tr>
                                <td
                                    className="w-40 px-4 py-2 font-medium border border-gray-300 font-inter"
                                >
                                    Weight
                                </td>
                                <td className="px-4 py-2 border border-gray-300">55 Kg</td>
                            </tr>
                            <tr>
                                <td
                                    className="w-40 px-4 py-2 font-medium border border-gray-300 font-inter"
                                >
                                    Weight
                                </td>
                                <td className="px-4 py-2 border border-gray-300">55 Kg</td>
                            </tr>
                        </tbody>
                    </table> */}
          {/* <!-- end table detail --> */}
        </div>
      </div>
      {/* <!-- end produk detail --> */}

      {/* <!-- produk wrapper --> */}
      {/* <!-- end produk wrapper --> */}
    </main>
  );
}
