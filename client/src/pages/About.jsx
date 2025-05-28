import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../assets/call/bg.png";
import paditji from "../assets/call/panditji.png";
import Client from "../components/core/Home/Client";
import { useTranslation } from "react-i18next";

const About = () => {
  const { i18n } = useTranslation();

  const isHindi = i18n.language === "hi";

  return (
    <div>
      <section
        className="py-16 md:py-24"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 backdrop-blur-sm rounded-lg py-10">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {isHindi ? "ज्योतिष ज्ञानी के बारे में" : "About Jyotish Gyani"}
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                {isHindi
                  ? "ज्योतिष ज्ञानी में आपका स्वागत है, वेदिक ज्योतिष की गहन दुनिया में आपका विश्वसनीय मार्गदर्शक। हम एक समर्पित टीम हैं जो आपकी जीवन यात्रा को प्राचीन ज्योतिष की बुद्धिमत्ता के माध्यम से प्रकाशित करने के लिए प्रतिबद्ध हैं। हमारा मिशन आपको आत्म-समझ और पूर्वदृष्टि प्रदान करना है, जिससे आप जीवन की जटिलताओं को स्पष्टता और आत्मविश्वास के साथ नेविगेट कर सकें।"
                  : "Welcome to Jyotish Gyani, your trusted guide into the profound world of Vedic astrology. We are a dedicated team of passionate individuals committed to illuminating your life's path through the ancient wisdom of Jyotish. Our mission is to empower you with self-understanding and foresight, helping you navigate life's complexities with clarity and confidence."}
              </p>
              <p className="text-lg text-gray-700 mb-8">
                {isHindi
                  ? "ज्योतिष ज्ञानी में, हम वेदिक ज्योतिष की समृद्ध विरासत और सटीकता को गहराई से महत्व देते हैं। हम आपको व्यक्तिगत और सूचनात्मक ज्योतिषीय मार्गदर्शन प्रदान करने का प्रयास करते हैं, जो समय-परीक्षित सिद्धांतों और आधुनिक व्याख्याओं पर आधारित है। हमें विश्वास है कि यह पवित्र ज्ञान आपकी ताकत, चुनौतियों, और अवसरों की गहरी समझ प्रदान कर सकता है।"
                  : "At Jyotish Gyani, we deeply value the rich heritage and accuracy of Vedic astrology. We strive to provide you with insightful and personalized astrological guidance, drawing upon time-tested principles and modern interpretations. We believe in the power of this sacred knowledge to offer profound insights into your strengths, challenges, and opportunities."}
              </p>
              <Link
                to="#services" // Or a dedicated "Our Services" page
                className="inline-flex items-center justify-center rounded-md bg-orange-600 px-6 py-3 text-lg font-medium text-white shadow-sm hover:bg-orange-700 transition-colors"
              >
                {isHindi ? "हमारी सेवाएं देखें" : "Explore Our Services"}
              </Link>
            </div>
            <div className="md:w-1/2">
              <img
                src={paditji} // Replace with an image relevant to astrology
                alt={isHindi ? "ज्योतिष ज्ञानी चित्रण" : "Jyotish Gyani Illustration"}
                width={500}
                height={500}
                className="mx-auto rounded-lg shadow-md"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <Client />

      <div className="max-w-7xl mx-auto p-5">
        <section className="py-10 px-4 ">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
            {isHindi
              ? "हमारे यूट्यूब चैनल पर ज्योतिष और अंक ज्योतिष के बारे में अधिक जानें"
              : "Know More About Astrology And Numerology On Our Youtube Channel"}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <iframe
              className="w-full h-64 md:h-72"
              src="https://www.youtube.com/embed/60K3FiQVU-w?si=2xPWEx1yshsfBW46"
              title={isHindi ? "यूट्यूब वीडियो प्लेयर" : "YouTube video player"}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>

            <iframe
              className="w-full h-64 md:h-72"
              src="https://www.youtube.com/embed/qxiKjzQwsMQ?si=51_KQKSIv5ABMBU-"
              title={isHindi ? "यूट्यूब वीडियो प्लेयर" : "YouTube video player"}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>

            <iframe
              className="w-full h-64 md:h-72"
              src="https://www.youtube.com/embed/2PAvG88mz3s?si=JIQO0U4z2lSpgkYe"
              title={isHindi ? "यूट्यूब वीडियो प्लेयर" : "YouTube video player"}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>

          <div className="text-center">
            <a
              href="https://www.youtube.com/@jyotishgyani3884/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-red-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition"
            >
              {isHindi ? "सब्सक्राइब करें" : "Subscribe"}
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
