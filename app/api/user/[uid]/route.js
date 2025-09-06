//GETTING USER DETAILS
import clientPromise from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request,{params}){
    try{
    const client  = clientPromise();
    const db = client.getDB("data");
    const collection = db.getCollection("user_data");

    const {uid} = params
    const user = collection.findOne({uid})
    if(!user){
        return NextResponse.json({message:"User not found"}, {status:404});
    }
    return NextResponse.json({message:"USer found"},{staus:200});
    }
    catch(error){
    console.error("GET error:", error);
    return NextResponse.json({ message: "Error fetching user" }, { status: 500 });
    }
}