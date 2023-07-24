// Dynamic Route API [NamaProduk]
// http://localhost:3000/api/shop/[NamaProduk]
// https://kampung-perca.vercel.app/api/shop/[NamaProduk]
// contoh: http://localhost:3000/api/shop/Baju%20Pangsi

import { connectToDatabase } from "@/lib/mongo";
import { NextRequest, NextResponse } from "next/server";
import { ObjectId } from "mongodb";

// export async function GET(request : Request, context : { params : {id: number} }) {
export async function GET(request : Request, context : { params : {NamaProduk: string} }) {
  // const { searchParams } = new URL(request.url);
  // const API_SECRET_KEY = searchParams.get("API_SECRET_KEY")
  // if(API_SECRET_KEY !== process.env.API_SECRET_KEY) {
  //   return new Response("Not Authorized", { status: 500 })
  // }
  const origin = request.headers.get('origin')
  
  try {
    // const id = req.query.id;
    const id = request.url.slice(request.url.lastIndexOf('/') + 1);
    const client = await connectToDatabase();
    const db = client.db("KampungPercaDB");
    // console.log(id);
    // console.log(context);
    const NamaProduk = context.params.NamaProduk;
    console.log(NamaProduk);

  
    const oneProduct = await db.collection("Products").findOne({ NamaProduk: NamaProduk  });
    console.log(oneProduct)
    // return new Response(JSON.stringify(allProducts), { status: 200 });
    if(oneProduct) {
      return new NextResponse(JSON.stringify(oneProduct), {
        headers: {
            'Access-Control-Allow-Origin': origin || "*",
            'Content-Type': 'application/json',
        }
    })
    } else {
      return NextResponse.json({message: "Gagal memuat produk", status: 500})
    }
  } catch (error) {
    // console.log(error);
    return NextResponse.json({message: "Cannot make connection"})
  }
}