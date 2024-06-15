import DetailedProduct from "./components/DetailedProduct";

// menghasilkan metadata berdasarkan parameter yang diterima dari URL.
export async function generateMetadata({
  params,
}: {
  //menerima objek params yang berisi parameter dari URL,
  params: { NamaProduk: string; Keterangan: string };
}) {
  //nilai dari NamaProduk di-decode dengan menggunakan decodeURIComponent dan mengganti spasi (%20) dengan spasi normal.
  const decodedNamaProduk = decodeURIComponent(
    params.NamaProduk.replace("%20", " ")
  );

  // mengembalikan objek metadata yang terdiri dari title, description, alternates, robots, dan keywords.
  return {
    // Nilai title diisi dengan nilai dari decoded NamaProduk
    title: `${decodedNamaProduk}`,
    description: `Keterangan: ${params.Keterangan}`,
    alternates: {
      canonical: `https://kampungperca.id/shop`,
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
    },
    keywords: [
      "Jual Alas Mangkuk Perca",
      "Jual Appron Perca",
      "Jual Baju Pangsi",
      "Jual Cempal Ayam",
      "Jual Dompet Koin",
      "Jual Gantungan Kunci",
      "Jual Goodie Bag Perca",
      "Jual Masker Perca",
      "Jual Lap tangan",
      "Jual Outer Perca",
      "Jual Rompi Perca",
      "Jual Totopong",
      "Jual Tempat tisu perca",
      "Jual Baju Tidur Perca",
      "Jual Tas Perca",
    ],
  };
}

//merender halaman produk berdasarkan parameter yang diterima dari URL.
export default function DynamicNameProduct({
  params,
}: {
  //menerima props params yang berisi parameter dari URL, khususnya NamaProduk.
  params: { NamaProduk: string };
}) {
  return (
    <main>
      <div>
        {/* merender komponen DetailedProduct, yang bertanggung jawab untuk menampilkan detail produk. */}
        <DetailedProduct />
      </div>
    </main>
  );
}
