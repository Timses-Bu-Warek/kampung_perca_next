import '../styles/globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Design Web Kampung Perca',
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
      <body className={inter.className}>{children}</body>
    </html>
  )
}
