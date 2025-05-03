import React from "react";
import panchangImg from "../../../assets/panchng.svg";
import nakshatraImg from "../../../assets/nakshtra.svg";
import kundaliImg from "../../../assets/kundli.svg";
import moonImg from "../../../assets/moon.svg";
import bgImage from "../../../assets/servicebg.webp"; // main section background

const cards = [
  {
    title: "Free Panchang",
    desc: "With Horoscope, Kundali, And Predictions",
    img: panchangImg,
  },
  {
    title: "Free Nakshatra",
    desc: "With Horoscope, Kundali, And Predictions",
    img: nakshatraImg,
  },
  {
    title: "Free Kundali Matching",
    desc: "With Horoscope, Kundali, And Predictions",
    img: kundaliImg,
  },
  {
    title: "Free Moon Sign",
    desc: "With Horoscope, Kundali, And Predictions",
    img: moonImg,
  },
];

const FreeCalculators = () => {
  return (
    <div
      className="py-12 bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <h2 className="text-3xl font-bold text-center text-red-800 mb-10">
        Free Calculators
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-[#FFF5F0] rounded-xl shadow-md p-6 flex items-center gap-6"
          >
            <img
              src={card.img}
              alt={card.title}
              className="w-20 h-20 rotate-image"
            />
            <div>
              <h3 className="text-lg font-semibold text-red-800">
                {card.title}
              </h3>
              <p className="text-sm text-gray-700 mb-3">{card.desc}</p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded">
                Get it Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FreeCalculators;
