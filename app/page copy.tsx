import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="elfsight-app-856283f3-91d0-45b5-bd6a-f60a74918f8f"></div>
      {/* Header */}
      <header className="mb-0 shadow-sm bg-white">
        <div className="container flex items-center justify-between">
          <a href="#">
            <h3
              className="font-montserrat text-secondary w-full font-bold text-xl uppercase py-8"
            >
              Sistem Informasi Kampung Perca
            </h3>
          </a>
        </div>
        {/* Navbar  */}
        <nav className="bg-gray-800">
          <div className="container flex">
            {/* all category */}
            <div
              className="px-8 py-4 bg-primary flex items-center cursor-pointer relative group"
            >
              <span className="text-white">
                <i className="fas fa-bars"></i>
              </span>
              <span className="capitalize ml-2 text-white font-sourceSansPro"
              >All Categories</span
              >
              <div
                className="absolute w-full left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible"
              >
                <a
                  href="#"
                  className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
                >
                  <i className="fa-solid fa-shirt" className="w-5 h-5 object-contain"></i>
                  <span className="ml-6 text-gray-600 text-sm">Shirt</span>
                </a>
                <a
                  href="#"
                  className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
                >
                  <i
                    className="fa-solid fa-bag-shopping"
                    className="w-5 h-5 object-contain"
                  ></i>
                  <span className="ml-6 text-gray-600 text-sm">Bag</span>
                </a>
                <a
                  href="#"
                  className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
                >
                  <i className="fa-solid fa-shirt" className="w-5 h-5 object-contain"></i>
                  <span className="ml-6 text-gray-600 text-sm">Shirt</span>
                </a>
                <a
                  href="#"
                  className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
                >
                  <i className="fa-solid fa-shirt" className="w-5 h-5 object-contain"></i>
                  <span className="ml-6 text-gray-600 text-sm">Shirt</span>
                </a>
                <a
                  href="#"
                  className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
                >
                  <i className="fa-solid fa-shirt" className="w-5 h-5 object-contain"></i>
                  <span className="ml-6 text-gray-600 text-sm">Shirt</span>
                </a>
              </div>
            </div>
            {/* navlink  */}
            <div className="flex items-center justify-between flex-grow pl-12">
              <div className="flex items-center space-x-6 capitalize">
                <a
                  href="/public/index.html"
                  className="text-gray-200 hover:text-primary transition"
                >Home</a
                >
                <a
                  href="/public/shop.html"
                  className="text-gray-200 hover:text-primary transition"
                >Shop</a
                >
                <a
                  href="./about.html"
                  className="text-gray-200 hover:text-primary transition"
                >About Us</a
                >
                <a href="#" className="text-gray-200 hover:text-primary transition"
                >Procedure</a
                >
              </div>
              <div className="w-1/2 h-10 max-w-xl justify-between relative flex">
                <span className="absolute left-4 top-2 text-lg text-gray-400">
                  <i className="fas fa-search"></i>
                </span>
                <input
                  type="text"
                  className="w-full bg-white border border-primary border-r-0 pl-12 rounded-l-md focus:outline-none"
                  placeholder="Cari"
                />
                <button
                  className="bg-primary border border-primary text-secondary px-8 rounded-r-md hover:bg-transparent hover:text-primary transition"
                >
                  Cari
                </button>
              </div>
            </div>
          </div>
        </nav>
        {/*  End navbar */}
      </header>
      {/* End Header  */}

      {/*  Banner  */}
      <div
        className="bg-cover bg-no-repeat bg-center py-36"
        style="background-image: url('/img/bg.jpg')"
      >
        <div className="p-5 text-white z-[2] mt-[-5rem] lg:ml-9">
          <h1 className="text-5xl font-bold mb-4 capitalize font-montserrat">
            SISTEM INFORMASI WISATA KAMPUNG PERCA
          </h1>
          <p className="py-5 text-base max-w-4xl font-inter">
            Kampung Perca Sindangsari, sebuah kampung tematik baru yang
            menambahkan destinasi wisata di kota Bogor dan merupakan binaan
            <a href="https://www.ibik.ac.id/" target="_blank" className="text-primary"
            >Institut Bisnis dan Informatika Kesatuan Bogor.</a
            ><br />
            Berlokasi di Kelurahan Sindangsari Kecamatan Bogor Timur, Kota Bogor
          </p>
          <div className="mt-12">
            <a
              href="/public/shop.html"
              className="bg-primary border border-primary text-white px-8 py-3 font-medium rounded-md hover:bg-transparent hover:text-primary transition font-inter"
            >Shop at Kampung Perca</a
            >
          </div>
        </div>
      </div>
      {/* end Banner  */}

      {/*  features  */}
      <div className="container py-16">
        <div className="w-10/12 grid grid-cols-3 gap-6 mx-auto justify-center">
          <div
            className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5"
          >
            <i className="fa-solid fa-truck" className="w-32 h-32 object-contain"></i>
            <span>
              <h4 className="font-semibold capitalize text-lg">Free Shopping</h4>
              <p className="text-gray-500 text-sx">order over IDR5000</p>
            </span>
          </div>
          <div
            className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5"
          >
            <i
              className="fa-solid fa-hand-holding-dollar"
              className="w-32 h-32 object-contain"
            ></i>
            <span>
              <h4 className="font-semibold capitalize text-lg">Money Returns</h4>
              <p className="text-gray-500 text-sx">30 days money return</p>
            </span>
          </div>
          <div
            className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5"
          >
            <i className="fa-solid fa-clock" className="w-32 h-32 object-contain"></i>
            <span>
              <h4 className="font-semibold capitalize text-lg">24/7 Support</h4>
              <p className="text-gray-500 text-sx">Support Customer</p>
            </span>
          </div>
        </div>
      </div>
      {/* end features  */}

      {/* categories  */}
      <div className="container py-16">
        <h2 className="text-lg font-montserrat text-black mb-6 font-bold">
          Shop by Categories
        </h2>
        <div className="grid grid-cols-3 gap-3">
          <div className="relative rounded-sm overflow-hidden group">
            <img src="/img/baju_categories.jpg" alt="Baju" className="w-full" />
            <a
              href="#"
              className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-lg text-white font-inter group-hover:bg-opacity-60 transition"
            >Baju</a
            >
          </div>
          <div className="relative rounded-sm overflow-hidden group">
            <img src="/img/baju_categories.jpg" alt="Baju" className="w-full" />
            <a
              href="#"
              className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-lg text-white font-inter group-hover:bg-opacity-60 transition"
            >Baju</a
            >
          </div>
          <div className="relative rounded-sm overflow-hidden group">
            <img src="/img/baju_categories.jpg" alt="Baju" className="w-full" />
            <a
              href="#"
              className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-lg text-white font-inter group-hover:bg-opacity-60 transition"
            >Baju</a
            >
          </div>
          <div className="relative rounded-sm overflow-hidden group">
            <img src="/img/baju_categories.jpg" alt="Baju" className="w-full" />
            <a
              href="#"
              className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-lg text-white font-inter group-hover:bg-opacity-60 transition"
            >Baju</a
            >
          </div>
          <div className="relative rounded-sm overflow-hidden group">
            <img src="/img/baju_categories.jpg" alt="Baju" className="w-full" />
            <a
              href="#"
              className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-lg text-white font-inter group-hover:bg-opacity-60 transition"
            >Baju</a
            >
          </div>
          <div className="relative rounded-sm overflow-hidden group">
            <img src="/img/baju_categories.jpg" alt="Baju" className="w-full" />
            <a
              href="#"
              className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-lg text-white font-inter group-hover:bg-opacity-60 transition"
            >Baju</a
            >
          </div>
        </div>
      </div>
      {/*  end categories  */}

      {/*  produk wrapper  */}
      <div className="container pb-16">
        <h2
          className="text-2xl text-gray-800 uppercase mb-6 font-montserrat font-bold"
        >
          New Arrival
        </h2>
        {/*  poduk grid  */}
        <div className="grid grid-cols-4 gap-6">
          {/* single produk  */}
          <div className="bg-white shadow rounded overflow-hidden group">
            {/*  produk image  */}
            <div className="relative">
              <img
                src="/img/Produk/contoh_baju.jpg"
                alt="Baju Perca"
                className="w-full"
              />
              <div
                className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition"
              >
                <a
                  href="#"
                  className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                >
                  <i className="fas fa-search"></i>
                </a>
                <a
                  href="#"
                  className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                >
                  <i className="fas fa-heart"></i>
                </a>
              </div>
            </div>
            {/*  produk image  */}

            {/*  produk konten  */}
            <div className="pt-4 pb-3 px-4">
              <a href="/public/view.html">
                <h4
                  className="uppercase font-medium font-montserrat text-xl mb-2 text-gray-800 hover:text-primary transition"
                >
                  Baju Perca
                </h4>
              </a>
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
            <a
              href="https://api.whatsapp.com/send/?phone=6288973295464&text=Hai kak, aku mau pesan : (isi dengan pesananmu atau screenshot produk)"
              title="Hubungi Saya"
              rel="noopener"
              target="_blank"
              className="block w-full py-1 text-center text-white bg-primary border-primary rounded-b hover:bg-transparent hover:text-primary transition"
            >
              Order</a
            >
            {/*  produk konten  */}
          </div>
          {/*  single produk  */}
          {/*  single produk  */}
          <div className="bg-white shadow rounded overflow-hidden group">
            {/* produk image */}
            <div className="relative">
              <img
                src="/img/Produk/contoh_baju.jpg"
                alt="Baju Perca"
                className="w-full"
              />
              <div
                className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition"
              >
                <a
                  href="#"
                  className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                >
                  <i className="fas fa-search"></i>
                </a>
                <a
                  href="#"
                  className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                >
                  <i className="fas fa-heart"></i>
                </a>
              </div>
            </div>
            {/*  produk image  */}

            {/*  produk konten  */}
            <div className="pt-4 pb-3 px-4">
              <a href="/public/view.html">
                <h4
                  className="uppercase font-medium font-montserrat text-xl mb-2 text-gray-800 hover:text-primary transition"
                >
                  Baju Perca
                </h4>
              </a>
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
            <a
              href="https://api.whatsapp.com/send/?phone=6288973295464&text=Hai kak, aku mau pesan : (isi dengan pesananmu atau screenshot produk)"
              title="Hubungi Saya"
              rel="noopener"
              target="_blank"
              className="block w-full py-1 text-center text-white bg-primary border-primary rounded-b hover:bg-transparent hover:text-primary transition"
            >
              Order</a
            >
            {/*  produk konten  */}
          </div>
          {/*  single produk  */}
          {/*  */}
          <div className="bg-white shadow rounded overflow-hidden group">
            {/* produk image */}
            <div className="relative">
              <img
                src="/img/Produk/contoh_baju.jpg"
                alt="Baju Perca"
                className="w-full"
              />
              <div
                className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition"
              >
                <a
                  href="#"
                  className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                >
                  <i className="fas fa-search"></i>
                </a>
                <a
                  href="#"
                  className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                >
                  <i className="fas fa-heart"></i>
                </a>
              </div>
            </div>
            {/*  produk image  */}

            {/* produk konten  */}
            <div className="pt-4 pb-3 px-4">
              <a href="/public/view.html">
                <h4
                  className="uppercase font-medium font-montserrat text-xl mb-2 text-gray-800 hover:text-primary transition"
                >
                  Baju Perca
                </h4>
              </a>
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
            <a
              href="https://api.whatsapp.com/send/?phone=6288973295464&text=Hai kak, aku mau pesan : (isi dengan pesananmu atau screenshot produk)"
              title="Hubungi Saya"
              rel="noopener"
              target="_blank"
              className="block w-full py-1 text-center text-white bg-primary border-primary rounded-b hover:bg-transparent hover:text-primary transition"
            >
              Order</a
            >
            {/* produk konten  */}
          </div>
          {/*  single produk  */}
          {/*  single produk  */}
          <div className="bg-white shadow rounded overflow-hidden group">
            {/* produk image */}
            <div className="relative">
              <img
                src="/img/Produk/contoh_baju.jpg"
                alt="Baju Perca"
                className="w-full"
              />
              <div
                className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition"
              >
                <a
                  href="#"
                  className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                >
                  <i className="fas fa-search"></i>
                </a>
                <a
                  href="#"
                  className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                >
                  <i className="fas fa-heart"></i>
                </a>
              </div>
            </div>
            {/* produk image  */}

            {/* produk konten  */}
            <div className="pt-4 pb-3 px-4">
              <a href="/public/view.html">
                <h4
                  className="uppercase font-medium font-montserrat text-xl mb-2 text-gray-800 hover:text-primary transition"
                >
                  Baju Perca
                </h4>
              </a>
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
            <a
              href="https://api.whatsapp.com/send/?phone=6288973295464&text=Hai kak, aku mau pesan : (isi dengan pesananmu atau screenshot produk)"
              title="Hubungi Saya"
              rel="noopener"
              target="_blank"
              className="block w-full py-1 text-center text-white bg-primary border-primary rounded-b hover:bg-transparent hover:text-primary transition"
            >
              Order</a
            >
            {/* produk konten  */}
          </div>
          {/*  single produk  */}
        </div>
        {/* end produk grid  */}
      </div>
      {/*  end produk wrapper  */}

      {/*  ads section  */}
      <div className="container pb-16">
        <a href="#">
          <img src="/img/ads.jpg" className="w-full" />
        </a>
      </div>
      {/*  end ads section  */}

      {/*  produk recommended  */}
      <div className="container pb-16">
        <h2
          className="text-2xl text-gray-800 uppercase mb-6 font-montserrat font-bold"
        >
          recommended for you
        </h2>
        {/*  produk grid */}
        <div className="grid grid-cols-4 gap-6">
          {/*  single produk 1 */}
          <div className="bg-white shadow rounded overflow-hidden group">
            {/* produk image */}
            <div className="relative">
              <img
                src="/img/Produk/rekomen.jpg"
                alt="Baju Perca"
                className="w-full"
              />
              <div
                className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition"
              >
                <a
                  href="#"
                  className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                >
                  <i className="fas fa-search"></i>
                </a>
                <a
                  href="#"
                  className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                >
                  <i className="fas fa-heart"></i>
                </a>
              </div>
            </div>
            {/* produk image */}

            {/* produk konten  */}
            <div className="pt-4 pb-3 px-4">
              <a href="/public/view.html">
                <h4
                  className="uppercase font-medium font-montserrat text-xl mb-2 text-gray-800 hover:text-primary transition"
                >
                  Baju Perca
                </h4>
              </a>
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
            <a
              href="https://api.whatsapp.com/send/?phone=6288973295464&text=Hai kak, aku mau pesan : (isi dengan pesananmu atau screenshot produk)"
              title="Hubungi Saya"
              rel="noopener"
              target="_blank"
              className="block w-full py-1 text-center text-white bg-primary border-primary rounded-b hover:bg-transparent hover:text-primary transition"
            >
              Order</a
            >
            {/* produk konten  */}
          </div>
          {/*  end single produk 1 */}

          {/*  single produk 2 */}
          <div className="bg-white shadow rounded overflow-hidden group">
            {/* produk image */}
            <div className="relative">
              <img
                src="/img/Produk/contoh_baju.jpg"
                alt="Baju Perca"
                className="w-full"
              />
              <div
                className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition"
              >
                <a
                  href="#"
                  className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                >
                  <i className="fas fa-search"></i>
                </a>
                <a
                  href="#"
                  className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                >
                  <i className="fas fa-heart"></i>
                </a>
              </div>
            </div>
            {/* produk image */}

            {/* produk konten  */}
            <div className="pt-4 pb-3 px-4">
              <a href="/public/view.html">
                <h4
                  className="uppercase font-medium font-montserrat text-xl mb-2 text-gray-800 hover:text-primary transition"
                >
                  Baju Perca
                </h4>
              </a>
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
            <a
              href="https://api.whatsapp.com/send/?phone=6288973295464&text=Hai kak, aku mau pesan : (isi dengan pesananmu atau screenshot produk)"
              title="Hubungi Saya"
              rel="noopener"
              target="_blank"
              className="block w-full py-1 text-center text-white bg-primary border-primary rounded-b hover:bg-transparent hover:text-primary transition"
            >
              Order</a
            >
            {/* produk konten  */}
          </div>
          {/*  end single produk 2 */}

          {/*  single produk 3 */}
          <div className="bg-white shadow rounded overflow-hidden group">
            {/* produk image */}
            <div className="relative">
              <img
                src="/img/Produk/rekomen.jpg"
                alt="Baju Perca"
                className="w-full"
              />
              <div
                className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition"
              >
                <a
                  href="#"
                  className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                >
                  <i className="fas fa-search"></i>
                </a>
                <a
                  href="#"
                  className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                >
                  <i className="fas fa-heart"></i>
                </a>
              </div>
            </div>
            {/* produk image */}

            {/* produk konten  */}
            <div className="pt-4 pb-3 px-4">
              <a href="/public/view.html">
                <h4
                  className="uppercase font-medium font-montserrat text-xl mb-2 text-gray-800 hover:text-primary transition"
                >
                  Baju Perca
                </h4>
              </a>
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
            <a
              href="https://api.whatsapp.com/send/?phone=6288973295464&text=Hai kak, aku mau pesan : (isi dengan pesananmu atau screenshot produk)"
              title="Hubungi Saya"
              rel="noopener"
              target="_blank"
              className="block w-full py-1 text-center text-white bg-primary border-primary rounded-b hover:bg-transparent hover:text-primary transition"
            >
              Order</a
            >
            {/* produk konten  */}
          </div>
          {/*  end single produk 3 */}

          {/*  single produk 4 */}
          <div className="bg-white shadow rounded overflow-hidden group">
            {/* produk image */}
            <div className="relative">
              <img
                src="/img/Produk/contoh_baju.jpg"
                alt="Baju Perca"
                className="w-full"
              />
              <div
                className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition"
              >
                <a
                  href="#"
                  className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                >
                  <i className="fas fa-search"></i>
                </a>
                <a
                  href="#"
                  className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                >
                  <i className="fas fa-heart"></i>
                </a>
              </div>
            </div>
            {/* produk image */}

            {/* produk konten  */}
            <div className="pt-4 pb-3 px-4">
              <a href="/public/view.html">
                <h4
                  className="uppercase font-medium font-montserrat text-xl mb-2 text-gray-800 hover:text-primary transition"
                >
                  Baju Perca
                </h4>
              </a>
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
            <a
              href="https://api.whatsapp.com/send/?phone=6288973295464&text=Hai kak, aku mau pesan : (isi dengan pesananmu atau screenshot produk)"
              title="Hubungi Saya"
              rel="noopener"
              target="_blank"
              className="block w-full py-1 text-center text-white bg-primary border-primary rounded-b hover:bg-transparent hover:text-primary transition"
            >
              Order</a
            >
            {/* produk konten  */}
          </div>
          {/*  end single produk 4 */}

          {/*  single produk 5 */}
          <div className="bg-white shadow rounded overflow-hidden group">
            {/* produk image */}
            <div className="relative">
              <img
                src="/img/Produk/rekomen.jpg"
                alt="Baju Perca"
                className="w-full"
              />
              <div
                className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition"
              >
                <a
                  href="#"
                  className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                >
                  <i className="fas fa-search"></i>
                </a>
                <a
                  href="#"
                  className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                >
                  <i className="fas fa-heart"></i>
                </a>
              </div>
            </div>
            {/* produk image */}

            {/* produk konten  */}
            <div className="pt-4 pb-3 px-4">
              <a href="/public/view.html">
                <h4
                  className="uppercase font-medium font-montserrat text-xl mb-2 text-gray-800 hover:text-primary transition"
                >
                  Baju Perca
                </h4>
              </a>
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
            <a
              href="https://api.whatsapp.com/send/?phone=6288973295464&text=Hai kak, aku mau pesan : (isi dengan pesananmu atau screenshot produk)"
              title="Hubungi Saya"
              rel="noopener"
              target="_blank"
              className="block w-full py-1 text-center text-white bg-primary border-primary rounded-b hover:bg-transparent hover:text-primary transition"
            >
              Order</a
            >
            {/* produk konten  */}
          </div>
          {/*  end single produk 5 */}

          {/*  single produk 6 */}
          <div className="bg-white shadow rounded overflow-hidden group">
            {/* produk image */}
            <div className="relative">
              <img
                src="/img/Produk/contoh_baju.jpg"
                alt="Baju Perca"
                className="w-full"
              />
              <div
                className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition"
              >
                <a
                  href="#"
                  className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                >
                  <i className="fas fa-search"></i>
                </a>
                <a
                  href="#"
                  className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                >
                  <i className="fas fa-heart"></i>
                </a>
              </div>
            </div>
            {/* produk image */}

            {/* produk konten  */}
            <div className="pt-4 pb-3 px-4">
              <a href="/public/view.html">
                <h4
                  className="uppercase font-medium font-montserrat text-xl mb-2 text-gray-800 hover:text-primary transition"
                >
                  Baju Perca
                </h4>
              </a>
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
            <a
              href="https://api.whatsapp.com/send/?phone=6288973295464&text=Hai kak, aku mau pesan : (isi dengan pesananmu atau screenshot produk)"
              title="Hubungi Saya"
              rel="noopener"
              target="_blank"
              className="block w-full py-1 text-center text-white bg-primary border-primary rounded-b hover:bg-transparent hover:text-primary transition"
            >
              Order</a
            >
            {/* produk konten  */}
          </div>
          {/*  end single produk 6 */}

          {/*  single produk 7 */}
          <div className="bg-white shadow rounded overflow-hidden group">
            {/* produk image */}
            <div className="relative">
              <img
                src="/img/Produk/rekomen.jpg"
                alt="Baju Perca"
                className="w-full"
              />
              <div
                className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition"
              >
                <a
                  href="#"
                  className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                >
                  <i className="fas fa-search"></i>
                </a>
                <a
                  href="#"
                  className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                >
                  <i className="fas fa-heart"></i>
                </a>
              </div>
            </div>
            {/* produk image */}

            {/* produk konten  */}
            <div className="pt-4 pb-3 px-4">
              <a href="/public/view.html">
                <h4
                  className="uppercase font-medium font-montserrat text-xl mb-2 text-gray-800 hover:text-primary transition"
                >
                  Baju Perca
                </h4>
              </a>
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
            <a
              href="https://api.whatsapp.com/send/?phone=6288973295464&text=Hai kak, aku mau pesan : (isi dengan pesananmu atau screenshot produk)"
              title="Hubungi Saya"
              rel="noopener"
              target="_blank"
              className="block w-full py-1 text-center text-white bg-primary border-primary rounded-b hover:bg-transparent hover:text-primary transition"
            >
              Order</a
            >
            {/* produk konten  */}
          </div>
          {/*  end single produk 7 */}

          {/*  single produk 8 */}
          <div className="bg-white shadow rounded overflow-hidden group">
            {/* produk image */}
            <div className="relative">
              <img
                src="/img/Produk/contoh_baju.jpg"
                alt="Baju Perca"
                className="w-full"
              />
              <div
                className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition"
              >
                <a
                  href="#"
                  className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                >
                  <i className="fas fa-search"></i>
                </a>
                <a
                  href="#"
                  className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                >
                  <i className="fas fa-heart"></i>
                </a>
              </div>
            </div>
            {/* produk image */}

            {/* produk konten  */}
            <div className="pt-4 pb-3 px-4">
              <a href="/public/view.html">
                <h4
                  className="uppercase font-medium font-montserrat text-xl mb-2 text-gray-800 hover:text-primary transition"
                >
                  Baju Perca
                </h4>
              </a>
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
            <a
              href="https://api.whatsapp.com/send/?phone=6288973295464&text=Hai kak, aku mau pesan : (isi dengan pesananmu atau screenshot produk)"
              title="Hubungi Saya"
              rel="noopener"
              target="_blank"
              className="block w-full py-1 text-center text-white bg-primary border-primary rounded-b hover:bg-transparent hover:text-primary transition"
            >
              Order</a
            >
            {/* produk konten  */}
          </div>
          {/*  end single produk 8 */}
        </div>
        {/* end produk grid  */}
      </div>
      <!-- end produk recommended -->

      <!-- footer -->

      <!-- end footer -->
    </main>
  )
}
