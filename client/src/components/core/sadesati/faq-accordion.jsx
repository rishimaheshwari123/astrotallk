"use client";
import { useState } from "react";
import { Heart } from "lucide-react";

const faqs = [
  {
    question: {
      en: "How is this report personalized?",
      hi: "यह रिपोर्ट कैसे व्यक्तिगत बनाई जाती है?",
    },
    answer: {
      en: "Your Love Report is created based on your Date, Time & Place of Birth, ensuring accurate insights.",
      hi: "आपकी लव रिपोर्ट आपकी जन्म तिथि, समय और स्थान के आधार पर बनाई जाती है, जिससे सटीक जानकारी मिलती है।",
    },
  },
  {
    question: {
      en: "Can this report predict my future partner?",
      hi: "क्या यह रिपोर्ट मेरे भविष्य के साथी की भविष्यवाणी कर सकती है?",
    },
    answer: {
      en: "The report provides insights into your love personality and compatibility, helping you attract the right partner.",
      hi: "यह रिपोर्ट आपकी प्रेम व्यक्तित्व और अनुकूलता की जानकारी देती है, जिससे सही साथी को आकर्षित करने में मदद मिलती है।",
    },
  },
  {
    question: {
      en: "What if I'm already in a relationship?",
      hi: "अगर मैं पहले से ही एक रिश्ते में हूं तो क्या होगा?",
    },
    answer: {
      en: "Great! This report helps you understand your partner better and strengthen your bond.",
      hi: "शानदार! यह रिपोर्ट आपको अपने साथी को बेहतर समझने और आपके संबंध को मजबूत करने में मदद करती है।",
    },
  },
  {
    question: {
      en: "Will I get remedies if my love life has challenges?",
      hi: "अगर मेरे प्रेम जीवन में समस्याएं हैं तो क्या उपाय मिलेंगे?",
    },
    answer: {
      en: "Yes! The report includes practical remedies to resolve love-related issues.",
      hi: "हाँ! यह रिपोर्ट प्रेम से जुड़ी समस्याओं को हल करने के लिए व्यावहारिक उपायों को शामिल करती है।",
    },
  },
  {
    question: {
      en: "How do I receive my Love Report?",
      hi: "मुझे अपनी लव रिपोर्ट कैसे प्राप्त होगी?",
    },
    answer: {
      en: "Your Personalized Love Report will be emailed to you within 3 working days after purchase.",
      hi: "आपकी व्यक्तिगत लव रिपोर्ट आपको खरीदारी के 3 कार्यदिवसों के भीतर ईमेल कर दी जाएगी।",
    },
  },
];

export default function FAQAccordion({ isHindi }) {
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
              {isHindi ? faq.question.hi : faq.question.en}
            </span>
            {openIndex === index ? (
              <Heart className="h-5 w-5 text-red-500 fill-red-500" />
            ) : (
              <Heart className="h-5 w-5 text-red-500" />
            )}
          </button>

          {openIndex === index && (
            <div className="p-4 bg-white text-black cursor-pointer">
              <p>{isHindi ? faq.answer.hi : faq.answer.en}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
