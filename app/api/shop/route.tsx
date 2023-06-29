import { connectToDatabase } from "@/lib/mongo";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const client = await connectToDatabase();
    const db = client.db("KampungPercaDB");
  
    const allProducts = await db.collection("Products").find().toArray();
  
    // return new Response(JSON.stringify(allProducts), { status: 200 });
    return NextResponse.json(allProducts);
  } catch (error) {
    return new Response("Failed to fetch all prompts", { status: 500 })
  }
}


  