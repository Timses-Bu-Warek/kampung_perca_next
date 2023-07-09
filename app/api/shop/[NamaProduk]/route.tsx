// Dynamic Route API [NamaProduk]
// localhost:3000/api/shop/[NamaProduk]
// contoh: localhost:3000/api/shop/Baju%20Pangsi

import { connectToDatabase } from "@/lib/mongo";
import { NextRequest, NextResponse } from "next/server";
import { ObjectId } from "mongodb";

// export async function GET(request : Request, context : { params : {id: number} }) {
export async function GET(request : Request, context : { params : {NamaProduk: string} }) {
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
      return NextResponse.json(oneProduct)
    } else {
      return NextResponse.json({message: "Failed to fetch the product", status: 500})
    }
  } catch (error) {
    // console.log(error);
    return NextResponse.json({message: "Cannot make connection"})
  }
}