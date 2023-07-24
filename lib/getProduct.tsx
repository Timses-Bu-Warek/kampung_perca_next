export default async function getProduct(NamaProduk : string, API_SECRET_KEY : string) {
    const res = process.env.NODE_ENV === 'production' ?
        await fetch (`https://kampung-perca.vercel.app/api/shop/${NamaProduk}?=${API_SECRET_KEY}`) :
        await fetch (`http://localhost:3000/api/shop/${NamaProduk}?=${API_SECRET_KEY}`)

    if (!res.ok) throw new Error('Failed to fetch products data')

    return res.json();
}
