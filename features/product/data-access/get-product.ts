import 'server-only';
import { connectToDatabase } from '../../../lib/mongo';

export default async function getProduct(productName: string) {
  const client = await connectToDatabase();

  const db = client.db('KampungPercaDB');

  const product = await db.collection('products').findOne({ NamaProduk: productName });

  return product;
}
