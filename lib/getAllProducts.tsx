export default async function getAllProducts() {
    const res = await fetch (`http://localhost:3000/api/shop`,
    )

    const products = await res.json()

    if (!res.ok) throw new Error('Failed to fetch products data')

    return products;
}
