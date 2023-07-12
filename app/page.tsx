import Image from 'next/image'
import Background from '../public/img/bg.jpg'
import Baju_Categories from '../public/img/baju_categories.jpg'
import Contoh_Baju from '../public/img/Produk/contoh_baju.jpg'
import Iklan from '../public/img/ads.jpg'
import Rekomendasi from '../public/img/Produk/rekomen.jpg'
import Link from 'next/link'
import ReactModal from 'react-modal'
import ModalBukuTamu from './components/ModalBukuTamu'

export default function Home() {
  // sessionStorage.setItem("halo", "true")
  // let isFilled = "false";
  // if (typeof window !== 'undefined') {
  //   // Perform sessionStorage.
  //   sessionStorage.setItem("kunci", "true")
  // }
  return (
    <main>
      {/*  Banner  */}
      <div
        className="bg-cover bg-no-repeat bg-center py-36"
        style={{ background: "linear-gradient(0deg, rgba(20, 20, 20, 0.6), rgba(20, 20, 20, 0.6)), url(/img/bg-no-overlay.png)", backgroundSize: "cover"  }}
      >
        <div className="p-5 text-white z-[2] mt-[-5rem] lg:ml-9">
          <h1 className="text-5xl font-bold mb-4 capitalize font-montserrat">
            KAMPUNG PERCA
          </h1>
          <p className="py-5 text-base max-w-4xl font-inter">
            Kampung Perca Sindangsari, sebuah kampung tematik baru yang
            menambahkan destinasi wisata di kota Bogor dan merupakan binaan
            <Link href="https://www.ibik.ac.id/" rel="noopener noreferrer" target="_blank" className="text-primary"
            > Institut Bisnis dan Informatika Kesatuan Bogor.</Link>
            <br />
            Berlokasi di Kelurahan Sindangsari Kecamatan Bogor Timur, Kota Bogor
          </p>
          <div className="mt-12">
            <Link
              href="/shop"
              className="bg-primary border border-primary text-white px-8 py-3 font-medium rounded-md hover:bg-transparent hover:text-primary transition font-inter"
            >Shop at Kampung Perca</Link>
          </div>
        </div>
      </div>
      {/* end Banner  */}

      {/*  features  */}
      <div className="container py-16">
        <div className="w-10/12 flex flex-col md:grid md:grid-cols-3 gap-6 mx-auto justify-center">
          <div
            className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5"
          >
            <i className="fa-solid fa-truck object-contain" style={{ fontSize: "2rem" }}></i>
            <span>
              <h4 className="font-semibold capitalize text-lg">Free Shopping</h4>
              <p className="text-gray-500 text-sx">order over IDR5000</p>
            </span>
          </div>
          <div
            className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5"
          >
            <i
              className="fa-solid fa-hand-holding-dollar object-contain" style={{ fontSize: "2rem" }}
            ></i>
            <span>
              <h4 className="font-semibold capitalize text-lg">Money Returns</h4>
              <p className="text-gray-500 text-sx">30 days money return</p>
            </span>
          </div>
          <div
            className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5"
          >
            <i className="fa-solid fa-clock object-contain" style={{ fontSize: "2rem" }}></i>
            <span>
              <h4 className="font-semibold capitalize text-lg">24/7 Support</h4>
              <p className="text-gray-500 text-sx">Support Customer</p>
            </span>
          </div>
        </div>
      </div>
      {/* end features  */}

      {/* categories  */}
      {/* <div className="container py-16">
        <h2 className="text-lg font-montserrat text-black mb-6 font-bold">
          Shop by Categories
        </h2>
        <div className="grid grid-cols-3 gap-3">
          <div className="relative rounded-sm overflow-hidden group">
            <Image src={Baju_Categories} alt="Baju" className="w-full" />
            <Link
              href="#"
              className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-lg text-white font-inter group-hover:bg-opacity-60 transition"
            >Baju</Link>
          </div>
          <div className="relative rounded-sm overflow-hidden group">
            <Image src={Baju_Categories} alt="Baju" className="w-full" />
            <Link
              href="#"
              className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-lg text-white font-inter group-hover:bg-opacity-60 transition"
            >Baju</Link>
          </div>
          <div className="relative rounded-sm overflow-hidden group">
            <Image src={Baju_Categories} alt="Baju" className="w-full" />
            <Link
              href="#"
              className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-lg text-white font-inter group-hover:bg-opacity-60 transition"
            >Baju</Link>
          </div>
          <div className="relative rounded-sm overflow-hidden group">
            <Image src={Baju_Categories} alt="Baju" className="w-full" />
            <Link
              href="#"
              className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-lg text-white font-inter group-hover:bg-opacity-60 transition"
            >Baju</Link>
          </div>
          <div className="relative rounded-sm overflow-hidden group">
            <Image src={Baju_Categories} alt="Baju" className="w-full" />
            <Link
              href="#"
              className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-lg text-white font-inter group-hover:bg-opacity-60 transition"
            >Baju</Link>
          </div>
          <div className="relative rounded-sm overflow-hidden group">
            <Image src={Baju_Categories} alt="Baju" className="w-full" />
            <Link
              href="#"
              className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-lg text-white font-inter group-hover:bg-opacity-60 transition"
            >Baju</Link>
          </div>
        </div>
      </div> */}
      {/*  end categories  */}

      {/*  produk wrapper  */}
      <div className="container pb-16">
        <h2
          className="text-2xl text-gray-800 uppercase mb-6 font-montserrat font-bold"
        >
          New Arrival
        </h2>
        {/*  poduk grid  */}
        <div className="flex flex-col md:grid md:grid-cols-4 gap-6">
          {/* single produk  */}
          <div className="bg-white shadow rounded overflow-hidden group">
            {/*  produk image  */}
            <div className="relative">
              <Image
                src={Contoh_Baju}
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
            {/*  produk image  */}

            {/*  produk konten  */}
            <div className="pt-4 pb-3 px-4">
              <Link href="/view">
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
              href="https://api.whatsapp.com/send/?phone=6288973295464&text=Hai kak, aku mau pesan : (isi dengan pesananmu atau screenshot produk)"
              title="Hubungi Saya"
              rel="noopener"
              target="_blank"
              className="block w-full py-1 text-center text-white bg-primary border-primary rounded-b hover:bg-transparent hover:text-primary transition"
            >
              Order</Link>
            {/*  produk konten  */}
          </div>
          {/*  single produk  */}
        </div>
        {/* end produk grid  */}
      </div>
      {/*  end produk wrapper  */}

      {/*  ads section  */}
      <div className="container pb-16">
        <Link href="#">
          <Image src={Iklan} alt="Iklan" className="w-full" />
        </Link>
      </div>
      {/*  end ads section  */}

      {/*  produk recommended  */}
      <div className="container pb-16">
        <h2
          className="text-2xl text-gray-800 uppercase mb-6 font-montserrat font-bold"
        >
          Recommended for you
        </h2>
        {/*  produk grid */}
        <div className="flex flex-col md:grid md:grid-cols-4 gap-6">
          {/*  single produk 1 */}
          <div className="bg-white shadow rounded overflow-hidden group">
            {/* produk image */}
            <div className="relative">
              <Image
                src={Rekomendasi}
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
            {/* produk image */}

            {/* produk konten  */}
            <div className="pt-4 pb-3 px-4">
              <Link href="/view">
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
              href="https://api.whatsapp.com/send/?phone=6288973295464&text=Hai kak, aku mau pesan : (isi dengan pesananmu atau screenshot produk)"
              title="Hubungi Saya"
              rel="noopener"
              target="_blank"
              className="block w-full py-1 text-center text-white bg-primary border-primary rounded-b hover:bg-transparent hover:text-primary transition"
            >
              Order</Link>
            {/* produk konten  */}
          </div>
          {/*  end single produk 1 */}

          {/*  single produk 2 */}
          <div className="bg-white shadow rounded overflow-hidden group">
            {/* produk image */}
            <div className="relative">
              <Image
                src={Contoh_Baju}
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
            {/* produk image */}

            {/* produk konten  */}
            <div className="pt-4 pb-3 px-4">
              <Link href="/view">
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
              href="https://api.whatsapp.com/send/?phone=6288973295464&text=Hai kak, aku mau pesan : (isi dengan pesananmu atau screenshot produk)"
              title="Hubungi Saya"
              rel="noopener"
              target="_blank"
              className="block w-full py-1 text-center text-white bg-primary border-primary rounded-b hover:bg-transparent hover:text-primary transition"
            >
              Order</Link>
            {/* produk konten  */}
          </div>
          {/*  end single produk 2 */}

          {/*  single produk 3 */}
          <div className="bg-white shadow rounded overflow-hidden group">
            {/* produk image */}
            <div className="relative">
              <Image
                src={Rekomendasi}
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
            {/* produk image */}

            {/* produk konten  */}
            <div className="pt-4 pb-3 px-4">
              <Link href="/view">
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
              href="https://api.whatsapp.com/send/?phone=6288973295464&text=Hai kak, aku mau pesan : (isi dengan pesananmu atau screenshot produk)"
              title="Hubungi Saya"
              rel="noopener"
              target="_blank"
              className="block w-full py-1 text-center text-white bg-primary border-primary rounded-b hover:bg-transparent hover:text-primary transition"
            >
              Order</Link>
            {/* produk konten  */}
          </div>
          {/*  end single produk 3 */}

          {/*  single produk 4 */}
          <div className="bg-white shadow rounded overflow-hidden group">
            {/* produk image */}
            <div className="relative">
              <Image
                src={Contoh_Baju}
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
            {/* produk image */}

            {/* produk konten  */}
            <div className="pt-4 pb-3 px-4">
              <Link href="/view">
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
              href="https://api.whatsapp.com/send/?phone=6288973295464&text=Hai kak, aku mau pesan : (isi dengan pesananmu atau screenshot produk)"
              title="Hubungi Saya"
              rel="noopener"
              target="_blank"
              className="block w-full py-1 text-center text-white bg-primary border-primary rounded-b hover:bg-transparent hover:text-primary transition"
            >
              Order</Link>
            {/* produk konten  */}
          </div>
          {/*  end single produk 4 */}

          {/*  single produk 5 */}
          <div className="bg-white shadow rounded overflow-hidden group">
            {/* produk image */}
            <div className="relative">
              <Image
                src={Rekomendasi}
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
            {/* produk image */}

            {/* produk konten  */}
            <div className="pt-4 pb-3 px-4">
              <Link href="/view">
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
              href="https://api.whatsapp.com/send/?phone=6288973295464&text=Hai kak, aku mau pesan : (isi dengan pesananmu atau screenshot produk)"
              title="Hubungi Saya"
              rel="noopener"
              target="_blank"
              className="block w-full py-1 text-center text-white bg-primary border-primary rounded-b hover:bg-transparent hover:text-primary transition"
            >
              Order</Link>
            {/* produk konten  */}
          </div>
          {/*  end single produk 5 */}

          {/*  single produk 6 */}
          <div className="bg-white shadow rounded overflow-hidden group">
            {/* produk image */}
            <div className="relative">
              <Image
                src={Contoh_Baju}
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
            {/* produk image */}

            {/* produk konten  */}
            <div className="pt-4 pb-3 px-4">
              <Link href="/view">
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
              href="https://api.whatsapp.com/send/?phone=6288973295464&text=Hai kak, aku mau pesan : (isi dengan pesananmu atau screenshot produk)"
              title="Hubungi Saya"
              rel="noopener"
              target="_blank"
              className="block w-full py-1 text-center text-white bg-primary border-primary rounded-b hover:bg-transparent hover:text-primary transition"
            >
              Order</Link>
            {/* produk konten  */}
          </div>
          {/*  end single produk 6 */}

          {/*  single produk 7 */}
          <div className="bg-white shadow rounded overflow-hidden group">
            {/* produk image */}
            <div className="relative">
              <Image
                src={Rekomendasi}
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
            {/* produk image */}

            {/* produk konten  */}
            <div className="pt-4 pb-3 px-4">
              <Link href="/view">
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
              href="https://api.whatsapp.com/send/?phone=6288973295464&text=Hai kak, aku mau pesan : (isi dengan pesananmu atau screenshot produk)"
              title="Hubungi Saya"
              rel="noopener"
              target="_blank"
              className="block w-full py-1 text-center text-white bg-primary border-primary rounded-b hover:bg-transparent hover:text-primary transition"
            >
              Order</Link>
            {/* produk konten  */}
          </div>
          {/*  end single produk 7 */}

          {/*  single produk 8 */}
          <div className="bg-white shadow rounded overflow-hidden group">
            {/* produk image */}
            <div className="relative">
              <Image
                src={Contoh_Baju}
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
            {/* produk image */}

            {/* produk konten  */}
            <div className="pt-4 pb-3 px-4">
              <Link href="/view">
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
              href="https://api.whatsapp.com/send/?phone=6288973295464&text=Hai kak, aku mau pesan : (isi dengan pesananmu atau screenshot produk)"
              title="Hubungi Saya"
              rel="noopener noreferrer"
              target="_blank"
              className="block w-full py-1 text-center text-white bg-primary border-primary rounded-b hover:bg-transparent hover:text-primary transition"
            >
              Order</Link>
            {/* produk konten  */}
          </div>
          {/*  end single produk 8 */}
        </div>
        {/* end produk grid  */}
      </div>
      {/* <!-- end produk recommended --> */}

      {/* <!-- footer --> */}

      {/* <!-- end footer --> */}

    </main>
  )
}
