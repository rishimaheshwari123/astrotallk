import { ChevronDown } from "lucide-react";
import book from "../assets/kundli/book.webp";
import instuction from "../assets/couple/instruction.png";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
export default function PesonalizedKundli() {
  const navitage = useNavigate();
  const handleNavigate = () => {
    navitage("/gemstone");
  };

  const { i18n } = useTranslation();

  const isHindi = i18n.language === "hi";
  const language = i18n.language;

  const steps = {
    hi: [
      { step: 1, title: "अपनी जानकारी दर्ज करें" },
      { step: 2, title: "जन्म कुंडली तैयार करना" },
      { step: 3, title: "कुंडली विशेषज्ञ द्वारा विश्लेषण" },
      { step: 4, title: "कुंडली में समस्याओं का विश्लेषण" },
      { step: 5, title: "समस्याओं का समाधान प्रदान करना" },
    ],
    en: [
      { step: 1, title: "Enter Your Details" },
      { step: 2, title: "Preparation of Birth Charts" },
      { step: 3, title: "Charts Analysis by Best Kundli Expert" },
      { step: 4, title: "Analyzing Problems in your Kundli" },
      { step: 5, title: "Providing Solution of your problems" },
    ],
  };
  const benefits = {
    hi: [
      {
        title: "दोष और दशा का विश्लेषण",
        desc: "दोषों का विस्तृत रिपोर्ट – कुज (मंगल), शनि (शनि), राहु-केतु, दशा और उपाय।",
      },
      {
        title: "सभी योग रिपोर्ट",
        desc: "कुंडली में बने योग – हन, राजा, ग्रह मैत्री, बुधादित्य, और श्री योग।",
      },
      {
        title: "रत्न सुझाव",
        desc: "सर्वश्रेष्ठ रत्न विशेषज्ञ द्वारा आपके कुंडली के अनुसार रत्न पहनने की सलाह।",
      },
      {
        title: "पूजा सुझाव",
        desc: "कुंडली दोषों के उपाय के लिए पूजा और अनुष्ठान के सुझाव।",
      },
      {
        title: "अंक ज्योतिष सुझाव",
        desc: "संख्या विज्ञान के अनुसार आपकी व्यक्तित्व, स्वभाव और व्यवहार का विश्लेषण।",
      },
      {
        title: "1 वर्ष का मासिक पूर्वानुमान",
        desc: "आपके मासिक राशिफल का विस्तृत रिपोर्ट।",
      },
      {
        title: "10 वर्षों का वार्षिक पूर्वानुमान",
        desc: "आपके दशक का विस्तृत वार्षिक राशिफल।",
      },
      {
        title: "एस्ट्रोग्राफ / भावबल ग्राफ",
        desc: "आपकी कुंडली और राशिफल के आधार पर व्यक्तिगत एस्ट्रोग्राफ।",
      },
      {
        title: "एस्ट्रोपारिवार के विशेष सदस्यता",
        desc: "आपके समुदाय की विशेष सदस्यता का अवसर।",
      },
    ],
    en: [
      {
        title: "Dosh & Dasha's Analysis",
        desc: "Detailed report of doshas – Kuja (Mangal), Shani (Saturn), Rahu-Ketu, Dasha & remedies, from mantras to rituals.",
      },
      {
        title: "All Yog Report",
        desc: "Know about the yogs that are formed in your kundali-hana, Raja, Graha Maitri, Budhaditya, and Sri Yoga. Unlock wealth, career growth, relationships, intellect.",
      },
      {
        title: "Gemstone Recommendation",
        desc: "When, Why, & How to wear gems by the best gemologist in india. Get personalized gemstone recommendations based on your kundli report.",
      },
      {
        title: "Puja Recommendation",
        desc: "Puja's to do suggestions by studying Kundli's dosha remedies. The rituals are designed to balance life & bring positivity, based on grahas.",
      },
      {
        title: "Ank Jyotish Recommendation",
        desc: "A numerological analysis of your numbers gives out details of your personality, nature, and behaviors.",
      },
      {
        title: "Monthly Prediction for 1 Year",
        desc: "Know what this year has got for you through a detailed report of your monthly horoscope.",
      },
      {
        title: "Yearly Prediction for 10 Years",
        desc: "Know what this decade has got for you through a detailed report of your monthly horoscope.",
      },
      {
        title: "Astrograph / Bhavbal Graph",
        desc: "Get a personalized astrograph through your Kundali and horoscope analysis.",
      },
      {
        title: "Exclusive Access to Astroparivar",
        desc: "A chance to become an exclusive member of your huge community.",
      },
    ],
  };

  // 3. Pricing Section text
  const pricingText = {
    hi: {
      heading: "",
      features: [
        "10-वर्षीय भविष्यवाणी",
        "बाजार में सबसे कम दरें",
        "100 प्रतिशत सफलता दर",
      ],
      note: "नोट: कुंडली आदेशों की डिलीवरी समय 5 से 10 दिनों तक बढ़ा दी गई है। कृपया धैर्य रखें। हमारी टीम समय पर डिलीवरी सुनिश्चित करने के लिए काम कर रही है।",
      buttonText: "अपनी व्यक्तिगत कुंडली खरीदें",
    },
    en: {
      heading: "",
      features: [
        "10-Year Prediction",
        "Lowest Rates In The Market",
        "100 Percent Success Rate",
      ],
      note: "Note: We apologize to inform you that the delivery time for Kundali orders has been extended from 5 to 10 days. We appreciate your patience and understanding during this adjustment period. Our team is working diligently to ensure timely and accurate delivery.",
      buttonText: "BUY YOUR PERSONALIZED KUNDLI",
    },
  };

  const faqs = {
    hi: [
      {
        question:
          "क्या प्रीमियम कुंडली अंग्रेज़ी के अलावा अन्य भाषाओं में उपलब्ध है?",
        answer: "हाँ, प्रीमियम कुंडली 3 भारतीय भाषाओं में उपलब्ध है।",
      },
      {
        question: "क्या कुंडली को समझकर मेरा भविष्य बदला जा सकता है?",
        answer:
          "कुंडली आपको अपने भविष्य को समझने में मदद करती है। विशेषज्ञों की सलाह से आप अपने परिणामों को बेहतर बना सकते हैं।",
      },
      {
        question: "क्या ज्योतिष भविष्य को सही ढंग से बता सकता है?",
        answer:
          "ज्योतिष वेदों से प्राप्त विज्ञान है जो कुंडली के माध्यम से भविष्य की जानकारी देता है।",
      },
      {
        question: "मुझे कुंडली कब और कैसे मिलेगी?",
        answer:
          "आपको कुंडली 5 कार्यदिवसों के भीतर ईमेल के माध्यम से प्राप्त होगी। कृपया स्पैम और प्रमोशन फोल्डर भी देखें।",
      },
      {
        question: "कुंडली प्राप्त करने में कितना समय लगेगा?",
        answer: "5 कार्यदिवसों में कुंडली आपको प्राप्त हो जाएगी।",
      },
      {
        question: "मैं अपनी कुंडली कहाँ प्राप्त कर सकता हूँ?",
        answer:
          'आपकी कुंडली आपके मेल में भेजी जाएगी। अगर मुख्य फोल्डर में न हो तो "स्पैम" फोल्डर जांचें।',
      },
      {
        question: "व्यक्तिगत कुंडली रिपोर्ट कितनी सटीक होती है?",
        answer:
          "व्यक्तिगत कुंडली रिपोर्ट वेदिक सिद्धांतों पर आधारित अत्यंत सटीक ज्योतिष गणनाओं पर आधारित होती है।",
      },
      {
        question: "क्या व्यक्तिगत कुंडली रिपोर्ट में कुंडली मैचिंग शामिल है?",
        answer:
          "नहीं, कुंडली मैचिंग अलग रिपोर्ट होती है। आप कुंडली मैचिंग के लिए अलग से ऑर्डर कर सकते हैं।",
      },
    ],

    en: [
      {
        question:
          "Is Premium Kundali available in any language other than English?",
        answer: "Yes, the Premium Kundali is available in 3 Indian Languages.",
      },
      {
        question:
          "Can my future be changed through an understanding of kundali?",
        answer:
          "Kundali helps you understand what's in the future for you. Following expert guidance can positively influence your outcomes.",
      },
      {
        question: "Can Astrology predict the future accurately?",
        answer:
          "Astrology is a science derived from the Vedas, used to understand your Kundali and give insights about your future.",
      },
      {
        question: "How and when will I receive the Kundali?",
        answer:
          "You will receive your Kundali via email within 5 working days. Please check spam and promotions folders as well.",
      },
      {
        question: "In how many days will you receive your Kundali?",
        answer: "You will receive it within 5 working days.",
      },
      {
        question: "Where can I receive my Kundali?",
        answer:
          'You will receive your Kundali in your email. If not found in primary inbox, please check your "spam" folder.',
      },
      {
        question: "How accurate are personalized Kundali reports?",
        answer:
          "Personalized Kundali reports are highly accurate as they are based on precise Vedic astrological calculations.",
      },
      {
        question:
          "Is Kundali Matching included in a personalized Kundali report?",
        answer:
          "No, Kundali matching is a separate report and not included in personalized Kundali reports. You can order it separately.",
      },
    ],
  };
  return (
    <div className="min-h-screen bg-[#fff5f0]">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-50 to-orange-100">
        <div className="max-w-7xl mx-auto px-4 py-12 md:py-16 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 space-y-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#800909] font-bold">
              {isHindi
                ? "ऑनलाइन जन्म कुंडली रिपोर्ट के साथ अपना भविष्य खोजें!"
                : "Discover Your Future with Online Janam Kundli Report!"}
            </h1>
            <p className="text-gray-700">
              {isHindi
                ? "अपनी जीवन यात्रा का पता लगाएं और संघर्षों का समाधान करें – प्यार, पैसा, स्वास्थ्य और अधिक कुंडली के जन्म तिथि और समय के अनुसार केवल ₹499/- में"
                : "Unveil your life path & resolve struggles – Love, Money, Health & more with Kundali by date & time of birth in ₹499/-"}
            </p>
            <p className="text-gray-700">
              {isHindi
                ? "आपको आपकी प्रीमियम व्यक्तिगत कुंडली ऑनलाइन यानी ई-बुक फॉर्मेट में 5 कार्यदिवसों में प्राप्त होगी।"
                : "You will receive your Premium Personalized Kundli online i.e. in e-book format in 5 working days."}
            </p>
            <div className="flex flex-wrap gap-8 py-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-500">
                  <span className="text-2xl">😊</span>
                </div>
                <div>
                  <p className="font-medium">
                    {isHindi ? "5 लाख+" : "5 lakh+"}
                  </p>
                  <p className="text-sm">
                    {isHindi ? "संतुष्ट ग्राहक" : "Satisfied Customer"}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-500">
                  <span className="text-2xl">✓</span>
                </div>
                <div>
                  <p className="font-medium">
                    {isHindi ? "अनलॉक करें" : "Unlock"}
                  </p>
                  <p className="text-sm">
                    {isHindi ? "सटीक भविष्यवाणियाँ" : "Accurate Predictions"}
                  </p>
                </div>
              </div>
            </div>
            <button
              onClick={handleNavigate}
              className="bg-[#800909] cursor-pointer hover:bg-[#6a0606] text-white px-6 py-3 rounded-md font-medium flex items-center gap-2"
            >
              {isHindi
                ? "व्यक्तिगत जन्म कुंडली खरीदें"
                : "BUY PERSONALISED JANAM KUNDLI"}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
            <div className="relative w-64 h-80 md:w-80 md:h-96 animate-[spin_20s_linear_infinite]">
              <img
                src={book}
                alt={
                  isHindi
                    ? "प्रीमियम व्यक्तिगत कुंडली"
                    : "Premium Personalized Kundli"
                }
                width={600}
                height={400}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Make Your Dreams Come True Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <img
              src={instuction}
              alt={isHindi ? "कुंडली चार्ट" : "Kundli Chart"}
              width={400}
              height={400}
              className="mx-auto"
            />
          </div>
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-3xl md:text-4xl font-serif text-[#800909] font-bold">
              {isHindi ? "अपने सपनों को सच करें" : "Make Your Dreams Come True"}
            </h2>
            <p className="text-xl text-[#800909] font-medium">
              {isHindi
                ? "विशेषज्ञ ऑनलाइन जन्म कुंडली विश्लेषण रिपोर्ट के माध्यम से समाधान खोजें!"
                : "Discover Solutions through Expert Online Janam Kundli Analysis Report!"}
            </p>
            <p className="text-gray-700">
              {isHindi
                ? "जिस मुख्य उद्देश्य से जन्म कुंडली रिपोर्ट विकसित की जाती है और ऑनलाइन मेल के जरिए भेजी जाती है, वह आपकी जन्म कुंडली, ग्रहों, जन्म तिथि के विश्लेषण और भावों के माध्यम से आपके जीवन के अतीत, वर्तमान और भविष्य की भविष्यवाणियों की जांच करना है।"
                : "The main purpose with which one's janam Kundli report is developed and sent online via mail is to examine your life's past, present, and future predictions by studying your birth chart, planets, DOB Analysis and houses."}
            </p>
            <p className="text-gray-700">
              {isHindi
                ? "हमारे वैदिक विशेषज्ञ कुंडली रिपोर्ट में सभी प्रेम, करियर, विवाह और व्यापार से संबंधित समस्याओं के समाधान मिलते हैं।"
                : "Our Vedic expert kundali report finds solutions to all love, career, marriage & business more related problems."}
            </p>
            <button className="bg-[#ff5c16] hover:bg-[#e04e0f] text-white px-6 py-3 rounded-md font-medium">
              {isHindi ? "वीडियो देखें" : "WATCH VIDEO"}
            </button>
          </div>
        </div>
      </section>
      {/* Problems & Solutions Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-400">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: isHindi ? "रिश्ते की समस्याएँ" : "Relationship Problems",
                desc: isHindi
                  ? "क्या आप अपने परिवार और प्रियजनों के साथ स्वस्थ रिश्ते बनाने और बनाए रखने में संघर्ष कर रहे हैं? अपनी कुंडली रिपोर्ट में अपने जीवन साथी के बारे में जानें।"
                  : "Are you struggling to develop & maintain healthy relationships with your family and loved ones? Know about your life partner in your kundli report.",
                icon: "❤️‍🩹",
              },
              {
                title: isHindi ? "व्यवसाय की समस्याएँ" : "Business Problems",
                desc: isHindi
                  ? "व्यवसाय के लक्ष्य प्राप्त करने में संघर्ष कर रहे हैं? नुकसान, वित्तीय चुनौतियों को दूर करें। अपनी ऑनलाइन जन्म कुंडली रिपोर्ट में अपने वित्तीय विश्लेषण विवरण के साथ पैसा कमाएँ।"
                  : "Struggling to achieve business goals? Overcome Losses, Financial Challenges. Earn Money with your finance analysis details in your online janam kundli report.",
                icon: "💼",
              },
              {
                title: isHindi ? "वित्तीय परेशानियाँ" : "Financial Troubles",
                desc: isHindi
                  ? "वित्तीय परेशानियों के कारण जीवन यापन करने में कठिनाई? अपनी मेहनत की कमाई बचाने में असमर्थ? जन्म तिथि और समय के अनुसार विस्तृत कुंडली एवं वित्तीय विश्लेषण रिपोर्ट में प्रभावी समाधान खोजें।"
                  : "Struggling to Make Ends Meet Due to Financial Troubles? Unable to save your hard-earned money? Discover Effective Solutions in detailed Kundli & Financial analysis report by time & date of birth.",
                icon: "₹",
              },
              {
                title: isHindi ? "प्यार की परेशानियाँ" : "Love Troubles",
                desc: isHindi
                  ? "क्या आपके साथी से प्यार की कमी है? क्या आपका साथी आपमें रुचि खो रहा है? अपने रिश्ते में अप्रेम और असंतुष्ट महसूस कर रहे हैं? कुंडली रिपोर्ट में विशेषज्ञ सुझाव प्राप्त करें।"
                  : "Facing a lack of love from your partner? Is your partner losing interest in you? Feeling Unloved & Unhappy in Your Relationship? Get Expert Insights in kundli report.",
                icon: "❤️",
              },
              {
                title: isHindi ? "करियर संभावनाएँ" : "Career Prospects",
                desc: isHindi
                  ? "अपने सपनों की नौकरी पाने में चुनौतियों का सामना कर रहे हैं? सरकारी नौकरी परीक्षाओं में संघर्ष? कम ग्रेड? परीक्षा में सफल होने और नौकरी सुरक्षित करने के लिए पूरी करियर विश्लेषण रिपोर्ट प्राप्त करें, यहां तक कि विदेश में भी।"
                  : "Facing Challenges in getting dream job? Struggling with Government Job Exams? Low Grades? Get complete career analysis to Ace Exams & Secure Jobs, Even Abroad with online janam kundli report.",
                icon: "💼",
              },
              {
                title: isHindi ? "घर और आराम" : "Home and Luxury",
                desc: isHindi
                  ? "आधुनिक जीवनशैली की लालसा है? घर और पड़ोस में समस्याएँ? नया घर और जीवन बनाने में असमर्थ? अपनी कुंडली रिपोर्ट में समाधान और गहन विश्लेषण प्राप्त करें।"
                  : "Longing for a Luxurious Lifestyle? Have troubles at home & neighborhood? Unable to build a new home & life? Get solutions & in-depth analysis in Your Kundli Report.",
                icon: "✡️",
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* 5 Steps Process Section */}
      <section className="py-16 bg-gradient-to-r from-orange-50 to-orange-100 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif text-[#800909] font-bold text-center mb-12">
            {language === "hi"
              ? "अपनी कुंडली बनाने की 5 स्टेप्स प्रक्रिया"
              : "5 Steps Process of Making Your Kundali"}
          </h2>
          <div className="absolute top-28 left-0 right-0 h-0.5 bg-[#800909] hidden md:block"></div>

          <div className="flex flex-col md:flex-row justify-between gap-6 relative">
            {steps[language].map((item) => (
              <div
                key={item.step}
                className="flex flex-col items-center text-center z-10"
              >
                <div className="w-20 h-20 rounded-full bg-white border-2 border-[#800909] flex items-center justify-center mb-4">
                  <span className="text-xl font-serif text-[#800909] font-bold">
                    {language === "hi"
                      ? `स्टेप ${item.step}`
                      : `Step ${item.step}`}
                  </span>
                </div>
                <p className="text-sm md:text-base font-medium">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif text-[#800909] font-bold text-center mb-12">
            {language === "hi"
              ? "आपकी व्यक्तिगत ऑनलाइन जन्म कुंडली में आपको क्या मिलेगा"
              : "What Will You Get In Your Personalized Online Janam Kundli"}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {benefits[language].map((item, index) => (
              <div key={index} className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-lg font-serif text-[#800909] font-bold mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-[#800909] to-[#a61b18] p-8 rounded-lg text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {pricingText[language].heading}
            </h2>

            <div className="flex flex-wrap justify-center gap-4 mb-6">
              {pricingText[language].features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#FFC477] flex items-center justify-center"></div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <p className="text-sm mb-6">{pricingText[language].note}</p>

            <button
              onClick={handleNavigate}
              className="bg-[#ff5c16] cursor-pointer hover:bg-[#e04e0f] text-white px-8 py-3 rounded-md font-medium"
            >
              {pricingText[language].buttonText}
            </button>
          </div>
        </div>
      </section>
      const isHindi = true; // Ya false, jaisa aap toggle karna chahein
      <section className="py-12 bg-[#800909]">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-serif text-white font-bold">
              {isHindi ? (
                <>
                  आपकी <span className="text-[#F3DF89]">कुंडली</span> रास्ता
                  दिखाती है
                  <br />
                  लेकिन <span className="text-[#F3DF89]">सलाह</span> आपको
                  मार्गदर्शन करती है!
                </>
              ) : (
                <>
                  Your <span className="text-[#F3DF89]">Kundli</span> Shows The
                  Way
                  <br />
                  But <span className="text-[#F3DF89]">Consultation</span>{" "}
                  Guides You Through It!
                </>
              )}
            </h2>
          </div>
          <button
            onClick={handleNavigate}
            className="bg-gradient-to-r cursor-pointer from-[#F3DF89] to-[#F5C116] hover:from-[#F5C116] hover:to-[#F3DF89] text-[#800909] px-6 py-3 rounded-md font-medium"
          >
            {isHindi
              ? "मेरी कुंडली रिपोर्ट + सलाह ऑफर प्राप्त करें"
              : "Claim My Kundali Report + Consultation Offer"}
          </button>
        </div>
      </section>
      {/* FAQ Section - Complete Bilingual */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif text-[#800909] font-bold text-center mb-12">
            {isHindi
              ? "अक्सर पूछे जाने वाले प्रश्न"
              : "Frequently Asked Questions"}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {faqs[isHindi ? "hi" : "en"].map((item, index) => (
              <div
                key={index}
                className="border border-orange-200 rounded-lg overflow-hidden"
              >
                <div className="bg-[#ffa631] text-[#800909] p-4 font-medium flex justify-between items-center cursor-pointer">
                  {item.question}
                  {/* You can add toggle icon here */}
                </div>
                <div className="p-4 bg-white">
                  <p className="text-gray-700">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Happy Customers Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif text-[#800909] font-bold text-center mb-4">
            {isHindi ? "हमारे खुश ग्राहक" : "OUR HAPPY CUSTOMERS"}
          </h2>
          <h3 className="text-2xl font-serif text-[#800909] text-center mb-12">
            {isHindi
              ? "हमने हजारों लोगों की मदद की है"
              : "We've Helped Thousands Of People"}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-orange-50 p-6 rounded-lg shadow">
              <p className="text-gray-700 mb-4">
                {isHindi
                  ? "मैंने कई ऑनलाइन ज्योतिष सलाहकारों से सलाह ली है, लेकिन मुझे वैसा मार्गदर्शन नहीं मिला जैसा मैंने उम्मीद की थी। मैंने Instagram पर Astro Arun Pandit के बारे में जाना और व्यक्तिगत परामर्श लिया, जिससे मेरे सितारों का गहराई से विश्लेषण हुआ। मैंने अपनी समस्याओं का कारण जाना और समाधान पाया। धन्यवाद!"
                  : "I have consulted many online astrology consultants before but I never got what I expected. I wanted an in depth personalized study according to my horoscope. I got to know about Astro Arun Pandit through Instagram and then I also took personal consultancy with him and he analyzed my stars in detail. He also told why I am facing the problems and how long I might have to face the problems. After the detailed discussion I am feeling very relieved. I will also talk about my wife and child to Arun ji Thankyou so much."}
              </p>
              <p className="font-medium text-[#800909]">
                - {isHindi ? "बर्खा सनेसर" : "Barkha Sanesar"}
              </p>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg shadow">
              <p className="text-gray-700 mb-4">
                {isHindi
                  ? "मैंने Instagram पर Jyotish Gyani को फॉलो किया और अपनी व्यक्तिगत प्रीमियम कुंडली मंगवाई। मुझे पूरी जानकारी मिली और मुझे बताया गया कि मेरे वर्तमान और भविष्य की समस्याएँ क्या हैं। फिर मैंने पंडित जी से सलाह ली और वे उपाय बताए जो मुझे करना चाहिए। मैं अभी उनका पालन कर रहा हूँ और काफी संतुष्ट हूँ।"
                  : "I started following Jyotish Gyani on instagram and I also ordered personalized premium kundli for myself. I got detailed information and I have also been told about the problems that I was facing and will face in the future. To find solutions of the problems I took a consultation call with panditji And he told me all the remedies in detail that I should do for good luck. I am presently doing the remedies and I am quite satisfied with the positive feeling I have these days."}
              </p>
              <p className="font-medium text-[#800909]">
                - {isHindi ? "सुनिता चौरसिया" : "Sunita Chourasiya"}
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Buy Now Fixed Button */}
    </div>
  );
}
