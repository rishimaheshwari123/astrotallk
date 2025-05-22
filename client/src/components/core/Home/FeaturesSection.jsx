import bgImg from "../../../assets/accivement.webp"; // update path if needed
import { FaCertificate, FaGem, FaTags, FaCheckCircle } from "react-icons/fa";
import { GiNetworkBars } from "react-icons/gi";
import { TbWorldLatitude } from "react-icons/tb";
import { useTranslation } from "react-i18next";

const FeaturesSection = () => {
  const { i18n } = useTranslation();
  const isHindi = i18n.language === "hi";

  const features = [
    {
      icon: <FaCertificate size={32} className="text-[#6e0000]" />,
      label: isHindi ? "लाइसेंस प्राप्त गाइड" : "Licensed Guide",
    },
    {
      icon: <FaGem size={32} className="text-[#6e0000]" />,
      label: isHindi ? "रत्न सक्रियण" : "Gemstone Activation",
    },
    {
      icon: <FaCheckCircle size={32} className="text-[#6e0000]" />,
      label: isHindi ? "प्रामाणिक उत्पाद" : "Authentic Products",
    },
    {
      icon: <FaTags size={32} className="text-[#6e0000]" />,
      label: isHindi ? "सर्वश्रेष्ठ मूल्य" : "Best Pricing",
    },
    {
      icon: <TbWorldLatitude size={32} className="text-[#6e0000]" />,
      label: isHindi ? "ज्योतिषीय रूप से प्रमाणित" : "Astrologically Verified",
    },
    {
      icon: <GiNetworkBars size={32} className="text-[#6e0000]" />,
      label: isHindi ? "उत्पादों की विस्तृत विविधता" : "Wide Variety Of Products",
    },
  ];

  return (
    <section
      className="py-10 px-4 rounded-md mx-auto max-w-7xl flex flex-wrap justify-center gap-6 text-center bg-[#912929] bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="relative max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
        {features.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mb-2">
              {item.icon}
            </div>
            <p className="text-sm md:text-xl text-white font-semibold">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
