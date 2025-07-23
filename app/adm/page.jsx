'use client';
import { useState } from 'react';

export default function Page() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    const reader = new FileReader();
    reader.onloadend = () => setPreview(reader.result);
    if (selectedFile) {
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleUpload = async () => {
    if (!file) return alert("Please select a file.");

    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64String = reader.result.split(",")[1];

      try {
        const res = await fetch("/api/upload", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fileName: file.name,
            imageBase64: base64String,
          }),
        });

        const data = await res.json();

        if (res.ok) {
          setUploadStatus("✅ Uploaded successfully. ID: " + data.insertedId);
        } else {
          setUploadStatus("❌ Upload failed: " + data.message);
        }
      } catch (err) {
        setUploadStatus("❌ Upload failed: " + err.message);
      }
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-xl shadow-lg bg-white space-y-4">
      <h1 className="text-2xl font-bold text-center">Upload Image</h1>

      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="w-full file:py-2 file:px-4 file:border-0 file:rounded-md file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200"
      />

      {preview && (
        <img
          src={preview}
          alt="Preview"
          className="w-full h-64 object-contain border rounded"
        />
      )}

      <button
        onClick={handleUpload}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Upload
      </button>

      {uploadStatus && (
        <p className="text-center text-sm text-gray-700">{uploadStatus}</p>
      )}
    </div>
  );
}
