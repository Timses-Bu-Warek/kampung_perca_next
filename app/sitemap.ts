import { serverEnvironment } from '@/lib/env/server';
import getAllProducts from '@/lib/getAllProducts';

export default async function sitemap() {
  const baseUrl =
    process.env.NODE_ENV === 'production' ? serverEnvironment.BASE_URL : 'http://localhost:3000';

  //Get All Post
  const product = await getAllProducts();
  const productUrls =
    product?.map((products) => {
      return {
        lastModified: new Date(),
        url: `${baseUrl}/shop/${products?.['NamaProduk']}`,
      };
    }) ?? [];

  return [
    {
      lastModified: new Date(),
      url: baseUrl,
    },
    {
      lastModified: new Date(),
      url: `${baseUrl}/shop`,
    },
    {
      lastModified: new Date(),
      url: `${baseUrl}/about-us`,
    },
    {
      lastModified: new Date(),
      url: `${baseUrl}/sudut-edukasi`,
    },
    {
      lastModified: new Date(),
      url: `${baseUrl}/sudut-edukasi/potensi-kain-perca`,
    },
    {
      lastModified: new Date(),
      url: `${baseUrl}/sudut-edukasi/dampak-positif-kain-perca`,
    },
    {
      lastModified: new Date(),
      url: `${baseUrl}/sudut-edukasi/manfaat-kain-perca`,
    },
    ...productUrls,
  ];
}
