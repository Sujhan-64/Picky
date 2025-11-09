//Handles PUT (update quantity) and DELETE (remove product).

import clientPromise from "@/lib/db";

export async function POST(req) {
    try{
        client = await clientPromise();
        const db = client.db("data");
        const collection = db.collection("cart")

        const {productId} = params;
        const body = await req.json();
    }
    catch(error){
        console.log("Error updating cart : " + error )
    }
}
