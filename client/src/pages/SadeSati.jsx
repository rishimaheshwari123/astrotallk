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
export default function SadeSatiPage() {
  const navitage = useNavigate();
  const handleNavigate = () => {
    navitage("/gemstone");
  };
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
                Is Life Throwing One Obstacle After Another At You?
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 leading-relaxed text-white"
              >
                Believe it or not, Sade Sati could be the reason for your life
                going south! Find out how in Jyotish Gyani's personalized Sade
                Sati Report.
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
                  Order Your Report Now
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
                What Is Sade Sati Report?
              </h2>
              <p className="text-lg mb-6">
                Sade Sati is a significant astrological period in Vedic
                astrology that spans approximately 7.5 years. It begins when
                Saturn (Shani) transits over your natal moon sign, influencing
                various aspects of your life. This period is divided into three
                phases, each lasting around 2.5 years:
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
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
                      Rising Phase:
                    </span>{" "}
                    This occurs when Saturn enters the 12th house from your moon
                    sign, often leading to emotional struggles, financial
                    challenges, and feelings of isolation.
                  </div>
                </li>
                <li className="flex items-start">
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
                      Peak Phase:
                    </span>{" "}
                    The most intense part, when Saturn is directly over your
                    moon sign, can bring heightened stress, health issues, and
                    relationship difficulties.
                  </div>
                </li>
                <li className="flex items-start">
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
                      Setting Phase:
                    </span>{" "}
                    As Saturn moves into the 2nd house, you may start to see
                    relief, but this phase still demands attention to unresolved
                    issues.
                  </div>
                </li>
              </ul>

              <button
                onClick={handleNavigate}
                className="bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-bold py-3 px-8 rounded-md text-lg hover:from-amber-600 hover:to-yellow-700 transition-all"
              >
                Get your personalized Sade Sati Report now and take charge of
                your life today!
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
            Sade Sati has a different Impact on each Rashi
          </h2>
          <p className="text-lg mb-10 text-center max-w-3xl mx-auto">
            Find Out How Sade Sati Affects Your Moon Sign—It Could Change Your
            Life
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                sign: "Aries",
                effect:
                  "Expect career setbacks and personal challenges as Sade Sati tests your patience and resilience.",
              },
              {
                sign: "Taurus",
                effect:
                  "Financial strains may arise during this period, making it crucial to reassess your spending habits.",
              },
              {
                sign: "Gemini",
                effect:
                  "Communication issues could lead to misunderstandings in relationships; focus on clarity and patience.",
              },
              {
                sign: "Cancer",
                effect:
                  "Emotional upheavals may surface, urging you to confront your feelings and seek inner strength.",
              },
              {
                sign: "Leo",
                effect:
                  "Authority figures may challenge you; be prepared for professional hurdles that demand your best efforts.",
              },
              {
                sign: "Virgo",
                effect:
                  "Health concerns might come to the forefront; prioritize self-care and stress management during this time.",
              },
              {
                sign: "Libra",
                effect:
                  "Relationship dynamics can shift unexpectedly, prompting you to reevaluate your connections and commitments.",
              },
              {
                sign: "Scorpio",
                effect:
                  "Intense emotional challenges may arise, pushing you towards deeper self-discovery and transformation.",
              },
              {
                sign: "Sagittarius",
                effect:
                  "Travel plans and educational pursuits could face delays; remain adaptable to overcome these obstacles.",
              },
              {
                sign: "Capricorn",
                effect:
                  "Professional changes may lead to financial instability; be cautious in your career decisions during this phase.",
              },
              {
                sign: "Aquarius",
                effect:
                  "Personal identity may be tested; embrace this time for introspection and aligning with your true self.",
              },
              {
                sign: "Pisces",
                effect:
                  "Spiritual awakening could emerge, prompting you to explore deeper connections with your beliefs and intuition.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-blue-900/30 p-6 rounded-lg border border-blue-800 hover:border-amber-500 transition-all"
              >
                <h3 className="text-xl font-bold mb-3 text-amber-400">
                  {item.sign}
                </h3>
                <p>{item.effect}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={handleNavigate}
              className="bg-gradient-to-r cursor-pointer from-amber-500 to-yellow-600 text-black font-bold py-3 px-8 rounded-md text-lg hover:from-amber-600 hover:to-yellow-700 transition-all"
            >
              Order Your Report Now
            </button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 bg-gradient-to-r from-blue-900 to-indigo-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-amber-400 text-lg">Reports Sold</p>
              <h3 className="text-4xl font-bold">10,000+</h3>
            </div>
            <div>
              <p className="text-amber-400 text-lg">Years of Prediction</p>
              <h3 className="text-4xl font-bold">10+</h3>
            </div>
            <div>
              <p className="text-amber-400 text-lg">Accuracy Rate</p>
              <h3 className="text-4xl font-bold">100%</h3>
            </div>
            <div>
              <p className="text-amber-400 text-lg">Years of Legacy</p>
              <h3 className="text-4xl font-bold">50+</h3>
            </div>
          </div>
        </div>
      </section>

      {/* How Sade Sati Affects Your Life */}
      <section className="py-16 bg-gradient-to-b from-black to-blue-950">
        <div className="container mx-auto px-4 md:px-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            How Does Sade Sati Affect Your Life?
          </h2>
          <p className="text-lg mb-10 text-center max-w-3xl mx-auto">
            During Sade Sati, many people experience a variety of challenges
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-900/20 p-6 rounded-lg border border-blue-800">
              <h3 className="text-xl font-bold mb-3 text-amber-400">Career</h3>
              <p>
                Expect obstacles at work, such as job changes and conflicts.
                This period tests your dedication and may require a reassessment
                of your career path.
              </p>
            </div>

            <div className="bg-blue-900/20 p-6 rounded-lg border border-blue-800">
              <h3 className="text-xl font-bold mb-3 text-amber-400">
                Relationships
              </h3>
              <p>
                You might face tensions and misunderstandings in personal
                relationships. Open communication and patience are crucial as
                emotional challenges arise.
              </p>
            </div>

            <div className="bg-blue-900/20 p-6 rounded-lg border border-blue-800">
              <h3 className="text-xl font-bold mb-3 text-amber-400">
                Marriage
              </h3>
              <p>
                Marital issues may surface, leading to disagreements. Navigating
                these challenges thoughtfully can ultimately strengthen your
                partnership.
              </p>
            </div>

            <div className="bg-blue-900/20 p-6 rounded-lg border border-blue-800">
              <h3 className="text-xl font-bold mb-3 text-amber-400">Health</h3>
              <p>
                Be mindful of stress-related health issues during Sade Sati.
                Prioritize self-care and maintain a healthy lifestyle to manage
                any emotional distress.
              </p>
            </div>

            <div className="bg-blue-900/20 p-6 rounded-lg border border-blue-800">
              <h3 className="text-xl font-bold mb-3 text-amber-400">Money</h3>
              <p>
                Financial instability is common. You may encounter unexpected
                expenses or delays in income, making careful budgeting essential
                during this time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Report Options */}
      <section id="report-options" className="py-16 text-black">
        <div className="container mx-auto px-4 md:px-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Get Your Personalized Sade Sati Report Now!
          </h2>
          <p className="text-lg mb-10 text-center max-w-3xl mx-auto">
            Discover the challenges and opportunities ahead in your career,
            finances, relationships, and health.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
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
                  Sade Sati Basic
                </h3>
                <p className="text-center mb-6">
                  Sade Sati Basic Report provides a fundamental insight into the
                  impact of Sade Sati on your life, presented in a detailed 50+
                  page report.
                </p>
                <div className="text-center mb-6">
                  {/* <p className="text-2xl font-bold">
                    <span className="text-amber-400">₹791/-</span>{" "}
                    <span className="line-through text-gray-400 text-lg">
                      ₹999
                    </span>
                  </p> */}
                </div>
                <div className="text-center">
                  <button
                    onClick={handleNavigate}
                    className="bg-gradient-to-r cursor-pointer from-amber-500 to-yellow-600 text-black font-bold py-3 px-8 rounded-md text-lg hover:from-amber-600 hover:to-yellow-700 transition-all w-full"
                  >
                    BUY NOW
                  </button>
                </div>
              </div>
            </div>

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
                  Sade Sati Plus
                </h3>
                <p className="text-center mb-6">
                  The Sade Sati Plus Report analyzes Sade Sati and Kantak Shani,
                  offering insights and remedies to overcome challenges in 50+
                  pages.
                </p>
                <div className="text-center mb-6">
                  {/* <p className="text-2xl font-bold">
                    <span className="text-amber-400">₹998/-</span>{" "}
                    <span className="line-through text-gray-400 text-lg">
                      ₹1999
                    </span>
                  </p> */}
                </div>
                <div className="text-center">
                  <button
                    onClick={handleNavigate}
                    className="bg-gradient-to-r cursor-pointer from-amber-500 to-yellow-600 text-black font-bold py-3 px-8 rounded-md text-lg hover:from-amber-600 hover:to-yellow-700 transition-all w-full"
                  >
                    BUY NOW
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
            Why You Should Get a Personalized Sade Sati Report
          </h2>
          <p className="text-lg mb-10 text-center max-w-3xl mx-auto">
            If you're feeling overwhelmed by life's challenges, you're not
            alone. Sade Sati, which lasts about 7.5 years, can bring significant
            struggles. Here's why you need a personalized report:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-blue-900/20 p-6 rounded-lg border border-blue-800">
              <h3 className="text-xl font-bold mb-3 text-amber-400">
                Understand Your Struggles
              </h3>
              <p>
                Find out how Sade Sati is affecting you personally. Knowing this
                can help you deal with problems better.
              </p>
            </div>

            <div className="bg-blue-900/20 p-6 rounded-lg border border-blue-800">
              <h3 className="text-xl font-bold mb-3 text-amber-400">
                Know What to Expect
              </h3>
              <p>
                Sade Sati has three phases, each with its own challenges. A
                report helps you understand what to watch for and how to
                prepare.
              </p>
            </div>

            <div className="bg-blue-900/20 p-6 rounded-lg border border-blue-800">
              <h3 className="text-xl font-bold mb-3 text-amber-400">
                Get Personalized Solutions
              </h3>
              <p>
                Your report will include specific remedies and suggestions that
                fit your situation. Simple actions can help ease your
                challenges.
              </p>
            </div>

            <div className="bg-blue-900/20 p-6 rounded-lg border border-blue-800">
              <h3 className="text-xl font-bold mb-3 text-amber-400">
                Take consultation
              </h3>
              <p>
                You'll have support from Jyotish Gyani, ensuring you're not
                alone during this time. Your questions can be answered for up to
                30 days after you receive your report.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={handleNavigate}
              className="bg-gradient-to-r cursor-pointer from-amber-500 to-yellow-600 text-black font-bold py-3 px-8 rounded-md text-lg hover:from-amber-600 hover:to-yellow-700 transition-all"
            >
              Order Your Report Now
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-b from-blue-950 to-black">
        <div className="container mx-auto px-4 md:px-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Real Stories, Real Results
          </h2>
          <p className="text-lg mb-10 text-center max-w-3xl mx-auto">
            Here's what people have to say about our report
          </p>

          <TestimonialCarousel />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gradient-to-b from-black to-blue-950">
        <div className="container mx-auto px-4 md:px-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Frequently asked questions
          </h2>

          <div className="max-w-3xl mx-auto">
            <FAQAccordion />
          </div>
        </div>
      </section>
    </main>
  );
}
