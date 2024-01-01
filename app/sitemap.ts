import getAllProducts from "@/lib/getAllProducts";
import { Product } from "@/models/Products";

export default async function sitemap() {
  const baseUrl = "https://kampungperca.id/";

  //Get All Post
  const product = await getAllProducts();
  const productUrls =
    product?.map((products: { slug: any }) => {
      return {
        url: `${baseUrl}shop/${products.slug}`,
        lastModified: new Date(),
      };
    }) ?? [];

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: "https://kampungperca.id/shop/",
      lastModified: new Date(),
    },
    {
      url: "https://kampungperca.id/about-us/",
      lastModified: new Date(),
    },
    {
      url: "https://kampungperca.id/sudut-edukasi/",
      lastModified: new Date(),
    },
    ...productUrls,
  ];
}
