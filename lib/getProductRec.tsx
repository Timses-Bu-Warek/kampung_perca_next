export default async function getProductRec() {
  // const API_SECRET_KEY = process.env.API_SECRET_KEY;

  const res = await fetch(`/api/rec`, {
    cache: "no-cache",
  });

  const products = await res.json();

  if (!res.ok) throw new Error("Failed to fetch products data");

  return products;
}
