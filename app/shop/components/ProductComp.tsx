import Image from "next/image"
import Link from "next/link"
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from "react"

export default function ProductComp(data) {

    const getProducts = data;
    console.log(data)

    return (
        <div className="bg-white shadow rounded overflow-hidden group" >
            {/* <!-- produk image --> */}
            <div className="relative">
                <Image
                    src="/img/Produk/contoh_baju.jpg"
                    alt="Baju Perca"
                    width={150}
                    height={150}
                    className="w-full"
                />
                <div
                    className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition"
                >
                    <Link
                        href="#"
                        className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                    >
                        <i className="fas fa-search"></i>
                    </Link>
                    <Link
                        href="#"
                        className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                    >
                        <i className="fas fa-heart"></i>
                    </Link>
                </div>
            </div>
            {/* <!-- produk image --> */}

            {/* <!-- produk konten --> */}
            <div className="pt-4 pb-3 px-4">
                <Link href="/view">
                    <h4
                        className="uppercase font-medium font-montserrat text-xl mb-2 text-gray-800 hover:text-primary transition"
                    >
                        {getProducts.ProdukID}
                    </h4>
                </Link>
                <div className="flex items-baseline mb-1 space-x-2 font-inter">
                    <p className="text-lg text-primary font-semibold">Rp. 50.000</p>
                    <p className="text-sm text-gray-400 line-through">Rp. 123.000</p>
                </div>
                <div className="flex items-center">
                    <div className="flex gap-1 text-sm text-yellow-400">
                        <span><i className="fas fa-star"></i></span>
                        <span><i className="fas fa-star"></i></span>
                        <span><i className="fas fa-star"></i></span>
                        <span><i className="fas fa-star"></i></span>
                        <span><i className="fas fa-star"></i></span>
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
                Order</Link>
            {/* <!-- produk konten --> */}
        </div>
    )
}
