import clientPromise from "@/lib/db";
// POST (Update cart), GET(Get Cart items for a user), DELETE(Delete entire cart)
// NEED TO ADD CATCH TRY, CATCH AND RESPONSE


//CREATES NEW CART AND UPDATES CART IF ALREADY EXSISTING
export async function PUT(req){
    const{uid, pidArray} = await req.json();
    console.log("Received body:");
    const client = await clientPromise;
    const db = client.db("data");

    if(!uid || !pidArray){
        return;
    }
    await db.collection("cart").updateOne(
        {uid},
        {
            $set : {items : pidArray}
        },
        {upsert: true}
    )

    return Response.json({ message: "Added to cart" });
}

//FETCH A USER'S CART USING UID
export async function GET(req){
    const userId = req.nextUrl.searchParams.get("userId");
    const client = await clientPromise;
    const db = client.db("data");

    const cart = await db.collection("cart").findOne({userId})
    if(!cart){
        return Response.json({message:"User cart does not exist"});
    }
    return Response.json({message:"Fetched User cart items"});
}

//DELETE ENTIRETY OF USER'S CART
export async function DELETE(req){
    const {uid} = await req.json();
    const client = await clientPromise;
    const db = client.db("data");
    if (!uid) {
      return Response.json({ error: "Missing uid" }, { status: 400 });
    }

    await db.collection("cart").updateOne(
        {uid},
        {
            $set : {items : []}
        }
    )

    return Response.json({ message: "Cart cleared" });
}