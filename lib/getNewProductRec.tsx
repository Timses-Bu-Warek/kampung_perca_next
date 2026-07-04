export default async function getNewProductRec() {
  // const API_SECRET_KEY = process.env.API_SECRET_KEY;

  const res = await fetch(`/api/newRec`, {
    cache: "no-cache",
  });

  const products = await res.json();

  if (!res.ok) throw new Error("Failed to fetch products data");

  return products;
}
