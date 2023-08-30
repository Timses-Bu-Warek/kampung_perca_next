import Image from "next/image";
import Background from "../public/img/bg.jpg";
import Baju_Categories from "../public/img/baju_categories.jpg";
import Contoh_Baju from "../public/img/Produk/contoh_baju.jpg";
import Iklan from "../public/img/ads.png";
import Rekomendasi from "../public/img/Produk/rekomen.jpg";
import Link from "next/link";
import ReactModal from "react-modal";
import ModalBukuTamu from "./components/ModalBukuTamu";
import RecommendationComp from "./components/RecommendationComp";
import NewArrivalComp from "./components/NewArrivalComp";

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
      <div className="bg-cover bg-no-repeat bg-center py-36 imageBackgroundCarousel">
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
        {/*  ads section  */}
        <div className="container pb-16 mb-24">
          <Link href="https://ibik.ac.id" target="_blank">
            <Image
              src={Iklan}
              alt="Iklan"
              className="w-full shadow shadow-md rounded-md"
            />
          </Link>
        </div>
        {/*  end ads section  */}

        {/* vid */}
        <h1 className="w-full mb-6 text-4xl justify-center items-center font-montserrat font-bold text-center text-secondary">
          Peresmian Kampung Perca
        </h1>
        <div className="sm:max-w-sm md:max-w-screen-md lg:h-96  lg:translate-x-48 mb-32">
          <iframe
            title="Video Kunjungan Kampung Perca"
            src="https://www.youtube.com/embed/TRoKZ-4m5C0"
            // width="990"
            // height="400"
            className="mb-6 w-full h-full justify-center shadow-xl shadow-gray-400 rounded-xl"
          ></iframe>
          <h4 className="font-inter italic text-black items-center justify-center text-center">
            Sumber :{" "}
            <a
              href="https://www.youtube.com/@bimaarya1921"
              target="_blank"
              rel="noreferrer"
              className="font-bold text-blue-500"
            >
              Channel Youtube Bima Arya tahun 2022
            </a>
          </h4>
        </div>
        {/* end vid */}
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
                    width: "100%",
                    height: "auto",
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
        <NewArrivalComp />
        {/* end produk grid  */}
      </div>
      {/*  end produk wrapper  */}

      {/*  ads section  */}
      <div className="container pb-16">
        <Link href="#">
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
        <RecommendationComp />
        {/* end produk grid  */}
      </div>
      {/* <!-- end produk recommended --> */}

      {/* <!-- footer --> */}

      {/* <!-- end footer --> */}
    </main>
  );
}
