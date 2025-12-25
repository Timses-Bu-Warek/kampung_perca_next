import Image from "next/image";
import FotoBinaanIBIK from "@/public/img/ads.webp";
import Link from "next/link";
import ReactModal from "react-modal";
import ModalBukuTamu from "./components/ModalBukuTamu";
import RecommendationComp from "./components/RecommendationComp";
import NewArrivalComp from "./components/NewArrivalComp";
import { Metadata } from "next";
import YoutubeFacade from "./components/youtubefacade";
import Head from "next/head";

export default function Home() {
  // sessionStorage.setItem("halo", "true")
  // let isFilled = "false";
  // if (typeof window !== 'undefined') {
  //   // Perform sessionStorage.
  //   sessionStorage.setItem("kunci", "true")
  // }
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Kampung Perca Sindangsari",
              url: "https://www.kampungperca.id",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+62-123-456-7890",
                contactType: "Customer Service",
                areaServed: "ID",
                availableLanguage: "Indonesian",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Place",
              name: "Kampung Perca Sindangsari",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "Gang Raden Alibasyah, Jalan Raya Wangun Atas RT 004 / RW 001",
                addressLocality: "Bogor",
                addressRegion: "Jawa Barat",
                postalCode: "12345",
                addressCountry: "ID",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "-6.6528261650365375",
                longitude: "106.84323757484158",
              },
              url: "https://www.kampungperca.id",
              telephone: "+62-123-456-7890",
            }),
          }}
        />
      </Head>
      <main>
        {/*  Banner  */}
        <div className="bg-center bg-no-repeat bg-cover py-36 imageBackgroundCarousel">
          <div className="p-5 text-white z-2 -mt-20 lg:ml-9">
            <h1 className="mb-4 text-5xl font-bold capitalize font-montserrat">
              Menjelajahi Keindahan Kampung Perca Sindangsari: Keunikan Tradisi
              dan Kehidupan Lokal.
            </h1>
            <p className="max-w-4xl py-5 text-base font-inter">
              Kampung Perca Sindangsari, sebuah kampung tematik baru yang
              menambahkan destinasi wisata di kota Bogor dan merupakan binaan
              <Link
                href="https://www.ibik.ac.id/"
                rel="noopener noreferrer"
                target="_blank"
                className="text-primary"
                passHref
              >
                {" "}
                Institut Bisnis dan Informatika Kesatuan Bogor.
              </Link>
              <br />
              Berlokasi di Kelurahan Sindangsari Kecamatan Bogor Timur, Kota
              Bogor
            </p>
            <div className="mt-12">
              <Link
                href="/shop"
                rel="noopener noreferrer"
                className="px-8 py-3 font-medium text-white transition border rounded-md bg-primary border-primary hover:bg-transparent hover:text-primary font-inter"
                passHref
              >
                Shop at Kampung Perca
              </Link>
            </div>
          </div>
        </div>
        {/* end Banner  */}

        {/*  features  */}
        {/* <div className="container py-16">
        <div className="flex flex-col justify-center w-10/12 gap-6 mx-auto md:grid md:grid-cols-3">
          <div className="flex items-center justify-center gap-5 px-3 py-6 border rounded-xs border-primary">
            <i
              className="object-contain fa-solid fa-truck"
              style={{ fontSize: "2rem" }}
            ></i>
            <span>
              <h4 className="text-lg font-semibold capitalize">
                Free Shopping
              </h4>
              <p className="text-gray-500 text-sx">order over IDR5000</p>
            </span>
          </div>
          <div className="flex items-center justify-center gap-5 px-3 py-6 border rounded-xs border-primary">
            <i
              className="object-contain fa-solid fa-hand-holding-dollar"
              style={{ fontSize: "2rem" }}
            ></i>
            <span>
              <h4 className="text-lg font-semibold capitalize">
                Money Returns
              </h4>
              <p className="text-gray-500 text-sx">30 days money return</p>
            </span>
          </div>
          <div className="flex items-center justify-center gap-5 px-3 py-6 border rounded-xs border-primary">
            <i
              className="object-contain fa-solid fa-clock"
              style={{ fontSize: "2rem" }}
            ></i>
            <span>
              <h4 className="text-lg font-semibold capitalize">24/7 Support</h4>
              <p className="text-gray-500 text-sx">Support Customer</p>
            </span>
          </div>
        </div>
      </div> */}

        <div className="container mx-auto my-24 md:px-6">
          {/*  ads section  */}
          <div className="container pb-16 mb-16">
            <Link
              href="https://ibik.ac.id"
              target="_blank"
              rel="noopener noreferrer"
              passHref
            >
              <Image
                src={FotoBinaanIBIK}
                width={500}
                height={500}
                placeholder="blur"
                loading="lazy"
                sizes="100vw"
                alt="Sistem Informasi Kampung Perca di bawah binaan IBI Kesatuan"
                className="w-full rounded-md shadow-md"
              />
            </Link>
          </div>
          {/*  end ads section  */}

          {/* vid */}
          <h1 className="items-center justify-center w-full mb-6 text-4xl font-bold text-center font-montserrat text-secondary">
            Peresmian Kampung Perca
          </h1>
          <div className="mb-32 sm:max-w-sm md:max-w-(--breakpoint-md) lg:h-96 lg:translate-x-48">
            <YoutubeFacade
              id="TRoKZ-4m5C0"
              title="Video Kunjungan Kampung Perca"
            />

            {/* <iframe
            title="Video Kunjungan Kampung Perca"
            src="https://www.youtube.com/embed/TRoKZ-4m5C0"
            // width="990"
            // height="400"
            className="justify-center w-full h-full mb-6 shadow-xl shadow-gray-400 rounded-xl"
          ></iframe> */}
            <h4 className="items-center justify-center italic text-center text-black font-inter">
              Sumber :{" "}
              <a
                href="https://www.youtube.com/@bimaarya1921"
                target="_blank"
                rel="noreferrer noopener"
                className="font-bold text-blue-500"
              >
                Channel Youtube Bima Arya tahun 2022
              </a>
            </h4>
          </div>
          {/* end vid */}
          <section className="mb-32">
            <div className="flex flex-wrap">
              <div className="w-full mb-12 lg:mb-0 lg:w-5/12">
                <div className="flex lg:py-12">
                  <Image
                    src="https://pakuanraya.com/wp-content/uploads/2021/12/IMG-20211217-WA0042.jpg"
                    className="z-0 w-full rounded-lg shadow-lg dark:shadow-black/20 lg:ml-[50px]"
                    alt="image"
                    width={500}
                    height={500}
                    sizes="100vw"
                    loading="lazy"
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                  />
                </div>
              </div>

              <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
                <div className="flex items-center h-full p-6 text-center text-black bg-white rounded-lg shadow-xl lg:pl-12 lg:text-left">
                  <div className="lg:pl-12">
                    <h1 className="mb-8 text-3xl font-bold">
                      Kampung Perca Sindangsari Kota Bogor
                    </h1>
                    <p className="pb-2 mb-8 text-justify lg:pb-0">
                      Kampung Perca merupakan desa wisata Kota Bogor (kampung
                      tematik) yang memproduksi berbagai barang kerajinan dari
                      kain perca. Desa Wisata Kota Bogor, Kampung Perca yang
                      berlokasi di Kelurahan Sindangsari, Kecamatan Bogor Timur
                      dideklarasikan sebagai Kampung Gerakan Masyarakat Hidup
                      dan Sehat (Germas). <br /> <br />
                      Latar belakang lahirnya Kampung Perca pun tak lepas dari
                      kebijakan pemerintah menerapakan pembatasan mobilitas
                      warga saat pandemi covid. Hal ini menyebabkan melambatnya
                      aktivitas perekonomian masyarakat, bahkan PHK terjadi di
                      mana-mana.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="flex flex-col-reverse flex-wrap mb-32 sm:flex-row">
            <div id="map" className="w-full p-1 mt-6 sm:w-1/2 ">
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
            <div className="w-full p-6 mt-6 sm:w-1/2">
              <div className="align-middle">
                <h1 className="mb-3 text-3xl font-bold leading-none text-secondary font-montserrat">
                  Lokasi Kampung Perca
                </h1>
                <p className="mb-8 text-justify text-gray-600 font-inter">
                  Kampung Perca adalah desa wisata tematik di Kota Bogor yang
                  terletak di Gang Raden Alibasyah, Jalan Raya Wangun Atas RT
                  004 / RW 001, Kelurahan Sindangsari, Kecamatan Bogor Timur,
                  Kota Bogor, Jawa Barat. Di sini, berbagai barang kerajinan
                  dari kain perca diproduksi di tengah kawasan padat penduduk.
                </p>
                <br />
                <br />
                See on &nbsp;
                <Link
                  className="text-pink-500 underline"
                  href="https://goo.gl/maps/igidBQGP7yiBDYer5"
                  target="_blank"
                  rel="noopener noreferrer"
                  passHref
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
        <h2 className="mb-6 text-lg font-bold text-black font-montserrat">
          Shop by Categories
        </h2>
        <div className="grid grid-cols-3 gap-3">
          <div className="relative overflow-hidden rounded-xs group">
            <Image src={Baju_Categories} alt="Baju" className="w-full" />
            <Link
              href="#"
              rel="noopener noreferrer"
              className="absolute inset-0 flex items-center justify-center text-lg text-white transition bg-black bg-opacity-40 font-inter group-hover:bg-opacity-60"
              passHref
            >Baju</Link>
          </div>
          <div className="relative overflow-hidden rounded-xs group">
            <Image src={Baju_Categories} alt="Baju" className="w-full" />
            <Link
              href="#"
              rel="noopener noreferrer"
              className="absolute inset-0 flex items-center justify-center text-lg text-white transition bg-black bg-opacity-40 font-inter group-hover:bg-opacity-60"
              passHref
            >Baju</Link>
          </div>
          <div className="relative overflow-hidden rounded-xs group">
            <Image src={Baju_Categories} alt="Baju" className="w-full" />
            <Link
              href="#"
              rel="noopener noreferrer"
              className="absolute inset-0 flex items-center justify-center text-lg text-white transition bg-black bg-opacity-40 font-inter group-hover:bg-opacity-60"
              passHref
            >Baju</Link>
          </div>
          <div className="relative overflow-hidden rounded-xs group">
            <Image src={Baju_Categories} alt="Baju" className="w-full" />
            <Link
              href="#"
              rel="noopener noreferrer"
              className="absolute inset-0 flex items-center justify-center text-lg text-white transition bg-black bg-opacity-40 font-inter group-hover:bg-opacity-60"
              passHref
            >Baju</Link>
          </div>
          <div className="relative overflow-hidden rounded-xs group">
            <Image src={Baju_Categories} alt="Baju" className="w-full" />
            <Link
              href="#"
              rel="noopener noreferrer"
              className="absolute inset-0 flex items-center justify-center text-lg text-white transition bg-black bg-opacity-40 font-inter group-hover:bg-opacity-60"
              passHref
            >Baju</Link>
          </div>
          <div className="relative overflow-hidden rounded-xs group">
            <Image src={Baju_Categories} alt="Baju" className="w-full" />
            <Link
              href="#"
              rel="noopener noreferrer"
              className="absolute inset-0 flex items-center justify-center text-lg text-white transition bg-black bg-opacity-40 font-inter group-hover:bg-opacity-60"
              passHref
            >Baju</Link>
          </div>
        </div>
      </div> */}
        {/*  end categories  */}

        {/*  produk wrapper  */}
        <div className="container pb-16">
          <h2 className="mb-6 text-2xl font-bold text-gray-800 uppercase font-montserrat">
            New Arrival
          </h2>
          {/*  poduk grid  */}
          <NewArrivalComp />
          {/* end produk grid  */}
        </div>
        {/*  end produk wrapper  */}

        {/*  produk recommended  */}
        <div className="container pb-16">
          <h2 className="mb-6 text-2xl font-bold text-gray-800 uppercase font-montserrat">
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
    </>
  );
}
