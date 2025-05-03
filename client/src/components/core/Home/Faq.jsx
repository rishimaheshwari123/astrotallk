import React, { useState, useRef, useEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqsData = [
  {
    question: "How can I book a consultation call with Jyotish Gyani?",
    answer:
      "You can book a consultation call with Jyotish Gyani by visiting our [Consultation Call](link to consultation page) on the website. There, you'll find information on the available consultation options and how to schedule your appointment.",
  },
  {
    question: "Does Jyotish Gyani provide astrology courses?",
    answer:
      "Yes, Jyotish Gyani offers comprehensive astrology courses for beginners to advanced learners. Visit the 'Courses' section of our website for details on course curriculum, schedules, and enrollment.",
  },
  {
    question: "What is 'The Jyotish Gyani Show'?",
    answer:
      "'The Jyotish Gyani Show' is a popular online program where Jyotish Gyani discusses various astrological topics, answers viewer questions, and provides insights into current astrological events. You can watch it on our YouTube channel and social media platforms.",
  },
  {
    question: "What types of consultations does Jyotish Gyani offer?",
    answer:
      "Jyotish Gyani offers a variety of personalized consultations, including birth chart analysis, relationship compatibility readings, career guidance, and more. Each session is tailored to your specific needs and questions.",
  },
  {
    question: "How accurate are Jyotish Gyani's predictions?",
    answer:
      "Jyotish Gyani's predictions are based on his extensive knowledge of Vedic astrology and years of experience. While astrology can provide valuable insights, it's important to remember that it serves as a guide, and individual choices play a significant role in shaping one's future.",
  },
  {
    question:
      "Where can I find more information about Jyotish Gyani's services?",
    answer:
      "You can find detailed information about Jyotish Gyani's services, including consultations, courses, and shows, on our official website. You can also follow him on social media for updates and astrological insights.",
  },
  {
    question: "How do I contact customer support?",
    answer:
      "For any inquiries or assistance, please visit the 'Contact Us' page on our website. You can submit a query through the contact form, and our support team will get back to you as soon as possible.",
  },
  {
    question: "Is my personal information kept confidential?",
    answer:
      "Yes, we prioritize the privacy and confidentiality of your personal information. All consultations and interactions are conducted with the utmost discretion and in accordance with our privacy policy.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [containerHeight, setContainerHeight] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const updateHeight = () => {
      if (containerRef.current) {
        setContainerHeight(containerRef.current.clientHeight);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className=" py-16  md:py-20 max-w-7xl mx-auto " ref={containerRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold  bg-clip-text text-[#FF8C84] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-black text-lg max-w-2xl mx-auto">
            Here are some common questions we receive. If you have any other
            questions, please don't hesitate to contact us.
          </p>
        </div>
        <div className="space-y-6">
          {faqsData.map((item, index) => (
            <div
              key={index}
              className="bg-white backdrop-blur-md rounded-xl shadow-lg border border-[#FF8C84] transition-all duration-300"
            >
              <div
                className="flex items-center justify-between p-5 cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg  font-semibold text-[#FF8C84]">
                  {item.question}
                </h3>
                {openIndex === index ? (
                  <FaChevronUp className="w-7 h-7 text-[#FF8C84] transition-transform rotate-180" />
                ) : (
                  <FaChevronDown className="w-7 h-7 text-[#FF8C84] transition-transform" />
                )}
              </div>
              {openIndex === index && (
                <div className="p-5 border-t border-white/10 overflow-hidden transition-all duration-300">
                  <p className="text-black whitespace-pre-line leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
