import { useState } from "react";
import { ChevronDown, ChevronUp, Check, Star } from "lucide-react";

import HeroSection from "../components/core/couple/HeroSection";
import Instruction from "../components/core/couple/Instruction";
import price from "../assets/couple/price.webp";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function CoupleKundali() {
  const [activeAccordion, setActiveAccordion] = useState(0);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const navitage = useNavigate();
  const handleNavigate = () => {
    navitage("/gemstone");
  };

  const { i18n } = useTranslation();

  const isHindi = i18n.language === "hi";

  const faqs = [
    {
      question: "Who can take this kundali?",
      answer:
        "It can be taken by any couple who wants matchmaking kundali to check the compatibility with the partners.",
    },
    {
      question: "How will I get the kundali?",
      answer:
        "Kundali will be sent to your registered email address within 3 working days.",
    },
    {
      question: "How to fill the data?",
      answer:
        "You have to fill in all information about males and females correctly for the proper analysis.",
    },
    {
      question: "In how many days will I get the kundali?",
      answer: "It will be sent to you within 3 working days.",
    },
    {
      question: "What if there are doshas (defects) in Kundali Matching?",
      answer:
        "If doshas such as Mangal Dosha or Nadi Dosha are found in Kundali Matching, remedies or solutions are suggested by astrologers to mitigate their effects and ensure a successful marriage.",
    },
    {
      question: "Is Kundali Matching only for arranged marriages?",
      answer:
        "While Kundali Matching is commonly practiced in arranged marriages, it can also be beneficial for couples in love marriages to understand their compatibility and potential challenges.",
    },
    {
      question: "Can Kundali Matching be done online?",
      answer:
        "Yes, you can avail our kundli matching report online through Jyotish Gyani.org, where Kundali Matching can be done by analysing the birth details of the bride and groom.",
    },
  ];

  const faqsEnglish = [
    {
      question: "Who can take this kundali?",
      answer:
        "It can be taken by any couple who wants matchmaking kundali to check the compatibility with the partners.",
    },
    {
      question: "How will I get the kundali?",
      answer:
        "Kundali will be sent to your registered email address within 3 working days.",
    },
    {
      question: "How to fill the data?",
      answer:
        "You have to fill in all information about males and females correctly for the proper analysis.",
    },
    {
      question: "In how many days will I get the kundali?",
      answer: "It will be sent to you within 3 working days.",
    },
    {
      question: "What if there are doshas (defects) in Kundali Matching?",
      answer:
        "If doshas such as Mangal Dosha or Nadi Dosha are found in Kundali Matching, remedies or solutions are suggested by astrologers to mitigate their effects and ensure a successful marriage.",
    },
    {
      question: "Is Kundali Matching only for arranged marriages?",
      answer:
        "While Kundali Matching is commonly practiced in arranged marriages, it can also be beneficial for couples in love marriages to understand their compatibility and potential challenges.",
    },
    {
      question: "Can Kundali Matching be done online?",
      answer:
        "Yes, you can avail our kundli matching report online through Jyotish Gyani.org, where Kundali Matching can be done by analysing the birth details of the bride and groom.",
    },
  ];

  const faqsHindi = [
    {
      question: "यह कुंडली कौन ले सकता है?",
      answer:
        "यह किसी भी जोड़े द्वारा लिया जा सकता है जो साथी के साथ मैचिंग कुंडली के माध्यम से संगतता जांचना चाहते हैं।",
    },
    {
      question: "मुझे कुंडली कैसे मिलेगी?",
      answer:
        "कुंडली आपके पंजीकृत ईमेल पते पर 3 कार्य दिवसों के अंदर भेज दी जाएगी।",
    },
    {
      question: "डेटा कैसे भरना है?",
      answer:
        "सही विश्लेषण के लिए आपको पुरुषों और महिलाओं की सभी जानकारी सही ढंग से भरनी होगी।",
    },
    {
      question: "मुझे कुंडली कितने दिनों में मिलेगी?",
      answer: "यह आपको 3 कार्य दिवसों के अंदर भेजी जाएगी।",
    },
    {
      question: "अगर कुंडली मिलान में दोष हों तो क्या होगा?",
      answer:
        "यदि कुंडली मिलान में मंगल दोष या नाड़ी दोष जैसे दोष पाए जाते हैं, तो ज्योतिषी उनके प्रभावों को कम करने और सफल विवाह सुनिश्चित करने के लिए उपाय या समाधान सुझाते हैं।",
    },
    {
      question: "क्या कुंडली मिलान केवल अरेंज मैरिज के लिए है?",
      answer:
        "जबकि कुंडली मिलान आमतौर पर अरेंज मैरिज में किया जाता है, यह प्रेम विवाह में जोड़ों के लिए भी उनके संगतता और संभावित चुनौतियों को समझने में लाभकारी हो सकता है।",
    },
    {
      question: "क्या कुंडली मिलान ऑनलाइन किया जा सकता है?",
      answer:
        "हाँ, आप ज्योतिष ज्ञानी.org के माध्यम से ऑनलाइन कुंडली मिलान रिपोर्ट प्राप्त कर सकते हैं, जहाँ वर-वधू के जन्म विवरणों का विश्लेषण करके कुंडली मिलान किया जाता है।",
    },
  ];
  const testimonials = [
    {
      text: "Mujhe Jyotish Gyani ji ki banai hui couple kundali se apne married life ke bare Mai bhot si chize milli or kya kar sakte hai Pata chala.",
      author: "Rachna Singh",
    },
    {
      text: "I started following Jyotish Gyani on youtube and recently I have ordered a couple of kundali in-depth analyses, it helped me to know many things, about myself and my wife to improve our married life.",
      author: "Kalpana Verma",
    },
    {
      text: "We have ordered a couple of kundali for our daughter and son-in-law. It has given us confidence that they will have a good life ahead.",
      author: "Vishal Purohit",
    },
    {
      text: "I have ordered a couple of matchmaking kundali and have received the best analysis for a better future with my partner and remedies to live a peaceful life.",
      author: "Raman",
    },
  ];

  const features = [
    {
      title_en: "Guna Milan",
      title_hi: "गुण मिलान",
      icon: "🤝",
      color: "bg-maroon-700",
    },
    {
      title_en: "Manglik Dosha",
      title_hi: "मांगलिक दोष",
      icon: "✡️",
      color: "bg-maroon-700",
    },
    {
      title_en: "Strength Of Navamsa Chart",
      title_hi: "नवम्सा चार्ट की ताकत",
      icon: "📊",
      color: "bg-maroon-700",
    },
    {
      title_en: "Bright Planets",
      title_hi: "चमकते ग्रह",
      icon: "☀️",
      color: "bg-maroon-700",
    },
    {
      title_en: "Indicating Planets",
      title_hi: "संकेत देने वाले ग्रह",
      icon: "🪐",
      color: "bg-maroon-700",
    },
    {
      title_en: "Physical & Emotional Compatibility",
      title_hi: "शारीरिक और भावनात्मक अनुकूलता",
      icon: "❤️",
      color: "bg-maroon-700",
    },
    {
      title_en: "Financial Compatibility",
      title_hi: "आर्थिक अनुकूलता",
      icon: "💰",
      color: "bg-maroon-700",
    },
    {
      title_en: "Vedic Compatibility",
      title_hi: "वैदिक अनुकूलता",
      icon: "🧘",
      color: "bg-maroon-700",
    },
  ];

  const categories = [
    {
      title: "Horoscope Compatibility",
      subtitle: "Financial Stability",
    },
    {
      title: "Moral & Financial Security",
      subtitle: "Marriage Stability Health",
    },
    {
      title: "Personality And Future",
      subtitle: "In-Depth Nakshatra Analysis",
    },
    {
      title: "Happiness And Love Life",
      subtitle: "Prosperity & Daily Life",
    },
    {
      title: "About Children",
      subtitle: "Long-Lasting Love Remedies",
    },
  ];
  function translateCategoryTitle(title) {
    const map = {
      "Horoscope Compatibility": "कुंडली संगतता",
      "Moral & Financial Security": "नैतिक एवं वित्तीय सुरक्षा",
      "Personality And Future": "व्यक्तित्व और भविष्य",
      "Happiness And Love Life": "खुशी और प्रेम जीवन",
      "About Children": "बच्चों के बारे में",
    };
    return map[title] || title;
  }

  function translateCategorySubtitle(subtitle) {
    const map = {
      "Financial Stability": "आर्थिक स्थिरता",
      "Marriage Stability Health": "विवाह स्थिरता और स्वास्थ्य",
      "In-Depth Nakshatra Analysis": "गहराई से नक्षत्र विश्लेषण",
      "Prosperity & Daily Life": "समृद्धि एवं दैनिक जीवन",
      "Long-Lasting Love Remedies": "दीर्घकालिक प्रेम उपचार",
    };
    return map[subtitle] || subtitle;
  }

  function translateTestimonial(text) {
    // If your testimonials are already bilingual, just return the Hindi version here or map it.
    const map = {
      "Mujhe Jyotish Gyani ji ki banai hui couple kundali se apne married life ke bare Mai bhot si chize milli or kya kar sakte hai Pata chala.":
        "मुझे ज्योतिष ज्ञानी जी की बनाई हुई कपल कुंडली से अपने विवाहित जीवन के बारे में बहुत सी बातें समझ में आईं और क्या कर सकते हैं पता चला।",
      "I started following Jyotish Gyani on youtube and recently I have ordered a couple of kundali in-depth analyses, it helped me to know many things, about myself and my wife to improve our married life.":
        "मैंने ज्योतिष ज्ञानी को यूट्यूब पर फॉलो करना शुरू किया और हाल ही में मैंने कपल कुंडली की गहन विश्लेषण मंगवाई, इससे मुझे और मेरी पत्नी के बारे में कई बातें जानने को मिलीं, जिससे हमारा विवाहित जीवन बेहतर हुआ।",
      "We have ordered a couple of kundali for our daughter and son-in-law. It has given us confidence that they will have a good life ahead.":
        "हमने अपनी बेटी और दामाद के लिए कपल कुंडली मंगवाई। इससे हमें भरोसा मिला कि उनका भविष्य अच्छा रहेगा।",
      "I have ordered a couple of matchmaking kundali and have received the best analysis for a better future with my partner and remedies to live a peaceful life.":
        "मैंने कपल मैचमेकिंग कुंडली मंगवाई और अपने साथी के साथ बेहतर भविष्य के लिए सर्वश्रेष्ठ विश्लेषण और शांतिपूर्ण जीवन के लिए उपचार प्राप्त किए।",
    };
    return map[text] || text;
  }

  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <HeroSection isHindi={isHindi} />

      {/* Introduction Section */}
      <Instruction isHindi={isHindi} />

      {/* Features Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-amber-400 to-amber-500">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-maroon-800 text-center mb-4">
            {isHindi
              ? "यह सिर्फ कुंडली मिलान के बारे में नहीं है।"
              : "This Is Not Just About Matching The Horoscopes."}
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold text-maroon-700 text-center mb-8">
            {isHindi
              ? "यह दोनों साझेदारों के आंतरिक स्वभाव की गहरी समझ पाने के बारे में है।"
              : "It Is About Getting A Deep Insight Into The Inner Self Of Both Partners."}
          </h3>
          <p className="text-center text-lg mb-12">
            {isHindi
              ? "इसके अलावा, हम निम्नलिखित मापदंडों के आधार पर दोनों व्यक्तियों के लिए परिष्कृत कुंडली मिलान प्रदान करते हैं:"
              : "Further, we are able to provide a refined horoscope matching for the two individuals on the basis of the following parameters:"}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center"
              >
                <div
                  className={`w-16 h-16 ${feature.color} rounded-full flex items-center justify-center mb-4 text-white text-2xl`}
                >
                  <span>{feature.icon}</span>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-maroon-800">
                  {isHindi ? feature.title_hi : feature.title_en}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 ">
        <div className="max-w-4xl mx-auto">
          <div className="bg-maroon-900 rounded-lg overflow-hidden shadow-2xl">
            <div className="aspect-w-16 aspect-h-9 relative">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/6rWAjDpOKVA?si=2kvcWQKo7ABTwGTs"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
                className="rounded-lg shadow-xl"
              ></iframe>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center cursor-pointer">
                  <div className="w-0 h-0 border-t-8 border-b-8 border-l-16 border-t-transparent border-b-transparent border-l-white ml-2"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-maroon-800 mb-4">
              {isHindi
                ? "कुंडली मिलान जरूरी है यह सुनिश्चित करने के लिए कि..."
                : "A Kundali Matching Is A Must To Make Sure That..."}
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold text-maroon-700">
              {isHindi
                ? "आप एक संगत जीवन साथी के साथ जुड़ रहे हैं। इसे संयोग पर छोड़ना बहुत बड़ा जोखिम है!"
                : "You're Set Up With A Compatible Spouse. It's Too Much To Leave This To Chance!"}
            </h3>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        id="buy-now"
        className="py-16 px-4 md:px-8 lg:px-16 bg-cover bg-center relative"
      >
        <div
          className="max-w-4xl mx-auto rounded-xl relative bg-[#800909] z-10"
          style={{ backgroundImage: `url(${price})` }}
        >
          <div className="bg-maroon-900 rounded-lg p-8 text-center shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {/* Optional heading here if needed */}
            </h2>

            <div className="flex flex-wrap justify-center gap-6 mb-8 text-amber-300">
              <div className="flex items-center">
                <span className="mr-2">⭐</span>
                <span>
                  {isHindi ? "लाल किताब उपचार" : "Lal Kitab Remedies"}
                </span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">⭐</span>
                <span>
                  {isHindi
                    ? "8+ भारतीय भाषाओं में उपलब्ध"
                    : "Available in 8+ Indian Languages"}
                </span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">⭐</span>
                <span>
                  {isHindi
                    ? "रत्न और रुद्राक्ष सिफारिश"
                    : "Gem Rudraksha Recommendation"}
                </span>
              </div>
            </div>

            <button
              onClick={handleNavigate}
              className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-md transition duration-300 ease-in-out transform hover:scale-105 uppercase"
            >
              {isHindi
                ? "अपनी जोड़ी मिलान कुंडली खरीदें"
                : "Buy Your Couple Matchmaking Kundali"}
            </button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 ">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-maroon-800 text-center mb-12">
            {isHindi ? "कुंडली मिलान" : "Kundali Matching"}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-amber-400 rounded-lg overflow-hidden shadow-lg"
              >
                <div className="p-6 text-center">
                  <h3 className="text-lg font-bold text-maroon-800 mb-2">
                    {/* Assuming titles are in English, translate here if needed */}
                    {isHindi
                      ? translateCategoryTitle(category.title)
                      : category.title}
                  </h3>
                </div>
                <div className="bg-maroon-800 p-4 text-center">
                  <p className="text-white">
                    {isHindi
                      ? translateCategorySubtitle(category.subtitle)
                      : category.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-amber-400 to-amber-500">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-maroon-800 text-center mb-4">
            {isHindi ? "हमारे खुश ग्राहक" : "OUR HAPPY CUSTOMERS"}
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold text-maroon-700 text-center mb-12">
            {isHindi
              ? "हमने हजारों लोगों की मदद की है"
              : "We've Helped Thousands Of People"}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
                <div className="mb-4">
                  <div className="flex text-amber-500">
                    <Star className="fill-current" />
                    <Star className="fill-current" />
                    <Star className="fill-current" />
                    <Star className="fill-current" />
                    <Star className="fill-current" />
                  </div>
                </div>
                <p className="text-gray-700 mb-4 italic">
                  {isHindi
                    ? translateTestimonial(testimonial.text)
                    : testimonial.text}
                </p>
                <p className="font-bold text-maroon-800">
                  {testimonial.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-cream-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-maroon-800 text-center mb-12">
            {isHindi
              ? "अक्सर पूछे जाने वाले प्रश्न"
              : "FREQUENTLY ASKED QUESTIONS"}
          </h2>

          <div className="space-y-4">
            {(isHindi ? faqsHindi : faqsEnglish).map((faq, index) => (
              <div
                key={index}
                className="bg-amber-300 rounded-lg overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left font-bold text-maroon-800 flex justify-between items-center"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={activeAccordion === index}
                  aria-controls={`faq-content-${index}`}
                  id={`faq-header-${index}`}
                >
                  <span>{faq.question}</span>
                  {activeAccordion === index ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </button>

                {activeAccordion === index && (
                  <div
                    id={`faq-content-${index}`}
                    role="region"
                    aria-labelledby={`faq-header-${index}`}
                    className="px-6 py-4 bg-white"
                  >
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="bg-maroon-800 hover:bg-maroon-900 text-white font-bold py-3 px-8 rounded-md transition duration-300 ease-in-out transform hover:scale-105">
              {isHindi
                ? "अपनी प्रीमियम व्यक्तिगत मैचिंग कुंडली ₹511/- में खरीदें"
                : "Buy Your Premium Personalised Matching Kundali ₹511/- Only"}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
