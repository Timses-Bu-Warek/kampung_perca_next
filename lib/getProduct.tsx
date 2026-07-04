import { serverEnvironment } from "./env/server";

export default async function getProduct(
  NamaProduk: string,
  API_SECRET_KEY: string,
) {
  const res = await fetch(
    `${serverEnvironment.BASE_URL}/api/shop/${NamaProduk}?=${API_SECRET_KEY}`,
  );

  if (!res.ok) throw new Error("Failed to fetch products data");

  return res.json();
}
