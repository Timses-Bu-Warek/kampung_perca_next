"use client"

import Link from "next/link"
import { useState } from "react"

export default function View() {
    // const objObject = {
    //     quantity: 1
    // }
    const [quantity, setQuantity] = useState(1);
    const [name, setName] = useState("Baju Perca");

    function increaseQuantity (){
        setQuantity( quantity + 1 );
    }

    function decreaseQuantity (){
        if(quantity > 1){
            setQuantity (quantity - 1 );
        }
    }

    const waAPI = "https://api.whatsapp.com/send/?phone=6288973295464&text=Hai kak, aku mau pesan : " + quantity + " " + name; 
    return (
        <main>
            {/* <!-- breadcrums --> */}
            <div className="container py-4 flex items-center gap-4">
                <Link href="/public/index.html" className="text-primary text-base">
                    <i className="fas fa-home"></i>
                </Link>
                <span className="text-sm text-gray-400">
                    <i className="fas fa-chevron-right"></i>
                </span>
                <p className="text-gray-600 font-medium">Product View</p>
            </div>
            {/* <!-- end breadcrums --> */}

            {/* <!-- product view --> */}
            <div className="container grid grid-cols-2 gap-6">
                <div>
                    <img src="/img/Produk/contoh_baju.jpg" className="w-full" alt="Contoh Baju" />
                    <div className="grid grid-cols-5 gap-4 mt-4">
                        <img
                            src="/img/Produk/rekomen.jpg"
                            className="w-full cursor-pointer border border-primary"
                            alt="Rekomen"
                        />
                        <img
                            src="/img/Produk/rekomen.jpg"
                            className="w-full cursor-pointer border"
                            alt="Rekomen"
                        />
                        <img
                            src="/img/Produk/rekomen.jpg"
                            className="w-full cursor-pointer border"
                            alt="Rekomen"
                        />
                        <img
                            src="/img/Produk/rekomen.jpg"
                            className="w-full cursor-pointer border"
                            alt="Rekomen"
                        />
                        <img
                            src="/img/Produk/rekomen.jpg"
                            className="w-full cursor-pointer border"
                            alt="Rekomen"
                        />
                    </div>
                </div>
                {/* <!-- produk konten --> */}
                <div>
                    <h2 className="text-3xl font-montserrat font-semibold uppercase mb-2">
                        Baju perca K
                    </h2>
                    <div className="flex items-center mb-3">
                        <div className="flex gap-1 text-sm text-yellow-400">
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                        </div>
                        <div className="text-sm text-gray-500 ml-3">(70 Reviews)</div>
                    </div>
                    <div className="space-y-2">
                        <p className="text-gray-800 font-semibold font-inter space-x-2">
                            <span>Avilability : </span>
                            <span className="text-green-600">In Stock</span>
                        </p>
                        <p className="text-gray-800 font-semibold font-inter space-x-2">
                            <span>Brands : </span>
                            <span className="text-gray-600">Perca Hass</span>
                        </p>
                        <p className="text-gray-800 font-semibold font-inter space-x-2">
                            <span>Category : </span>
                            <span className="text-gray-600">Baju</span>
                        </p>
                    </div>
                    <div className="flex items-baseline mb-1 space-x-2 font-inter mt-4">
                        <p className="text-xl text-primary font-semibold">Rp. 50.000</p>
                        <p className="text-base text-gray-400 line-through">Rp. 123.000</p>
                    </div>
                    <p className="mt-4 text-gray-600">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis,
                        nesciunt. Vitae, at officiis. Amet odit eius quaerat. Harum possimus
                        quidem provident tenetur placeat, corporis, molestias nisi ipsam,
                        animi deserunt quod.
                    </p>

                    {/* <!-- size --> */}
                    <div className="pt-4">
                        <h3 className="text-gray-800 uppercase font-inter pt-4">Size</h3>
                        <div className="flex items-center gap-2">
                            {/* <!-- single size --> */}
                            <div className="size-selector">
                                <input type="radio" name="size" className="hidden" id="size-xs" />
                                <label
                                    htmlFor="size-xs"
                                    className="text-lg border border-gray-200 rounded-sm h-6 w-6 flexl items-center justify-center cursor-pointer shadow-sm text-gray-600"
                                >XS</label>
                            </div>
                            {/* <!-- single size --> */}
                            <div className="size-selector">
                                <input type="radio" name="size" className="hidden" id="size-s" />
                                <label
                                    htmlFor="size-s"
                                    className="text-lg border border-gray-200 rounded-sm h-6 w-6 flexl items-center justify-center cursor-pointer shadow-sm text-gray-600"
                                >S</label>
                            </div>
                            {/* <!-- single size --> */}
                            <div className="size-selector">
                                <input type="radio" name="size" className="hidden" id="size-m" />
                                <label
                                    htmlFor="size-m"
                                    className="text-lg border border-gray-200 rounded-sm h-6 w-6 flexl items-center justify-center cursor-pointer shadow-sm text-gray-600"
                                >M</label>
                            </div>
                            {/* <!-- single size --> */}
                            <div className="size-selector">
                                <input type="radio" name="size" className="hidden" id="size-l" />
                                <label
                                    htmlFor="size-l"
                                    className="text-lg border border-gray-200 rounded-sm h-6 w-6 flexl items-center justify-center cursor-pointer shadow-sm text-gray-600"
                                >L</label>
                            </div>
                            {/* <!-- single size --> */}
                            <div className="size-selector">
                                <input type="radio" name="size" className="hidden" id="size-xl" />
                                <label
                                    htmlFor="size-xl"
                                    className="text-lg border border-gray-200 rounded-sm h-6 w-6 flexl items-center justify-center cursor-pointer shadow-sm text-gray-600"
                                >XL</label>
                            </div>
                        </div>
                    </div>
                    {/* <!-- end size --> */}

                    {/* <!-- quantity --> */}
                    <div className="mt-4">
                        <h3 className="text-gray-800 uppercase font-inter pt-4">Quantity</h3>
                        <div
                            className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max"
                        >
                            <button
                                type="button"
                                className="h-8 w-8 text-lg flex items-center justify-center cursor-pointer select-none"
                                onClick={decreaseQuantity} >
                                -
                            </button>
                            <div className="h-8 w-8 text-base flex items-center justify-center">
                                {quantity}
                            </div>
                            <button
                                type="button"
                                className="h-8 w-8 text-lg flex items-center justify-center cursor-pointer select-none"
                                onClick={increaseQuantity} >
                                +
                            </button>
                        </div>
                    </div>
                    {/* <!-- end quantity --> */}

                    {/* <!-- cart button --> */}
                    <div className="flex gap-3 border-b border-gray-200 pb-5 mt-6">
                        <Link
                            href= {waAPI}
                            title="Hubungi Saya"
                            rel="noopener"
                            target="_blank"
                            className="bg-primary border border-primary text-white px-8 py-2 font-medium font-inter rounded uppercase flex items-center gap-2 hover:bg-transparent hover:text-primary transition"
                        >
                            <i className="fas fa-shopping-bag"></i>Order
                        </Link>
                        <Link
                            href="#"
                            className="border border-gray-300 text-gray-600 px-8 py-2 font-medium font-inter rounded uppercase flex items-center gap-2 hover:text-primary transition"
                        >
                            <i className="fas fa-heart"></i>like
                        </Link>
                    </div>
                    {/* <!-- end cart button --> */}

                    {/* <!-- social share --> */}
                    <div className="flex gap-3 mt-4">
                        <span>
                            <p className="text-gray-400 flex items-center justify-center">
                                Find Us
                            </p>
                        </span>
                        <span>
                            <Link href="#" className="hover:text-gray-500 h-8 w-8">
                                <i className="fab fa-instagram"></i> </Link>
                        </span>
                    </div>
                    {/* <!-- end social share --> */}
                </div>
                {/* <!-- end produk konten --> */}
            </div>
            {/* <!-- end product view --> */}

            {/* <!-- produk detail --> */}
            <div className="container pb-16">
                <h3
                    className="border-b border-gray-200 font-montserrat text-gray-800 pb-3 font-medium pt-6"
                >
                    Product Detail
                </h3>
                <div className="w-3/5 pt-4">
                    <div className="text-gray-600 space-y-3">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                            ullam deleniti iusto impedit nobis ex repellendus, voluptas maxime
                            autem ducimus, consequatur cum fuga voluptatum quod sint unde ab
                            aspernatur et?
                        </p>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia optio
                            numquam recusandae omnis alias velit, nostrum ipsam. Iste minima
                            quam unde sit error voluptatum itaque a ea nihil quisquam.
                            Repudiandae.
                        </p>
                    </div>
                    {/* <!-- table detail --> */}
                    <table
                        className="table-auto border-collapse text-left text-gray-600 text-sm mt-6"
                    >
                        <tbody>
                        <tr>
                            <td
                                className="py-2 px-4 border border-gray-300 w-40 font-inter font-medium"
                            >
                                Weight
                            </td>
                            <td className="py-2 px-4 border border-gray-300">55 Kg</td>
                        </tr>
                        <tr>
                            <td
                                className="py-2 px-4 border border-gray-300 w-40 font-inter font-medium"
                            >
                                Weight
                            </td>
                            <td className="py-2 px-4 border border-gray-300">55 Kg</td>
                        </tr>
                        <tr>
                            <td
                                className="py-2 px-4 border border-gray-300 w-40 font-inter font-medium"
                            >
                                Weight
                            </td>
                            <td className="py-2 px-4 border border-gray-300">55 Kg</td>
                        </tr>
                        </tbody>
                    </table>
                    {/* <!-- end table detail --> */}
                </div>
            </div>
            {/* <!-- end produk detail --> */}

            {/* <!-- produk wrapper --> */}
            <div className="container pb-16">
                <h2
                    className="text-2xl text-gray-800 uppercase mb-6 font-montserrat font-bold"
                >
                    Related product
                </h2>
                {/* <!-- produk grid --> */}
                <div className="grid grid-cols-4 gap-6">
                    {/* <!-- single produk --> */}
                    <div className="bg-white shadow rounded overflow-hidden group">
                        {/* <!-- produk image --> */}
                        <div className="relative">
                            <img
                                src="/img/Produk/contoh_baju.jpg"
                                alt="Baju Perca"
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
                            <Link href="#">
                                <h4
                                    className="uppercase font-medium font-montserrat text-xl mb-2 text-gray-800 hover:text-primary transition"
                                >
                                    Baju Perca
                                </h4>
                            </Link>
                            <div className="flex items-baseline mb-1 space-x-2 font-inter">
                                <p className="text-xl text-primary font-semibold">Rp. 50.000</p>
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
                            href={waAPI}
                            title="Hubungi Saya"
                            rel="noopener"
                            target="_blank"
                            className="block w-full py-1 text-center text-white bg-primary border-primary rounded-b hover:bg-transparent hover:text-primary transition"
                        >
                            Order</Link>
                        {/* <!-- produk konten --> */}
                    </div>
                    {/* <!-- single produk --> */}
                    {/* <!-- single produk --> */}
                    <div className="bg-white shadow rounded overflow-hidden group">
                        {/* <!-- produk image --> */}
                        <div className="relative">
                            <img
                                src="/img/Produk/contoh_baju.jpg"
                                alt="Baju Perca"
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
                            <Link href="#">
                                <h4
                                    className="uppercase font-medium font-montserrat text-xl mb-2 text-gray-800 hover:text-primary transition"
                                >
                                    Baju Perca
                                </h4>
                            </Link>
                            <div className="flex items-baseline mb-1 space-x-2 font-inter">
                                <p className="text-xl text-primary font-semibold">Rp. 50.000</p>
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
                            href={waAPI}
                            title="Hubungi Saya"
                            rel="noopener"
                            target="_blank"
                            className="block w-full py-1 text-center text-white bg-primary border-primary rounded-b hover:bg-transparent hover:text-primary transition"
                        >
                            Order</Link>
                        {/* <!-- produk konten --> */}
                    </div>
                    {/* <!-- single produk --> */}
                    {/* <!-- single produk --> */}
                    <div className="bg-white shadow rounded overflow-hidden group">
                        {/* <!-- produk image --> */}
                        <div className="relative">
                            <img
                                src="/img/Produk/contoh_baju.jpg"
                                alt="Baju Perca"
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
                            <Link href="#">
                                <h4
                                    className="uppercase font-medium font-montserrat text-xl mb-2 text-gray-800 hover:text-primary transition"
                                >
                                    Baju Perca
                                </h4>
                            </Link>
                            <div className="flex items-baseline mb-1 space-x-2 font-inter">
                                <p className="text-xl text-primary font-semibold">Rp. 50.000</p>
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
                            href={waAPI}
                            title="Hubungi Saya"
                            rel="noopener"
                            target="_blank"
                            className="block w-full py-1 text-center text-white bg-primary border-primary rounded-b hover:bg-transparent hover:text-primary transition"
                        >
                            Order</Link>
                        {/* <!-- produk konten --> */}
                    </div>
                    {/* <!-- single produk --> */}
                    {/* <!-- single produk --> */}
                    <div className="bg-white shadow rounded overflow-hidden group">
                        {/* <!-- produk image --> */}
                        <div className="relative">
                            <img
                                src="/img/Produk/contoh_baju.jpg"
                                alt="Baju Perca"
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
                            <Link href="#">
                                <h4
                                    className="uppercase font-medium font-montserrat text-xl mb-2 text-gray-800 hover:text-primary transition"
                                >
                                    Baju Perca
                                </h4>
                            </Link>
                            <div className="flex items-baseline mb-1 space-x-2 font-inter">
                                <p className="text-xl text-primary font-semibold">Rp. 50.000</p>
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
                            href={waAPI}
                            title="Hubungi Saya"
                            rel="noopener"
                            target="_blank"
                            className="block w-full py-1 text-center text-white bg-primary border-primary rounded-b hover:bg-transparent hover:text-primary transition"
                        >
                            Order</Link>
                        {/* <!-- produk konten --> */}
                    </div>
                    {/* <!-- single produk --> */}
                </div>
                {/* <!-- end produk grid --> */}
            </div>
            {/* <!-- end produk wrapper --> */}
        </main>
    )
}
