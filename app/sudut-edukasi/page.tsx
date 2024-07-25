// pages/sudut_edukasi.tsx
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "../components/breadcrumbs";
import FotoContoh from "@/public/img/contoh.webp";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";

const StructuredData = dynamic(() => import("../components/StructuredData"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const metadata = {
  title: "Kain Perca adalah ?",
  description:
    "Kain perca adalah potongan-potongan kecil atau sisa-sisa kain. Dampak Positif Pengelolaan Kain Perca adalah membantu mengurangi limbah tekstil. Potensi Kain Perca di Kota Bogor dapat bervariasi tergantung pada faktor-faktor seperti pasar lokal",
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
  keywords: [
    "Dampak Positif Pengelolaan Kain Perca",
    "Potensi Kain Perca di Kota Bogor",
    "Apa itu Kain Perca ?",
    "Kain Perca adalah",
    "Perca",
    "Kain Perca",
    "Manfaat Kain Perca,",
  ],
};

const Sudut_edukasi = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.kampungperca.id/sudut-edukasi",
    },
    headline: "Kain Perca adalah ?",
    description:
      "Kain perca adalah potongan-potongan kecil atau sisa-sisa kain. Dampak Positif Pengelolaan Kain Perca adalah membantu mengurangi limbah tekstil. Potensi Kain Perca di Kota Bogor dapat bervariasi tergantung pada faktor-faktor seperti pasar lokal",
    image: "https://www.kampungperca.id/img/contoh.webp",
    author: {
      "@type": "Person",
      name: "Kampung Perca Sindangsari",
      url: "https://www.kampungperca.id/author",
    },
    publisher: {
      "@type": "Organization",
      name: "Kampung Perca Sindangsari",
    },
    datePublished: "2024-07-25",
    dateModified: "2024-07-25",
  };

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <StructuredData data={structuredData} />
      </Suspense>
      <section className="py-8 bg-white border-b">
        <Breadcrumbs
          params={{
            slug: "Sudut Edukasi",
          }}
        />
        <h1 className="w-full my-2 mb-6 text-4xl font-bold text-center font-montserrat text-secondary">
          Sudut Edukasi
        </h1>

        {/* Konten kain perca */}
        <div className="container mx-auto my-24 md:px-6">
          <section className="mb-32">
            <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
              <div className="flex flex-wrap items-center">
                <div className="hidden shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
                  <Image
                    src={FotoContoh}
                    width={500}
                    height={500}
                    placeholder="blur"
                    loading="lazy"
                    sizes="100vw"
                    alt="Trendy Pants and Shoes"
                    className="w-full h-auto rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
                  />
                </div>
                <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
                  <div className="px-6 py-12 md:px-12">
                    <h2 className="mb-4 text-2xl font-bold">
                      Pengertian Kain Perca
                    </h2>
                    <p className="mb-6 text-justify text-neutral-800">
                      Kain perca adalah potongan-potongan kecil atau sisa-sisa
                      kain yang tersisa setelah pemotongan kain dalam proses
                      pembuatan pakaian atau proyek jahitan lainnya. Kain perca
                      sering kali merupakan hasil dari potongan-potongan kain
                      yang tidak digunakan lagi dalam produksi atau proyek
                      tertentu. Potongan-potongan ini bisa berasal dari berbagai
                      jenis kain, warna, dan pola yang berbeda.
                    </p>
                    <p className="mb-6 text-justify text-neutral-800">
                      Kain perca sering digunakan dalam berbagai cara kreatif,
                      seperti dalam seni kerajinan tangan, quilting, jahitan,
                      dan proyek-proyek DIY. Banyak orang mengumpulkan kain
                      perca untuk membuat barang-barang seperti selimut lapis,
                      bantal, gantungan dinding, tas, dan banyak lagi. Kain
                      perca memungkinkan kreativitas dalam membuat desain yang
                      unik, karena Anda dapat menggabungkan berbagai potongan
                      kain dengan pola dan warna yang berbeda-beda.
                    </p>
                    <p className="mb-6 text-justify text-neutral-800">
                      Selain digunakan dalam kerajinan tangan, kain perca juga
                      bisa berfungsi untuk mengurangi limbah dalam industri
                      tekstil dengan memanfaatkan potongan-potongan kecil yang
                      mungkin sebelumnya akan dibuang.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* end content kain perca */}
      </section>

      {/* edukasi lainnya */}
      <section className="bg-white border-b py-14">
        <div className="container flex flex-wrap pb-12 mx-auto pt-9">
          <h1 className="w-full my-2 text-4xl font-bold leading-tight text-center text-secondary font-montserrat">
            Edukasi Lainnya
          </h1>
          <div className="w-full mb-4">
            <div className="w-64 h-1 py-0 mx-auto my-0 rounded-t opacity-25 gradient"></div>
          </div>
          <div className="flex flex-col flex-grow flex-shrink w-full p-6 md:w-1/3">
            <div className="flex-1 overflow-hidden bg-white rounded-t rounded-b-none shadow">
              <div className="w-full px-6 text-xl font-bold text-gray-800 font-montserrat">
                Potensi Kain Perca di Kota Bogor
              </div>
              <p className="px-6 mb-5 text-base text-gray-800 font-inter">
                Potensi kain perca di Kota Bogor terletak pada penggunaan
                kreatif dalam industri kerajinan tangan dan pembuatan produk
                unik seperti quilting, tas, dan lainnya.
              </p>
            </div>
            <div className="flex-none p-6 mt-auto overflow-hidden bg-white rounded-t-none rounded-b shadow">
              <div className="flex items-center justify-start">
                <Link
                  href="/sudut-edukasi/potensi-kain-perca"
                  className="px-8 py-4 mx-auto my-6 font-bold transition duration-300 ease-in-out transform rounded-full shadow-lg lg:mx-0 gradient text-secondary focus:outline-none focus:shadow-outline hover:scale-105 font-inter"
                >
                  Lihat
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-grow flex-shrink w-full p-6 md:w-1/3">
            <div className="flex-1 overflow-hidden bg-white rounded-t rounded-b-none shadow">
              <div className="w-full px-6 text-xl font-bold text-gray-800 font-montserrat">
                Dampak Positif Kain Perca
              </div>
              <p className="px-6 mb-5 text-base text-gray-800 font-inter ">
                Penggunaan kain perca memiliki dampak positif yang signifikan
                dalam praktik jahitan dan kerajinan
              </p>
            </div>
            <div className="flex-none p-6 mt-auto overflow-hidden bg-white rounded-t-none rounded-b shadow">
              <div className="flex items-center justify-center">
                <Link
                  href="/sudut-edukasi/dampak-positif-kain-perca"
                  className="px-8 py-4 mx-auto my-6 font-bold transition duration-300 ease-in-out transform rounded-full shadow-lg lg:mx-0 gradient text-secondary focus:outline-none focus:shadow-outline hover:scale-105 font-inter"
                >
                  Lihat
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-grow flex-shrink w-full p-6 md:w-1/3">
            <div className="flex-1 overflow-hidden bg-white rounded-t rounded-b-none shadow">
              <div className="w-full px-6 text-xl font-bold text-gray-800 font-montserrat">
                Manfaat Kain Perca
              </div>
              <p className="px-6 mb-5 text-base text-gray-800 font-inter">
                Kain perca memiliki manfaat dalam mengurangi limbah tekstil,
                menciptakan kerajinan tangan kreatif, dan mendukung praktik daur
                ulang dan ramah lingkungan.
              </p>
            </div>
            <div className="flex-none p-6 mt-auto overflow-hidden bg-white rounded-t-none rounded-b shadow">
              <div className="flex items-center justify-end">
                <Link
                  href="/sudut-edukasi/manfaat-kain-perca"
                  className="px-8 py-4 mx-auto my-6 font-bold transition duration-300 ease-in-out transform rounded-full shadow-lg lg:mx-0 gradient text-secondary focus:outline-none focus:shadow-outline hover:scale-105 font-inter"
                >
                  Lihat
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sudut_edukasi;
