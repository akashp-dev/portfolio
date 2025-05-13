"use client";

import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export function NameLight() {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(true);
  
  // Transform scroll position to opacity
  const opacity = useTransform(scrollY, [0, 100], [1, 0]);
  
  // Handle scroll visibility
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition < 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      className="absolute inset-0 -z-10"
      style={{ opacity }}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ 
        scale: [0.8, 1.2, 0.8],
        opacity: [0.3, 0.6, 0.3],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-violet-500/20 to-purple-500/20 blur-3xl rounded-full" />
    </motion.div>
  );
} 