import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/app/components/breadcrumbs";
import FotoContoh from "@/public/img/contoh.webp";
import FotoManfaat from "@/public/img/manfaat.webp";
import FotoPotensi from "@/public/img/potensi.webp";
import { Metadata } from "next";
import StructuredData from "@/app/components/StructuredData";

export const metadata: Metadata = {
  title: "Dampak Positif Kain Perca",
  description:
    "Kain perca adalah potongan-potongan kecil atau sisa-sisa kain. Dampak Positif Pengelolaan Kain Perca adalah membantu mengurangi limbah tekstil. Potensi Kain Perca di Kota Bogor dapat bervariasi tergantung pada faktor-faktor seperti pasar lokal",
  alternates: {
    canonical: `https://www.kampungperca.id/`,
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

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://www.kampungperca.id/sudut-edukasi/dampak-positif-kain-perca",
  },
  headline: "Dampak Positif Kain Perca",
  description:
    "Kain perca adalah potongan-potongan kecil atau sisa-sisa kain. Dampak Positif Pengelolaan Kain Perca adalah membantu mengurangi limbah tekstil. Potensi Kain Perca di Kota Bogor dapat bervariasi tergantung pada faktor-faktor seperti pasar lokal.",
  image: "https://www.kampungperca.id/img/manfaat.webp", // URL gambar utama
  author: {
    "@type": "Person",
    name: "Kampung Perca Kota Bogor", // Nama penulis
  },
  publisher: {
    "@type": "Organization",
    name: "Kampung Perca Kota Bogor",
  },
  datePublished: "2024-07-29", // Tanggal publikasi
  dateModified: "2024-07-29", // Tanggal terakhir diubah
};

export default function Dampak() {
  return (
    <div>
      <StructuredData data={structuredData} />
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
                <div className=" lg:flex lg:w-6/12 xl:w-4/12">
                  <Image
                    src={FotoManfaat}
                    width={500}
                    height={500}
                    placeholder="blur"
                    loading="lazy"
                    sizes="100vw"
                    alt="Trendy Pants and Shoes"
                    className="w-full h-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
                  />
                </div>
                <div className="w-full lg:w-6/12 xl:w-8/12">
                  <div className="px-6 py-12 md:px-12">
                    <h2 className="mb-4 text-2xl font-bold">
                      Dampak Positif Pengelolaan Kain Perca
                    </h2>
                    <p className="mb-6 text-neutral-800 text-justify">
                      Dalam upaya untuk menjaga keseimbangan antara manfaat dan
                      dampaknya, penting untuk menggunakan kain perca dengan
                      bijak, mengutamakan praktik daur ulang, dan
                      mempertimbangkan implikasi lingkungan dan sosial dari
                      keputusan kita. Penggunaan kain perca memiliki beberapa
                      dampak positif dari pemanfaatan kain perca:
                    </p>
                    <ul className="list-decimal text-justify">
                      <li>
                        <b>Pemanfaatan Limbah:</b> Penggunaan kain perca
                        membantu mengurangi limbah tekstil yang dihasilkan dari
                        industri pakaian dan proyek jahitan. Ini dapat
                        mengurangi beban sampah dan dampak negatif lingkungan
                        dari pembuangan limbah tekstil.
                      </li>
                      <li>
                        <b>Kreativitas dan Seni:</b> Penggunaan kain perca dapat
                        merangsang kreativitas dan seni. Orang dapat menciptakan
                        berbagai kreasi unik dan orisinal dengan memadukan
                        berbagai warna, pola, dan tekstur kain.
                      </li>
                      <li>
                        <b>Kemampuan Mendaur Ulang:</b> Kain perca dapat menjadi
                        sumber bahan untuk berbagai proyek DIY, seperti
                        patchwork, quilting, dan kerajinan tangan lainnya. Ini
                        mempromosikan praktik daur ulang dan mengurangi
                        kebutuhan akan bahan baru.
                      </li>
                      <li>
                        <b>Energi dan Sumber Daya:</b> Dengan menggunakan kain
                        perca, Anda dapat mengurangi permintaan akan bahan baru,
                        yang pada gilirannya dapat mengurangi konsumsi energi,
                        air, dan sumber daya lain yang diperlukan untuk
                        memproduksi kain baru.
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
                Manfaat Kain Perca
              </div>
              <p className="text-gray-800 text-base px-6 mb-5 font-inter">
                Kain perca memiliki manfaat dalam mengurangi limbah tekstil,
                menciptakan kerajinan tangan kreatif, dan mendukung praktik daur
                ulang dan ramah lingkungan.
              </p>
            </div>
            <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
              <div className="flex items-center justify-end">
                <Link
                  href="/sudut-edukasi/manfaat-kain-perca"
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
