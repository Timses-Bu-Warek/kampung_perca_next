import { connectToDatabase } from "@/lib/mongo";
import { NextRequest, NextResponse } from "next/server";
import { ObjectId } from "mongodb";

// export async function GET(request : Request, context : { params : {id: number} }) {
export async function GET(request : Request, context : { params : {id: string} }) {
  try {
    // const id = req.query.id;
    const id = request.url.slice(request.url.lastIndexOf('/') + 1);
    const client = await connectToDatabase();
    const db = client.db("KampungPercaDB");
    // console.log(id);
    // console.log(context);
    const angka = context.params.id;
    console.log(angka);

  
    const oneProduct = await db.collection("Products").findOne({ NamaProduk: angka  });
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