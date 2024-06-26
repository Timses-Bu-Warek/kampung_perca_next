import Image from "next/image";
import Link from "next/link";
// import getAllProducts from "@/lib/getAllProducts";
import getSearchProducts from "@/lib/getSearchProducts";
import ImageContoh from "@/public/img/Produk/contoh_baju.webp";

import CldImage from '@/app/components/CldImage';

export default async function ProductCompSearch({
  params,
}: {
  params: { NamaProduk: string | null; sort: string | null };
}) {
  const productsData: Promise<Products[]> = getSearchProducts(
    params.NamaProduk,
    params.sort
  );

  const products = await productsData;
  // console.log(products);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div
          className="bg-white shadow rounded overflow-hidden group flex justify-between flex-col"
          key={product.ProdukID}
        >
          {/* <!-- produk image --> */}
          <div className="relative">
            {product.FotoProduk ? (
              <CldImage
                width={100}
                height={100}
                src={product.FotoProduk}
                alt={product.NamaProduk}
                className="w-full min-h-[200px]"
              />
              // <Image
              //   src={product.FotoProduk}
              //   alt={product.NamaProduk}
              //   width={100}
              //   height={100}
              //   className="w-full min-h-[200px]"
              // />
            ) : (
              <Image
                src={ImageContoh}
                alt={product.NamaProduk}
                width={100}
                height={100}
                className="w-full min-h-full"
              />
            )}
            {/* {console.log(product.FotoProduk)} */}
            {/* <Image
              src="/img/Produk/contoh_baju.webp"
              alt="Baju Perca"
              width={150}
              height={150}
              className="w-full"
            /> */}
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
              <Link
                href={`/shop/${product.NamaProduk}`}
                className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                passHref
              >
                <i className="fas fa-search"></i>
              </Link>
              {/* <Link
                  href="#"
                  className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                  passHref
                >
                  <i className="fas fa-heart"></i>
                </Link> */}
            </div>
          </div>
          {/* <!-- produk image --> */}

          {/* <!-- produk konten --> */}
          <div className="pt-4 pb-3 px-4">
            <Link href={`/shop/${product.NamaProduk}`} passHref>
              <h4
                className={
                  product.NamaProduk.length <= 8
                    ? `uppercase font-medium font-montserrat text-lg mb-2 text-gray-800 hover:text-primary transition`
                    : product.NamaProduk.length >= 15
                      ? `uppercase font-medium font-montserrat text-base mb-2 text-gray-800 hover:text-primary transition`
                      : `uppercase font-medium font-montserrat text-sm mb-2 text-gray-800 hover:text-primary transition`
                }
              >
                {product.NamaProduk}
              </h4>
            </Link>
            <div className="flex items-baseline mb-1 space-x-2 font-inter">
              <p className="text-lg text-primary font-semibold">
                Rp {Intl.NumberFormat("id-ID").format(product.Harga)}
              </p>
              {/* <p className="text-sm text-gray-400 line-through">
                  Rp. 123.000
                </p> */}
            </div>
            {/* <div className="flex items-center">
                <div className="flex gap-1 text-sm text-yellow-400">
                  <span>
                    <i className="fas fa-star"></i>
                  </span>
                  <span>
                    <i className="fas fa-star"></i>
                  </span>
                  <span>
                    <i className="fas fa-star"></i>
                  </span>
                  <span>
                    <i className="fas fa-star"></i>
                  </span>
                  <span>
                    <i className="fas fa-star"></i>
                  </span>
                </div>
                <div className="text-xs text-gray-500 ml-3">(150)</div>
              </div> */}
          </div>
          <Link
            href={
              "https://api.whatsapp.com/send/?phone=6285810096563&text=Hai kak, aku mau pesan : " +
              product.NamaProduk
            }
            title="Hubungi Saya"
            rel="noopener"
            target="_blank"
            className="block w-full py-1 text-center text-white bg-primary border-primary rounded-b hover:bg-transparent hover:text-primary transition"
          >
            Order
          </Link>
          {/* <!-- produk konten --> */}
        </div>
      ))}
    </div>
  );
}
