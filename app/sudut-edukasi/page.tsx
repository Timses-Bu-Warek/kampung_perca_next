import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "../components/breadcrumbs";
import FotoContoh from "@/public/img/contoh.jpg";
import FotoManfaat from "@/public/img/manfaat.jpg";
import FotoPotensi from "@/public/img/potensi.jpg";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apa itu kain perca ?",
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
    "Manfaat Kain Perca,",
  ],
};

export default function Sudut_edukasi() {
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
                      Apa itu Kain Perca ?
                    </h2>
                    <p className="mb-6 text-neutral-800 text-justify">
                      Kain perca adalah potongan-potongan kecil atau sisa-sisa
                      kain yang tersisa setelah pemotongan kain dalam proses
                      pembuatan pakaian atau proyek jahitan lainnya. Kain perca
                      sering kali merupakan hasil dari potongan-potongan kain
                      yang tidak digunakan lagi dalam produksi atau proyek
                      tertentu. Potongan-potongan ini bisa berasal dari berbagai
                      jenis kain, warna, dan pola yang berbeda.
                    </p>
                    <p className="mb-6 text-neutral-800 text-justify">
                      Kain perca sering digunakan dalam berbagai cara kreatif,
                      seperti dalam seni kerajinan tangan, quilting, jahitan,
                      dan proyek-proyek DIY. Banyak orang mengumpulkan kain
                      perca untuk membuat barang-barang seperti selimut lapis,
                      bantal, gantungan dinding, tas, dan banyak lagi. Kain
                      perca memungkinkan kreativitas dalam membuat desain yang
                      unik, karena Anda dapat menggabungkan berbagai potongan
                      kain dengan pola dan warna yang berbeda-beda.
                    </p>
                    <p className="mb-6 text-neutral-800 text-justify">
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
                Dampak Positif Kain Perca
              </div>
              <p className="text-gray-800 text-base px-6 mb-5 font-inter ">
                Penggunaan kain perca memiliki dampak positif yang signifikan
                dalam praktik jahitan dan kerajinan
              </p>
            </div>
            <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
              <div className="flex items-center justify-center">
                <Link
                  href="/sudut-edukasi/dampak-positif-kain-perca"
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
