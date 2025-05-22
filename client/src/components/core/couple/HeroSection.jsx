import bg from "../../../assets/couple/mainbg.webp";
import book from "../../../assets/couple/book.webp";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

const HeroSection = ({ isHindi }) => {
  return (
    <section
      className="relative py-16 px-4 md:px-8 lg:px-16 bg-cover bg-center bg-no-repeat h-auto lg:h-[80vh]"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="rounded-xl p-4 md:p-8 h-full">
        <div className="max-w-7xl mx-auto h-full">
          <div className="flex flex-col md:flex-row items-center h-full md:gap-36 gap-0">
            {/* Left content */}
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-maroon-800 mb-4">
                {isHindi
                  ? "कुंडली मिलन | कुंडली मैचिंग | शादी के लिए राशिफल मिलान"
                  : "Kundali Milan | Kundali Matching | Horoscope Matching For Marriage"}
              </h1>
              <h2 className="text-xl md:text-2xl italic text-maroon-700 mb-6">
                {isHindi
                  ? "(अपने परफेक्ट मैच को खोजें कूपल मैच मेकिंग कुंडली के साथ)"
                  : "(Find Your Perfect Match With Couple Match Making Kundali)"}
              </h2>

              <div className="flex flex-col sm:flex-row gap-8 mb-8">
                {/* Feature 1 */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl">😊</span>
                  </div>
                  <div>
                    <p className="text-xl font-bold">{isHindi ? "5 लाख+" : "5 lakh+"}</p>
                    <p>{isHindi ? "खुश ग्राहक" : "Happy Customers"}</p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4">
                    <Check className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-xl font-bold">100%</p>
                    <p>{isHindi ? "सटीक भविष्यवाणियाँ" : "Accurate Predictions"}</p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <Link
                to="/gemstone"
                className="inline-block bg-white text-maroon-800 border border-maroon-800 font-bold py-3 px-8 rounded-md transition duration-300 ease-in-out hover:bg-maroon-800 hover:text-white"
              >
                {isHindi
                  ? "ऑर्डर करें प्रीमियम पर्सनलाइज्ड कुंडली मैचिंग →"
                  : "Order Now Premium Personalised Kundli Matching →"}
              </Link>
            </div>

            {/* Image Section */}
            <div className="flex">
              <img
                src={book}
                alt={isHindi ? "कुंडली मैचिंग बुक" : "Kundali Matching Book"}
                className="object-contain h-[70vh]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
