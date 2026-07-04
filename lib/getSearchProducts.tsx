import { serverEnvironment } from "./env/server";

export default async function getSearchProducts(
  namaProdukParams: string | null,
  sortParams: string | null,
) {
  // const { searchParams } = new URL(request.url);
  // const nama = searchParams.get("NamaProduk")
  if (namaProdukParams && !sortParams) {
    const res = await fetch(
      `${serverEnvironment.BASE_URL}/api/shop/search?NamaProduk=${namaProdukParams}`,
    );
    return responseJSON(res);
  } else if (namaProdukParams && sortParams) {
    const res = await fetch(
      `${serverEnvironment.BASE_URL}/api/shop/search?NamaProduk=${namaProdukParams}&sort=${sortParams}`,
    );
    return responseJSON(res);
  } else if (!namaProdukParams && sortParams) {
    const res = await fetch(
      `${serverEnvironment.BASE_URL}/api/shop/search?sort=${sortParams}`,
    );
    return responseJSON(res);
  }
}

export async function responseJSON(res: Response) {
  const products = await res.json();
  if (!res.ok) throw new Error("Failed to fetch products data");
  return products;
}
