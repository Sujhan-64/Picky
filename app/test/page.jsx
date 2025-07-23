'use client';
import { useEffect, useState } from "react";

export default function GalleryPage() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchImages() {
      try {
        const res = await fetch("/api/fetchImage");
        const data = await res.json();
        setImages(data);
      } catch (error) {
        console.error("Failed to load images:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchImages();
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">📸 Uploaded Images</h1>

      {loading && <p className="text-center text-gray-500">Loading images...</p>}

      {!loading && images.length === 0 && (
        <p className="text-center text-gray-500">No images found.</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((img) => (
          <div key={img._id} className="border rounded-md shadow p-2">
            <img
              src={`data:image/jpeg;base64,${img.image}`}
              alt={img.fileName}
              className="w-full h-64 object-contain"
            />
            <p className="mt-2 text-sm text-center text-gray-600">{img.fileName}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
