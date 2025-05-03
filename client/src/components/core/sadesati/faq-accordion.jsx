"use client";
import { useState } from "react";
import { Heart } from "lucide-react";

const faqs = [
  {
    question: "How is this report personalized?",
    answer:
      "Your Love Report is created based on your Date, Time & Place of Birth, ensuring accurate insights.",
  },
  {
    question: "Can this report predict my future partner?",
    answer:
      "The report provides insights into your love personality and compatibility, helping you attract the right partner.",
  },
  {
    question: "What if I'm already in a relationship?",
    answer:
      "Great! This report helps you understand your partner better and strengthen your bond.",
  },
  {
    question: "Will I get remedies if my love life has challenges?",
    answer:
      "Yes! The report includes practical remedies to resolve love-related issues.",
  },
  {
    question: "How do I receive my Love Report?",
    answer:
      "Your Personalized Love Report will be emailed to you within 3 working days after purchase.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border border-pink-200 rounded-lg overflow-hidden"
        >
          <button
            className={`w-full text-left p-4 flex justify-between items-center ${
              openIndex === index ? "bg-pink-100" : "bg-white"
            }`}
            onClick={() => toggleFAQ(index)}
          >
            <span className="font-bold text-black cursor-pointer text-lg">
              {faq.question}
            </span>
            {openIndex === index ? (
              <Heart className="h-5 w-5 text-red-500 fill-red-500" />
            ) : (
              <Heart className="h-5 w-5 text-red-500" />
            )}
          </button>

          {openIndex === index && (
            <div className="p-4 bg-white text-black cursor-pointer">
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
