//PUTTING USER DETAILS
import clientPromise from "@/lib/db";
import { getCollection } from "@/lib/db";
import { NextResponse } from "next/server";

export async function PUT(request) {
  try {
    const body = await request.json();
    const { uid, name, dob } = body;

    if (!uid) {
      return NextResponse.json(
        { message: "Uid is required" },
        { status: 400 }
      );
    }

    const collection = await getCollection("user_data");
    const update = { $set: { uid, name, dob } };
    const options = { upsert: true };

    const result = await collection.updateOne({ uid }, update, options);

    return NextResponse.json(
      { message: "Successfully POSTED data", result },
      { status: 200 }
    );
  } catch (err) {
    console.error("Error in PUT:", err);
    return NextResponse.json(
      { message: "Failure POSTING Data" },
      { status: 500 }
    );
  }
}