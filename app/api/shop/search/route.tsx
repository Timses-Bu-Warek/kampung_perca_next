// SEARCH SHOP API
// http://localhost:3000/api/shop/search?=[NamaProduk]
// https://kampung-perca.vercel.app/api/shop/search?=[NamaProduk]

import { connectToDatabase } from "@/lib/mongo";
import { MongoClient, Filter } from "mongodb";
import { NextRequest, NextResponse } from "next/server";
import { request } from "urllib";

// console.log("Nama Produk: " + nama);

const ATLAS_API_BASE_URL = "https://cloud.mongodb.com/api/atlas/v1.0"
const ATLAS_PROJECT_ID = process.env.MONGODB_ATLAS_PROJECT_ID
const ATLAS_CLUSTER_NAME = process.env.MONGODB_ATLAS_CLUSTER_NAME
const ATLAS_CLUSTER_API_URL = `${ATLAS_API_BASE_URL}/groups/${ATLAS_PROJECT_ID}/clusters/${ATLAS_CLUSTER_NAME}`
const ATLAS_SEARCH_INDEX_API_URL = `${ATLAS_CLUSTER_API_URL}/fts/indexes`

const ATLAS_API_PUBLIC_KEY = process.env.MONGODB_ATLAS_PUBLIC_KEY
const ATLAS_API_PRIVATE_KEY = process.env.MONGODB_ATLAS_PRIVATE_KEY
const DIGEST_AUTH = `${ATLAS_API_PUBLIC_KEY}:${ATLAS_API_PRIVATE_KEY}`

const USER_SEARCH_INDEX_NAME = 'user_search'
const USER_AUTOCOMPLETE_INDEX_NAME = 'user_autocomplete'

const pipeline = []



// export async function GET(request: Request) {
//   try {
//     // const query = await db.collection("Products").find(
//     //   $text: {
//     //   $search: nama,
//     //   $caseSensitive: false,
//     //   $diacriticSensitive: false
//     // }
//     // );
//     console.log("Query: " + query);

//     const allProducts = query.toArray();

//     // return new Response(JSON.stringify(allProducts), { status: 200 });
//     return NextResponse.json(allProducts);
//   } catch (error) {
//     return new Response("Failed to fetch all prompts", { status: 500 })
//   }
// }

// export async function GET(request : Request) {
//   // const searchQuery = req.query.query as string
//   const { searchParams } = new URL(request.url);
//   const searchQuery = searchParams.get("NamaProduk")
//   const client = await connectToDatabase();
//   const db = client.db("KampungPercaDB");

//   if (!searchQuery || searchQuery.length < 2) {
//     NextResponse.json([])
//     return
//   }

//   // const db = client.db('tutorial')
//   const collection = db.collection<Products>("Products")
//   await collection.createIndexes([{name: 'NamaProduk_text', key: {NamaProduk: 'text'}}])

//   const pipeline = []


//     pipeline.push({
//       $search: {
//         index: USER_SEARCH_INDEX_NAME,
//         text: {
//           query: searchQuery,
//           path: ['NamaProduk'],
//           fuzzy: {},
//         },
//       },
//     })

//   pipeline.push({
//     $project: {
//       _id: 0,
//       score: {$meta: 'searchScore'},
//       ProdukID: 1,
//       NamaProduk: 1,
//       Harga: 1,
//       Ukuran: 1,
//       Keterangan: 1,
//       FotoProduk: 1
//     },
//   })

//   const result = await collection.aggregate(pipeline).sort({score: -1}).limit(10)
//   const array = await result.toArray()
//   return NextResponse.json(array)
// }

