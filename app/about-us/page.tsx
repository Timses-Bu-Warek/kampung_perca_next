import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "../components/breadcrumbs";
import SO from "@/public/img/SO.png";
import FotoManfaat from "@/public/img/kp_perca.jpg";
import { Metadata } from "next";

// import MyMapComponent from "./MyMapComponent";

// import { Wrapper, Status } from "@googlemaps/react-wrapper";

// const render = (status: Status) => {
//     return <h1>{status}</h1>;
//   };

// const MyApp = () => (
//     <Wrapper apiKey={"YOUR_API_KEY"} render={render}>
//       <MyMapComponent center={center} zoom={0} />
//     </Wrapper>
//   );

// let map: google.maps.Map;
// const center: google.maps.LatLngLiteral = {lat: -6.652811848908671, lng: 106.8458424490772};

export const metadata: Metadata = {
  title: "Tentang",
  description:
    "Kampung Perca merupakan salah satu kampung wisata yang mempunyai konsep pemberdayaan masyarakat terutama perempuan dan ibu-ibu rumah tangga.",
  alternates: {
    canonical: `/about-us`,
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
  keywords: [
    "Kampung Perca",
    "kerajinan dari kain",
    "kerajinan dari kain perca",
    "kerajinan kain perca",
    "barang dari kain perca",
    "contoh kerajinan dari kain",
    "contoh kerajinan dari kain perca",
    "contoh kerajinan kain perca",
    "gambar kerajinan kain perca",
    "kain perca kerajinan",
    "kerajinan dari bahan kain perca",
  ],
};

export default function About_us() {
  return (
    <main>
      {/* breadcrumbs */}
      <Breadcrumbs
        params={{
          slug: "About Us",
        }}
      />
      {/* <Breadcrumbs params={{
                slug: "About Us"
            }} /> */}
      {/* end breadcrumbs  */}
      {/* tentang kami  */}
      <section className="py-0 bg-white border-b">
        <div className="container max-w-5xl mx-auto">
          <div className="mb-24 mt-11">
            <h1 className="text-4xl font-bold text-center font-montserrat text-secondary">
              Struktur Organisasi
            </h1>
            <Image
              src={SO}
              alt="Struktur Organisasi"
              width={700}
              height={475}
              placeholder="blur"
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
              className="shadow-xl shadow-gray-400 rounded-xl"
            />
          </div>
          <div className="container mx-auto my-24 md:px-6">
            <section className="mb-32">
              <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
                <div className="flex flex-wrap items-center">
                  <div className=" lg:flex lg:w-6/12 xl:w-4/12">
                    <Image
                      src={FotoManfaat}
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
                        Job Description
                      </h2>
                      <h3>
                        <b>PEMBINA:</b>
                      </h3>
                      <h4>Tugas Pokok</h4>
                      <ul className="ml-1 text-justify list-decimal">
                        <li>
                          Memberikan arahan dan panduan strategis kepada seluruh
                          anggota.
                        </li>
                        <li>
                          Mendukung pengembangan visi, misi, dan tujuan
                          organisasi.
                        </li>
                        <li>
                          Mengadakan pertemuan dan diskusi untuk merumuskan
                          langkah-langkah pengembangan.
                        </li>
                      </ul>
                      <h4>Fungsi:</h4>
                      <ul className="ml-1 text-justify list-decimal">
                        <li>
                          Mendorong kerjasama antara berbagai bagian dan
                          anggota.
                        </li>
                        <li>
                          Menjalin hubungan dengan pihak eksternal seperti
                          pemerintah, komunitas, dan lembaga terkait
                        </li>
                        <li>
                          Menyusun rencana dan program kerja bersama anggota
                          lainnya.
                        </li>
                      </ul>
                      <h3 className="mt-6">
                        <b>KETUA:</b>
                      </h3>
                      <h4>Tugas Pokok</h4>
                      <ul className="ml-1 text-justify list-decimal">
                        <li>Memimpin dan mengarahkan seluruh kegiatan.</li>
                        <li>
                          Mewujudkan visi, misi, dan tujuan dalam tindakan
                          nyata.
                        </li>
                        <li>
                          Membuat keputusan strategis untuk perkembangan usaha.
                        </li>
                        <li>
                          Sebagai delegasi dalam berbagai forum dan acara.
                        </li>
                      </ul>
                      <h4>Fungsi:</h4>
                      <ul className="ml-1 text-justify list-decimal">
                        <li>
                          Mengoordinasikan kerja semua bagian dalam struktural.
                        </li>
                        <li>
                          Membangun dan menjaga hubungan baik dengan anggota dan
                          pihak eksternal.
                        </li>
                        <li>
                          Mengawasi pelaksanaan program kerja dan memastikan
                          pencapaian target.
                        </li>
                      </ul>
                      <h3 className="mt-6">
                        <b>BAGIAN ADMINISTRASI DAN KEUANGAN:</b>
                      </h3>
                      <h4>Tugas Pokok</h4>
                      <ul className="ml-1 text-justify list-decimal">
                        <li>
                          Mengelola administrasi umum, termasuk arsip,
                          surat-menyurat, dan layanan umum
                        </li>
                        <li>
                          Mengatur keuangan organisasi, termasuk pembayaran,
                          pendapatan, dan anggaran.
                        </li>
                        <li>
                          Membuat laporan keuangan dan administrasi secara
                          berkala.
                        </li>
                      </ul>
                      <h4>Fungsi:</h4>
                      <ul className="ml-1 text-justify list-decimal">
                        <li>
                          Memastikan kelancaran operasional sehari-hari
                          organisasi.
                        </li>
                        <li>
                          Membuat rencana anggaran dan mengontrol pengeluaran
                          sesuai dengan kebijakan bersama.
                        </li>
                        <li>
                          Mengelola dokumentasi administrasi dan keuangan dengan
                          tertib.
                        </li>
                      </ul>
                      <h3 className="mt-6">
                        <b>BIDANG KOPERASI:</b>
                      </h3>
                      <h4>Tugas Pokok</h4>
                      <ul className="ml-1 text-justify list-decimal">
                        <li>
                          Mengembangkan program-program koperasi yang sesuai
                          dengan tujuan usaha.
                        </li>
                        <li>
                          Mengajukan rencana kegiatan dan pengembangan koperasi.
                        </li>
                        <li>
                          Mendorong partisipasi anggota dalam kegiatan koperasi.
                        </li>
                      </ul>
                      <h4>Fungsi:</h4>
                      <ul className="ml-1 text-justify list-decimal">
                        <li>
                          Membangun kerjasama dengan lembaga koperasi dan
                          instansi terkait.
                        </li>
                        <li>
                          Mengatur proses pendaftaran anggota koperasi dan
                          memastikan pemenuhan hak-hak anggota.
                        </li>
                        <li>
                          Mengawasi pelaksanaan kegiatan koperasi dan memonitor
                          perkembangan usaha.
                        </li>
                      </ul>
                      <h3 className="mt-6">
                        <b>BIDANG UMKM:</b>
                      </h3>
                      <h4>Tugas Pokok</h4>
                      <ul className="ml-1 text-justify list-decimal">
                        <li>
                          Mengembangkan strategi penjualan untuk produk atau
                          layanan usaha.
                        </li>
                        <li>Menyusun rencana pemasaran dan promosi.</li>
                        <li>Memonitor perkembangan konsumen dan persaingan.</li>
                      </ul>
                      <h4>Fungsi:</h4>
                      <ul className="ml-1 text-justify list-decimal">
                        <li>
                          Membentuk tim penjualan yang efektif dan berkinerja
                          tinggi.
                        </li>
                        <li>
                          Memonitor dan mengevaluasi pencapaian target
                          penjualan.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
      {/* <!-- end tentang kami --> */}

      {/* <!-- artikel --> */}
    </main>
  );
}
