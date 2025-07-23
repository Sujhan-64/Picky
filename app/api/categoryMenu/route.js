import { getCollection } from '@/lib/db';

export async function GET() {
  try {
    const collection = await getCollection('category_items');
    const categories = await collection.find().toArray();

    return new Response(JSON.stringify(categories), {
      headers: { 'Content-Type': 'application/json' },
      status: 200,
    });
  } catch (error) {
    console.error('Error fetching categories:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch categories' }), {
      headers: { 'Content-Type': 'application/json' },
      status: 500,
    });
  }
}
