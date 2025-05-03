import bgImg from "../../../assets/accivement.webp"; // update path if needed
import { FaCertificate, FaGem, FaTags, FaCheckCircle } from "react-icons/fa";
import { GiNetworkBars } from "react-icons/gi";
import { TbWorldLatitude } from "react-icons/tb";

const features = [
  {
    icon: <FaCertificate size={32} className="text-[#6e0000]" />,
    label: "Licensed Guide",
  },
  {
    icon: <FaGem size={32} className="text-[#6e0000]" />,
    label: "Gemstone Activation",
  },
  {
    icon: <FaCheckCircle size={32} className="text-[#6e0000]" />,
    label: "Authentic Products",
  },
  {
    icon: <FaTags size={32} className="text-[#6e0000]" />,
    label: "Best Pricing",
  },
  {
    icon: <TbWorldLatitude size={32} className="text-[#6e0000]" />,
    label: "Astrologically Verified",
  },
  {
    icon: <GiNetworkBars size={32} className="text-[#6e0000]" />,
    label: "Wide Variety Of Products",
  },
];

const FeaturesSection = () => {
  return (
    <section
      className="py-10 px-4 rounded-md mx-auto max-w-7xl flex flex-wrap justify-center gap-6 text-center bg-[#912929] bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {/* Background overlay */}
      {/* <div className="absolute inset-0 bg-black opacity-30 rounded-xl"></div> */}

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
