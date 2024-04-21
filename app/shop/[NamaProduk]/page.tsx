import DetailedProduct from "./components/DetailedProduct";

export async function generateMetadata({
  params,
}: {
  params: { NamaProduk: string; Keterangan: string };
}) {
  const decodedNamaProduk = decodeURIComponent(
    params.NamaProduk.replace("%20", " ")
  );

  return {
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

export default function DynamicNameProduct({
  params,
}: {
  params: { NamaProduk: string };
}) {
  return (
    <main>
      <div>
        <DetailedProduct />
      </div>
    </main>
  );
}
