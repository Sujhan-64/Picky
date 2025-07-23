'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ProductShow = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      try {
        const res = await fetch('/api/productShow'); // Make sure this exists
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Failed to load products:", err);
      }
    }

    loadProducts();
  }, []);

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">🛍 All Products</h1>
      <div className='flex flex-wrap gap-4 justify-center'>
        {products.map((item) => (
          <Link key={item.slug} href={`/finalProduct/${item.slug}`}>
            <div className="w-[250px] h-[320px] bg-white border border-gray-300 rounded-md overflow-hidden shadow hover:shadow-lg transition">
              <div className="relative w-full h-[220px]">
                <Image
                  src={`data:image/jpeg;base64,${item.image}`}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-3 text-center">
                <p className="font-semibold">{item.name}</p>
                <p className="text-green-700 font-medium">₹{item.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductShow;
