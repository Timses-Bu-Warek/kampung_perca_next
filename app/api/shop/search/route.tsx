import { connectToDatabase } from "@/lib/mongo";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const nama = searchParams.get("NamaProduk")
    const client = await connectToDatabase();
    const db = client.db("KampungPercaDB");
    console.log("Nama Produk: " + nama);
  
    const allProducts = await db.collection("Products").find({NamaProduk: nama}).toArray();
  
    // return new Response(JSON.stringify(allProducts), { status: 200 });
    return NextResponse.json(allProducts);
  } catch (error) {
    return new Response("Failed to fetch all prompts", { status: 500 })
  }
}