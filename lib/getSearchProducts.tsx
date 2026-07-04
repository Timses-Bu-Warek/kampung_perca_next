import 'server-only';
import { connectToDatabase } from './mongo';

export default async function getSearchProducts(
  namaProdukParams: string | null | undefined,
  sortParams: string | null | undefined,
) {
  const client = await connectToDatabase();
  const db = client.db('KampungPercaDB');
  const collection = db.collection<Products>('products');
  // const collection = db.collection<products>("products")
  await collection.createIndexes([{ key: { NamaProduk: 'text' }, name: 'NamaProduk_text' }]);
  if ((!sortParams || sortParams === 'default') && namaProdukParams) {
    const result = await collection
      .find({ NamaProduk: { $options: 'i', $regex: namaProdukParams } })
      .toArray();
    return result;
  } else if ((!sortParams || sortParams === 'default') && !namaProdukParams) {
    const result = await collection.aggregate<Products>([{ $sort: { NamaProduk: 1 } }]).toArray();

    return result;
  } else if (sortParams === 'lowHigh' && namaProdukParams) {
    const result = await collection
      .aggregate<Products>([
        {
          $match: {
            NamaProduk: { $options: 'i', $regex: namaProdukParams },
          },
        },
        { $sort: { Harga: 1 } },
      ])
      .toArray();

    return result;
  } else if (sortParams === 'lowHigh' && !namaProdukParams) {
    const result = await collection.aggregate<Products>([{ $sort: { Harga: 1 } }]).toArray();

    return result;
  } else if (sortParams === 'highLow' && namaProdukParams) {
    const result = await collection
      .aggregate<Products>([
        {
          $match: {
            NamaProduk: { $options: 'i', $regex: namaProdukParams },
          },
        },
        { $sort: { Harga: -1 } },
      ])
      .toArray();

    return result;
  } else {
    const result = await collection.aggregate<Products>([{ $sort: { Harga: -1 } }]).toArray();

    return result;
  }
}
