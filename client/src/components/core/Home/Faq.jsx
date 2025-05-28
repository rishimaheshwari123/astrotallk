"use client"

import { useState } from "react"
import { FaChevronDown, FaChevronUp } from "react-icons/fa"
import { useTranslation } from "react-i18next"

const faqsData = [
  {
    question: {
      en: "How can I book a consultation call with Jyotish Gyani?",
      hi: "मैं ज्योतिष ज्ञानी से परामर्श कॉल कैसे बुक कर सकता/सकती हूँ?"
    },
    answer: {
      en: "You can book a consultation call with Jyotish Gyani by visiting our Consultation Call page. There, you'll find details about available options and how to schedule your appointment.",
      hi: "आप हमारी वेबसाइट पर 'Consultation Call' पेज पर जाकर परामर्श कॉल बुक कर सकते हैं। वहां आपको उपलब्ध विकल्पों और अपॉइंटमेंट शेड्यूल करने की जानकारी मिलेगी।"
    }
  },
  {
    question: {
      en: "Does Jyotish Gyani provide astrology courses?",
      hi: "क्या ज्योतिष ज्ञानी ज्योतिष शास्त्र के कोर्स भी कराते हैं?"
    },
    answer: {
      en: "Yes, Jyotish Gyani offers courses for all levels. Visit the 'Courses' section of our site for curriculum, schedule, and enrollment details.",
      hi: "हाँ, ज्योतिष ज्ञानी सभी स्तरों के लिए कोर्स उपलब्ध कराते हैं। कोर्स की जानकारी, समय सारणी और नामांकन के लिए हमारी वेबसाइट के 'Courses' सेक्शन में जाएं।"
    }
  },
  {
    question: {
      en: "What is 'The Jyotish Gyani Show'?",
      hi: "'द ज्योतिष ज्ञानी शो' क्या है?"
    },
    answer: {
      en: "It’s an online show where Jyotish Gyani shares astrological insights and answers viewer questions. Watch it on YouTube and social media.",
      hi: "यह एक ऑनलाइन शो है जहाँ ज्योतिष ज्ञानी ज्योतिषीय जानकारियाँ साझा करते हैं और दर्शकों के सवालों के जवाब देते हैं। इसे YouTube और सोशल मीडिया पर देखें।"
    }
  },
  {
    question: {
      en: "What types of consultations are offered?",
      hi: "किस प्रकार की परामर्श सेवाएं उपलब्ध हैं?"
    },
    answer: {
      en: "Consultations include birth chart analysis, career advice, relationship readings, and more—tailored to your unique needs.",
      hi: "परामर्श में जन्म कुंडली विश्लेषण, कैरियर सलाह, संबंधों की जानकारी आदि शामिल हैं — आपकी विशेष जरूरतों के अनुसार।"
    }
  },
  {
    question: {
      en: "How accurate are the predictions?",
      hi: "पूर्वानुमान कितने सटीक होते हैं?"
    },
    answer: {
      en: "Predictions are based on years of Vedic astrology expertise. They provide guidance, but your choices shape your destiny.",
      hi: "पूर्वानुमान वेदिक ज्योतिष के वर्षों के अनुभव पर आधारित होते हैं। ये मार्गदर्शन देते हैं, लेकिन आपकी पसंद आपके भविष्य को बनाती है।"
    }
  },
  {
    question: {
      en: "Where can I find more info about services?",
      hi: "सेवाओं के बारे में अधिक जानकारी कहाँ मिल सकती है?"
    },
    answer: {
      en: "All service details including consultations, courses, and shows are available on our website and social media channels.",
      hi: "सभी सेवाओं की जानकारी जैसे परामर्श, कोर्स और शो हमारी वेबसाइट और सोशल मीडिया चैनल पर उपलब्ध हैं।"
    }
  },
  {
    question: {
      en: "How do I contact customer support?",
      hi: "मैं ग्राहक सहायता से कैसे संपर्क करूँ?"
    },
    answer: {
      en: "Visit the 'Contact Us' page and submit your query. Our support team will get back to you promptly.",
      hi: "'Contact Us' पेज पर जाकर अपना प्रश्न भेजें। हमारी सहायता टीम शीघ्र आपकी सहायता करेगी।"
    }
  },
  {
    question: {
      en: "Is my personal information confidential?",
      hi: "क्या मेरी व्यक्तिगत जानकारी गोपनीय रहेगी?"
    },
    answer: {
      en: "Absolutely. We maintain full confidentiality for all client data and follow strict privacy policies.",
      hi: "बिल्कुल। हम सभी क्लाइंट डेटा की पूर्ण गोपनीयता बनाए रखते हैं और कड़ी गोपनीयता नीतियों का पालन करते हैं।"
    }
  },
]

const FAQ = ({ title }) => {
  const [openIndex, setOpenIndex] = useState(null)
  const { t, i18n } = useTranslation()

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="py-16 md:py-20 max-w-7xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-[#FF8C84] mb-4">
          {title || t("home.frequentlyAskedQuestions")}
        </h2>
        <p className="text-black text-lg max-w-2xl mx-auto">
          {i18n.language === "hi"
            ? "यहाँ कुछ सामान्य प्रश्न हैं। यदि आपको अधिक जानकारी चाहिए, तो बेझिझक संपर्क करें!"
            : "Here are some common questions. If you need more info, feel free to reach out!"}
        </p>
      </div>

      <div className="space-y-6">
        {faqsData.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md border border-[#FF8C84] transition-all duration-300"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left p-5 flex items-center justify-between cursor-pointer focus:outline-none"
              aria-expanded={openIndex === index}
              aria-controls={`faq-${index}`}
            >
              <span className="text-lg font-semibold text-[#FF8C84]">
                {i18n.language === "hi" ? item.question.hi : item.question.en}
              </span>
              {openIndex === index ? (
                <FaChevronUp className="w-6 h-6 text-[#FF8C84]" />
              ) : (
                <FaChevronDown className="w-6 h-6 text-[#FF8C84]" />
              )}
            </button>
            <div
              id={`faq-${index}`}
              className={`overflow-hidden px-5 transition-all duration-300 ${
                openIndex === index ? "max-h-[500px] py-4" : "max-h-0"
              }`}
            >
              <p className="text-black text-base leading-relaxed">
                {i18n.language === "hi" ? item.answer.hi : item.answer.en}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FAQ
