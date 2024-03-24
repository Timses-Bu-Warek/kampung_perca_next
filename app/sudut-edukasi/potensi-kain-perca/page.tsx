import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/app/components/breadcrumbs";
import FotoContoh from "@/public/img/contoh.jpg";
import FotoManfaat from "@/public/img/manfaat.jpg";
import FotoPotensi from "@/public/img/potensi.jpg";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Potensi Kain Perca di Kota Bogor",
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

export default function Potensi() {
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
              <div className="flex items-center">
                <div className=" lg:flex lg:w-6/12 xl:w-4/12">
                  <Image
                    src={FotoPotensi}
                    width={500}
                    height={500}
                    placeholder="blur"
                    sizes="100vw"
                    alt="Trendy Pants and Shoes"
                    className="w-full h-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
                  />
                </div>
                <div className="w-full lg:w-6/12 xl:w-8/12">
                  <div className="px-6 py-12 md:px-12">
                    <h2 className="mb-4 text-2xl font-bold">
                      Potensi Kain Perca di Kota Bogor
                    </h2>
                    <p className="mb-6 text-neutral-800 text-justify">
                      Potensi penggunaan kain perca di Kota Bogor, atau di mana
                      pun, dapat bervariasi tergantung pada faktor-faktor
                      seperti pasar lokal, minat masyarakat, dan perkembangan
                      industri kreatif di daerah tersebut. Berikut beberapa
                      potensi penggunaan kain perca di Kota Bogor:
                    </p>
                    <ul className="list-decimal text-justify">
                      <li className="mb-2">
                        <b>Pendidikan dan Pelatihan:</b> Kain perca bisa
                        digunakan dalam program pelatihan dan pendidikan jahitan
                        untuk masyarakat lokal. Sekolah atau lembaga pelatihan
                        dapat mengajarkan teknik jahitan dan kerajinan dengan
                        menggunakan kain perca. Ini dapat memberikan
                        keterampilan baru kepada warga, mendorong kreativitas,
                        dan memberikan peluang untuk menghasilkan produk
                        bernilai dari kain sisa.
                      </li>
                      <li className="mb-2">
                        <b>Industri Kerajinan:</b> Penggunaan kain perca bisa
                        mendukung perkembangan industri kerajinan tangan di Kota
                        Bogor. Pelaku usaha dan pengrajin lokal dapat
                        memanfaatkan kain perca untuk membuat berbagai produk
                        unik seperti tas, dompet, aksesori, dan hiasan rumah
                        tangga. Ini dapat membantu meningkatkan ekonomi lokal
                        dan menciptakan produk dengan nilai tambah.
                      </li>
                      <li className="mb-2">
                        <b>Pariwisata dan Souvenir:</b> Jika kota memiliki
                        pariwisata yang kuat, kain perca dapat digunakan untuk
                        menciptakan souvenir khas daerah. Pengunjung dapat
                        membeli produk-produk unik yang menggunakan kain perca
                        sebagai kenang-kenangan dari kunjungan mereka ke Kota
                        Bogor.
                      </li>
                      <li className="mb-2">
                        <b>Kelas Kreatif dan Workshop:</b> Mengadakan kelas
                        kreatif atau workshop yang mengajarkan cara menggunakan
                        kain perca dapat menjadi peluang bisnis. Ini bisa
                        melibatkan berbagai kelompok usia dan tingkat
                        keterampilan, dari anak-anak hingga orang dewasa, yang
                        ingin belajar membuat kerajinan dengan bahan yang ramah
                        lingkungan.
                      </li>
                      <li className="mb-2">
                        <b>Kemitraan dengan Industri Fashion:</b> Jika ada
                        industri fashion yang berkembang di Kota Bogor, kain
                        perca dapat digunakan dalam proyek kolaborasi dengan
                        desainer lokal. Ini bisa menghasilkan koleksi unik yang
                        berfokus pada keberlanjutan dan kreativitas.
                      </li>
                      <li className="mb-2">
                        <b>Kampanye Lingkungan dan Sosial:</b> Penggunaan kain
                        perca juga dapat menjadi bagian dari kampanye lingkungan
                        dan sosial. Ini dapat meningkatkan kesadaran akan
                        praktik berkelanjutan, pengurangan limbah, dan
                        pentingnya daur ulang dalam masyarakat.
                      </li>
                      <li className="mb-2">
                        <b>Kampanye Lingkungan dan Sosial:</b> Penggunaan kain
                        perca juga dapat menjadi bagian dari kampanye lingkungan
                        dan sosial. Ini dapat meningkatkan kesadaran akan
                        praktik berkelanjutan, pengurangan limbah, dan
                        pentingnya daur ulang dalam masyarakat.
                      </li>
                      <li className="mb-2">
                        <b>Kegiatan Komunitas:</b> Komunitas seni dan kerajinan
                        di Kota Bogor dapat menggunakan kain perca untuk
                        proyek-proyek bersama. Ini bisa menciptakan ikatan
                        sosial dalam komunitas, sambil menciptakan produk
                        kreatif.
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
                Dampak Positif Kain Perca
              </div>
              <p className="text-gray-800 text-base px-6 mb-5 font-inter">
                Penggunaan kain perca memiliki dampak positif yang signifikan
                dalam praktik jahitan dan kerajinan
              </p>
            </div>
            <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
              <div className="flex items-center justify-start">
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
