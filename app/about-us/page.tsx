import Script from "next/script"
import Link from "next/link"
import Image from "next/image"
import Breadcrumbs from "../components/breadcrumbs"

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
            <Breadcrumbs params={{
                slug: "About Us"
            }} />
            {/* <Breadcrumbs params={{
                slug: "About Us"
            }} /> */}
            {/* end breadcrumbs  */}
            {/* tentang kami  */}
            <section className="bg-white border-b py-8">
                <div className="container max-w-5xl mx-auto m-8">
                    <h1
                        className="w-full mb-6 my-2 text-4xl font-montserrat font-bold text-center text-secondary"
                    >
                        Tentang Kami
                    </h1>
                    <div className="sm:max-w-sm md:max-w-screen-md lg:h-96 lg:translate-x-32 mb-4">
                        <iframe
                            title="Video Kunjungan Kampung Perca"
                            src="https://www.youtube.com/embed/TRoKZ-4m5C0"
                            // width="990"
                            // height="400"
                            className="mb-6 border-primary border-8 w-full h-full justify-center"
                        ></iframe>
                    </div>
                    <div className="flex flex-wrap">
                        <div className="w-5/6 sm:w-1/2 p-6">
                            <h3 className="text-3xl text-secondary font-bold leading-none mb-3">
                                Kampung Perca Kota Bogor
                            </h3>
                            <p className="text-gray-600 mb-8 font-inter text-justify">
                                Kampung Perca berdiri di tengah menurunnya tingkat perekonomian
                                masyarakat dunia akibat Pandemi Covid-19. Banyak masyarakat di
                                Kelurahan Sindangsari yang tidak memiliki pekerjaan. Dengan`
                                melihat kondisi tersebut, pada akhirnya dilakukan musyawarah untuk
                                menciptakan peluang usaha berdasarkan potensi yang dimiliki. Kain
                                sisa-sisa pembuatan pakaian atau yang biasa dikenal dengan Kain
                                Perca menjadi sorotan dalam musyawarah tersebut. Pada akhirnya
                                lahirlah ide untuk mengembangkan kain perca menjadi bernilai.
                                <br />
                                <br />

                                Find us on &nbsp;

                                <Link
                                    className="text-pink-500 underline"
                                    href="https://www.instagram.com/kampungperca_kotabogor/"
                                >Instagram</Link>
                            </p>
                        </div>
                        <div className="w-full sm:w-1/2 p-6">
                            <img
                                src="https://jadesta.kemenparekraf.go.id/imgpost/97853.jpg"
                                className=""
                                alt="Foto Kampung Perca"
                            />
                        </div>
                        {/*  end tentang kami  */}

                        {/* lokasi  */}
                    </div>
                    <div className="flex flex-wrap flex-col-reverse sm:flex-row">
                        <div
                            id="map"
                            className="w-full sm:w-1/2 p-1 mt-6 border-primary border-8"
                        >
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
                                className="w-full h-full"
                            ></iframe>
                        </div>
                        <div className="w-full sm:w-1/2 p-6 mt-6">
                            <div className="align-middle">
                                <h3
                                    className="text-3xl text-secondary font-montserrat font-bold leading-none mb-3"
                                >
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
                                    >Maps</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- end tentang kami --> */}

            {/* <!-- artikel --> */}
            <section className="bg-white border-b py-14">
                <div className="container mx-auto flex flex-wrap pt-9 pb-12">
                    <h1
                        className="w-full my-2 text-4xl font-bold leading-tight text-center text-secondary font-montserrat"
                    >
                        Artikel
                    </h1>
                    <div className="w-full mb-4">
                        <div
                            className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"
                        ></div>
                    </div>
                    <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                        <div
                            className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow"
                        >
                            <Link href="#" className="flex flex-wrap no-underline hover:no-underline">
                                <p
                                    className="w-full text-gray-600 text-xs md:text-sm px-6 font-inter"
                                >
                                    Kampung Perca Juara
                                </p>
                                <div
                                    className="w-full font-bold text-xl text-gray-800 px-6 font-montserrat"
                                >
                                    Lorem ipsum dolor sit amet.
                                </div>
                                <p className="text-gray-800 text-base px-6 mb-5 font-inter">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                                    at ipsum eu nunc commodo posuere et sit amet ligula.
                                </p>
                            </Link>
                        </div>
                        <div
                            className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6"
                        >
                            <div className="flex items-center justify-start">
                                <button
                                    className="mx-auto lg:mx-0 gradient text-secondary font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out font-inter"
                                >
                                    Lihat
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                        <div
                            className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow"
                        >
                            <Link href="#" className="flex flex-wrap no-underline hover:no-underline">
                                <p
                                    className="w-full text-gray-600 text-xs md:text-sm px-6 font-inter"
                                >
                                    Peresmian Kampung Perca
                                </p>
                                <div
                                    className="w-full font-bold text-xl text-gray-800 px-6 font-montserrat"
                                >
                                    Lorem ipsum dolor sit amet.
                                </div>
                                <p className="text-gray-800 text-base px-6 mb-5 font-inter">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                                    at ipsum eu nunc commodo posuere et sit amet ligula.
                                </p>
                            </Link>
                        </div>
                        <div
                            className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6"
                        >
                            <div className="flex items-center justify-center">
                                <button
                                    className="mx-auto lg:mx-0 gradient text-secondary font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out font-inter"
                                >
                                    Lihat
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                        <div
                            className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow"
                        >
                            <Link href="#" className="flex flex-wrap no-underline hover:no-underline">
                                <p
                                    className="w-full text-gray-600 text-xs md:text-sm px-6 font-inter"
                                >
                                    Perca Hass
                                </p>
                                <div
                                    className="w-full font-bold text-xl text-gray-800 px-6 font-montserrat"
                                >
                                    Lorem ipsum dolor sit amet.
                                </div>
                                <p className="text-gray-800 text-base px-6 mb-5 font-inter">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                                    at ipsum eu nunc commodo posuere et sit amet ligula.
                                </p>
                            </Link>
                        </div>
                        <div
                            className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6"
                        >
                            <div className="flex items-center justify-end">
                                <button
                                    className="mx-auto lg:mx-0 gradient text-secondary font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out font-inter"
                                >
                                    Lihat
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
