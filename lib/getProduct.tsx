export default async function getProduct(NamaProduk : string) {
    const res = await fetch (`http://localhost:3000/api/shop/${NamaProduk}`,
        {cache: 'force-cache'}
    )

    if (!res.ok) throw new Error('Failed to fetch products data')

    return res.json();
}
