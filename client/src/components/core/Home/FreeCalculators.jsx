import panchangImg from "../../../assets/panchng.svg"
import nakshatraImg from "../../../assets/nakshtra.svg"
import kundaliImg from "../../../assets/kundli.svg"
import moonImg from "../../../assets/moon.svg"
import bgImage from "../../../assets/servicebg.webp"
import { useTranslation } from "react-i18next"

const FreeCalculators = ({ title }) => {
  const { i18n } = useTranslation()

  const isHindi = i18n.language === "hi"

  const cards = [
    {
      title: isHindi ? "नि:शुल्क पंचांग" : "Free Panchang",
      desc: isHindi ? "कुंडली, भविष्यवाणी और ज्योतिष के साथ" : "With Horoscope, Kundali, And Predictions",
      img: panchangImg,
    },
    {
      title: isHindi ? "नि:शुल्क नक्षत्र" : "Free Nakshatra",
      desc: isHindi ? "कुंडली, भविष्यवाणी और ज्योतिष के साथ" : "With Horoscope, Kundali, And Predictions",
      img: nakshatraImg,
    },
    {
      title: isHindi ? "नि:शुल्क कुंडली मिलान" : "Free Kundali Matching",
      desc: isHindi ? "कुंडली, भविष्यवाणी और ज्योतिष के साथ" : "With Horoscope, Kundali, And Predictions",
      img: kundaliImg,
    },
    {
      title: isHindi ? "नि:शुल्क चंद्र राशि" : "Free Moon Sign",
      desc: isHindi ? "कुंडली, भविष्यवाणी और ज्योतिष के साथ" : "With Horoscope, Kundali, And Predictions",
      img: moonImg,
    },
  ]

  return (
    <div className="py-12 bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${bgImage})` }}>
      <h2 className="text-3xl font-bold text-center text-red-800 mb-10">
        {title || (isHindi ? "नि:शुल्क कैलकुलेटर" : "Free Calculators")}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
        {cards.map((card, index) => (
          <div key={index} className="bg-[#FFF5F0] rounded-xl shadow-md p-6 flex items-center gap-6">
            <img src={card.img} alt={card.title} className="w-20 h-20 rotate-image" />
            <div>
              <h3 className="text-lg font-semibold text-red-800">{card.title}</h3>
              <p className="text-sm text-gray-700 mb-3">{card.desc}</p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded">
                {isHindi ? "अभी पाएं" : "Get it Now"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FreeCalculators
