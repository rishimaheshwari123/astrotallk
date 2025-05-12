import React, { useEffect, useRef } from "react";

const StarBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Initial size
    resizeCanvas();

    // Handle resize
    window.addEventListener("resize", resizeCanvas);

    // Star properties
    const stars = [];
    const starCount = Math.min(
      100,
      Math.floor((window.innerWidth * window.innerHeight) / 15000)
    ); // Responsive star count

    // Create stars
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2,
        speed: 0.05 + Math.random() * 0.1,
      });
    }

    // Animation
    let animationFrameId;
    let animationStartTime;

    const animate = (timestamp) => {
      if (!animationStartTime) animationStartTime = timestamp;
      const elapsedTime = timestamp - animationStartTime;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw stars
      stars.forEach((star) => {
        ctx.beginPath();

        // Twinkle effect based on time
        const opacity =
          0.5 + 0.5 * Math.sin(elapsedTime * 0.001 + star.x + star.y);

        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();

        // Move stars slightly for subtle twinkling effect
        star.y += star.speed;

        // Reset position if star moves off screen
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
    />
  );
};

export default StarBackground;
