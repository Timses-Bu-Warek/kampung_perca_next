import 'server-only';
import { connectToDatabase } from './mongo';

export default async function getAllProducts() {
  const client = await connectToDatabase();
  const db = client.db('KampungPercaDB');

  const products = await db
    .collection('products')
    .aggregate([{ $sort: { NamaProduk: 1 } }])
    .toArray();

  return products;
}
