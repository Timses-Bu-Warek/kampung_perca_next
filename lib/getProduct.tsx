export default async function getProduct(id : string) {
    const res = await fetch ('http://localhost:3000/api/shop/${_id}',
        // {cache: 'no-store'}
    )

    if (!res.ok) throw new Error('Failed to fetch products data')

    return res.json();
}
