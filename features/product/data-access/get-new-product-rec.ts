import 'server-only';
import { connectToDatabase } from '../../../lib/mongo';

export default async function getNewProductRec() {
  const client = await connectToDatabase();
  const db = client.db('KampungPercaDB');

  const products = await db
    .collection('products')
    .aggregate([{ $sort: { ProdukID: -1 } }])
    .limit(4)
    .toArray();

  return products;
}
