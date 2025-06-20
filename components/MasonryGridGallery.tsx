// pages/category/[slug].tsx
import { useRouter } from "next/router";

const MasonryGridGallery = () => {
  const router = useRouter();
  const { slug } = router.query; // Get the category slug from the URL

  // Function to generate random image URLs using Picsum
  const getRandomImageUrl = (width: number, height: number) => {
    return `https://picsum.photos/${width}/${height}?random=${Math.floor(Math.random() * 1000)}`;
  };

  // Generate random images for the category
  const categoryImages = Array.from({ length: 12 }, (_, index) =>
    getRandomImageUrl(400, 300) // Adjust width and height as needed
  );

  return (
    <div className="py-20">
      <h1 className="heading text-center">
        {slug} <span className="text-purple">Gallery</span>
      </h1>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 p-4">
        {categoryImages.map((image, index) => (
          <div key={index} className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg object-cover object-center"
                src={image}
                alt={`${slug} ${index + 1}`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MasonryGridGallery;