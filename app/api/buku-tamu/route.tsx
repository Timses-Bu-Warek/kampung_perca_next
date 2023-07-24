// Buku Tamu API
// http://localhost:3000/api/buku-tamu
// https://kampung-perca.vercel.app/api/buku-tamu

import { connectToDatabase } from "@/lib/mongo";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { limiter } from "../config/limiter";

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

export async function POST(request: Request) {
  const cookiesBukuTamu = cookies()
  cookiesBukuTamu.set('isBukuTamu', 'true', { secure: true })
  const origin = request.headers.get('origin')

  const remaining = await limiter.removeTokens(1)
  console.log('remaining: ', remaining)

  try {
    const client = await connectToDatabase();
    const db = client.db("KampungPercaDB");
    const data: BukuTamu = await request.json();

    const allProducts = await db.collection("Visitors").insertOne(data);

    // return new Response(JSON.stringify(allProducts), { status: 200 });
    if (remaining < 0) {
      return new NextResponse(null, {
        status: 429,
        statusText: "Too Many Requests",
        headers: {
          'Access-Control-Allow-Origin': origin || '*',
          'Content-Type': 'text/plain',
        }
      })
    }
    return new NextResponse(JSON.stringify(allProducts), {
      headers: {
        'Access-Control-Allow-Origin': origin || "*",
        'Content-Type': 'application/json',
      }
    })

  } catch (error) {
    return new Response("Failed to fetch all prompts", { status: 500 })
  }
}


