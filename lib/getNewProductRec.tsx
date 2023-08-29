export default async function getNewProductRec() {
    // const API_SECRET_KEY = process.env.API_SECRET_KEY;

    const res = process.env.NODE_ENV === 'production' ?
        // await fetch(`https://kampung-perca.vercel.app/api/newRec`, {
        //         cache:"no-cache"
        //     }
        // ) 
        await fetch(`https://www.michaelmervinruswan.my.id/api/newRec`, {
                cache:"no-cache"
            }
        ):
        await fetch(`http://localhost:3000/api/newRec`, {
                cache:"no-cache"
            }
        )

    const products = await res.json()

    if (!res.ok) throw new Error('Failed to fetch products data')

    return products;
}
