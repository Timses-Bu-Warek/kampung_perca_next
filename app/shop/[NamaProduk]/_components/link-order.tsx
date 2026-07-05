'use client';

import Link from 'next/link';
import { parseAsInteger, parseAsString, useQueryState } from 'nuqs';
import type getProduct from '@/features/product/data-access/get-product';

export function LinkOrder({
  productName,
  product,
}: Readonly<{
  productName: string;
  product: Awaited<ReturnType<typeof getProduct>>;
}>) {
  const [quantity] = useQueryState('quantity', parseAsInteger.withDefault(1));

  const [size] = useQueryState('size', parseAsString.withDefault(''));

  let waAPI: string;
  if (product?.Ukuran) {
    waAPI =
      'https://api.whatsapp.com/send/?phone=6285810096563&text=Hai kak, aku mau pesan : ' +
      quantity +
      ' ' +
      productName +
      ' dengan ukuran ' +
      size;
  } else {
    waAPI =
      'https://api.whatsapp.com/send/?phone=6285810096563&text=Hai kak, aku mau pesan : ' +
      quantity +
      ' ' +
      productName;
  }
  return product?.Ukuran && !size ? (
    <div
      className="flex items-center justify-center w-full gap-2 px-8 py-2 bg-gray-500 cursor-not-allowed font-medium uppercase transition-all border rounded-sm bg-primary md:w-40"
      title="Hubungi Saya"
    >
      <i className="fas fa-shopping-bag"></i>Order
    </div>
  ) : (
    <Link
      className="flex items-center justify-center w-full gap-2 px-8 py-2 font-medium uppercase transition-all border rounded-sm bg-primary md:w-40"
      href={waAPI}
      passHref
      rel="noopener noreferrer"
      target="_blank"
      title="Hubungi Saya"
    >
      <i className="fas fa-shopping-bag"></i>Order
    </Link>
  );
}
