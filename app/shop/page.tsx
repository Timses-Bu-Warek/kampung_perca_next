import Link from "next/link"

export default function Shop() {
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
      <p className="text-gray-600 font-medium">Shop</p>
    </div>
    {/* <!-- end breadcrums --> */}

    {/* <!-- shop wrapper --> */}
    <div className="container grid grid-cols-4 gap-6 pt-4 pb-16 items-start">
      {/* <!-- side bar --> */}
      <div className="col-span-1 bg-white px-4 pb-6 shadow rounded overflow-hidden">
        <div className="divide-y divide-gray-200 space-y-5">
          {/* <!-- category filter --> */}
          <div>
            <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
              Categories
            </h3>
            <div className="space-y-2">
              {/* <!-- single category --> */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="cat-1"
                  className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                />
                <label htmlFor="cat-1" className="text-gray-600 ml-3 cursor-pointer"
                  >Baju</label>
                <div className="ml-auto text-gray-600 text-sm">(15)</div>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="cat-2"
                  className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                />
                <label htmlFor="cat-2" className="text-gray-600 ml-3 cursor-pointer"
                  >Celana</label>
                <div className="ml-auto text-gray-600 text-sm">(20)</div>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="cat-3"
                  className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                />
                <label htmlFor="cat-3" className="text-gray-600 ml-3 cursor-pointer"
                  >Tas</label>
                <div className="ml-auto text-gray-600 text-sm">(30)</div>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="cat-4"
                  className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                />
                <label htmlFor="cat-4" className="text-gray-600 ml-3 cursor-pointer"
                  >Souvenir</label>
                <div className="ml-auto text-gray-600 text-sm">(40)</div>
              </div>
            </div>
          </div>
          {/* <!-- end category filter --> */}

          {/* <!-- category filter 2 --> */}
          <div className="pt-4">
            <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium pt-6">
              Brands
            </h3>
            <div className="space-y-2">
              {/* <!-- single category --> */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="cat-5"
                  className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                />
                <label htmlFor="cat-5" className="text-gray-600 ml-3 cursor-pointer"
                  >Opsi 1</label>
                <div className="ml-auto text-gray-600 text-sm">(15)</div>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="cat-6"
                  className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                />
                <label htmlFor="cat-6" className="text-gray-600 ml-3 cursor-pointer"
                  >Opsi 2</label>
                <div className="ml-auto text-gray-600 text-sm">(20)</div>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="cat-7"
                  className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                />
                <label htmlFor="cat-7" className="text-gray-600 ml-3 cursor-pointer"
                  >Opsi 3</label>
                <div className="ml-auto text-gray-600 text-sm">(30)</div>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="cat-8"
                  className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                />
                <label htmlFor="cat-8" className="text-gray-600 ml-3 cursor-pointer"
                  >Opsi 4</label>
                <div className="ml-auto text-gray-600 text-sm">(40)</div>
              </div>
            </div>
          </div>
          {/* <!-- end category filter 2 --> */}

          {/* <!-- price filter --> */}
          <div className="pt-4">
            <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium pt-6">
              Price
            </h3>
            <div className="mt-4 flex items-center">
              <input
                type="text"
                className="w-full border-gray-300 focus:border-primary focus:ring-0 px-3 py-1 text-gray-600 text-sm shadow-sm rounded"
                placeholder="min"
              />
              <span className="mx-3 text-gray-500">-</span>
              <input
                type="text"
                className="w-full border-gray-300 focus:border-primary focus:ring-0 px-3 py-1 text-gray-600 text-sm shadow-sm rounded"
                placeholder="max"
              />
            </div>
          </div>
          {/* <!-- end price filter --> */}

          {/* <!-- size filter --> */}
          <div className="pt-4">
            <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium pt-6">
              Size
            </h3>
            <div className="flex items-center gap-2">
              {/* <!-- single size --> */}
              <div className="size-selector">
                <input type="radio" name="size" className="hidden" id="size-xs" />
                <label
                  htmlFor="size-xs"
                  className="text-xs border border-gray-200 rounded-sm h-6 w-6 flexl items-center justify-center cursor-pointer shadow-sm text-gray-600"
                  >XS</label>
              </div>
              {/* <!-- single size --> */}
              <div className="size-selector">
                <input type="radio" name="size" className="hidden" id="size-s" />
                <label
                  htmlFor="size-s"
                  className="text-xs border border-gray-200 rounded-sm h-6 w-6 flexl items-center justify-center cursor-pointer shadow-sm text-gray-600"
                  >S</label>
              </div>
              {/* <!-- single size --> */}
              <div className="size-selector">
                <input type="radio" name="size" className="hidden" id="size-m" />
                <label
                  htmlFor="size-m"
                  className="text-xs border border-gray-200 rounded-sm h-6 w-6 flexl items-center justify-center cursor-pointer shadow-sm text-gray-600"
                  >M</label>
              </div>
              {/* <!-- single size --> */}
              <div className="size-selector">
                <input type="radio" name="size" className="hidden" id="size-l" />
                <label
                  htmlFor="size-l"
                  className="text-xs border border-gray-200 rounded-sm h-6 w-6 flexl items-center justify-center cursor-pointer shadow-sm text-gray-600"
                  >L</label>
              </div>
              {/* <!-- single size --> */}
              <div className="size-selector">
                <input type="radio" name="size" className="hidden" id="size-xl" />
                <label
                  htmlFor="size-xl"
                  className="text-xs border border-gray-200 rounded-sm h-6 w-6 flexl items-center justify-center cursor-pointer shadow-sm text-gray-600"
                  >XL</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end side bar --> */}

      {/* <!-- product wrapper --> */}
      <div className="col-span-3">
        {/* <!-- sorting --> */}
        <div className="flex items-center mb-4">
          <select
            title="Sorting"
            className="w-44 text-sm text-gray-600 px-4 py-3 border-gray-300 shadow-sm rounded focus:ring-primary focus:border-primary"
          >
            <option>Default sorting</option>
            <option>Price low-high</option>
            <option>Price high-low</option>
            <option>Latest product</option>
          </select>

          <div className="flex gap-2 ml-auto">
            <div
              className="border border-primary w-10 h-9 flex items-center justify-center text-white bg-primary rounded cursor-pointer"
            >
              <i className="fas fa-th"></i>
            </div>
            <div
              className="border border-gray-300 w-10 h-9 flex items-center justify-center text-gray-600 rounded cursor-pointer"
            >
              <i className="fas fa-list"></i>
            </div>
          </div>
        </div>
        {/* <!-- sorting end --> */}

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
              <Link href="/view">
                <h4
                  className="uppercase font-medium font-montserrat text-xl mb-2 text-gray-800 hover:text-primary transition"
                >
                  Baju Perca
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
          {/* <!-- end single produk --> */}

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
              <Link href="/view">
                <h4
                  className="uppercase font-medium font-montserrat text-xl mb-2 text-gray-800 hover:text-primary transition"
                >
                  Baju Perca
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
          {/* <!-- end single produk --> */}

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
              <Link href="/view">
                <h4
                  className="uppercase font-medium font-montserrat text-xl mb-2 text-gray-800 hover:text-primary transition"
                >
                  Baju Perca
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
          {/* <!-- end single produk --> */}

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
              <Link href="/view">
                <h4
                  className="uppercase font-medium font-montserrat text-xl mb-2 text-gray-800 hover:text-primary transition"
                >
                  Baju Perca
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
          {/* <!-- end single produk --> */}

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
              <Link href="/view">
                <h4
                  className="uppercase font-medium font-montserrat text-xl mb-2 text-gray-800 hover:text-primary transition"
                >
                  Baju Perca
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
          {/* <!-- end single produk --> */}

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
              <Link href="/view">
                <h4
                  className="uppercase font-medium font-montserrat text-xl mb-2 text-gray-800 hover:text-primary transition"
                >
                  Baju Perca
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
          {/* <!-- end single produk --> */}

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
              <Link href="/view">
                <h4
                  className="uppercase font-medium font-montserrat text-xl mb-2 text-gray-800 hover:text-primary transition"
                >
                  Baju Perca
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
          {/* <!-- end single produk --> */}

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
              <Link href="/view">
                <h4
                  className="uppercase font-medium font-montserrat text-xl mb-2 text-gray-800 hover:text-primary transition"
                >
                  Baju Perca
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
          {/* <!-- end single produk --> */}
        </div>
        {/* <!-- end produk grid --> */}
      </div>
    </div>
    {/* <!-- end shop wrapper --> */}
    </main>
  )
}
