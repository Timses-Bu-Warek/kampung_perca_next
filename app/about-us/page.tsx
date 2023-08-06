import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "../components/breadcrumbs";

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
      <section className="bg-white border-b py-0">
        <div className="container max-w-5xl mx-auto m-8">
          <h1 className="w-full mb-6 my-2 text-4xl font-montserrat font-bold text-center text-secondary">
            Tentang Kami
          </h1>
          <div className="sm:max-w-sm md:max-w-screen-md lg:h-96 lg:translate-x-32 mb-4">
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
          <div className="flex flex-wrap mt-32">
            <div className="w-5/6 sm:w-1/2 p-6">
              <h3 className="text-3xl text-secondary font-bold leading-none mb-3">
                Kampung Perca Kota Bogor
              </h3>
              <p className="text-gray-600 mb-8 font-inter text-justify">
                Kampung Perca berdiri di tengah menurunnya tingkat perekonomian
                masyarakat dunia akibat Pandemi Covid-19. Banyak masyarakat di
                Kelurahan Sindangsari yang tidak memiliki pekerjaan. Dengan`
                melihat kondisi tersebut, pada akhirnya dilakukan musyawarah
                untuk menciptakan peluang usaha berdasarkan potensi yang
                dimiliki. Kain sisa-sisa pembuatan pakaian atau yang biasa
                dikenal dengan Kain Perca menjadi sorotan dalam musyawarah
                tersebut. Pada akhirnya lahirlah ide untuk mengembangkan kain
                perca menjadi bernilai.
                <br />
                <br />
                Find us on &nbsp;
                <Link
                  className="text-pink-500 underline"
                  href="https://www.instagram.com/kampungperca_kotabogor/"
                >
                  Instagram
                </Link>
              </p>
            </div>
            <div className="w-full sm:w-1/2 p-6">
              <img
                src="https://jadesta.kemenparekraf.go.id/imgpost/97853.jpg"
                className="shadow-xl shadow-gray-400 rounded-xl"
                alt="Foto Kampung Perca"
              />
            </div>
            {/*  end tentang kami  */}

            {/* lokasi  */}
          </div>
          <div className="flex flex-wrap flex-col-reverse sm:flex-row mb-32">
            <div id="map" className="w-full sm:w-1/2 p-1 mt-6 ">
              {/* <MyApp />    */}
              {/* <Script
                    async
                    defer
                    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB2z_q_YqnXOw5K6mrDt4_57-0rYPpPr1c&callback=initMap"
                ></Script> */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15851.809306758589!2d106.8458125!3d-6.6528315!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c94d3ea29d31%3A0xac59c511b4fc118b!2sKampung%20Perca%20Sindangsari!5e0!3m2!1sid!2sid!4v1688749774352!5m2!1sid!2sid"
                // width="480"
                // height="202"
                // style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
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
                  Gg. Raden Alibasyah, Sindangsari, Kec. Bogor Tim., Kota Bogor,
                  Jawa Barat 16146, Indonesia
                  <br />
                  <br />
                  See on &nbsp;
                  <Link
                    className="text-pink-500 underline"
                    href="https://goo.gl/maps/TtDvXdBton4V9txX7"
                  >
                    Maps
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end tentang kami --> */}

      {/* <!-- artikel --> */}
    </main>
  );
}
