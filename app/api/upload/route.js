import clientPromise from "@/lib/db";

export async function POST(req) {
  try {
    console.log("📥 Received POST /api/upload");

    const body = await req.json();
    console.log("📦 Parsed body:", body);

    const { imageBase64, fileName } = body;

    if (!imageBase64 || !fileName) {
      console.log("⚠️ Missing image or filename");
      return new Response(JSON.stringify({ message: "Missing image or filename" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    console.log("🔗 Connecting to MongoDB...");
    const client = await clientPromise;
    const db = client.db("data"); // 👈 Use your actual DB name
    const collection = db.collection("images");

    console.log("💾 Inserting image to DB...");
    const result = await collection.insertOne({
      fileName,
      image: imageBase64,
      uploadedAt: new Date(),
    });

    console.log("✅ Upload successful:", result.insertedId);

    return new Response(JSON.stringify({ insertedId: result.insertedId }), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("❌ Upload error:", error);
    return new Response(JSON.stringify({ message: "Upload failed", error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
