import Link from 'next/link'

export default function Header() {
  return (
    // <header className="mb-0 shadow-sm sticky top-0 bg-transparent z-40">
    <header className="mb-0 shadow-sm">
      {/* <nav className="bg-gray"> */}
      <nav className="bg-transparent">
        <div className="container flex-none flex xs:flex-col md:flex-row py-4">
          <div className="flex flex-none text-sky-500 sm:justify-center bg-white">
            <Link
              href="/"
              className="text-center"
              passHref
            ><b>Kampung Perca</b></Link>
          </div>
          <div className="flex xs:flex-col md:flex-row flex-auto justify-end md:space-x-6 capitalize bg-white">
            <Link
              href="/shop"
              className="text-sky-500 hover:text-primary transition"
              passHref
            ><b>Shop</b></Link>
            <Link
              href="/about-us"
              className="text-sky-500 hover:text-primary transition"
              passHref
            ><b>About Us</b></Link>
            <Link 
              href="/sudut-edukasi" 
              className="text-sky-500 hover:text-primary transition"
              passHref
            ><b>Sudut Edukasi</b></Link>
          </div>
        </div>
      </nav>
    </header >
  )
}
