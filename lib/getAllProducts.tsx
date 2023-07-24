export default async function getAllProducts() {
    // const API_SECRET_KEY = process.env.API_SECRET_KEY;

    const res = process.env.NODE_ENV === 'production' ? 
        await fetch (`https://kampung-perca.vercel.app/api/shop`,{
                cache: "force-cache",
            }
            // { next: { revalidate: 10 }  }
        ) :
        await fetch (`http://localhost:3000/api/shop`,{
                cache: "force-cache",
            }
            // { next: { revalidate: 10 }  }
        )

    const products = await res.json()

    if (!res.ok) throw new Error('Failed to fetch products data')

    return products;
}