export async function GET(request : Request) {
  // const searchQuery = req.query.query as string
  const origin = request.headers.get('origin')
  const { searchParams } = new URL(request.url);
  const searchQuery = searchParams.get("NamaProduk")

  const client = await connectToDatabase();
  const db = client.db("KampungPercaDB");
  const collection = db.collection("Products");
  // const collection = db.collection<Products>("Products")
  await collection.createIndexes([{name: 'NamaProduk_text', key: {NamaProduk: 'text'}}])
  const result = await collection.find({NamaProduk: {$regex: searchQuery, $options: 'i'}}).toArray()
  
  return new NextResponse(JSON.stringify(result), {
    headers: {
        'Access-Control-Allow-Origin': origin || "*",
        'Content-Type': 'application/json',
    }
})
}
// async function createSearchIndex() {
//   const userSearchIndex = await findIndexByName(USER_SEARCH_INDEX_NAME)
//   if (!userSearchIndex) {
//     await request(ATLAS_SEARCH_INDEX_API_URL, {
//       data: {
//         name: USER_SEARCH_INDEX_NAME,
//         database: "KampungPercaDB",
//         collectionName: "Products",
//         // https://www.mongodb.com/docs/atlas/atlas-search/index-definitions/#syntax
//         mappings: {
//           dynamic: true,
//         },
//       },
//       dataType: 'json',
//       contentType: 'application/json',
//       method: 'POST',
//       digestAuth: DIGEST_AUTH,
//     })
//   }
// }
// async function deleteSearchIndex() {
//   const userSearchIndex = await findIndexByName(USER_SEARCH_INDEX_NAME)
//   if (userSearchIndex) {
//     await request(`${ATLAS_SEARCH_INDEX_API_URL}/${userSearchIndex.id}`, {
//       dataType: 'json',
//       contentType: 'application/json',
//       method: 'DELETE',
//       digestAuth: DIGEST_AUTH,
//     })
//   }
// }
// async function createAutocompleteIndex() {
//   const userAutocompleteIndex = await findIndexByName(USER_AUTOCOMPLETE_INDEX_NAME)
//   if (!userAutocompleteIndex) {
//     await request(ATLAS_SEARCH_INDEX_API_URL, {
//       data: {
//         name: USER_AUTOCOMPLETE_INDEX_NAME,
//         database: "KampungPercaDB",
//         collectionName: "Products",
//         // https://www.mongodb.com/docs/atlas/atlas-search/index-definitions/#syntax
//         mappings: {
//           dynamic: true,
//         },
//         // https://www.mongodb.com/docs/atlas/atlas-search/index-definitions/#autocomplete
//         autocomplete: {
//           path: 'NamaProduk',
//           tokenize: 'edgeGram',
//           maxEdits: 2,
//           fuzzy: {
//             maxEdits: 2,
//             prefixLength: 3,
//           },
//         },
//       },
//       dataType: 'json',
//       contentType: 'application/json',
//       method: 'POST',
//       digestAuth: DIGEST_AUTH,
//     })
//   }
// }
// async function deleteAutocompleteIndex() {
//   const userAutocompleteIndex = await findIndexByName(USER_AUTOCOMPLETE_INDEX_NAME)
//   if (userAutocompleteIndex) {
//     await request(`${ATLAS_SEARCH_INDEX_API_URL}/${userAutocompleteIndex.id}`, {
//       dataType: 'json',
//       contentType: 'application/json',
//       method: 'DELETE',
//       digestAuth: DIGEST_AUTH,
//     })
//   }
// }







async function findIndexByName(indexName: string) {
  const allIndexesResponse = await request(
    `${ATLAS_SEARCH_INDEX_API_URL}/KampungPercaDB/Products`,
    {
      dataType: 'json',
      contentType: 'application/json',
      method: 'GET',
      digestAuth: DIGEST_AUTH,
    }
  )

  return (allIndexesResponse.data as any[]).find((i) => i.name === indexName)
}

async function upsertSearchIndex() {
  const userSearchIndex = await findIndexByName(USER_SEARCH_INDEX_NAME)
  if (!userSearchIndex) {
    await request(ATLAS_SEARCH_INDEX_API_URL, {
      data: {
        name: USER_SEARCH_INDEX_NAME,
        database: "KampungPercaDB",
        collectionName: "Products",
        // https://www.mongodb.com/docs/atlas/atlas-search/index-definitions/#syntax
        mappings: {
          dynamic: true,
        },
      },
      dataType: 'json',
      contentType: 'application/json',
      method: 'POST',
      digestAuth: DIGEST_AUTH,
    })
  }
}