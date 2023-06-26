import { connectToDatabase } from "@/lib/mongo";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const client = await connectToDatabase();
    const db = client.db("KampungPercaDB");
  
    const allProducts = await db.collection("Products").find().toArray();
  
    return new Response(JSON.stringify(allProducts), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all prompts", { status: 500 })
  }
}
  