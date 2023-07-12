"use client"

import Link from "next/link"
import Breadcrumbs from '../components/breadcrumbs';

export default function Sudut_edukasi() {
    return (
        <div>
            <section className="bg-white border-b py-8">
                <Breadcrumbs params={{
                    slug: "Sudut Edukasi"
                }} />
                <h1
                    className="w-full mb-6 my-2 text-4xl font-montserrat font-bold text-center text-secondary"
                >
                    Sudut Edukasi
                </h1>
                <div className="container max-w-5xl mx-auto m-8">
                    <div className="flex flex-wrap">
                        <div className="w-5/6 sm:w-1/2 p-6">
                            <h2 className="text-3xl text-secondary font-bold leading-none mb-3">
                                Apa itu Kampung Tematik?
                            </h2>
                            <p className="text-gray-600 mb-8 font-inter text-justify">
                            Kampung tematik adalah kampung wisata kecil yang dibentuk dari kebutuhan 
                            untuk menghasilkan sumber pendapatan alternatif dan menumbuhkan rasa kebersamaan 
                            dan kebanggaan di daerah pedesaan yang menurun
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
                            Kain perca yaitu kain sisa atau limbah dari konveksi, 
                            pabrik atau garmen yang memproduksi pakaian, sprei dan lain 
                            sebagainya yang menggunakan bahan dasar kain.
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
        </div>
    )
}
