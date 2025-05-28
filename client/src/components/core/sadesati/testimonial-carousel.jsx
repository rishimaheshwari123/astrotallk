import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const testimonialsData = {
  en: [
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
  ],
  hi: [
    {
      id: 1,
      name: "जॉन डो",
      title: "सीईओ, कंपनी A",
      text: "यह रिपोर्ट बेहद जानकारीपूर्ण थी। इसने मुझे मेरे रिश्ते को बेहतर समझने और व्यावहारिक सलाह देने में मदद की।",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 2,
      name: "जेन स्मिथ",
      title: "मार्केटिंग मैनेजर, कंपनी B",
      text: "शुरुआत में संदेह था, लेकिन इस रिपोर्ट ने मेरी उम्मीदों से बढ़कर काम किया। मैं इसे ज़रूर सुझाऊँगा!",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 3,
      name: "पीटर जोन्स",
      title: "सॉफ्टवेयर इंजीनियर, कंपनी C",
      text: "जो लोग अपने प्रेम जीवन में सुधार लाना चाहते हैं उनके लिए यह जरूरी है। इसमें दी गई व्यक्तिगत उपाय एकदम सही थे।",
      image: "/placeholder.svg?height=80&width=80",
    },
  ],
};

export default function TestimonialCarousel() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const { i18n } = useTranslation();
  const lang = i18n.language === "hi" ? "hi" : "en";
  const testimonials = testimonialsData[lang];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handlePrev = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const testimonial = testimonials[currentTestimonial];

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
