import Link from 'next/link'

export default function Header() {
  return (
    <header className="mb-0 shadow-sm bg-white">
      <nav className="bg-gray-800">
        <div className="container flex-none flex xs:flex-col md:flex-row py-4">
          <div className="flex flex-none text-gray-200 sm:justify-center">
            <Link
              href="/"
              className="text-center"
              passHref
            >Kampung Perca</Link>
          </div>
          <div className="flex xs:flex-col md:flex-row flex-auto justify-end md:space-x-6 capitalize">
            <Link
              href="/shop"
              className="text-gray-200 hover:text-primary transition"
              passHref
            >Shop</Link>
            <Link
              href="/about-us"
              className="text-gray-200 hover:text-primary transition"
              passHref
            >About Us</Link>
            <Link 
              href="/sudut-edukasi" 
              className="text-gray-200 hover:text-primary transition"
              passHref
            >Sudut Edukasi</Link>
          </div>
        </div>
      </nav>
    </header >
  )
}
