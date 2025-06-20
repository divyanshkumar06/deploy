"use client";

import { useParams } from "next/navigation";
import Image from "next/image";

const CategoryPage = () => {
  const params = useParams();
  const category = params?.category as string;

  // Mock data for images (replace with your actual data)
  const images = {
    street: [
      "/street1.jpg",
      "/street2.jpg",
      "/street3.jpg",
    ],
    freestyle: [
      "/freestyle1.jpg",
      "/freestyle2.jpg",
      "/freestyle3.jpg",
    ],
    event: [
      "/event1.jpg",
      "/event2.jpg",
      "/event3.jpg",
    ],
  };

  // Get images based on the category
  const categoryImages = images[category as keyof typeof images] || [];

  return (
    <div className="py-20">
      <h1 className="heading text-center">
        {category ? `${category} ` : ""}
        <span className="text-purple">Gallery</span>
      </h1>

      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {categoryImages.map((image, index) => (
          <div key={index} className="w-96 h-64 rounded-lg overflow-hidden relative">
            <Image
              src={image}
              alt={`${category} ${index + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;