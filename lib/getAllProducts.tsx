export default async function getAllProducts() {
    const res = await fetch ('http://localhost:3000/api/shop',
        // {cache: 'no-store'}
    )

    if (!res.ok) throw new Error('Failed to fetch products data')

    return res.json();
}
