import "server-only";
import { serverEnvironment } from "./env/server";

export default async function getProduct(NamaProduk: string) {
  const res = await fetch(
    `${serverEnvironment.BASE_URL}/api/shop/${NamaProduk}`,
  );

  if (!res.ok) throw new Error("Failed to fetch products data");

  return res.json();
}
