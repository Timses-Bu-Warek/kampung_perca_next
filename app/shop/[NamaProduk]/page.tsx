import { Suspense } from 'react';
import Skeleton from 'react-loading-skeleton';
import { serverEnvironment } from '@/lib/env/server';
import getProduct from '@/lib/getProduct';
import DetailedProduct from './components/DetailedProduct';

// menghasilkan metadata berdasarkan parameter yang diterima dari URL.
export async function generateMetadata({
  params,
}: {
  //menerima objek params yang berisi parameter dari URL,
  params: { NamaProduk: string; Keterangan: string };
}) {
  //nilai dari NamaProduk di-decode dengan menggunakan decodeURIComponent dan mengganti spasi (%20) dengan spasi normal.
  const decodedNamaProduk = decodeURIComponent(params.NamaProduk.replace('%20', ' '));

  // mengembalikan objek metadata yang terdiri dari title, description, alternates, robots, dan keywords.
  return {
    alternates: {
      canonical: `${serverEnvironment.BASE_URL}/shop/${params.NamaProduk}`,
    },
    description: `Keterangan: ${params.Keterangan}`,
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
}>) {
  const { NamaProduk } = await params;

  const productPromise = getProduct(NamaProduk);

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
          <DetailedProduct productName={NamaProduk} productPromise={productPromise} />
        </Suspense>
      </div>
    </main>
  );
}
