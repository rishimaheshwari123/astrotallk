"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingStars() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    // Create initial stars
    const initialStars = Array.from({ length: 100 }, (_, i) => ({
      id: i,
      x: Math.random() * 100, // random x position (0-100%)
      y: Math.random() * 100, // random y position (0-100%)
      size: Math.random() * 3 + 1, // random size (1-4px)
      opacity: Math.random() * 0.5 + 0.3, // random opacity (0.3-0.8)
      duration: Math.random() * 3 + 2, // random duration (2-5s)
      delay: Math.random() * 5, // random delay (0-5s)
    }));

    setStars(initialStars);

    // Add new stars periodically
    const interval = setInterval(() => {
      setStars((prev) => [
        ...prev,
        {
          id: Date.now(),
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.5 + 0.3,
          duration: Math.random() * 3 + 2,
          delay: 0,
        },
      ]);

      // Remove old stars to prevent too many elements
      if (stars.length > 150) {
        setStars((prev) => prev.slice(1));
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <AnimatePresence>
        {stars.map((star) => (
          <motion.div
            key={star.id}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: star.opacity,
              scale: [1, 1.5, 1],
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: star.duration,
              delay: star.delay,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
            className="absolute bg-white rounded-full"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
