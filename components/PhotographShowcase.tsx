"use client";

import { useRouter } from "next/navigation";
import { FaCameraRetro } from "react-icons/fa";
import Image from "next/image";
import { PinContainer } from "./ui/Pin";
import { useState } from "react";
import { motion } from "framer-motion";

type Category = {
  title: string;
  image: string;
  description: string;
  slug: string;
  images: string[];
};

const categories: Category[] = [
  {
    title: "PORTRAIT",
    image: "/dk1.jpg",
    description: "Capturing the soul of the streets through my lens.",
    slug: "portrait",
    images: ["/portrait1.jpg", "/portrait2.jpg", "/portrait3.jpg"],
  },
  {
    title: "EVENT",
    image: "/freestyle.jpg",
    description: "Immortalizing unforgettable moments in every event.",
    slug: "event",
    images: [
      "/IMG_5222.jpg",
      "/IMG_5268.jpg",
      "/IMG_5112.jpg",
      "/IMG_6056.jpg",
      "/IMG_6055.jpg",
      "/IMG_6037.jpg",
      "/IMG_6036.jpg",
      "/IMG_6035.jpg",
      "/IMG_5951.jpg",
      "/IMG_5938.jpg",
      "/IMG_5937.jpg",
      "/IMG_5925.jpg",
      "/IMG_5917.jpg",
      "/IMG_5913.jpg",
      "/IMG_5779.jpg",
    ],
  },
  {
    title: "WILDLIFE",
    image: "/IMG_2935.jpg",
    description: "Unleashing creativity with spontaneous shots.",
    slug: "wildlife",
    images: ["/wildlife1.jpg", "/wildlife2.jpg", "/wildlife3.jpg"],
  },
];

const PhotographShowcase = () => {
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleViewMore = (category: Category) => {
    router.push(
      `/category/${category.slug}?data=${encodeURIComponent(
        JSON.stringify(category)
      )}`
    );
  };

  const popOutVariants = {
    initial: { 
      scale: 1,
      zIndex: 0,
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)"
    },
    hover: {
      scale: 1.15,
      zIndex: 10,
      boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.3)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
        mass: 0.5
      }
    }
  };

  return (
    <div className="py-20 relative">
      <h1 className="heading text-center">
        A glimpse of my <span className="text-purple">Photography</span>
      </h1>

      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {categories.map((category, index) => (
          <div
            key={index}
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw] relative"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <PinContainer
              title={category.title}
              href={`/category/${category.slug}`}
            >
              <motion.div
                className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10 rounded-xl cursor-pointer"
                variants={popOutVariants}
                initial="initial"
                animate={hoveredIndex === index ? "hover" : "initial"}
                onClick={() => setSelectedImage(category.image)}
                style={{
                  transformOrigin: "center center",
                  transformStyle: "preserve-3d"
                }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover rounded-lg"
                    onError={(e) => {
                      console.error("Failed to load image:", category.image);
                      const target = e.target as HTMLImageElement;
                      target.src = "https://via.placeholder.com/600x400";
                    }}
                  />
                  {hoveredIndex === index && (
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 rounded-lg"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </div>
              </motion.div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base text-center line-clamp-1">
                {category.title}
              </h1>

              <p className="lg:text-xl font-light text-sm text-center text-gray-400 mt-2 line-clamp-2">
                {category.description}
              </p>

              <motion.div
                className="flex items-center justify-center mt-7 mb-3 cursor-pointer hover:underline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleViewMore(category)}
              >
                <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                  View More Shots
                </p>
                <FaCameraRetro className="ms-3" color="#CBACF9" />
              </motion.div>
            </PinContainer>
          </div>
        ))}
      </div>

      {selectedImage && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            className="relative w-full max-w-6xl h-auto"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <Image
              src={selectedImage}
              alt="Enlarged preview"
              width={1600}
              height={900}
              className="rounded-xl shadow-2xl object-contain max-h-[90vh]"
              onError={(e) => {
                console.error("Failed to load image:", selectedImage);
                const target = e.target as HTMLImageElement;
                target.src = "https://via.placeholder.com/1600x900";
              }}
            />
            <button 
              className="absolute -top-16 right-0 text-white text-3xl hover:text-purple transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default PhotographShowcase;