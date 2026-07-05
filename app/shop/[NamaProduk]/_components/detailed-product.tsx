import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumbs from '@/app/_components/breadcrumbs';
import CldImage from '@/app/_components/cloudinary/cld-image';
import type getProduct from '@/features/product/data-access/get-product';
import ImageContoh from '@/public/img/Produk/contoh_baju.webp';
import { LinkOrder } from './link-order';
import QuantityComp from './quantity-comp';
import SizeComp from './size-comp';

export default function DetailedProduct({
  product,
}: Readonly<{
  product: Awaited<ReturnType<typeof getProduct>>;
}>) {
  if (!product)
    return (
      <div>
        <Skeleton />
      </div>
    );

  // const productsData: Promise<Products> = getProduct(NamaProduk);
  // const detailedProduct = useSWR(productsData);
  // const detailedProduct = await productsData;
  // console.log(detailedProduct);
  return (
    <main>
      {/* <!-- breadcrums --> */}
      <div className="container flex items-center gap-4 py-4">
        <Breadcrumbs
          params={{
            slug: product.NamaProduk,
          }}
        />
      </div>
      {/* <!-- end breadcrums --> */}

      {/* <!-- product view --> */}
      <div className="container flex flex-col gap-6 md:grid md:grid-cols-4">
        <div className="md:col-span-2">
          {product.FotoProduk ? (
            <CldImage
              alt={product.NamaProduk}
              className="w-full min-h-[200px]"
              height={500}
              loading="lazy"
              src={product.FotoProduk}
              width={500}
            />
          ) : (
            // <Image
            //   src={data.FotoProduk}
            //   width={500}
            //   height={500}
            //   sizes="100vw"
            //   className="w-full h-auto"
            //   alt={data.NamaProduk}
            // />
            <Image
              alt="Contoh Produk"
              className="w-full h-auto"
              height={500}
              loading="lazy"
              sizes="100vw"
              src={ImageContoh}
              width={500}
            />
          )}
          {/* <div className="grid grid-cols-5 gap-4 mt-4">
                        <img
                            src="/img/Produk/rekomen.webp"
                            className="w-full border cursor-pointer border-primary"
                            alt="Rekomen"
                        />
                        <img
                            src="/img/Produk/rekomen.webp"
                            className="w-full border cursor-pointer"
                            alt="Rekomen"
                        />
                        <img
                            src="/img/Produk/rekomen.webp"
                            className="w-full border cursor-pointer"
                            alt="Rekomen"
                        />
                        <img
                            src="/img/Produk/rekomen.webp"
                            className="w-full border cursor-pointer"
                            alt="Rekomen"
                        />
                        <img
                            src="/img/Produk/rekomen.webp"
                            className="w-full border cursor-pointer"
                            alt="Rekomen"
                        />
                    </div> */}
        </div>
        {/* <!-- produk konten --> */}
        <div className="md:col-span-2">
          <h2 className="mb-2 text-3xl font-semibold uppercase font-montserrat">
            {product.NamaProduk}
          </h2>
          {/* <div className="flex items-center mb-3">
                        <div className="flex gap-1 text-sm text-yellow-400">
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                        </div>
                        <div className="ml-3 text-sm text-gray-500">(70 Reviews)</div>
                    </div> */}
          <div className="space-y-2">
            <p className="space-x-2 font-semibold text-gray-800 font-inter">
              <span>Avilability : </span>
              {product.FotoProduk ? (
                <span className="text-green-600">In Stock</span>
              ) : (
                <span className="text-red-600">Out of Stock</span>
              )}
            </p>
            <p className="space-x-2 font-semibold text-gray-800 font-inter">
              <span>Brands : </span>
              <span className="text-gray-600">Perca Has</span>
            </p>
            <p className="space-x-2 font-semibold text-gray-800 font-inter">
              <span>Category : </span>
              <span className="text-gray-600">{product.Kategori}</span>
            </p>
          </div>
          <div className="flex items-baseline mt-4 mb-1 space-x-2 font-inter">
            <p className="text-xl font-semibold text-primary">
              Rp {Intl.NumberFormat('id-ID').format(product.Harga)}
            </p>
            {/* <p className="text-base text-gray-400 line-through">Rp. 123.000</p> */}
          </div>
          <p className="mt-4 text-gray-600">{product.Keterangan}</p>
          <div className="grid grid-cols-2 md:block">
            {/* <!-- size --> */}
            {product.Ukuran ? <SizeComp sizeList={product.Ukuran} /> : ''}
            {/* <!-- end size --> */}

            {/* <!-- quantity --> */}
            <QuantityComp />
            {/* <!-- end quantity --> */}
          </div>

          {/* <!-- cart button --> */}
          <div className="flex gap-3 pb-5 mt-6 text-center border-b border-gray-200">
            <LinkOrder product={product} productName={product.NamaProduk} />
            {/* <Link
                            href="#"
                            className="flex items-center gap-2 px-8 py-2 font-medium text-gray-600 uppercase transition border border-gray-300 rounded-sm font-inter hover:text-primary"
                            passHref
                        >
                            <i className="fas fa-heart"></i>like
                        </Link> */}
          </div>
          {/* <!-- end cart button --> */}

          {/* <!-- social share --> */}
          <div className="flex gap-3 mt-4">
            <span>
              <p className="flex items-center justify-center text-gray-400">Find Us</p>
            </span>
            <span>
              <Link
                className="w-8 h-8 hover:text-gray-500"
                href="https://www.instagram.com/kampungperca_kotabogor/"
                passHref
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fab fa-instagram"></i>{' '}
              </Link>
            </span>
          </div>
          {/* <!-- end social share --> */}
        </div>
        {/* <!-- end produk konten --> */}
      </div>
      {/* <!-- end product view --> */}

      {/* <!-- produk detail --> */}
      <div className="container pb-16">
        <h3 className="pt-6 pb-3 font-medium text-gray-800 border-b border-gray-200 font-montserrat">
          Product Detail
        </h3>
        <div className="w-3/5 pt-4">
          <div className="space-y-3 text-gray-600">{product.Keterangan}</div>
          {/* <!-- table detail --> */}
          {/* <table
                        className="mt-6 text-sm text-left text-gray-600 border-collapse table-auto"
                    >
                        <tbody>
                            <tr>
                                <td
                                    className="w-40 px-4 py-2 font-medium border border-gray-300 font-inter"
                                >
                                    Weight
                                </td>
                                <td className="px-4 py-2 border border-gray-300">55 Kg</td>
                            </tr>
                            <tr>
                                <td
                                    className="w-40 px-4 py-2 font-medium border border-gray-300 font-inter"
                                >
                                    Weight
                                </td>
                                <td className="px-4 py-2 border border-gray-300">55 Kg</td>
                            </tr>
                            <tr>
                                <td
                                    className="w-40 px-4 py-2 font-medium border border-gray-300 font-inter"
                                >
                                    Weight
                                </td>
                                <td className="px-4 py-2 border border-gray-300">55 Kg</td>
                            </tr>
                        </tbody>
                    </table> */}
          {/* <!-- end table detail --> */}
        </div>
      </div>
      {/* <!-- end produk detail --> */}

      {/* <!-- produk wrapper --> */}
      {/* <!-- end produk wrapper --> */}
    </main>
  );
}
