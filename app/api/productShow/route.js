import clientPromise from "@/lib/db";
import { headers } from "next/headers";

/*
we should not put default because in next.js each function is tied to a HTTP method
ex : GET	export async function GET().
adding default detroys this mapping 
*/

export async function GET() {
    try{
        const client = await clientPromise
        const db = client.db("data")
        const collection = db.collection("images")
        const products = await collection.find({},{projection : {_id: 0}}).toArray()
        return new Response(
            JSON.stringify(products),
            {
                status:200,
                headers: { "Content-Type": "application/json" }
            }
    )}
    catch (error) {
    console.error("❌ Failed to fetch products:", error);
    return new Response(JSON.stringify({ message: "Failed to fetch products" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
}
}

