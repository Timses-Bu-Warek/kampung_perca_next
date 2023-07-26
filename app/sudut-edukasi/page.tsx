"use client";

import Link from "next/link";
import Breadcrumbs from "../components/breadcrumbs";

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
        <div className="container max-w-5xl mx-auto m-8">
          <div className="flex flex-wrap">
            <div className="w-5/6 sm:w-1/2 p-6">
              <h2 className="text-3xl text-secondary font-bold leading-none mb-3">
                Apa itu Kampung Tematik?
              </h2>
              <p className="text-gray-600 mb-8 font-inter text-justify">
                Kampung tematik adalah kampung wisata kecil yang dibentuk dari
                kebutuhan untuk menghasilkan sumber pendapatan alternatif dan
                menumbuhkan rasa kebersamaan dan kebanggaan di daerah pedesaan
                yang menurun
                <br />
                <br />
              </p>
            </div>
            <div className="w-full sm:w-1/2 p-6">
              <img
                src="https://jadesta.kemenparekraf.go.id/imgpost/97853.jpg"
                className=""
                alt="Foto Kampung Perca"
              />
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="hidden md:flex md:w-3/6 p-6">
              <img
                src="https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2020/11/19/1041984400.jpg"
                className=""
                alt="Foto Kain Perca"
              />
            </div>
            <div className="w-5/6 sm:w-1/2 p-6">
              <h2 className="text-3xl text-secondary font-bold leading-none mb-3">
                Apa itu Kain Perca?
              </h2>
              <p className="text-gray-600 mb-8 font-inter text-justify">
                Kain perca yaitu kain sisa atau limbah dari konveksi, pabrik
                atau garmen yang memproduksi pakaian, sprei dan lain sebagainya
                yang menggunakan bahan dasar kain.
                <br />
                <br />
              </p>
            </div>
            <div className="w-full md:hidden p-6">
              <img
                src="https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2020/11/19/1041984400.jpg"
                className=""
                alt="Foto Kain Perca"
              />
            </div>
          </div>
        </div>
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
              <Link
                href="#"
                className="flex flex-wrap no-underline hover:no-underline"
              >
                <div className="w-full font-bold text-xl text-gray-800 px-6 font-montserrat">
                  Potensi Kain Perca di Kota Bogor
                </div>
                <p className="text-gray-800 text-base px-6 mb-5 font-inter">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                </p>
              </Link>
            </div>
            <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
              <div className="flex items-center justify-start">
                <button className="mx-auto lg:mx-0 gradient text-secondary font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out font-inter">
                  Lihat
                </button>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
              <Link
                href="#"
                className="flex flex-wrap no-underline hover:no-underline"
              >
                <div className="w-full font-bold text-xl text-gray-800 px-6 font-montserrat">
                  Apa itu kain perca ?
                </div>
                <p className="text-gray-800 text-base px-6 mb-5 font-inter">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                </p>
              </Link>
            </div>
            <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
              <div className="flex items-center justify-center">
                <button className="mx-auto lg:mx-0 gradient text-secondary font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out font-inter">
                  Lihat
                </button>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
              <Link
                href="#"
                className="flex flex-wrap no-underline hover:no-underline"
              >
                <div className="w-full font-bold text-xl text-gray-800 px-6 font-montserrat">
                  Apa itu Kampung Tematik ?
                </div>
                <p className="text-gray-800 text-base px-6 mb-5 font-inter">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                </p>
              </Link>
            </div>
            <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
              <div className="flex items-center justify-end">
                <button className="mx-auto lg:mx-0 gradient text-secondary font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out font-inter">
                  Lihat
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
