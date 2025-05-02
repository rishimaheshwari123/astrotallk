import React from "react";
import { Link } from "react-router-dom";
import bgImage from "../../../assets/servicebg.webp"; // adjust path as needed
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineFavorite, MdOutlineStar, MdPeopleAlt } from "react-icons/md";
import { GiGemPendant } from "react-icons/gi";

const services = [
  {
    name: "Sade Sati Report",
    description:
      "Understand the impact of Saturn's transit and its effects on your life.",
    link: "/reports/sade-sati",
    icon: <MdOutlineStar size={48} />,
  },
  {
    name: "Love Report",
    description:
      "Gain insights into your love life and relationships through astrology.",
    link: "/reports/love",
    icon: <MdOutlineFavorite size={48} />,
  },
  {
    name: "Premium Personalized Kundali",
    description: "Get a detailed Kundali prepared based on your birth chart.",
    link: "/reports/premium-personalized-kundli",
    icon: <MdOutlineStar size={48} />,
  },
  {
    name: "Premium Couple Kundali",
    description:
      "Match Kundalis and understand compatibility with your partner.",
    link: "/reports/premium-couple-kundli",
    icon: <MdPeopleAlt size={48} />,
  },
  {
    name: "Call Consultation",
    description:
      "Talk to experienced astrologers for personal guidance astrology.",
    link: "/call-consultation",
    icon: <FaPhoneAlt size={48} />,
  },
  {
    name: "Gemstone",
    description:
      "Find the right gemstones to enhance your luck and remove doshas.",
    link: "/gemstone",
    icon: <GiGemPendant size={48} />,
  },
];

const ServicesSection = () => {
  return (
    <div
      className="py-16 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-red-800 mb-10">
          Our Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-[#ff5c16] text-white rounded-full p-6 inline-flex items-center justify-center">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-red-800">
                {service.name}
              </h3>
              <p className="text-sm text-gray-600 mt-2 mb-4">
                {service.description}
              </p>
              <Link
                to={service.link}
                className="inline-block px-5 py-2 bg-red-700 text-white rounded hover:bg-red-800 text-sm"
              >
                Order Now
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
