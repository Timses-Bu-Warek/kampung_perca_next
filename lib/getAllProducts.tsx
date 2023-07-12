export default async function getAllProducts() {
    // const API_SECRET_KEY = process.env.API_SECRET_KEY;
    const res = await fetch (`http://localhost:3000/api/shop`,
    // { next: { revalidate: 10 }  }
        {cache: "force-cache"}
    )

    const products = await res.json()

    if (!res.ok) throw new Error('Failed to fetch products data')

    return products;
}
