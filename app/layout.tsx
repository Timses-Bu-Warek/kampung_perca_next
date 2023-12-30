import "../styles/globals.css";
import { Inter } from "next/font/google";
import Head from "next/head";
import Script from "next/script";
import Header from "./header";
import { Metadata } from "next";
import ModalBukuTamu from "./components/ModalBukuTamu";
import FloatingButton from "./components/FloatingButton";
import Link from "next/link";
import { cookies } from "next/headers";
import Footer from "./footer";
import GoogleAnalytics from "@bradgarropy/next-google-analytics";
// import ReactModal from 'react-modal'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: "Kampung Perca Sindangsari Kota Bogor",
    template: "%s - Kampung Perca Sindangsari Kota Bogor",
  },
  description:
    "Menelusuri pesona autentik Kampung Perca Sindangsari. Rasakan keindahan budaya lokal, saksikan tradisi yang memesona, dan nikmati kerajinan tangan yang unik. Temui komunitas ramah dan sambut suasana hidup sehari-hari yang penuh karakter. Jelajahi destinasi wisata istimewa di Kampung Perca Sindangsari, di mana setiap sudutnya memiliki cerita yang menarik.",
};

export let bukuFill: string;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // sessionStorage.setItem("halo", "true")
  const cookiesBukuTamu = cookies();
  let isFilled = cookiesBukuTamu.has("isBukuTamu");
  // if (typeof window !== 'undefined') {
  //   console.log('You are on the browser')
  //   // 👉️ can use localStorage here

  //   isFilled = localStorage.getItem("isiBukuTamu");
  // } else {
  //   console.log('You are on the server')
  //   // 👉️ can't use localStorage
  // }
  // if (typeof window !== 'undefined') {
  //   // Perform localStorage action
  //   // Perform sessionStorage.
  //   sessionStorage.setItem("kunci", "true")
  // }
  // console.log("LocalStorage: " + isFilled)
  return (
    <>
      <html lang="en">
        <meta
          name="google-site-verification"
          content="x7_XAorWrs5rebRXh7_DFkCMkj_vERwQnyulU71tNRI"
        />
        <body>
          <Script
            src="https://static.elfsight.com/platform/platform.js"
            data-use-service-core
            defer
          ></Script>
          <Script
            src="https://kit.fontawesome.com/e8fc9e0274.js"
            crossOrigin="anonymous"
          ></Script>
          <div className="elfsight-app-856283f3-91d0-45b5-bd6a-f60a74918f8f"></div>
          <Header />
          {isFilled === true ? "" : <ModalBukuTamu />}
          {children}
          <Link href="#" passHref>
            <FloatingButton />
          </Link>
          <Footer />
        </body>
      </html>
      <GoogleAnalytics measurementId="G-SNY7F7KQKF" />
    </>
  );
}
