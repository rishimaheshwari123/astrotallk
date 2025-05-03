import { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    title: "CEO, Company A",
    text: "This report was incredibly insightful. It helped me understand my relationship better and gave me practical advice.",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    name: "Jane Smith",
    title: "Marketing Manager, Company B",
    text: "I was skeptical at first, but this report exceeded my expectations. I highly recommend it!",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    name: "Peter Jones",
    title: "Software Engineer, Company C",
    text: "A must-have for anyone looking to improve their love life. The personalized remedies were spot on.",
    image: "/placeholder.svg?height=80&width=80",
  },
];

export default function TestimonialCarousel() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      <div className="bg-blue-900/20 p-6 rounded-lg border border-blue-800">
        <div className="flex items-center mb-4">
          {/* <img
            src={testimonials[currentTestimonial].image || "/placeholder.svg"}
            alt={testimonials[currentTestimonial].name}
            width={80}
            height={80}
            className="rounded-full mr-4"
          /> */}
          <div>
            <h3 className="text-xl font-bold text-amber-400">
              {testimonials[currentTestimonial].name}
            </h3>
            <p className="text-gray-300">
              {testimonials[currentTestimonial].title}
            </p>
          </div>
        </div>
        <p>{testimonials[currentTestimonial].text}</p>
      </div>
    </div>
  );
}
