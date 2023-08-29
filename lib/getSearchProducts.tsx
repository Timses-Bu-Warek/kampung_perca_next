export default async function getSearchProducts(namaProdukParams: string | null, sortParams: string | null) {
    // const { searchParams } = new URL(request.url);
    // const nama = searchParams.get("NamaProduk")
    if (process.env.NODE_ENV === 'production') {
        // if (namaProdukParams && !sortParams) {
        //     const res = await fetch(`https://kampung-perca.vercel.app/api/shop/search?NamaProduk=${namaProdukParams}`)
        //     return responseJSON(res)
        // } else if (namaProdukParams && sortParams) {
        //     const res = await fetch(`https://kampung-perca.vercel.app/api/shop/search?NamaProduk=${namaProdukParams}&sort=${sortParams}`)
        //     return responseJSON(res)
        // } else if (!namaProdukParams && sortParams) {
        //     const res = await fetch(`https://kampung-perca.vercel.app/api/shop/search?sort=${sortParams}`)
        //     return responseJSON(res)
        // } 

        if (namaProdukParams && !sortParams) {
            const res = await fetch(`https://www.michaelmervinruswan.my.id/api/shop/search?NamaProduk=${namaProdukParams}`)
            return responseJSON(res)
        } else if (namaProdukParams && sortParams) {
            const res = await fetch(`https://www.michaelmervinruswan.my.id/api/shop/search?NamaProduk=${namaProdukParams}&sort=${sortParams}`)
            return responseJSON(res)
        } else if (!namaProdukParams && sortParams) {
            const res = await fetch(`https://www.michaelmervinruswan.my.id/api/shop/search?sort=${sortParams}`)
            return responseJSON(res)
        } 
    } else {
        if (namaProdukParams && !sortParams) {
            const res = await fetch(`http://localhost:3000/api/shop/search?NamaProduk=${namaProdukParams}`)
            return responseJSON(res)
        } else if (namaProdukParams && sortParams) {
            const res = await fetch(`http://localhost:3000/api/shop/search?NamaProduk=${namaProdukParams}&sort=${sortParams}`)
            return responseJSON(res)
        } else if (!namaProdukParams && sortParams) {
            const res = await fetch(`http://localhost:3000/shop/search?sort=${sortParams}`)
            return responseJSON(res)
        } 
    }
}

export async function responseJSON (res : Response) {
    const products = await res.json()
    if (!res.ok) throw new Error('Failed to fetch products data')
    return products;
}
