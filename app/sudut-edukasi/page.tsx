import Link from "next/link"

export default function Sudut_edukasi() {
    return (
        <div>
            <section className="bg-white border-b py-8">
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
                                Kampung Tematik adalah ...
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
                    <div className="w-full sm:w-1/2 p-6">
                            <img
                                src="https://jadesta.kemenparekraf.go.id/imgpost/97853.jpg"
                                className=""
                                alt="Foto Kampung Perca"
                            />
                        </div>
                        <div className="w-5/6 sm:w-1/2 p-6">
                            <h2 className="text-3xl text-secondary font-bold leading-none mb-3">
                                Apa itu Kain Perca?
                            </h2>
                            <p className="text-gray-600 mb-8 font-inter text-justify">
                                Kain perca adalah ...
                                <br />
                                <br />
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
