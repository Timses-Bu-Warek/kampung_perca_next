import "../styles/globals.css";
import GoogleAnalytics from "@bradgarropy/next-google-analytics";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import Head from "next/head";
import { cookies } from "next/headers";
import Link from "next/link";
import FloatingButton from "./components/FloatingButton";
import Footer from "./footer";
import Header from "./header";
import "../styles/fontawesome-free-6.5.2-web/css/fontawesome.css";
import "../styles/fontawesome-free-6.5.2-web/css/brands.css";
import "../styles/fontawesome-free-6.5.2-web/css/solid.css";
import { serverEnvironment } from "@/lib/env/server";
import WhatsAppFloatingButton from "./components/WhatsAppFloatingButton";
import "react-loading-skeleton/dist/skeleton.css";
// import ReactModal from 'react-modal'

// const inter = Inter({ subsets: ['latin'] })

// Mendefinisikan variabel metadata yang berisi metadata untuk situs web.
export const metadata: Metadata = {
  alternates: {
    canonical: serverEnvironment.BASE_URL,
  },
  description:
    "Kampung Perca adalah desa wisata kampung tematik di Sindangsari, Kota Bogor. Desa ini memproduksi kerajinan unik dari kain perca yang penuh warna, mempromosikan budaya lokal dan kreativitas masyarakat.",
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
  metadataBase: new URL("https://kampungperca.id/"),
  openGraph: {
    title: "Kampung Perca Sindangsari Kota Bogor",
  },
  // instruksi untuk pengindeksan oleh mesin pencari,
  robots: {
    follow: true,
    index: true,
    nocache: true,
  },
  title: {
    default: "Desa Wisata Kampung Perca Kota Bogor",
    template: "%s - Kampung Perca",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookiesBukuTamu = await cookies();
  const isFilled = cookiesBukuTamu.has("isBukuTamu");
  return (
    <>
      <html lang="en">
        <Head>
          <meta
            content="x7_XAorWrs5rebRXh7_DFkCMkj_vERwQnyulU71tNRI"
            name="google-site-verification"
          />
        </Head>
        {/* <Script
            src="https://kit.fontawesome.com/e8fc9e0274.js"
            crossOrigin="anonymous"
          ></Script> */}
        <body>
          <Header />
          {/* {isFilled === true ? "" : <ModalBukuTamu />} */}
          {children}
          <Link href="#">
            <FloatingButton />
          </Link>
          <Link
            href={
              "https://api.whatsapp.com/send/?phone=6285810096563&text=Hai kak, aku mau tanya seputar produk Kampung Perca"
            }
          >
            <WhatsAppFloatingButton />
          </Link>
          <Footer />
          <SpeedInsights />
        </body>
      </html>
      <GoogleAnalytics measurementId="G-SNY7F7KQKF" />
    </>
  );
}
