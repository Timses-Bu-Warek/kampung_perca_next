import getAllProducts from "@/lib/getAllProducts";

export default async function sitemap() {
  const baseUrl = "https://kampungperca.id/";

  //Get All Post
  // const product = await getAllProducts();
  // const productUrls =
  //   product?.map((products: { slug: any }) => {
  //     return {
  //       url: `${baseUrl}shop/${products.slug}`,
  //       lastModified: new Date(),
  //     };
  //   }) ?? [];

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: "https://kampungperca.id/shop",
      lastModified: new Date(),
    },
    {
      url: "https://kampungperca.id/about-us",
      lastModified: new Date(),
    },
    {
      url: "https://kampungperca.id/sudut-edukasi",
      lastModified: new Date(),
    },
    {
      url: "https://www.kampungperca.id/shop/Sarung%20Bantal%20Kursi",
      lastModified: new Date(),
    },
    {
      url: "https://www.kampungperca.id/shop/Tas%20Ketupat",
      lastModified: new Date(),
    },
    {
      url: "https://www.kampungperca.id/shop/Tas%20Samping",
      lastModified: new Date(),
    },
    {
      url: "https://www.kampungperca.id/shop/Tas%20Selempang",
      lastModified: new Date(),
    },
    {
      url: "https://www.kampungperca.id/shop/Baju%20Anak%20Perempuan",
      lastModified: new Date(),
    },
    {
      url: "https://www.kampungperca.id/shop/Baju%20Tidur%20Perempuan",
      lastModified: new Date(),
    },
    {
      url: "https://www.kampungperca.id/shop/Apron%20Grade%20A",
      lastModified: new Date(),
    },
    {
      url: "https://www.kampungperca.id/shop/Rompi",
      lastModified: new Date(),
    },
    {
      url: "https://www.kampungperca.id/shop/search?sort=default",
      lastModified: new Date(),
    },
    {
      url: "https://www.kampungperca.id/shop/search?sort=lowHigh",
      lastModified: new Date(),
    },
    {
      url: "https://www.kampungperca.id/shop/search?sort=highLow",
      lastModified: new Date(),
    },
    {
      url: "https://www.kampungperca.id/shop/Alas%20Mangkuk%20Besar",
      lastModified: new Date(),
    },
    {
      url: "https://www.kampungperca.id/shop/Alas%20Mangkuk%20Kecil",
      lastModified: new Date(),
    },
    {
      url: "https://www.kampungperca.id/shop/Apron%20Grade%20B",
      lastModified: new Date(),
    },
    {
      url: "https://www.kampungperca.id/shop/Apron%20Grade%20C",
      lastModified: new Date(),
    },
    {
      url: "https://www.kampungperca.id/shop/Baju%20Pangsi",
      lastModified: new Date(),
    },
    {
      url: "https://www.kampungperca.id/shop/Baju%20Pangsi%20Besar",
      lastModified: new Date(),
    },
    {
      url: "https://www.kampungperca.id/shop/Bantal%20Duduk",
      lastModified: new Date(),
    },
    {
      url: "https://www.kampungperca.id/shop/Bantal%20Kursi",
      lastModified: new Date(),
    },
    {
      url: "https://www.kampungperca.id/shop/Blouse",
      lastModified: new Date(),
    },
    {
      url: "https://www.kampungperca.id/shop/Celana%20Kulot",
      lastModified: new Date(),
    },
    {
      url: "https://www.kampungperca.id/shop/Cempal%20Ayam",
      lastModified: new Date(),
    },
    {
      url: "https://www.kampungperca.id/shop/Daster",
      lastModified: new Date(),
    },
    {
      url: "https://www.kampungperca.id/shop/Dompet%20Koin",
      lastModified: new Date(),
    },
    {
      url: "https://www.kampungperca.id/shop/Gantungan%20Kunci",
      lastModified: new Date(),
    },
    {
      url: "https://www.kampungperca.id/shop/Goodie%20Bag%20Ritsleting",
      lastModified: new Date(),
    },
    {
      url: "https://www.kampungperca.id/shop/Ikat%20Rambut",
      lastModified: new Date(),
    },
    {
      url: "https://www.kampungperca.id/shop/Keset%20Kotak",
      lastModified: new Date(),
    },
    {
      url: "https://www.kampungperca.id/shop/Keset%20Love",
      lastModified: new Date(),
    },
    {
      url: "https://www.kampungperca.id/shop/Lap%20Tangan",
      lastModified: new Date(),
    },
    {
      url: "https://www.kampungperca.id/shop/Masker",
      lastModified: new Date(),
    },
    {
      url: "https://www.kampungperca.id/shop/Notebook%20A5",
      lastModified: new Date(),
    },
    {
      url: "https://www.kampungperca.id/shop/Outer%20Pendek",
      lastModified: new Date(),
    },
    {
      url: "https://www.kampungperca.id/shop/Outer%20Pendek%20Besar",
      lastModified: new Date(),
    },
    {
      url: "https://www.kampungperca.id/shop/Pouch%20Besar",
      lastModified: new Date(),
    },
    {
      url: "https://www.kampungperca.id/shop/Pouch%20Kecil",
      lastModified: new Date(),
    },
    {
      url: "https://www.kampungperca.id/shop/Rok",
      lastModified: new Date(),
    },
    {
      url: "https://www.kampungperca.id/shop/Rok",
      lastModified: new Date(),
    },
    {
      url: "https://www.kampungperca.id/shop/Sajadah%20Muka",
      lastModified: new Date(),
    },
    {
      url: "https://www.kampungperca.id/shop/Sajadah%20Muka",
      lastModified: new Date(),
    },
    {
      url: "https://www.kampungperca.id/shop/Sapu%20Tebah",
      lastModified: new Date(),
    },
    {
      url: "https://www.kampungperca.id/shop/Taplak%20Meja",
      lastModified: new Date(),
    },
    {
      url: "https://www.kampungperca.id/shop/Tas%20HP%20Besar",
      lastModified: new Date(),
    },
    {
      url: "https://www.kampungperca.id/shop/Tas%20HP%20Kecil",
      lastModified: new Date(),
    },
    {
      url: "https://www.kampungperca.id/shop/Tas%20Ngaji",
      lastModified: new Date(),
    },
    {
      url: "https://www.kampungperca.id/shop/Tempat%20Jarum",
      lastModified: new Date(),
    },
    {
      url: "https://www.kampungperca.id/shop/Tempat%20Pensil",
      lastModified: new Date(),
    },
    {
      url: "https://www.kampungperca.id/shop/Tempat%20Tisu%20Besar",
      lastModified: new Date(),
    },
    {
      url: "https://www.kampungperca.id/shop/Tempat%20Tisu%20Kecil",
      lastModified: new Date(),
    },
    {
      url: "https://www.kampungperca.id/shop/Tote%20Bag",
      lastModified: new Date(),
    },
    {
      url: "https://www.kampungperca.id/shop/Totopong",
      lastModified: new Date(),
    },
    // ...productUrls,
  ];
}
