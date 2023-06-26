import '../styles/globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Script from 'next/script'
import Header from './header'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata : Metadata = {
  title: 'Kampung Perca',
  description: 'Design Web Kampung Perca oleh Intan Permata Sari dan Michael Mervin Ruswan',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Script
        src="https://static.elfsight.com/platform/platform.js"
        data-use-service-core
        defer
      />
      <Script src="https://kit.fontawesome.com/e8fc9e0274.js" crossOrigin="anonymous"></Script>
      <body>
        <div className="elfsight-app-856283f3-91d0-45b5-bd6a-f60a74918f8f"></div>
        <Header />
        {children}
      </body>
    </html>
  )
}
