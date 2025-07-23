import clientPromise from "@/lib/db";
import { notFound } from "next/navigation";

export default async function ProductPage({ params }) {
  const { slug } = params;

  try {
    const client = await clientPromise;
    const db = client.db("data");
    const product = await db.collection("images").findOne({ slug });

    if (!product) return notFound();

    return (
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
        <img
          src={`data:image/jpeg;base64,${product.image}`}
          alt={product.name}
          className="w-full max-h-[500px] object-contain border mb-6"
        />
        <p className="text-xl font-semibold text-green-600 mb-2">₹{product.price}</p>
        <p className="text-gray-700">{product.description || "No description provided."}</p>
      </div>
    );
  } catch (err) {
    console.error("❌ Error loading product:", err);
    return notFound();
  }
}
