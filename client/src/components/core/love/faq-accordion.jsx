"use client";
import { useState } from "react";
import { Heart } from "lucide-react";
import { useTranslation } from "react-i18next";

const faqsData = {
  en: [
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
  ],
  hi: [
    {
      question: "यह रिपोर्ट व्यक्तिगत कैसे है?",
      answer:
        "आपकी प्रेम रिपोर्ट आपके जन्म की तारीख, समय और स्थान के आधार पर बनाई जाती है, जिससे सटीक जानकारी मिलती है।",
    },
    {
      question: "क्या यह रिपोर्ट मेरे भविष्य के साथी की भविष्यवाणी कर सकती है?",
      answer:
        "यह रिपोर्ट आपकी प्रेम व्यक्तित्व और संगतता के बारे में जानकारी देती है, जिससे आप सही साथी को आकर्षित कर सकते हैं।",
    },
    {
      question: "अगर मैं पहले से संबंध में हूं तो?",
      answer:
        "बहुत अच्छा! यह रिपोर्ट आपको अपने साथी को बेहतर समझने और अपने रिश्ते को मजबूत करने में मदद करती है।",
    },
    {
      question: "अगर मेरे प्रेम जीवन में चुनौतियां हैं तो क्या मुझे उपाय मिलेंगे?",
      answer:
        "हाँ! रिपोर्ट में प्रेम से जुड़ी समस्याओं को हल करने के लिए व्यावहारिक उपाय शामिल हैं।",
    },
    {
      question: "मुझे अपनी प्रेम रिपोर्ट कैसे मिलेगी?",
      answer:
        "आपकी व्यक्तिगत प्रेम रिपोर्ट खरीद के 3 कार्य दिवसों के भीतर ईमेल के माध्यम से भेजी जाएगी।",
    },
  ],
};

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0);
  const { i18n } = useTranslation();

  const isHindi = i18n.language === "hi";
  const faqs = isHindi ? faqsData.hi : faqsData.en;

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
            <span className="font-bold text-lg">{faq.question}</span>
            {openIndex === index ? (
              <Heart className="h-5 w-5 text-red-500 fill-red-500" />
            ) : (
              <Heart className="h-5 w-5 text-red-500" />
            )}
          </button>

          {openIndex === index && (
            <div className="p-4 bg-white">
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
