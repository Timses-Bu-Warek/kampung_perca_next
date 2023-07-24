// Home Recommended API
// http://localhost:3000/api/home
// https://kampung-perca.vercel.app/api/home

import { connectToDatabase } from "@/lib/mongo";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request : Request) {
  // const { searchParams } = new URL(request.url);
  // const API_SECRET_KEY = searchParams.get("API_SECRET_KEY")
  // if(API_SECRET_KEY !== process.env.API_SECRET_KEY) {
  //   return new Response("Not Authorized", { status: 500 })
  // }
  const origin = request.headers.get('origin')
  
  try {
    const client = await connectToDatabase();
    const db = client.db("KampungPercaDB");
  
    const allProducts = await db.collection("Products").find().limit(4).toArray();
  
    // return new Response(JSON.stringify(allProducts), { status: 200 });
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


  