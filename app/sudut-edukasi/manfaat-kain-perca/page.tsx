import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumbs from '@/app/_components/breadcrumbs';
import StructuredData from '@/app/_components/structured-data';
import { serverEnvironment } from '@/lib/env/server';
import FotoContoh from '@/public/img/contoh.webp';

export const metadata: Metadata = {
  alternates: {
    canonical: `${serverEnvironment.BASE_URL}/sudut-edukasi/manfaat-kain-perca`,
  },
  description:
    'Kain perca adalah potongan-potongan kecil atau sisa-sisa kain. Dampak Positif Pengelolaan Kain Perca adalah membantu mengurangi limbah tekstil. Potensi Kain Perca di Kota Bogor dapat bervariasi tergantung pada faktor-faktor seperti pasar lokal',
  keywords: [
    'Dampak Positif Pengelolaan Kain Perca',
    'Potensi Kain Perca di Kota Bogor',
    'Apa itu Kain Perca ?',
    'Kain Perca adalah',
    'Perca',
    'Kain Perca',
    'Manfaat Kain Perca',
  ],
  robots: {
    follow: true,
    index: true,
    nocache: true,
  },
  title: 'Manfaat Kain Perca',
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  author: {
    '@type': 'Person',
    name: 'Kampung Perca Kota Bogor', // Nama penulis
  },
  dateModified: '2024-07-29', // Tanggal terakhir diubah
  datePublished: '2024-07-29', // Tanggal publikasi
  description:
    'Kain perca adalah potongan-potongan kecil atau sisa-sisa kain. Dampak Positif Pengelolaan Kain Perca adalah membantu mengurangi limbah tekstil. Potensi Kain Perca di Kota Bogor dapat bervariasi tergantung pada faktor-faktor seperti pasar lokal.',
  headline: 'Manfaat Kain Perca',
  image: `${serverEnvironment.BASE_URL}/img/contoh.webp`, // URL gambar utama
  mainEntityOfPage: {
    '@id': `${serverEnvironment.BASE_URL}/sudut-edukasi/manfaat-kain-perca`,
    '@type': 'WebPage',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Kampung Perca Kota Bogor',
  },
};

