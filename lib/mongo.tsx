import 'server-only';
import { MongoClient } from 'mongodb';
import { serverEnvironment } from './env/server';

const MONGODB_URI = serverEnvironment.MONGODB_URI;

export async function connectToDatabase() {
  if (!MONGODB_URI) {
    throw new Error('Add Mongo URI to .env.local');
  }

  const client = new MongoClient(MONGODB_URI);
  return client.connect();
}
