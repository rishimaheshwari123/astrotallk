import {
  GraduationCap,
  Heart,
  UserRound,
  Briefcase,
  Users,
  BabyIcon as Child,
} from "lucide-react";

export default function ConsultationBenefits({ isHindi }) {
  // Hindi benefits array
  const benefitsHindi = [
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "करियर",
      description:
        "कई छात्र कन्फ्यूज रहते हैं और परीक्षा के बाद क्या करें, नौकरियों और भविष्य के बारे में जानना चाहते हैं। एक ज्योतिषी से बात करें जो आपकी जन्म कुंडली और ग्रहों के प्रभाव का विश्लेषण करके सही करियर विकल्प चुनने में मदद कर सके।",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "प्रेम और संबंध",
      description:
        "अपने साथी के साथ सर्वश्रेष्ठ प्रेम राशिफल संगतता की तलाश है? जबकि रिश्तों में समस्याएँ आ सकती हैं, सटीक कुंडली मिलान और भविष्यवाणियाँ सफल और समृद्ध संबंध के लिए मार्गदर्शन प्रदान करती हैं।",
    },
    {
      icon: <UserRound className="h-8 w-8" />,
      title: "स्वास्थ्य",
      description:
        "वैदिक ज्योतिष भविष्यवाणियाँ स्वास्थ्य समस्याओं या चोटों का पहले से अनुमान लगा सकती हैं। यह पूर्वदृष्टि आपकी कुंडली के विभिन्न जीवन क्षेत्रों पर ग्रहों के प्रभाव से प्राप्त होती है।",
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: "व्यवसाय",
      description:
        "जब आप व्यवसाय शुरू कर रहे हों या बड़े निर्णय ले रहे हों, तो सफलता और असफलता के बीच संतुलन बना रहता है। व्यवसाय की सफलता के लिए ज्योतिष से सही मार्गदर्शन लेना महत्वपूर्ण है।",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "विवाह",
      description:
        "भारत में सदियों से कुंडली मिलान विवाह के लिए बहुत महत्वपूर्ण है। जोड़े की कुंडली मिलान के लिए ज्योतिषी से बात करें। गुण मिलान, मंगल दोष और संगतता विश्लेषण प्राप्त करें।",
    },
    {
      icon: <Child className="h-8 w-8" />,
      title: "संतान",
      description:
        "प्राचीन भारतीय वैदिक ज्योतिष दोनों साथी की कुंडली की जांच करता है, खासकर उन लोगों के लिए जो बच्चों के बारे में जानना चाहते हैं और यहाँ तक कि बच्चे का नाम भी पूर्वानुमानित करते हैं।",
    },
  ];

  // English benefits array (aapka original)
  const benefitsEnglish = [
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "Career",
      description:
        "Many students get confused and want to know what to do after exams, about jobs, and the future. Talk to an astrologer who can assist you in making the right career choices by analyzing your birth chart and planetary influences.",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Love & Relationship",
      description:
        "Looking for the best love horoscope compatibility with your partner? While relationship issues may arise, accurate horoscope matching & predictions can provide insights for a successful, prosperous bond.",
    },
    {
      icon: <UserRound className="h-8 w-8" />,
      title: "Health",
      description:
        "Vedic astrology predictions can forecast health issues or injuries before they appear in your body. This foresight arises from your kundli's impact on various life aspects, guided by celestial houses.",
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: "Business",
      description:
        "When you're starting a business or facing big choices, it's like being on a see-saw, balancing between success and failure. To boost your chances of business success, getting accurate insights from astrology is important.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Marriage",
      description:
        "For centuries in India, the practice of Kundli Milan for marriage is very important. Talk to an astrologer for horoscope matching of couples. Get Gun Milan, Mangal Dosha, & compatibility analysis.",
    },
    {
      icon: <Child className="h-8 w-8" />,
      title: "Child",
      description:
        "The ancient Indian Vedic astrology examines the horoscopes of both partners, especially for those interested in knowing about having children and even predicting the child's name.",
    },
  ];

  const benefits = isHindi ? benefitsHindi : benefitsEnglish;

  return (
    <section className="w-full py-12 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#800909]">
            {isHindi
              ? "सिर्फ एक कॉल में जीवन बदलने वाले बेहतरीन समाधान"
              : "Best Life Changing Solutions in Just One Call"}
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto my-4"></div>
          <p className="text-muted-foreground md:text-lg max-w-3xl mx-auto">
            {isHindi
              ? "आपके जीवन की समस्याओं का समाधान सही व्यक्ति से एक कॉल में छुपा हो सकता है। आपके जीवन में की गई कई कॉल्स में से कुछ ही वास्तव में आपकी समस्याओं को सुलझा पाते हैं।"
              : "Who would have thought that the answers to your life's challenges lie in a single call with the right person? Out of all the calls you make in your life, only a few can really help solve your problems."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-amber-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4 text-[#800909]">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#800909]">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
