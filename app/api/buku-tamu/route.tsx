// Buku Tamu API
// localhost:3000/api/buku-tamu

import { connectToDatabase } from "@/lib/mongo";
import { NextRequest, NextResponse } from "next/server";

type BukuTamu = {
  nama: "",
  provinsi: "",
  kota: "",
  gender: "",
  umur: number
}

// export async function GET(request : Request) {
//   const { searchParams } = new URL(request.url);
//   const API_SECRET_KEY = searchParams.get("API_SECRET_KEY")
//   // console.log(searchParams)
//   if(API_SECRET_KEY !== process.env.API_SECRET_KEY) {
//     return new Response("Not Authorized", { status: 500 })
//   }
//   try {
//     const client = await connectToDatabase();
//     const db = client.db("KampungPercaDB");
  
//     const allVisitors = await db.collection("Visitors").find().toArray();
  
//     // return new Response(JSON.stringify(allProducts), { status: 200 });
//     return NextResponse.json(allVisitors);
//   } catch (error) {
//     return new Response("Failed to fetch all prompts", { status: 500 })
//   }
// }

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


  