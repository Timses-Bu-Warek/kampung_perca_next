export default async function getProductRec() {
    // const API_SECRET_KEY = process.env.API_SECRET_KEY;

    const res = process.env.NODE_ENV === 'production' ?
        await fetch(`https://www.kampungperca.id/api/rec`, {
                cache:"no-cache"
            }
        ) :
        await fetch(`http://localhost:3000/api/rec`, {
                cache:"no-cache"
            }
        )

    const products = await res.json()

    if (!res.ok) throw new Error('Failed to fetch products data')

    return products;
}
