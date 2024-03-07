import DetailedProduct from "./components/DetailedProduct";

export async function generateMetadata({
  params,
}: {
  params: { NamaProduk: string; Keterangan: string };
}) {
  const decodedNamaProduk = decodeURIComponent(
    params.NamaProduk.replace("%20", " ")
  );

  // const decodedKeterangan = decodeURIComponent(
  //   params.Keterangan.replace("%20", " ")
  // );

  return {
    title: `${decodedNamaProduk}`,
    description: `Keterangan: ${params.Keterangan}`,
    alternates: {
      canonical: `/shop/${decodedNamaProduk}`,
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
    },
    keywords: [
      "Jual Alas Mangkuk Perca",
      "Jual Appron Perca",
      "Jual Baju Anak Perca",
      "Jual Baju Pangsi",
      "Jual Baju Tidur Perca",
      "Jual Bantal Duduk",
      "Jual Bantal Kursi",
      "Jual Blouse Perca",
      "Jual Cempal Ayam",
      "Jual Daster",
      "Jual Dompet Koin",
      "Jual Gantungan Kunci",
      "Jual Goodie Bag Perca",
      "Jual Ikat Rambut",
      "Jual Keset Bentuk",
      "Jual Masker Perca",
      "Jual Lap tangan",
      "Jual Outer Perca",
      "Jual Pouch",
      "Jual Rok Perca",
      "Jual Rompi Perca",
      "Jual Baju Tidur Perca",
      "Jual Totopong",
      "Jual Notebook",
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
