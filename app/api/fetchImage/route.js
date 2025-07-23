import clientPromise from "@/lib/db";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("data"); // Replace with your DB name
    const collection = db.collection("images");

    const images = await collection.find({}, { projection: { image: 1, fileName: 1 } }).toArray();

    return new Response(JSON.stringify(images), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("❌ Failed to fetch images:", error);
    return new Response(JSON.stringify({ message: "Failed to fetch images" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
