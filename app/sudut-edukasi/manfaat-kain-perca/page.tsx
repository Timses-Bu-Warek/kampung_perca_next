import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/app/components/breadcrumbs";
import FotoContoh from "@/public/img/contoh.jpg";
import FotoManfaat from "@/public/img/manfaat.jpg";
import FotoPotensi from "@/public/img/potensi.jpg";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manfaat Kain Perca",
  description:
    "Kain perca adalah potongan-potongan kecil atau sisa-sisa kain. Dampak Positif Pengelolaan Kain Perca adalah membantu mengurangi limbah tekstil. Potensi Kain Perca di Kota Bogor dapat bervariasi tergantung pada faktor-faktor seperti pasar lokal",
  alternates: {
    canonical: `/sudut-edukasi`,
  },
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
    "Manfaat Kain Perca",
  ],
};

export default function Manfaat() {
  return (
    <div>
      <section className="bg-white border-b py-8">
        <Breadcrumbs
          params={{
            slug: "Sudut Edukasi",
          }}
        />
        <h1 className="w-full mb-6 my-2 text-4xl font-montserrat font-bold text-center text-secondary">
          Sudut Edukasi
        </h1>

        {/* Konten kain perca */}
        <div className="container my-24 mx-auto md:px-6">
          <section className="mb-32">
            <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
              <div className="flex flex-wrap items-center">
                <div className="hidden shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
                  <Image
                    src={FotoContoh}
                    width={500}
                    height={500}
                    placeholder="blur"
                    sizes="100vw"
                    alt="Trendy Pants and Shoes"
                    className="w-full h-auto rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
                  />
                </div>
                <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
                  <div className="px-6 py-12 md:px-12">
                    <h2 className="mb-4 text-2xl font-bold">
                      Manfaat Kain Perca
                    </h2>
                    <p className="mb-6 text-neutral-800 text-justify">
                      Kain perca adalah potongan-potongan kain kecil yang
                      tersisa dari proyek jahitan atau tekstil lainnya. Meskipun
                      ukurannya kecil, kain perca memiliki beragam manfaat dan
                      kegunaan, antara lain:
                    </p>
                    <ul className="ml-1 text-justify list-decimal">
                      <li className="text-justify">
                        <b>Proyek Jahitan Kecil:</b> Kain perca sangat berguna
                        untuk proyek-proyek jahitan kecil seperti pembuatan
                        boneka, bantal, atau aksesori kecil lainnya. Dengan
                        memanfaatkan kain perca, Anda dapat menghindari
                        pemborosan kain yang berlebihan.
                      </li>
                      <li className="text-justify">
                        <b>Patchwork:</b> Kain perca adalah bahan dasar yang
                        sangat umum digunakan dalam seni patchwork. Patchwork
                        adalah teknik menyusun potongan-potongan kain menjadi
                        pola tertentu untuk membuat selimut, taplak meja, atau
                        barang-barang dekoratif lainnya.
                      </li>
                      <li className="text-justify">
                        <b>Quilting:</b> Dalam quilting, kain perca digunakan
                        untuk membuat blok-blok kecil yang kemudian disatukan
                        menjadi selimut atau karya seni tekstil lainnya. Kain
                        perca memungkinkan Anda untuk menciptakan desain yang
                        rumit dan berwarna-warni tanpa harus membeli kain dalam
                        jumlah besar.
                      </li>
                      <li className="text-justify">
                        <b>Pengujian Pola:</b>Kain perca sangat berguna untuk
                        menguji pola baru sebelum Anda menggunakan kain yang
                        lebih mahal. Dengan menggunakan kain perca, Anda dapat
                        memastikan bahwa pola Anda sesuai dengan ukuran dan
                        bentuk yang diinginkan sebelum memotong kain yang lebih
                        berharga.
                      </li>
                      <li className="text-justify">
                        <b>Seni dan Kerajinan:</b>Kain perca juga dapat
                        digunakan dalam berbagai proyek seni dan kerajinan,
                        seperti membuat kartu ucapan, hiasan dinding, atau bunga
                        kain. Potongan-potongan kain kecil ini dapat dijahit,
                        direkatkan, atau dihias sesuai dengan kreativitas Anda.
                      </li>
                      <ul className="text-justify">
                        <b>Memperbaiki Pakaian:</b>Kain perca dapat digunakan
                        untuk memperbaiki lubang atau kerusakan kecil pada
                        pakaian atau tekstil lainnya. Dengan memilih kain perca
                        yang sesuai dengan warna dan tekstur pakaian Anda, Anda
                        dapat membuat perbaikan yang tidak mencolok.
                      </ul>
                      <li className="text-justify">
                        <b>Penghematan:</b> Dengan menggunakan kain perca, Anda
                        dapat menghemat uang yang biasanya akan Anda keluarkan
                        untuk membeli kain baru. Selain itu, penggunaan kain
                        perca juga membantu mengurangi limbah tekstil dan
                        mendukung praktik daur ulang.
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
        <div className="container mx-auto flex flex-wrap pt-9 pb-12">
          <h1 className="w-full my-2 text-4xl font-bold leading-tight text-center text-secondary font-montserrat">
            Edukasi Lainnya
          </h1>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
          <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
              <div className="w-full font-bold text-xl text-gray-800 px-6 font-montserrat">
                Potensi Kain Perca di Kota Bogor
              </div>
              <p className="text-gray-800 text-base px-6 mb-5 font-inter">
                Potensi kain perca di Kota Bogor terletak pada penggunaan
                kreatif dalam industri kerajinan tangan dan pembuatan produk
                unik seperti quilting, tas, dan lainnya.
              </p>
            </div>
            <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
              <div className="flex items-center justify-start">
                <Link
                  href="/sudut-edukasi/potensi-kain-perca"
                  className="mx-auto lg:mx-0 gradient text-secondary font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out font-inter"
                >
                  Lihat
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
              <div className="w-full font-bold text-xl text-gray-800 px-6 font-montserrat">
                Apa itu Kain Perca ?
              </div>
              <p className="text-gray-800 text-base px-6 mb-5 font-inter ">
                Kain perca adalah potongan kecil sisa kain yang digunakan dalam
                kerajinan tangan atau quilting untuk menciptakan berbagai proyek
                kreatif.
              </p>
            </div>
            <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
              <div className="flex items-center justify-center">
                <Link
                  href="/sudut-edukasi"
                  className="mx-auto lg:mx-0 gradient text-secondary font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out font-inter"
                >
                  Lihat
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
              <div className="w-full font-bold text-xl text-gray-800 px-6 font-montserrat">
                Dampak Positif Kain Perca
              </div>
              <p className="text-gray-800 text-base px-6 mb-5 font-inter">
                Penggunaan kain perca memiliki dampak positif yang signifikan
                dalam praktik jahitan dan kerajinan
              </p>
            </div>
            <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
              <div className="flex items-center justify-end">
                <Link
                  href="/sudut-edukasi/dampak-positif-kain-perca"
                  className="mx-auto lg:mx-0 gradient text-secondary font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out font-inter"
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
