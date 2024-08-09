import Image from "next/image";
import Link from "next/link";
import getNewProductRec from "@/lib/getNewProductRec";
import ImageContoh from "@/public/img/Produk/contoh_baju.webp";
import { v2 as cloudinary } from "cloudinary";
import CldImage from "@/app/components/CldImage";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export default async function NewArrivalComp() {
  const recData: Promise<Products[]> = getNewProductRec();

  const recProducts = await recData;
  // console.log(products);

  return (
    <div className="flex flex-col gap-6 md:grid md:grid-cols-4">
      {recProducts.map((product) => (
        <div
          className="flex flex-col justify-between overflow-hidden bg-white rounded shadow group"
          key={product.ProdukID}
        >
          {/* <!-- produk image --> */}
          <div className="relative">
            {product.FotoProduk ? (
              <CldImage
                width={0}
                height={0}
                sizes="100vw"
                src={product.FotoProduk}
                alt={product.NamaProduk}
                className="w-full h-80 object-cover"
              />
            ) : (
              // <Image
              //   src={product.FotoProduk}
              //   alt={product.NamaProduk}
              //   width={100}
              //   height={100}
              //   className="w-full min-h-[200px]"
              // />
              <Image
                src={ImageContoh}
                alt={product.NamaProduk}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-80 object-cover"
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
            <div className="absolute inset-0 flex items-center justify-center gap-2 transition bg-black opacity-0 bg-opacity-40 group-hover:opacity-100">
              <Link
                href={`/shop/${product.NamaProduk}`}
                className="flex items-center justify-center h-8 text-lg text-white transition rounded-full w-9 bg-primary hover:bg-gray-800"
                passHref
              >
                <i className="fas fa-search"></i>
              </Link>
              {/* <Link
                  href="#"
                  className="flex items-center justify-center h-8 text-lg text-white transition rounded-full w-9 bg-primary hover:bg-gray-800"
                  passHref
                >
                  <i className="fas fa-heart"></i>
                </Link> */}
            </div>
          </div>
          {/* <!-- produk image --> */}

          {/* <!-- produk konten --> */}
          <div className="">
            <div className="px-4 pt-4 pb-3">
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
                <p className="text-lg font-semibold text-primary">
                  Rp {Intl.NumberFormat("id-ID").format(product.Harga)}
                </p>
                {/* <p className="text-sm text-gray-400 line-through">
                  Rp. 123.000
                </p> */}
              </div>
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
                <div className="ml-3 text-xs text-gray-500">(150)</div>
              </div> */}
            <Link
              href={
                "https://api.whatsapp.com/send/?phone=6285810096563&text=Hai kak, aku mau pesan : " +
                product.NamaProduk
              }
              title="Hubungi Saya"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-1 text-center text-white transition rounded-b bg-primary border-primary hover:bg-transparent hover:text-primary"
            >
              Order
            </Link>
          </div>
          {/* <!-- produk konten --> */}
        </div>
      ))}
    </div>
  );
}
