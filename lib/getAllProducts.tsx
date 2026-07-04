import { serverEnvironment } from "./env/server";

export default async function getAllProducts() {
  // const API_SECRET_KEY = process.env.API_SECRET_KEY;

  const res = await fetch(`${process.env["BASE_URL"]}/api/shop`, {
    next: { revalidate: 10 },
  });

  const products = await res.json();

  if (!res.ok) throw new Error("Failed to fetch products data");

  return products;
}
