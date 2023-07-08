export default async function getAllProducts(request : Request) {
    const { searchParams } = new URL(request.url);
    const nama = searchParams.get("NamaProduk")
    const res = await fetch (`http://localhost:3000/api/shop/search?NamaProduk=`${nama}``,
    )

    const products = await res.json()

    if (!res.ok) throw new Error('Failed to fetch products data')

    return products;
}
