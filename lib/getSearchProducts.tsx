export default async function getSearchProducts(req : string) {
    // const { searchParams } = new URL(request.url);
    // const nama = searchParams.get("NamaProduk")
    const res = process.env.NODE_ENV === 'production' ?
        await fetch (`https://kampung-perca.vercel.app/api/shop/search?NamaProduk=${req}`) :
        await fetch (`http://localhost:3000/api/shop/search?NamaProduk=${req}`)

    const products = await res.json()

    if (!res.ok) throw new Error('Failed to fetch products data')

    return products;
}
