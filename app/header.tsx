"use client"

import Link from 'next/link'
import { useState } from 'react';

export default function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    // <header className="mb-0 shadow-sm sticky top-0 bg-transparent z-40">
    <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-white">
    <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
      <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start text-primary">
      <Link
              href="/"
              className="text-center text-lg leading-relaxed inline-block mr-4 py-2 whitespace-nowrap"
              passHref
            ><b>Kampung Perca</b></Link>
        <button
          className="text-primary cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
          type="button"
          title="menuButton"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          <i className="fas fa-bars"></i>
        </button>
      </div>
      <div
        className={
          "lg:flex flex-grow items-center md:space-x-32" +
          (navbarOpen ? " flex" : " hidden")
        }
      >
        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
          <li className="nav-item">
            <Link
              href="/shop"
              className="px-3 py-2font-bold text-primary hover:text-blue-500 transition leading-lg opacity-75"
              passHref
            ><i className="fa fa-shop"></i><span className="ml-2">Shop</span></Link>
          </li>
          <li className="nav-item">
            <Link
                href="/about-us"
                className="px-3 py-2 text-primary hover:text-blue-500 transition leading-lg opacity-75"
                passHref
              ><i className="fa fa-info text-lg leading-lg  opacity-75"></i><span className="ml-2">About Us</span></Link>
          </li>
          <li className="nav-item">
            <Link
                href="/sudut-edukasi"
                className="px-3 py-2 text-primary hover:text-blue-500 transition leading-lg opacity-75"
                passHref
              ><i className="fa fa-chalkboard text-lg leading-lg  opacity-75"></i><span className="ml-2">Sudut Edukasi</span></Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}
