import getAllProducts from "@/lib/getAllProducts";

export default async function sitemap() {
  const baseUrl =
    process.env.NODE_ENV === "production"
      ? "https://kampungperca.id/"
      : "http://localhost:3000/";

  //Get All Post
  const product = await getAllProducts();
  console.log(product);
  const productUrls =
    product?.map((products: { NamaProduk: any }) => {
      return {
        url: `${baseUrl}shop/${products.NamaProduk}`,
        lastModified: new Date(),
      };
    }) ?? [];

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
      url: "https://www.kampungperca.id/sudut-edukasi/potensi-kain-perca",
      lastModified: new Date(),
    },
    {
      url: "https://www.kampungperca.id/sudut-edukasi/dampak-positif-kain-perca",
      lastModified: new Date(),
    },
    {
      url: "https://www.kampungperca.id/sudut-edukasi/manfaat-kain-perca",
      lastModified: new Date(),
    },
    ...productUrls,
  ];
}
