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
import { SpeedInsights } from "@vercel/speed-insights/next";
import '../styles/fontawesome-free-6.5.2-web/css/fontawesome.css';
import '../styles/fontawesome-free-6.5.2-web/css/brands.css';
import '../styles/fontawesome-free-6.5.2-web/css/solid.css';
// import ReactModal from 'react-modal'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL("https://kampungperca.id/"),
  title: {
    default: "Desa Wisata Kampung Perca Kota Bogor",
    template: "%s - Kampung Perca",
  },
  openGraph: {
    title: "Kampung Perca Sindangsari Kota Bogor",
  },
  description:
    "Website Resmi Kampung Perca Sindangsari, Desa Wisata di Kota Bogor, menghasilkan oleh-oleh khas dengan memanfaatkan kain perca. Inisiatif Pemerintah Kota Bogor untuk memajukan kampung tematik.",
  alternates: {
    canonical: `https://kampungperca.id/`,
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
  keywords: [
    "Kampung Perca",
    "kerajinan dari kain",
    "kerajinan dari kain perca",
    "kerajinan kain perca",
    "barang dari kain perca",
    "contoh kerajinan dari kain",
    "contoh kerajinan dari kain perca",
    "contoh kerajinan kain perca",
    "gambar kerajinan kain perca",
    "kain perca kerajinan",
    "kerajinan dari bahan kain perca",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookiesBukuTamu = cookies();
  let isFilled = cookiesBukuTamu.has("isBukuTamu");
  return (
    <>
      <html lang="en">
        <head>
          <meta
            name="google-site-verification"
            content="x7_XAorWrs5rebRXh7_DFkCMkj_vERwQnyulU71tNRI"
          />
          <Script
            src="https://static.elfsight.com/platform/platform.js"
            data-use-service-core
            defer
          ></Script>
          {/* <Script
            src="https://kit.fontawesome.com/e8fc9e0274.js"
            crossOrigin="anonymous"
          ></Script> */}
        </head>
        <body>
          <div className="elfsight-app-856283f3-91d0-45b5-bd6a-f60a74918f8f"></div>
          <Header />
          {/* {isFilled === true ? "" : <ModalBukuTamu />} */}
          {children}
          <Link href="#" passHref>
            <FloatingButton />
          </Link>
          <Footer />
          <SpeedInsights />
        </body>
      </html>
      <GoogleAnalytics measurementId="G-SNY7F7KQKF" />
    </>
  );
}
