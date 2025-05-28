import { motion } from "framer-motion";
import FloatingStars from "../components/core/sadesati/floating-stars";
import FAQAccordion from "../components/core/sadesati/faq-accordion";
import TestimonialCarousel from "../components/core/sadesati/testimonial-carousel";
import Client from "../components/core/Home/Client";
import bg from "../assets/sadesati/sadesati.png";
import book from "../assets/sadesati/book.webp";
import basic from "../assets/sadesati/basic.webp";
import plus from "../assets/sadesati/plus.webp";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function SadeSatiPage() {
  const navitage = useNavigate();
  const handleNavigate = () => {
    navitage("/gemstone");
  };

  const { i18n } = useTranslation();

  const isHindi = i18n.language === "hi";

  return (
    <main className="min-h-screen  text-white relative overflow-hidden">
      <section className="relative h-[60vh] md:h-auto flex items-center">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0 opacity-80"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundBlendMode: "overlay",
            backgroundColor: "rgba(0,10,30,0.7)",
          }}
        ></div>

        <FloatingStars />

        {/* Content */}
       <div className="container mx-auto px-4 sm:px-6 md:px-10 relative z-10 py-16 sm:py-20">
      <div className="flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Left Text Section */}
        <div className="w-full md:w-3/5 text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-snug text-white"
          >
            {isHindi
              ? "क्या जिंदगी आपको लगातार बाधाएं दे रही है?"
              : "Is Life Throwing One Obstacle After Another At You?"}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 leading-relaxed text-white"
          >
            {isHindi
              ? "विश्वास करें या नहीं, साढ़े साती आपके जीवन में नकारात्मक बदलावों का कारण हो सकता है! जानें ज्योतिष ज्ञानी की व्यक्तिगत साढ़े साती रिपोर्ट के माध्यम से।"
              : "Believe it or not, Sade Sati could be the reason for your life going south! Find out how in Jyotish Gyani's personalized Sade Sati Report."}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <button
              onClick={handleNavigate}
              className="bg-gradient-to-r cursor-pointer from-amber-500 to-yellow-600 text-black font-semibold py-2.5 sm:py-3 px-6 sm:px-8 rounded-md text-base sm:text-lg hover:from-amber-600 hover:to-yellow-700 transition-all"
            >
              {isHindi ? "अपनी रिपोर्ट अभी ऑर्डर करें" : "Order Your Report Now"}
            </button>
          </motion.div>
        </div>

        {/* Right Image & Badges */}
      </div>
    </div>
      </section>

      <Client />

      {/* What is Sade Sati */}
      <section className="py-16 bg-gradient-to-b from-blue-900 to-blue-950">
        <div className="container mx-auto px-4 md:px-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-3/5 mb-10 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                {isHindi
                  ? "साढ़े साती रिपोर्ट क्या है?"
                  : "What Is Sade Sati Report?"}
              </h2>
              <p className="text-lg mb-6 text-white">
                {isHindi
                  ? "साढ़े साती वैदिक ज्योतिष में एक महत्वपूर्ण अवधि है जो लगभग 7.5 वर्षों तक चलती है। यह तब शुरू होती है जब शनि आपकी जन्म चंद्र राशि से गुजरता है, जिससे जीवन के विभिन्न क्षेत्रों पर प्रभाव पड़ता है।"
                  : "Sade Sati is a significant astrological period in Vedic astrology that spans approximately 7.5 years. It begins when Saturn (Shani) transits over your natal moon sign, influencing various aspects of your life."}
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  {
                    title: isHindi ? "उदय चरण:" : "Rising Phase:",
                    desc: isHindi
                      ? "जब शनि आपकी चंद्र राशि से 12वें भाव में प्रवेश करता है, यह भावनात्मक संघर्ष, वित्तीय चुनौतियाँ और अकेलेपन की भावना ला सकता है।"
                      : "This occurs when Saturn enters the 12th house from your moon sign, often leading to emotional struggles, financial challenges, and feelings of isolation.",
                  },
                  {
                    title: isHindi ? "मध्य चरण:" : "Peak Phase:",
                    desc: isHindi
                      ? "जब शनि सीधे आपकी चंद्र राशि पर होता है, तब तनाव, स्वास्थ्य समस्याएँ और रिश्तों में कठिनाइयाँ बढ़ सकती हैं।"
                      : "The most intense part, when Saturn is directly over your moon sign, can bring heightened stress, health issues, and relationship difficulties.",
                  },
                  {
                    title: isHindi ? "अंतिम चरण:" : "Setting Phase:",
                    desc: isHindi
                      ? "शनि जब दूसरे भाव में प्रवेश करता है, तो थोड़ी राहत मिल सकती है लेकिन अधूरे कार्यों पर ध्यान देना ज़रूरी होता है।"
                      : "As Saturn moves into the 2nd house, you may start to see relief, but this phase still demands attention to unresolved issues.",
                  },
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="bg-amber-500 p-2 rounded-full mr-3 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-black"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <span className="font-bold text-amber-400">
                        {item.title}
                      </span>{" "}
                      {item.desc}
                    </div>
                  </li>
                ))}
              </ul>

              <button
                onClick={handleNavigate}
                className="bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-bold py-3 px-8 rounded-md text-lg hover:from-amber-600 hover:to-yellow-700 transition-all"
              >
                {isHindi
                  ? "अपनी व्यक्तिगत साढ़े साती रिपोर्ट प्राप्त करें"
                  : "Get your personalized Sade Sati Report now!"}
              </button>
            </div>

            <div className="md:w-2/5">
              <div className="relative">
                <img
                  src={book}
                  alt="Sade Sati Report"
                  width={500}
                  height={600}
                  className="rounded-lg shadow-2xl shadow-blue-500/20"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact on Different Rashis */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4 md:px-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            {isHindi
              ? "साढ़े साती का हर राशि पर अलग प्रभाव होता है"
              : "Sade Sati has a different Impact on each Rashi"}
          </h2>
          <p className="text-lg mb-10 text-center max-w-3xl mx-auto">
            {isHindi
              ? "जानिए साढ़े साती आपकी चंद्र राशि को कैसे प्रभावित करती है — यह आपके जीवन को बदल सकती है"
              : "Find Out How Sade Sati Affects Your Moon Sign—It Could Change Your Life"}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                sign: isHindi ? "मेष (Aries)" : "Aries",
                effect: isHindi
                  ? "साढ़े साती के दौरान करियर में रुकावटें और व्यक्तिगत चुनौतियाँ सामने आ सकती हैं, धैर्य और दृढ़ता की परीक्षा होगी।"
                  : "Expect career setbacks and personal challenges as Sade Sati tests your patience and resilience.",
              },
              {
                sign: isHindi ? "वृषभ (Taurus)" : "Taurus",
                effect: isHindi
                  ? "आर्थिक समस्याएं सामने आ सकती हैं, खर्च की आदतों पर पुनर्विचार करना जरूरी होगा।"
                  : "Financial strains may arise during this period, making it crucial to reassess your spending habits.",
              },
              {
                sign: isHindi ? "मिथुन (Gemini)" : "Gemini",
                effect: isHindi
                  ? "संचार में समस्याएं रिश्तों में गलतफहमी पैदा कर सकती हैं; स्पष्टता और धैर्य पर ध्यान दें।"
                  : "Communication issues could lead to misunderstandings in relationships; focus on clarity and patience.",
              },
              {
                sign: isHindi ? "कर्क (Cancer)" : "Cancer",
                effect: isHindi
                  ? "भावनात्मक उथल-पुथल हो सकती है, अपने भावनाओं का सामना करना और आंतरिक शक्ति प्राप्त करना आवश्यक होगा।"
                  : "Emotional upheavals may surface, urging you to confront your feelings and seek inner strength.",
              },
              {
                sign: isHindi ? "सिंह (Leo)" : "Leo",
                effect: isHindi
                  ? "प्राधिकरण से संबंधित लोग आपको चुनौती दे सकते हैं; पेशेवर चुनौतियों के लिए तैयार रहें।"
                  : "Authority figures may challenge you; be prepared for professional hurdles that demand your best efforts.",
              },
              {
                sign: isHindi ? "कन्या (Virgo)" : "Virgo",
                effect: isHindi
                  ? "स्वास्थ्य समस्याएं उभर सकती हैं; इस समय आत्म-देखभाल और तनाव प्रबंधन को प्राथमिकता दें।"
                  : "Health concerns might come to the forefront; prioritize self-care and stress management during this time.",
              },
              {
                sign: isHindi ? "तुला (Libra)" : "Libra",
                effect: isHindi
                  ? "रिश्तों की स्थिति अचानक बदल सकती है, अपने जुड़ाव और प्रतिबद्धताओं का पुनर्मूल्यांकन करें।"
                  : "Relationship dynamics can shift unexpectedly, prompting you to reevaluate your connections and commitments.",
              },
              {
                sign: isHindi ? "वृश्चिक (Scorpio)" : "Scorpio",
                effect: isHindi
                  ? "गंभीर भावनात्मक चुनौतियां सामने आ सकती हैं, जो आत्म-खोज और परिवर्तन की ओर प्रेरित करेंगी।"
                  : "Intense emotional challenges may arise, pushing you towards deeper self-discovery and transformation.",
              },
              {
                sign: isHindi ? "धनु (Sagittarius)" : "Sagittarius",
                effect: isHindi
                  ? "यात्रा योजनाएं और शैक्षणिक प्रयासों में देरी हो सकती है; अनुकूल बने रहें।"
                  : "Travel plans and educational pursuits could face delays; remain adaptable to overcome these obstacles.",
              },
              {
                sign: isHindi ? "मकर (Capricorn)" : "Capricorn",
                effect: isHindi
                  ? "पेशे में बदलाव से वित्तीय अस्थिरता आ सकती है; करियर के फैसलों में सतर्क रहें।"
                  : "Professional changes may lead to financial instability; be cautious in your career decisions during this phase.",
              },
              {
                sign: isHindi ? "कुंभ (Aquarius)" : "Aquarius",
                effect: isHindi
                  ? "व्यक्तिगत पहचान को चुनौती मिल सकती है; आत्म-निरीक्षण और सच्चे स्व से जुड़ाव के लिए यह समय उत्तम है।"
                  : "Personal identity may be tested; embrace this time for introspection and aligning with your true self.",
              },
              {
                sign: isHindi ? "मीन (Pisces)" : "Pisces",
                effect: isHindi
                  ? "आध्यात्मिक जागरूकता बढ़ सकती है, जिससे आपके विश्वास और अंतर्ज्ञान के साथ गहरा संबंध बनेगा।"
                  : "Spiritual awakening could emerge, prompting you to explore deeper connections with your beliefs and intuition.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-blue-900/30 p-6 rounded-lg border border-blue-800 hover:border-amber-500 transition-all"
              >
                <h3 className="text-xl font-bold mb-3 text-amber-400">
                  {item.sign}
                </h3>
                <p className="text-white">{item.effect}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={handleNavigate}
              className="bg-gradient-to-r cursor-pointer from-amber-500 to-yellow-600 text-black font-bold py-3 px-8 rounded-md text-lg hover:from-amber-600 hover:to-yellow-700 transition-all"
            >
              {isHindi
                ? "अपनी रिपोर्ट अभी ऑर्डर करें"
                : "Order Your Report Now"}
            </button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-amber-400 text-lg">
                {isHindi ? "बिकी रिपोर्ट्स" : "Reports Sold"}
              </p>
              <h3 className="text-4xl font-bold">10,000+</h3>
            </div>
            <div>
              <p className="text-amber-400 text-lg">
                {isHindi ? "भविष्यवाणी का अनुभव" : "Years of Prediction"}
              </p>
              <h3 className="text-4xl font-bold">10+</h3>
            </div>
            <div>
              <p className="text-amber-400 text-lg">
                {isHindi ? "सटीकता दर" : "Accuracy Rate"}
              </p>
              <h3 className="text-4xl font-bold">100%</h3>
            </div>
            <div>
              <p className="text-amber-400 text-lg">
                {isHindi ? "विरासत के वर्ष" : "Years of Legacy"}
              </p>
              <h3 className="text-4xl font-bold">50+</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-black to-blue-950">
        <div className="container mx-auto px-4 md:px-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            {isHindi
              ? "साढ़े साती आपके जीवन को कैसे प्रभावित करती है?"
              : "How Does Sade Sati Affect Your Life?"}
          </h2>
          <p className="text-lg mb-10 text-center max-w-3xl mx-auto">
            {isHindi
              ? "साढ़े साती के दौरान, कई लोग विभिन्न प्रकार की चुनौतियों का सामना करते हैं।"
              : "During Sade Sati, many people experience a variety of challenges"}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Career */}
            <div className="bg-blue-900/20 p-6 rounded-lg border border-blue-800">
              <h3 className="text-xl font-bold mb-3 text-amber-400">
                {isHindi ? "करियर" : "Career"}
              </h3>
              <p>
                {isHindi
                  ? "काम में बाधाएं, नौकरी में बदलाव और संघर्ष संभव हैं। यह समय आपकी प्रतिबद्धता की परीक्षा लेता है और आपके करियर पथ पर पुनर्विचार की आवश्यकता हो सकती है।"
                  : "Expect obstacles at work, such as job changes and conflicts. This period tests your dedication and may require a reassessment of your career path."}
              </p>
            </div>

            {/* Relationships */}
            <div className="bg-blue-900/20 p-6 rounded-lg border border-blue-800">
              <h3 className="text-xl font-bold mb-3 text-amber-400">
                {isHindi ? "रिश्ते" : "Relationships"}
              </h3>
              <p>
                {isHindi
                  ? "व्यक्तिगत संबंधों में तनाव और गलतफहमी हो सकती है। भावनात्मक चुनौतियों से निपटने के लिए खुले संवाद और धैर्य की आवश्यकता है।"
                  : "You might face tensions and misunderstandings in personal relationships. Open communication and patience are crucial as emotional challenges arise."}
              </p>
            </div>

            {/* Marriage */}
            <div className="bg-blue-900/20 p-6 rounded-lg border border-blue-800">
              <h3 className="text-xl font-bold mb-3 text-amber-400">
                {isHindi ? "विवाह" : "Marriage"}
              </h3>
              <p>
                {isHindi
                  ? "वैवाहिक जीवन में समस्याएं सामने आ सकती हैं, जिससे मतभेद हो सकते हैं। इन चुनौतियों को समझदारी से संभालना संबंध को मजबूत कर सकता है।"
                  : "Marital issues may surface, leading to disagreements. Navigating these challenges thoughtfully can ultimately strengthen your partnership."}
              </p>
            </div>

            {/* Health */}
            <div className="bg-blue-900/20 p-6 rounded-lg border border-blue-800">
              <h3 className="text-xl font-bold mb-3 text-amber-400">
                {isHindi ? "स्वास्थ्य" : "Health"}
              </h3>
              <p>
                {isHindi
                  ? "साढ़े साती के दौरान तनाव से जुड़ी स्वास्थ्य समस्याओं के प्रति सतर्क रहें। आत्म-देखभाल को प्राथमिकता दें और एक स्वस्थ जीवनशैली अपनाएं।"
                  : "Be mindful of stress-related health issues during Sade Sati. Prioritize self-care and maintain a healthy lifestyle to manage any emotional distress."}
              </p>
            </div>

            {/* Money */}
            <div className="bg-blue-900/20 p-6 rounded-lg border border-blue-800">
              <h3 className="text-xl font-bold mb-3 text-amber-400">
                {isHindi ? "पैसे" : "Money"}
              </h3>
              <p>
                {isHindi
                  ? "वित्तीय अस्थिरता आम है। अप्रत्याशित खर्च या आय में देरी हो सकती है, इसलिए इस समय सावधानीपूर्वक बजट बनाना आवश्यक है।"
                  : "Financial instability is common. You may encounter unexpected expenses or delays in income, making careful budgeting essential during this time."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Report Options */}
      <section id="report-options" className="py-16 text-black">
        <div className="container mx-auto px-4 md:px-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            {isHindi
              ? "अपनी व्यक्तिगत साढ़े साती रिपोर्ट अभी प्राप्त करें!"
              : "Get Your Personalized Sade Sati Report Now!"}
          </h2>
          <p className="text-lg mb-10 text-center max-w-3xl mx-auto">
            {isHindi
              ? "अपने करियर, वित्त, संबंधों और स्वास्थ्य में आने वाली चुनौतियों और अवसरों की जानकारी प्राप्त करें।"
              : "Discover the challenges and opportunities ahead in your career, finances, relationships, and health."}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Basic Report */}
            <div className=" rounded-xl overflow-hidden shadow-xl">
              <div className="p-6">
                <div className="flex justify-center mb-6">
                  <img
                    src={basic}
                    alt="Sade Sati Basic Report"
                    width={200}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-center">
                  {isHindi ? "साढ़े साती बेसिक" : "Sade Sati Basic"}
                </h3>
                <p className="text-center mb-6">
                  {isHindi
                    ? "साढ़े साती बेसिक रिपोर्ट आपके जीवन पर इसके प्रभाव की मूल जानकारी देती है, जिसमें 50+ पेज का विस्तृत विश्लेषण होता है।"
                    : "Sade Sati Basic Report provides a fundamental insight into the impact of Sade Sati on your life, presented in a detailed 50+ page report."}
                </p>
                <div className="text-center">
                  <button
                    onClick={handleNavigate}
                    className="bg-gradient-to-r cursor-pointer from-amber-500 to-yellow-600 text-black font-bold py-3 px-8 rounded-md text-lg hover:from-amber-600 hover:to-yellow-700 transition-all w-full"
                  >
                    {isHindi ? "अभी खरीदें" : "BUY NOW"}
                  </button>
                </div>
              </div>
            </div>

            {/* Plus Report */}
            <div className="bg-gradient-to-b rounded-xl overflow-hidden shadow-xl">
              <div className="p-6">
                <div className="flex justify-center mb-6">
                  <img
                    src={plus}
                    alt="Sade Sati Plus Report"
                    width={200}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-center">
                  {isHindi ? "साढ़े साती प्लस" : "Sade Sati Plus"}
                </h3>
                <p className="text-center mb-6">
                  {isHindi
                    ? "साढ़े साती प्लस रिपोर्ट साढ़े साती और कंटक शनि का विश्लेषण करती है, और 50+ पृष्ठों में उपायों सहित समाधान प्रदान करती है।"
                    : "The Sade Sati Plus Report analyzes Sade Sati and Kantak Shani, offering insights and remedies to overcome challenges in 50+ pages."}
                </p>
                <div className="text-center">
                  <button
                    onClick={handleNavigate}
                    className="bg-gradient-to-r cursor-pointer from-amber-500 to-yellow-600 text-black font-bold py-3 px-8 rounded-md text-lg hover:from-amber-600 hover:to-yellow-700 transition-all w-full"
                  >
                    {isHindi ? "अभी खरीदें" : "BUY NOW"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Get a Report */}
      <section className="py-16 bg-gradient-to-b from-black to-blue-950">
        <div className="container mx-auto px-4 md:px-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            {isHindi
              ? "व्यक्तिगत साढ़े साती रिपोर्ट क्यों लें?"
              : "Why You Should Get a Personalized Sade Sati Report"}
          </h2>
          <p className="text-lg mb-10 text-center max-w-3xl mx-auto">
            {isHindi
              ? "यदि आप जीवन की चुनौतियों से परेशान हैं, तो आप अकेले नहीं हैं। साढ़े साती, जो लगभग 7.5 वर्षों तक चलती है, महत्वपूर्ण संघर्ष ला सकती है। इसलिए आपको व्यक्तिगत रिपोर्ट की आवश्यकता है:"
              : "If you're feeling overwhelmed by life's challenges, you're not alone. Sade Sati, which lasts about 7.5 years, can bring significant struggles. Here's why you need a personalized report:"}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-blue-900/20 p-6 rounded-lg border border-blue-800">
              <h3 className="text-xl font-bold mb-3 text-amber-400">
                {isHindi
                  ? "अपने संघर्षों को समझें"
                  : "Understand Your Struggles"}
              </h3>
              <p>
                {isHindi
                  ? "जानें कि साढ़े साती आपको कैसे प्रभावित कर रही है। यह जानना आपकी समस्याओं से निपटने में मदद करेगा।"
                  : "Find out how Sade Sati is affecting you personally. Knowing this can help you deal with problems better."}
              </p>
            </div>

            <div className="bg-blue-900/20 p-6 rounded-lg border border-blue-800">
              <h3 className="text-xl font-bold mb-3 text-amber-400">
                {isHindi ? "आने वाली समस्याओं को जानें" : "Know What to Expect"}
              </h3>
              <p>
                {isHindi
                  ? "साढ़े साती में तीन चरण होते हैं, प्रत्येक अपनी चुनौतियों के साथ। रिपोर्ट आपको यह जानने में मदद करती है कि क्या देखना है और कैसे तैयार रहना है।"
                  : "Sade Sati has three phases, each with its own challenges. A report helps you understand what to watch for and how to prepare."}
              </p>
            </div>

            <div className="bg-blue-900/20 p-6 rounded-lg border border-blue-800">
              <h3 className="text-xl font-bold mb-3 text-amber-400">
                {isHindi
                  ? "व्यक्तिगत समाधान प्राप्त करें"
                  : "Get Personalized Solutions"}
              </h3>
              <p>
                {isHindi
                  ? "आपकी रिपोर्ट में विशिष्ट उपाय और सुझाव होंगे जो आपकी स्थिति के अनुसार होंगे। सरल उपाय आपके संघर्षों को आसान बना सकते हैं।"
                  : "Your report will include specific remedies and suggestions that fit your situation. Simple actions can help ease your challenges."}
              </p>
            </div>

            <div className="bg-blue-900/20 p-6 rounded-lg border border-blue-800">
              <h3 className="text-xl font-bold mb-3 text-amber-400">
                {isHindi ? "परामर्श लें" : "Take consultation"}
              </h3>
              <p>
                {isHindi
                  ? "आपको ज्योतिष ज्ञानी से समर्थन मिलेगा, जिससे आप अकेले नहीं होंगे। रिपोर्ट प्राप्त करने के बाद 30 दिनों तक आपके सवालों का उत्तर दिया जाएगा।"
                  : "You'll have support from Jyotish Gyani, ensuring you're not alone during this time. Your questions can be answered for up to 30 days after you receive your report."}
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={handleNavigate}
              className="bg-gradient-to-r cursor-pointer from-amber-500 to-yellow-600 text-black font-bold py-3 px-8 rounded-md text-lg hover:from-amber-600 hover:to-yellow-700 transition-all"
            >
              {isHindi ? "रिपोर्ट अभी प्राप्त करें" : "Order Your Report Now"}
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-b from-blue-950 to-black">
        <div className="container mx-auto px-4 md:px-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            {isHindi
              ? "सच्ची कहानियाँ, सच्चे परिणाम"
              : "Real Stories, Real Results"}
          </h2>
          <p className="text-lg mb-10 text-center max-w-3xl mx-auto">
            {isHindi
              ? "यहाँ लोग हमारी रिपोर्ट के बारे में क्या कहते हैं"
              : "Here's what people have to say about our report"}
          </p>

          <TestimonialCarousel />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gradient-to-b from-black to-blue-950">
        <div className="container mx-auto px-4 md:px-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            {isHindi
              ? "अक्सर पूछे जाने वाले प्रश्न"
              : "Frequently asked questions"}
          </h2>

          <div className="max-w-3xl mx-auto">
            <FAQAccordion isHindi={isHindi} />
          </div>
        </div>
      </section>
    </main>
  );
}
