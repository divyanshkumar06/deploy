"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { socialMedia } from '@/data/index'; // Adjust import path

export const SocialIcons = () => {
  // Robust link opening with fallback
  const openLink = (url: string) => {
    try {
      // First try standard window.open
      const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
      if (!newWindow) {
        // Fallback for popup blockers
        window.location.href = url;
      }
    } catch (e) {
      // Ultimate fallback
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
          className="cursor-pointer relative"
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
            className="w-6 h-6 object-contain"
            priority
          />
          {/* Visual feedback on hover */}
          <div className="absolute inset-0 hover:bg-blue-500/10 rounded-full transition-all" />
        </motion.div>
      ))}
    </div>
  );
};