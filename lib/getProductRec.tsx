import 'server-only';
import { connectToDatabase } from './mongo';

export default async function getProductRec() {
  const client = await connectToDatabase();
  const db = client.db('KampungPercaDB');

  const products = await db
    .collection('products')
    .aggregate([{ $sample: { size: 4 } }])
    .toArray();

  return products;
}
