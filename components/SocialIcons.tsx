"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

// Define the type for social media items
type SocialMediaItem = {
  id: number;
  img: string;
  link: string;
  alt: string;
};

// Sample data (replace with your actual import)
const socialMedia: SocialMediaItem[] = [
  {
    id: 1,
    img: '/icons/facebook.svg',
    link: 'https://facebook.com',
    alt: 'Facebook'
  },
  {
    id: 2,
    img: '/icons/twitter.svg',
    link: 'https://twitter.com',
    alt: 'Twitter'
  },
  {
    id: 3,
    img: '/icons/instagram.svg',
    link: 'https://instagram.com',
    alt: 'Instagram'
  },
  {
    id: 4,
    img: '/icons/linkedin.svg',
    link: 'https://linkedin.com',
    alt: 'LinkedIn'
  }
];

export const SocialIcons = () => {
  const openLink = (url: string) => {
    try {
      const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
      if (!newWindow) {
        window.location.href = url;
      }
    } catch (e) {
      console.error('Error opening link:', e);
      window.location.href = url;
    }
  };

  return (
    <div className="flex gap-4 items-center">
      {socialMedia.map((item) => (
        <motion.div
          key={item.id}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="cursor-pointer relative w-6 h-6"
          onClick={() => openLink(item.link)}
          aria-label={item.alt}
          role="link"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && openLink(item.link)}
        >
          <Image
            src={item.img}
            alt={item.alt}
            width={24}
            height={24}
            className="w-full h-full object-contain"
            priority
          />
          <div className="absolute inset-0 hover:bg-blue-500/10 rounded-full transition-all" />
        </motion.div>
      ))}
    </div>
  );
};