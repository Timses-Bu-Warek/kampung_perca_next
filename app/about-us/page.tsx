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
            Peresmian Kampung Perca
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
          <div className="mt-40 mb-24">
            <h1 className="text-4xl font-montserrat font-bold text-center text-secondary">
              Struktur Organisasi
            </h1>
            <img
              src="/img/SO.jpg"
              alt="struktur organisasi"
              className="shadow-xl shadow-gray-400 rounded-xl"
            />
          </div>
        </div>
      </section>
      {/* <!-- end tentang kami --> */}

      {/* <!-- artikel --> */}
    </main>
  );
}