export default function Manfaat() {
  return (
    <div>
      <StructuredData data={structuredData} />
      <section className="py-8 bg-white border-b">
        <Breadcrumbs
          params={{
            slug: 'Sudut Edukasi',
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
                    alt="Trendy Pants and Shoes"
                    className="w-full h-auto rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
                    height={500}
                    loading="lazy"
                    placeholder="blur"
                    sizes="100vw"
                    src={FotoContoh}
                    width={500}
                  />
                </div>
                <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
                  <div className="px-6 py-12 md:px-12">
                    <h2 className="mb-4 text-2xl font-bold">Manfaat Kain Perca</h2>
                    <p className="mb-6 text-justify text-neutral-800">
                      Kain perca adalah potongan-potongan kain kecil yang tersisa dari proyek
                      jahitan atau tekstil lainnya. Meskipun ukurannya kecil, kain perca memiliki
                      beragam manfaat dan kegunaan, antara lain:
                    </p>
                    <ul className="ml-1 text-justify list-decimal">
                      <li className="text-justify">
                        <b>Proyek Jahitan Kecil:</b> Kain perca sangat berguna untuk proyek-proyek
                        jahitan kecil seperti pembuatan boneka, bantal, atau aksesori kecil lainnya.
                        Dengan memanfaatkan kain perca, Anda dapat menghindari pemborosan kain yang
                        berlebihan.
                      </li>
                      <li className="text-justify">
                        <b>Patchwork:</b> Kain perca adalah bahan dasar yang sangat umum digunakan
                        dalam seni patchwork. Patchwork adalah teknik menyusun potongan-potongan
                        kain menjadi pola tertentu untuk membuat selimut, taplak meja, atau
                        barang-barang dekoratif lainnya.
                      </li>
                      <li className="text-justify">
                        <b>Quilting:</b> Dalam quilting, kain perca digunakan untuk membuat
                        blok-blok kecil yang kemudian disatukan menjadi selimut atau karya seni
                        tekstil lainnya. Kain perca memungkinkan Anda untuk menciptakan desain yang
                        rumit dan berwarna-warni tanpa harus membeli kain dalam jumlah besar.
                      </li>
                      <li className="text-justify">
                        <b>Pengujian Pola:</b>Kain perca sangat berguna untuk menguji pola baru
                        sebelum Anda menggunakan kain yang lebih mahal. Dengan menggunakan kain
                        perca, Anda dapat memastikan bahwa pola Anda sesuai dengan ukuran dan bentuk
                        yang diinginkan sebelum memotong kain yang lebih berharga.
                      </li>
                      <li className="text-justify">
                        <b>Seni dan Kerajinan:</b>Kain perca juga dapat digunakan dalam berbagai
                        proyek seni dan kerajinan, seperti membuat kartu ucapan, hiasan dinding,
                        atau bunga kain. Potongan-potongan kain kecil ini dapat dijahit, direkatkan,
                        atau dihias sesuai dengan kreativitas Anda.
                      </li>
                      <ul className="text-justify">
                        <b>Memperbaiki Pakaian:</b>Kain perca dapat digunakan untuk memperbaiki
                        lubang atau kerusakan kecil pada pakaian atau tekstil lainnya. Dengan
                        memilih kain perca yang sesuai dengan warna dan tekstur pakaian Anda, Anda
                        dapat membuat perbaikan yang tidak mencolok.
                      </ul>
                      <li className="text-justify">
                        <b>Penghematan:</b> Dengan menggunakan kain perca, Anda dapat menghemat uang
                        yang biasanya akan Anda keluarkan untuk membeli kain baru. Selain itu,
                        penggunaan kain perca juga membantu mengurangi limbah tekstil dan mendukung
                        praktik daur ulang.
                      </li>
                    </ul>
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
          <div className="flex flex-col grow shrink w-full p-6 md:w-1/3">
            <div className="flex-1 overflow-hidden bg-white rounded-t rounded-b-none shadow-sm">
              <div className="w-full px-6 text-xl font-bold text-gray-800 font-montserrat">
                Potensi Kain Perca di Kota Bogor
              </div>
              <p className="px-6 mb-5 text-base text-gray-800 font-inter">
                Potensi kain perca di Kota Bogor terletak pada penggunaan kreatif dalam industri
                kerajinan tangan dan pembuatan produk unik seperti quilting, tas, dan lainnya.
              </p>
            </div>
            <div className="flex-none p-6 mt-auto overflow-hidden bg-white rounded-t-none rounded-b shadow-sm">
              <div className="flex items-center justify-start">
                <Link
                  className="px-8 py-4 mx-auto my-6 font-bold transition duration-300 ease-in-out transform rounded-full shadow-lg lg:mx-0 gradient text-secondary focus:outline-hidden focus:shadow-outline hover:scale-105 font-inter"
                  href="/sudut-edukasi/potensi-kain-perca"
                >
                  Lihat
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col grow shrink w-full p-6 md:w-1/3">
            <div className="flex-1 overflow-hidden bg-white rounded-t rounded-b-none shadow-sm">
              <div className="w-full px-6 text-xl font-bold text-gray-800 font-montserrat">
                Apa itu Kain Perca ?
              </div>
              <p className="px-6 mb-5 text-base text-gray-800 font-inter ">
                Kain perca adalah potongan kecil sisa kain yang digunakan dalam kerajinan tangan
                atau quilting untuk menciptakan berbagai proyek kreatif.
              </p>
            </div>
            <div className="flex-none p-6 mt-auto overflow-hidden bg-white rounded-t-none rounded-b shadow-sm">
              <div className="flex items-center justify-center">
                <Link
                  className="px-8 py-4 mx-auto my-6 font-bold transition duration-300 ease-in-out transform rounded-full shadow-lg lg:mx-0 gradient text-secondary focus:outline-hidden focus:shadow-outline hover:scale-105 font-inter"
                  href="/sudut-edukasi"
                >
                  Lihat
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col grow shrink w-full p-6 md:w-1/3">
            <div className="flex-1 overflow-hidden bg-white rounded-t rounded-b-none shadow-sm">
              <div className="w-full px-6 text-xl font-bold text-gray-800 font-montserrat">
                Dampak Positif Kain Perca
              </div>
              <p className="px-6 mb-5 text-base text-gray-800 font-inter">
                Penggunaan kain perca memiliki dampak positif yang signifikan dalam praktik jahitan
                dan kerajinan
              </p>
            </div>
            <div className="flex-none p-6 mt-auto overflow-hidden bg-white rounded-t-none rounded-b shadow-sm">
              <div className="flex items-center justify-end">
                <Link
                  className="px-8 py-4 mx-auto my-6 font-bold transition duration-300 ease-in-out transform rounded-full shadow-lg lg:mx-0 gradient text-secondary focus:outline-hidden focus:shadow-outline hover:scale-105 font-inter"
                  href="/sudut-edukasi/dampak-positif-kain-perca"
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
}
