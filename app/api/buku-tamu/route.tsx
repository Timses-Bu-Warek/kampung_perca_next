import { connectToDatabase } from "@/lib/mongo";
import { NextRequest, NextResponse } from "next/server";

type BukuTamu = {
  nama: "",
  provinsi: "",
  kota: "",
  gender: "",
  umur: number
}

export async function GET() {
  try {
    const client = await connectToDatabase();
    const db = client.db("KampungPercaDB");
  
    const allVisitors = await db.collection("Visitors").find().toArray();
  
    // return new Response(JSON.stringify(allProducts), { status: 200 });
    return NextResponse.json(allVisitors);
  } catch (error) {
    return new Response("Failed to fetch all prompts", { status: 500 })
  }
}

export async function POST(request : Request) {
  try {
    const client = await connectToDatabase();
    const db = client.db("KampungPercaDB");
    const data : BukuTamu = await request.json();
  
    const allProducts = await db.collection("Visitors").insertOne(data);
  
    // return new Response(JSON.stringify(allProducts), { status: 200 });
    return NextResponse.json(allProducts);
  } catch (error) {
    return new Response("Failed to fetch all prompts", { status: 500 })
  }
}


  