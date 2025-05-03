"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";

export default function FloatingHearts() {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    // Create initial hearts
    const initialHearts = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100, // random x position (0-100%)
      size: Math.random() * 20 + 10, // random size (10-30px)
      delay: Math.random() * 5, // random delay (0-5s)
      duration: Math.random() * 10 + 10, // random duration (10-20s)
      rotate: Math.random() * 360, // random rotation (0-360deg)
    }));

    setHearts(initialHearts);

    // Add new hearts periodically
    const interval = setInterval(() => {
      setHearts((prev) => [
        ...prev,
        {
          id: Date.now(),
          x: Math.random() * 100,
          size: Math.random() * 20 + 10,
          delay: 0,
          duration: Math.random() * 10 + 10,
          rotate: Math.random() * 360,
        },
      ]);

      // Remove old hearts to prevent too many elements
      if (hearts.length > 30) {
        setHearts((prev) => prev.slice(1));
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [hearts.length]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <AnimatePresence>
        {hearts.map((heart) => (
          <motion.div
            key={heart.id}
            initial={{
              y: "110vh",
              x: `${heart.x}%`,
              rotate: heart.rotate,
              opacity: 0.7,
            }}
            animate={{
              y: "-10vh",
              opacity: [0.7, 0.9, 0.7, 0.5, 0],
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: heart.duration,
              delay: heart.delay,
              ease: "linear",
            }}
            className="absolute"
            style={{ width: heart.size, height: heart.size }}
          >
            <Heart className="w-full h-full text-red-500 fill-red-500" />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
