import type { Metadata } from 'next';
import { Suspense } from 'react';
import Skeleton from 'react-loading-skeleton';
import { serverEnvironment } from '@/lib/env/server';
import getProduct from '@/lib/getProduct';
import type { SearchParameters } from '@/lib/types/search-parameters';
import DetailedProduct from './_components/detailed-product';

// menghasilkan metadata berdasarkan parameter yang diterima dari URL.
export async function generateMetadata({
  params,
}: {
  //menerima objek params yang berisi parameter dari URL,
  params: Promise<{ NamaProduk: string }>;
}): Promise<Metadata> {
  const { NamaProduk } = await params;
  //nilai dari NamaProduk di-decode dengan menggunakan decodeURIComponent dan mengganti spasi (%20) dengan spasi normal.
  const decodedNamaProduk = decodeURIComponent(NamaProduk.replace('%20', ' '));

  const product = await getProduct(NamaProduk);

  // mengembalikan objek metadata yang terdiri dari title, description, alternates, robots, dan keywords.
  return {
    alternates: {
      canonical: `${serverEnvironment.BASE_URL}/shop/${NamaProduk}`,
    },
    description: product?.['description']
      ? `Keterangan: ${product?.['description']}`
      : `Produk ${decodedNamaProduk} tersedia di Kampung Perca. Dapatkan produk berkualitas dengan harga terbaik di sini!`,
    keywords: [
      'Jual Alas Mangkuk Perca',
      'Jual Appron Perca',
      'Jual Baju Pangsi',
      'Jual Cempal Ayam',
      'Jual Dompet Koin',
      'Jual Gantungan Kunci',
      'Jual Goodie Bag Perca',
      'Jual Masker Perca',
      'Jual Lap tangan',
      'Jual Outer Perca',
      'Jual Rompi Perca',
      'Jual Totopong',
      'Jual Tempat tisu perca',
      'Jual Baju Tidur Perca',
      'Jual Tas Perca',
    ],
    robots: {
      follow: true,
      index: true,
      nocache: true,
    },
    // Nilai title diisi dengan nilai dari decoded NamaProduk
    title: `${decodedNamaProduk}`,
  };
}

//merender halaman produk berdasarkan parameter yang diterima dari URL.
export default async function DynamicNameProduct({
  params,
}: Readonly<{
  params: Promise<{ NamaProduk: string }>;
  searchParams: SearchParameters;
}>) {
  const { NamaProduk } = await params;

  const product = await getProduct(NamaProduk);

  return (
    <main>
      <div>
        <Suspense
          fallback={
            <div>
              <Skeleton />
            </div>
          }
        >
          <DetailedProduct product={product} />
        </Suspense>
      </div>
    </main>
  );
}
