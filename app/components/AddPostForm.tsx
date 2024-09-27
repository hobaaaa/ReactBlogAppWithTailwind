"use client";
import { useState } from "react";
import { slugify } from "@/lib/slugify"; // Slug oluşturma fonksiyonunu import et

const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState<File | null>(null); // Image state

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const slug = slugify(title); // Slug oluştur

      const formData = new FormData();
      formData.append("title", title);
      formData.append("content", content);
      formData.append("slug", slug);
      if (image) {
        formData.append("image", image); // Image'ı ekle
      }

      const response = await fetch("/api/create-post", {
        method: "POST",
        body: formData, // FormData kullan
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log(result.message); // Başarı mesajını yazdır
      setTitle("");
      setContent("");
      setImage(null); // Formu sıfırla
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="mb-4">
        <label className="block text-lg font-bold" htmlFor="title">
          Başlık:
        </label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-lg font-bold" htmlFor="content">
          İçerik:
        </label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded"
          rows={5}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-lg font-bold" htmlFor="image">
          Resim Yükle:
        </label>
        <input
          id="image"
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files?.[0] || null)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <button
        className="py-2 px-4 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        type="submit"
      >
        Gönder
      </button>
    </form>
  );
};

export default AddPostForm;
