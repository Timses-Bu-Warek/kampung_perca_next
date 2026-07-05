import 'server-only';
import { connectToDatabase } from '../../../lib/mongo';

export default async function getProduct(productName: string) {
  const decoded = decodeURIComponent(productName);

  const client = await connectToDatabase();

  const db = client.db('KampungPercaDB');

  const product = await db.collection<Products>('products').findOne({ NamaProduk: decoded });

  return product;
}
