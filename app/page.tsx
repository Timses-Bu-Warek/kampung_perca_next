import Image from "next/image";
import Background from "../public/img/bg.jpg";
import Baju_Categories from "../public/img/baju_categories.jpg";
import Contoh_Baju from "../public/img/Produk/contoh_baju.jpg";
import Iklan from "../public/img/ads.jpg";
import Rekomendasi from "../public/img/Produk/rekomen.jpg";
import Link from "next/link";
import ReactModal from "react-modal";
import ModalBukuTamu from "./components/ModalBukuTamu";

export default function Home() {
  // sessionStorage.setItem("halo", "true")
  // let isFilled = "false";
  // if (typeof window !== 'undefined') {
  //   // Perform sessionStorage.
  //   sessionStorage.setItem("kunci", "true")
  // }
  return (
    <main>
      {/*  Banner  */}
      <div
        className="bg-cover bg-no-repeat bg-center py-36 imageBackgroundCarousel"
      >
        <div className="p-5 text-white z-[2] mt-[-5rem] lg:ml-9">
          <h1 className="text-5xl font-bold mb-4 capitalize font-montserrat">
            KAMPUNG PERCA
          </h1>
          <p className="py-5 text-base max-w-4xl font-inter">
            Kampung Perca Sindangsari, sebuah kampung tematik baru yang
            menambahkan destinasi wisata di kota Bogor dan merupakan binaan
            <Link
              href="https://www.ibik.ac.id/"
              rel="noopener noreferrer"
              target="_blank"
              className="text-primary"
            >
              {" "}
              Institut Bisnis dan Informatika Kesatuan Bogor.
            </Link>
            <br />
            Berlokasi di Kelurahan Sindangsari Kecamatan Bogor Timur, Kota Bogor
          </p>
          <div className="mt-12">
            <Link
              href="/shop"
              className="bg-primary border border-primary text-white px-8 py-3 font-medium rounded-md hover:bg-transparent hover:text-primary transition font-inter"
            >
              Shop at Kampung Perca
            </Link>
          </div>
        </div>
      </div>
      {/* end Banner  */}

      {/*  features  */}
      {/* <div className="container py-16">
        <div className="w-10/12 flex flex-col md:grid md:grid-cols-3 gap-6 mx-auto justify-center">
          <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
            <i
              className="fa-solid fa-truck object-contain"
              style={{ fontSize: "2rem" }}
            ></i>
            <span>
              <h4 className="font-semibold capitalize text-lg">
                Free Shopping
              </h4>
              <p className="text-gray-500 text-sx">order over IDR5000</p>
            </span>
          </div>
          <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
            <i
              className="fa-solid fa-hand-holding-dollar object-contain"
              style={{ fontSize: "2rem" }}
            ></i>
            <span>
              <h4 className="font-semibold capitalize text-lg">
                Money Returns
              </h4>
              <p className="text-gray-500 text-sx">30 days money return</p>
            </span>
          </div>
          <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
            <i
              className="fa-solid fa-clock object-contain"
              style={{ fontSize: "2rem" }}
            ></i>
            <span>
              <h4 className="font-semibold capitalize text-lg">24/7 Support</h4>
              <p className="text-gray-500 text-sx">Support Customer</p>
            </span>
          </div>
        </div>
      </div> */}

      <div className="container my-24 mx-auto md:px-6">
        <section className="mb-32">
          <div className="flex flex-wrap">
            <div className="mb-12 w-full lg:mb-0 lg:w-5/12">
              <div className="flex lg:py-12">
                <Image
                  src="https://pakar.stakcdn.com/app/assets/2021/12/17130606/IMG-20211217-WA0042.jpg"
                  className="z-0 w-full rounded-lg shadow-lg dark:shadow-black/20 lg:ml-[50px]"
                  alt="image"
                  width={500}
                  height={500}
                  sizes="100vw"
                  style={{
                    width: '100%',
                    height: 'auto',
                  }}
                />
              </div>
            </div>

            <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
              <div className="flex h-full items-center rounded-lg bg-white shadow-xl p-6 text-center text-black lg:pl-12 lg:text-left">
                <div className="lg:pl-12">
                  <h2 className="mb-8 text-3xl font-bold">
                    Kampung Perca Bogor
                  </h2>
                  <p className="mb-8 pb-2 lg:pb-0 text-justify">
                    Kampung Perca merupakan kampung tematik yang memproduksi
                    berbagai barang kerajinan dari kain perca. Kampung Perca
                    yang berlokasi di Kelurahan Sindangsari, Kecamatan Bogor
                    Timur dideklarasikan sebagai Kampung Gerakan Masyarakat
                    Hidup dan Sehat (Germas). <br /> <br />
                    Latar belakang lahirnya Kampung Perca pun tak lepas dari
                    kebijakan pemerintah menerapakan pembatasan mobilitas warga
                    saat pandemi covid. Hal ini menyebabkan melambatnya
                    aktivitas perekonomian masyarakat, bahkan PHK terjadi di
                    mana-mana.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="flex flex-wrap flex-col-reverse sm:flex-row mb-32">
          <div id="map" className="w-full sm:w-1/2 p-1 mt-6 ">
            {/* <MyApp />    */}
            {/* <Script
                    async
                    defer
                    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB2z_q_YqnXOw5K6mrDt4_57-0rYPpPr1c&callback=initMap"
                ></Script> */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.9523697293466!2d106.84323757484158!3d-6.6528261650365375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c94d3ea29d31%3A0xac59c511b4fc118b!2sKampung%20Perca%20Sindangsari!5e0!3m2!1sid!2sid!4v1691401977911!5m2!1sid!2sid"
              // width="480"
              // height="202"
              // style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              title="Map Kota Bogor"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full shadow-xl shadow-gray-400 rounded-xl"
            ></iframe>
          </div>
          <div className="w-full sm:w-1/2 p-6 mt-6">
            <div className="align-middle">
              <h3 className="text-3xl text-secondary font-montserrat font-bold leading-none mb-3">
                Lokasi Kampung Perca
              </h3>
              <p className="text-gray-600 mb-8 font-inter text-justify">
                Kampung Perca terletak di perkampungan yang padat penduduk,
                yaitu disebuah gang yang bernama Gang Raden Alibasyah, tepat di
                Jalan Raya Wangun Atas RT 004 / RW 001, Kelurahan Sindangsari,
                Kecamatan Bogor Timur, Kota Bogor, Jawa Barat.
              </p>
              <br />
              <br />
              See on &nbsp;
              <Link
                className="text-pink-500 underline"
                href="https://goo.gl/maps/igidBQGP7yiBDYer5"
                target="_blank"
              >
                Maps
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* end features  */}
      {/* categories  */}
      {/* <div className="container py-16">
        <h2 className="text-lg font-montserrat text-black mb-6 font-bold">
          Shop by Categories
        </h2>
        <div className="grid grid-cols-3 gap-3">
          <div className="relative rounded-sm overflow-hidden group">
            <Image src={Baju_Categories} alt="Baju" className="w-full" />
            <Link
              href="#"
              className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-lg text-white font-inter group-hover:bg-opacity-60 transition"
            >Baju</Link>
          </div>
          <div className="relative rounded-sm overflow-hidden group">
            <Image src={Baju_Categories} alt="Baju" className="w-full" />
            <Link
              href="#"
              className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-lg text-white font-inter group-hover:bg-opacity-60 transition"
            >Baju</Link>
          </div>
          <div className="relative rounded-sm overflow-hidden group">
            <Image src={Baju_Categories} alt="Baju" className="w-full" />
            <Link
              href="#"
              className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-lg text-white font-inter group-hover:bg-opacity-60 transition"
            >Baju</Link>
          </div>
          <div className="relative rounded-sm overflow-hidden group">
            <Image src={Baju_Categories} alt="Baju" className="w-full" />
            <Link
              href="#"
              className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-lg text-white font-inter group-hover:bg-opacity-60 transition"
            >Baju</Link>
          </div>
          <div className="relative rounded-sm overflow-hidden group">
            <Image src={Baju_Categories} alt="Baju" className="w-full" />
            <Link
              href="#"
              className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-lg text-white font-inter group-hover:bg-opacity-60 transition"
            >Baju</Link>
          </div>
          <div className="relative rounded-sm overflow-hidden group">
            <Image src={Baju_Categories} alt="Baju" className="w-full" />
            <Link
              href="#"
              className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-lg text-white font-inter group-hover:bg-opacity-60 transition"
            >Baju</Link>
          </div>
        </div>
      </div> */}
      {/*  end categories  */}

      {/*  produk wrapper  */}
      <div className="container pb-16">
        <h2 className="text-2xl text-gray-800 uppercase mb-6 font-montserrat font-bold">
          New Arrival
        </h2>
        {/*  poduk grid  */}
        <div className="flex flex-col md:grid md:grid-cols-4 gap-6">
          {/* single produk  */}
          <div className="bg-white shadow rounded overflow-hidden group">
            {/*  produk image  */}
            <div className="relative">
              <Image src={Contoh_Baju} alt="Baju Perca" className="w-full" />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                <Link
                  href="#"
                  className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                  passHref
                >
                  <i className="fas fa-search"></i>
                </Link>
                <Link
                  href="#"
                  className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                  passHref
                >
                  <i className="fas fa-heart"></i>
                </Link>
              </div>
            </div>
            {/*  produk image  */}

            {/*  produk konten  */}
            <div className="pt-4 pb-3 px-4">
              <Link href="/view" passHref>
                <h4 className="uppercase font-medium font-montserrat text-xl mb-2 text-gray-800 hover:text-primary transition">
                  Baju Perca
                </h4>
              </Link>
              <div className="flex items-baseline mb-1 space-x-2 font-inter">
                <p className="text-xl text-primary font-semibold">Rp. 50.000</p>
                <p className="text-sm text-gray-400 line-through">
                  Rp. 123.000
                </p>
              </div>
              <div className="flex items-center">
                <div className="flex gap-1 text-sm text-yellow-400">
                  <span>
                    <i className="fas fa-star"></i>
                  </span>
                  <span>
                    <i className="fas fa-star"></i>
                  </span>
                  <span>
                    <i className="fas fa-star"></i>
                  </span>
                  <span>
                    <i className="fas fa-star"></i>
                  </span>
                  <span>
                    <i className="fas fa-star"></i>
                  </span>
                </div>
                <div className="text-xs text-gray-500 ml-3">(150)</div>
              </div>
            </div>
            <Link
              href="https://api.whatsapp.com/send/?phone=6288973295464&text=Hai kak, aku mau pesan : (isi dengan pesananmu atau screenshot produk)"
              title="Hubungi Saya"
              rel="noopener"
              target="_blank"
              className="block w-full py-1 text-center text-white bg-primary border-primary rounded-b hover:bg-transparent hover:text-primary transition"
            >
              Order
            </Link>
            {/*  produk konten  */}
          </div>
          {/*  single produk  */}
        </div>
        {/* end produk grid  */}
      </div>
      {/*  end produk wrapper  */}

      {/*  ads section  */}
      <div className="container pb-16">
        <Link href="#" passHref>
          <Image src={Iklan} alt="Iklan" className="w-full" />
        </Link>
      </div>
      {/*  end ads section  */}

      {/*  produk recommended  */}
      <div className="container pb-16">
        <h2 className="text-2xl text-gray-800 uppercase mb-6 font-montserrat font-bold">
          Recommended for you
        </h2>
        {/*  produk grid */}
        <div className="flex flex-col md:grid md:grid-cols-4 gap-6">
          {/*  single produk 1 */}
          <div className="bg-white shadow rounded overflow-hidden group">
            {/* produk image */}
            <div className="relative">
              <Image src={Rekomendasi} alt="Baju Perca" className="w-full" />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                <Link
                  href="#"
                  className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                  passHref
                >
                  <i className="fas fa-search"></i>
                </Link>
                <Link
                  href="#"
                  className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                  passHref
                >
                  <i className="fas fa-heart"></i>
                </Link>
              </div>
            </div>
            {/* produk image */}

            {/* produk konten  */}
            <div className="pt-4 pb-3 px-4">
              <Link href="/view" passHref>
                <h4 className="uppercase font-medium font-montserrat text-xl mb-2 text-gray-800 hover:text-primary transition">
                  Baju Perca
                </h4>
              </Link>
              <div className="flex items-baseline mb-1 space-x-2 font-inter">
                <p className="text-xl text-primary font-semibold">Rp. 50.000</p>
                <p className="text-sm text-gray-400 line-through">
                  Rp. 123.000
                </p>
              </div>
              <div className="flex items-center">
                <div className="flex gap-1 text-sm text-yellow-400">
                  <span>
                    <i className="fas fa-star"></i>
                  </span>
                  <span>
                    <i className="fas fa-star"></i>
                  </span>
                  <span>
                    <i className="fas fa-star"></i>
                  </span>
                  <span>
                    <i className="fas fa-star"></i>
                  </span>
                  <span>
                    <i className="fas fa-star"></i>
                  </span>
                </div>
                <div className="text-xs text-gray-500 ml-3">(150)</div>
              </div>
            </div>
            <Link
              href="https://api.whatsapp.com/send/?phone=6288973295464&text=Hai kak, aku mau pesan : (isi dengan pesananmu atau screenshot produk)"
              title="Hubungi Saya"
              rel="noopener"
              target="_blank"
              className="block w-full py-1 text-center text-white bg-primary border-primary rounded-b hover:bg-transparent hover:text-primary transition"
            >
              Order
            </Link>
            {/* produk konten  */}
          </div>
          {/*  end single produk 1 */}

          {/*  single produk 2 */}
          <div className="bg-white shadow rounded overflow-hidden group">
            {/* produk image */}
            <div className="relative">
              <Image src={Contoh_Baju} alt="Baju Perca" className="w-full" />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                <Link
                  href="#"
                  className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                  passHref
                >
                  <i className="fas fa-search"></i>
                </Link>
                <Link
                  href="#"
                  className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                  passHref
                >
                  <i className="fas fa-heart"></i>
                </Link>
              </div>
            </div>
            {/* produk image */}

            {/* produk konten  */}
            <div className="pt-4 pb-3 px-4">
              <Link href="/view" passHref>
                <h4 className="uppercase font-medium font-montserrat text-xl mb-2 text-gray-800 hover:text-primary transition">
                  Baju Perca
                </h4>
              </Link>
              <div className="flex items-baseline mb-1 space-x-2 font-inter">
                <p className="text-xl text-primary font-semibold">Rp. 50.000</p>
                <p className="text-sm text-gray-400 line-through">
                  Rp. 123.000
                </p>
              </div>
              <div className="flex items-center">
                <div className="flex gap-1 text-sm text-yellow-400">
                  <span>
                    <i className="fas fa-star"></i>
                  </span>
                  <span>
                    <i className="fas fa-star"></i>
                  </span>
                  <span>
                    <i className="fas fa-star"></i>
                  </span>
                  <span>
                    <i className="fas fa-star"></i>
                  </span>
                  <span>
                    <i className="fas fa-star"></i>
                  </span>
                </div>
                <div className="text-xs text-gray-500 ml-3">(150)</div>
              </div>
            </div>
            <Link
              href="https://api.whatsapp.com/send/?phone=6288973295464&text=Hai kak, aku mau pesan : (isi dengan pesananmu atau screenshot produk)"
              title="Hubungi Saya"
              rel="noopener"
              target="_blank"
              className="block w-full py-1 text-center text-white bg-primary border-primary rounded-b hover:bg-transparent hover:text-primary transition"
            >
              Order
            </Link>
            {/* produk konten  */}
          </div>
          {/*  end single produk 2 */}

          {/*  single produk 3 */}
          <div className="bg-white shadow rounded overflow-hidden group">
            {/* produk image */}
            <div className="relative">
              <Image src={Rekomendasi} alt="Baju Perca" className="w-full" />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                <Link
                  href="#"
                  className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                  passHref
                >
                  <i className="fas fa-search"></i>
                </Link>
                <Link
                  href="#"
                  className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                  passHref
                >
                  <i className="fas fa-heart"></i>
                </Link>
              </div>
            </div>
            {/* produk image */}

            {/* produk konten  */}
            <div className="pt-4 pb-3 px-4">
              <Link href="/view" passHref>
                <h4 className="uppercase font-medium font-montserrat text-xl mb-2 text-gray-800 hover:text-primary transition">
                  Baju Perca
                </h4>
              </Link>
              <div className="flex items-baseline mb-1 space-x-2 font-inter">
                <p className="text-xl text-primary font-semibold">Rp. 50.000</p>
                <p className="text-sm text-gray-400 line-through">
                  Rp. 123.000
                </p>
              </div>
              <div className="flex items-center">
                <div className="flex gap-1 text-sm text-yellow-400">
                  <span>
                    <i className="fas fa-star"></i>
                  </span>
                  <span>
                    <i className="fas fa-star"></i>
                  </span>
                  <span>
                    <i className="fas fa-star"></i>
                  </span>
                  <span>
                    <i className="fas fa-star"></i>
                  </span>
                  <span>
                    <i className="fas fa-star"></i>
                  </span>
                </div>
                <div className="text-xs text-gray-500 ml-3">(150)</div>
              </div>
            </div>
            <Link
              href="https://api.whatsapp.com/send/?phone=6288973295464&text=Hai kak, aku mau pesan : (isi dengan pesananmu atau screenshot produk)"
              title="Hubungi Saya"
              rel="noopener"
              target="_blank"
              className="block w-full py-1 text-center text-white bg-primary border-primary rounded-b hover:bg-transparent hover:text-primary transition"
            >
              Order
            </Link>
            {/* produk konten  */}
          </div>
          {/*  end single produk 3 */}

          {/*  single produk 4 */}
          <div className="bg-white shadow rounded overflow-hidden group">
            {/* produk image */}
            <div className="relative">
              <Image src={Contoh_Baju} alt="Baju Perca" className="w-full" />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                <Link
                  href="#"
                  className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                  passHref
                >
                  <i className="fas fa-search"></i>
                </Link>
                <Link
                  href="#"
                  className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                  passHref
                >
                  <i className="fas fa-heart"></i>
                </Link>
              </div>
            </div>
            {/* produk image */}

            {/* produk konten  */}
            <div className="pt-4 pb-3 px-4">
              <Link href="/view" passHref>
                <h4 className="uppercase font-medium font-montserrat text-xl mb-2 text-gray-800 hover:text-primary transition">
                  Baju Perca
                </h4>
              </Link>
              <div className="flex items-baseline mb-1 space-x-2 font-inter">
                <p className="text-xl text-primary font-semibold">Rp. 50.000</p>
                <p className="text-sm text-gray-400 line-through">
                  Rp. 123.000
                </p>
              </div>
              <div className="flex items-center">
                <div className="flex gap-1 text-sm text-yellow-400">
                  <span>
                    <i className="fas fa-star"></i>
                  </span>
                  <span>
                    <i className="fas fa-star"></i>
                  </span>
                  <span>
                    <i className="fas fa-star"></i>
                  </span>
                  <span>
                    <i className="fas fa-star"></i>
                  </span>
                  <span>
                    <i className="fas fa-star"></i>
                  </span>
                </div>
                <div className="text-xs text-gray-500 ml-3">(150)</div>
              </div>
            </div>
            <Link
              href="https://api.whatsapp.com/send/?phone=6288973295464&text=Hai kak, aku mau pesan : (isi dengan pesananmu atau screenshot produk)"
              title="Hubungi Saya"
              rel="noopener"
              target="_blank"
              className="block w-full py-1 text-center text-white bg-primary border-primary rounded-b hover:bg-transparent hover:text-primary transition"
            >
              Order
            </Link>
            {/* produk konten  */}
          </div>
          {/*  end single produk 4 */}

          {/*  single produk 5 */}
          <div className="bg-white shadow rounded overflow-hidden group">
            {/* produk image */}
            <div className="relative">
              <Image src={Rekomendasi} alt="Baju Perca" className="w-full" />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                <Link
                  href="#"
                  className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                  passHref
                >
                  <i className="fas fa-search"></i>
                </Link>
                <Link
                  href="#"
                  className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                  passHref
                >
                  <i className="fas fa-heart"></i>
                </Link>
              </div>
            </div>
            {/* produk image */}

            {/* produk konten  */}
            <div className="pt-4 pb-3 px-4">
              <Link href="/view" passHref>
                <h4 className="uppercase font-medium font-montserrat text-xl mb-2 text-gray-800 hover:text-primary transition">
                  Baju Perca
                </h4>
              </Link>
              <div className="flex items-baseline mb-1 space-x-2 font-inter">
                <p className="text-xl text-primary font-semibold">Rp. 50.000</p>
                <p className="text-sm text-gray-400 line-through">
                  Rp. 123.000
                </p>
              </div>
              <div className="flex items-center">
                <div className="flex gap-1 text-sm text-yellow-400">
                  <span>
                    <i className="fas fa-star"></i>
                  </span>
                  <span>
                    <i className="fas fa-star"></i>
                  </span>
                  <span>
                    <i className="fas fa-star"></i>
                  </span>
                  <span>
                    <i className="fas fa-star"></i>
                  </span>
                  <span>
                    <i className="fas fa-star"></i>
                  </span>
                </div>
                <div className="text-xs text-gray-500 ml-3">(150)</div>
              </div>
            </div>
            <Link
              href="https://api.whatsapp.com/send/?phone=6288973295464&text=Hai kak, aku mau pesan : (isi dengan pesananmu atau screenshot produk)"
              title="Hubungi Saya"
              rel="noopener"
              target="_blank"
              className="block w-full py-1 text-center text-white bg-primary border-primary rounded-b hover:bg-transparent hover:text-primary transition"
            >
              Order
            </Link>
            {/* produk konten  */}
          </div>
          {/*  end single produk 5 */}

          {/*  single produk 6 */}
          <div className="bg-white shadow rounded overflow-hidden group">
            {/* produk image */}
            <div className="relative">
              <Image src={Contoh_Baju} alt="Baju Perca" className="w-full" />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                <Link
                  href="#"
                  className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                  passHref
                >
                  <i className="fas fa-search"></i>
                </Link>
                <Link
                  href="#"
                  className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                  passHref
                >
                  <i className="fas fa-heart"></i>
                </Link>
              </div>
            </div>
            {/* produk image */}

            {/* produk konten  */}
            <div className="pt-4 pb-3 px-4">
              <Link href="/view" passHref>
                <h4 className="uppercase font-medium font-montserrat text-xl mb-2 text-gray-800 hover:text-primary transition">
                  Baju Perca
                </h4>
              </Link>
              <div className="flex items-baseline mb-1 space-x-2 font-inter">
                <p className="text-xl text-primary font-semibold">Rp. 50.000</p>
                <p className="text-sm text-gray-400 line-through">
                  Rp. 123.000
                </p>
              </div>
              <div className="flex items-center">
                <div className="flex gap-1 text-sm text-yellow-400">
                  <span>
                    <i className="fas fa-star"></i>
                  </span>
                  <span>
                    <i className="fas fa-star"></i>
                  </span>
                  <span>
                    <i className="fas fa-star"></i>
                  </span>
                  <span>
                    <i className="fas fa-star"></i>
                  </span>
                  <span>
                    <i className="fas fa-star"></i>
                  </span>
                </div>
                <div className="text-xs text-gray-500 ml-3">(150)</div>
              </div>
            </div>
            <Link
              href="https://api.whatsapp.com/send/?phone=6288973295464&text=Hai kak, aku mau pesan : (isi dengan pesananmu atau screenshot produk)"
              title="Hubungi Saya"
              rel="noopener"
              target="_blank"
              className="block w-full py-1 text-center text-white bg-primary border-primary rounded-b hover:bg-transparent hover:text-primary transition"
            >
              Order
            </Link>
            {/* produk konten  */}
          </div>
          {/*  end single produk 6 */}

          {/*  single produk 7 */}
          <div className="bg-white shadow rounded overflow-hidden group">
            {/* produk image */}
            <div className="relative">
              <Image src={Rekomendasi} alt="Baju Perca" className="w-full" />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                <Link
                  href="#"
                  className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                  passHref
                >
                  <i className="fas fa-search"></i>
                </Link>
                <Link
                  href="#"
                  className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                  passHref
                >
                  <i className="fas fa-heart"></i>
                </Link>
              </div>
            </div>
            {/* produk image */}

            {/* produk konten  */}
            <div className="pt-4 pb-3 px-4">
              <Link href="/view" passHref>
                <h4 className="uppercase font-medium font-montserrat text-xl mb-2 text-gray-800 hover:text-primary transition">
                  Baju Perca
                </h4>
              </Link>
              <div className="flex items-baseline mb-1 space-x-2 font-inter">
                <p className="text-xl text-primary font-semibold">Rp. 50.000</p>
                <p className="text-sm text-gray-400 line-through">
                  Rp. 123.000
                </p>
              </div>
              <div className="flex items-center">
                <div className="flex gap-1 text-sm text-yellow-400">
                  <span>
                    <i className="fas fa-star"></i>
                  </span>
                  <span>
                    <i className="fas fa-star"></i>
                  </span>
                  <span>
                    <i className="fas fa-star"></i>
                  </span>
                  <span>
                    <i className="fas fa-star"></i>
                  </span>
                  <span>
                    <i className="fas fa-star"></i>
                  </span>
                </div>
                <div className="text-xs text-gray-500 ml-3">(150)</div>
              </div>
            </div>
            <Link
              href="https://api.whatsapp.com/send/?phone=6288973295464&text=Hai kak, aku mau pesan : (isi dengan pesananmu atau screenshot produk)"
              title="Hubungi Saya"
              rel="noopener"
              target="_blank"
              className="block w-full py-1 text-center text-white bg-primary border-primary rounded-b hover:bg-transparent hover:text-primary transition"
            >
              Order
            </Link>
            {/* produk konten  */}
          </div>
          {/*  end single produk 7 */}

          {/*  single produk 8 */}
          <div className="bg-white shadow rounded overflow-hidden group">
            {/* produk image */}
            <div className="relative">
              <Image src={Contoh_Baju} alt="Baju Perca" className="w-full" />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                <Link
                  href="#"
                  className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                  passHref
                >
                  <i className="fas fa-search"></i>
                </Link>
                <Link
                  href="#"
                  className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                  passHref
                >
                  <i className="fas fa-heart"></i>
                </Link>
              </div>
            </div>
            {/* produk image */}

            {/* produk konten  */}
            <div className="pt-4 pb-3 px-4">
              <Link href="/view" passHref>
                <h4 className="uppercase font-medium font-montserrat text-xl mb-2 text-gray-800 hover:text-primary transition">
                  Baju Perca
                </h4>
              </Link>
              <div className="flex items-baseline mb-1 space-x-2 font-inter">
                <p className="text-xl text-primary font-semibold">Rp. 50.000</p>
                <p className="text-sm text-gray-400 line-through">
                  Rp. 123.000
                </p>
              </div>
              <div className="flex items-center">
                <div className="flex gap-1 text-sm text-yellow-400">
                  <span>
                    <i className="fas fa-star"></i>
                  </span>
                  <span>
                    <i className="fas fa-star"></i>
                  </span>
                  <span>
                    <i className="fas fa-star"></i>
                  </span>
                  <span>
                    <i className="fas fa-star"></i>
                  </span>
                  <span>
                    <i className="fas fa-star"></i>
                  </span>
                </div>
                <div className="text-xs text-gray-500 ml-3">(150)</div>
              </div>
            </div>
            <Link
              href="https://api.whatsapp.com/send/?phone=6288973295464&text=Hai kak, aku mau pesan : (isi dengan pesananmu atau screenshot produk)"
              title="Hubungi Saya"
              rel="noopener noreferrer"
              target="_blank"
              className="block w-full py-1 text-center text-white bg-primary border-primary rounded-b hover:bg-transparent hover:text-primary transition"
            >
              Order
            </Link>
            {/* produk konten  */}
          </div>
          {/*  end single produk 8 */}
        </div>
        {/* end produk grid  */}
      </div>
      {/* <!-- end produk recommended --> */}

      {/* <!-- footer --> */}

      {/* <!-- end footer --> */}
    </main>
  );
}
