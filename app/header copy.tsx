import Link from 'next/link'

export default function Header() {
  return (
    <header className="mb-0 shadow-sm bg-white">
          {/* <div className="container flex items-center justify-between">
            <Link href="#" passHref>
              <div className='py-8'>
                <h3
                  className="font-montserrat text-secondary w-full font-bold text-xl uppercase"
                >
                  Kampung Perca
                </h3>
                <h2
                  className="font-montserrat text-primary w-full font-bold text-xl uppercase"
                >
                  Binaan IBI Kesatuan
                </h2>
              </div>
            </Link>
          </div> */}
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
                >All Categories</span>
                <div
                  className="absolute w-full left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible"
                >
                  <Link
                    href="#"
                    className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
                    passHref
                  >
                    <i className="fa-solid fa-shirt w-5 h-5 object-contain"></i>
                    <span className="ml-6 text-gray-600 text-sm">Shirt</span>
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
                    passHref
                  >
                    <i
                      className="fa-solid fa-bag-shopping w-5 h-5 object-contain"
                    ></i>
                    <span className="ml-6 text-gray-600 text-sm">Bag</span>
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
                    passHref
                  >
                    <i className="fa-solid fa-shirt w-5 h-5 object-contain"></i>
                    <span className="ml-6 text-gray-600 text-sm">Shirt</span>
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
                    passHref
                  >
                    <i className="fa-solid fa-shirt w-5 h-5 object-contain"></i>
                    <span className="ml-6 text-gray-600 text-sm">Shirt</span>
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
                    passHref
                  >
                    <i className="fa-solid fa-shirt w-5 h-5 object-contain"></i>
                    <span className="ml-6 text-gray-600 text-sm">Shirt</span>
                  </Link>
                </div>
              </div>
              {/* navlink  */}
              <div className="flex items-center justify-between flex-grow pl-12">
                <div className="flex items-center space-x-6 capitalize">
                  <Link
                    href="/"
                    className="text-gray-200 hover:text-primary transition"
                  >Home</Link>
                  <Link
                    href="/shop"
                    className="text-gray-200 hover:text-primary transition"
                  >Shop</Link>
                  <Link
                    href="/about-us"
                    className="text-gray-200 hover:text-primary transition"
                  >About Us</Link>
                  <Link href="/sudut-edukasi" className="text-gray-200 hover:text-primary transition"
                  >Sudut Edukasi</Link>
                </div>
                {/* <div className="w-1/2 h-10 max-w-xl justify-between relative flex">
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
                </div> */}
              </div>
            </div>
          </nav>
          {/*  End navbar */}
        </header>
  )
}
