import clientPromise from "@/lib/db";
import { notFound } from "next/navigation";
import ProductClient from "./ProductClient";

export default async function ProductPage({ params }) {
  const { slug } = params;

  try {
    const client = await clientPromise;
    const db = client.db("data");
    const product = await db.collection("images").findOne({ slug });

    if (!product) return notFound();

    // Serialize _id and uploadedAt fields
    const plainProduct = {
      ...product,
      _id: product._id.toString(),
      uploadedAt: product.uploadedAt?.toString() || null,
    };

    return <ProductClient product={plainProduct} />;
  } catch (err) {
    console.error("Error loading product:", err);
    return notFound();
  }
} 