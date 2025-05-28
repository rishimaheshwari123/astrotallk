import { Heart } from "lucide-react";
import FloatingHearts from "../components/core/love/floating-hearts";
import FAQAccordion from "../components/core/love/faq-accordion";
import bg from "../assets/love/bg.jpg";
import love from "../assets/love/love.jpg";
import love2 from "../assets/love/love2.jpg";
import last from "../assets/love/last.webp";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function LoveReportPage() {
  const navitage = useNavigate();
  const handleNavigate = () => {
    navitage("/gemstone");
  };
  const { t } = useTranslation();
  const { i18n } = useTranslation();

  const isHindi = i18n.language === "hi";

  return (
    <main className="min-h-screen bg-pink-50 relative overflow-hidden">
      {/* Hero Section */}
      <section
        className="relative py-12 md:py-20 px-4 md:px-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="absolute inset-0  opacity-90"></div>

        <FloatingHearts />

        <div className="relative container mx-auto grid md:grid-cols-2 gap-8 items-center z-10">
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-gray-800">
              {isHindi ? (
                <>
                  आइए ब्रह्मांड करे आपकी{" "}
                  <span className="text-red-500">प्यार की राहदारी ❤</span>
                </>
              ) : (
                <>
                  Let Universe Guide Your Love Life{" "}
                  <span className="text-red-500">❤</span>
                </>
              )}
            </h1>

            <div className="mb-6 space-y-3 text-gray-800">
              <p className="flex items-center text-lg">
                <Heart className="h-5 w-5 text-red-500 fill-red-500 mr-2" />
                {isHindi
                  ? "प्यार ढूंढ रहे हो? मिल के भी प्यार मिल नहीं रहा?"
                  : "Looking for love but still can't find it?"}
              </p>
              <p className="flex items-center text-lg">
                <Heart className="h-5 w-5 text-red-500 fill-red-500 mr-2" />
                {isHindi
                  ? "रिश्ता कैसा रहेगा? क्या शादी तक पहुंचेगा किस्सा?"
                  : "Wondering how your relationship will be? Will it lead to marriage?"}
              </p>
            </div>

            <p className="text-lg mb-8 font-medium text-gray-800">
              {isHindi
                ? "यह खास लव रिपोर्ट बताएगी आपकी लव कम्पैटिबिलिटी, रिश्ते की ताकत और भविष्य की भविष्यवाणियाँ, जिससे आप गहरा और अर्थपूर्ण संबंध बना सकेंगे।"
                : "This Special Love Report will reveal your love compatibility, relationship strengths, and future predictions, helping you create a deeper, more meaningful connection."}
            </p>

            <button
              onClick={handleNavigate}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-bold flex items-center mx-auto md:mx-0 transition-transform hover:scale-105"
            >
              {isHindi ? "अपनी लव रिपोर्ट अभी पाएं" : "Get My Love Report Now"}{" "}
              <Heart className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* What's Inside Section */}
      <section className="py-16 px-4 md:px-10">
        <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src={love}
              alt="Couple"
              width={500}
              height={500}
              className="rounded-lg shadow-lg mx-auto"
            />
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-red-600">
              {isHindi
                ? "आपकी लव रिपोर्ट में क्या है?"
                : "What's Inside Your Love Report?"}
            </h2>

            <div className="space-y-4 text-gray-800">
              {[
                {
                  title: isHindi
                    ? "आपकी लव पर्सनैलिटी"
                    : "Your Love Personality",
                  desc: isHindi
                    ? "समझें कि आप प्यार को कैसे व्यक्त करते हैं और कैसे स्वीकार करते हैं"
                    : "Understand how you express and receive love",
                },
                {
                  title: isHindi
                    ? "मेल-जोल की जानकारी"
                    : "Compatibility Insights",
                  desc: isHindi
                    ? "जानें कि आप और आपका साथी कितने मेल खाते हैं"
                    : "Find out how well you and your partner match",
                },
                {
                  title: isHindi
                    ? "ताकत और चुनौतियाँ"
                    : "Strengths & Challenges",
                  desc: isHindi
                    ? "जानें कि क्या काम करता है और किन बातों में सुधार की जरूरत है"
                    : "Identify what works and what needs improvements",
                },
                {
                  title: isHindi
                    ? "प्यार के उपाय और समाधान"
                    : "Love Remedies & Solutions",
                  desc: isHindi
                    ? "अपने संबंध को मजबूत करने के लिए व्यावहारिक कदम"
                    : "Practical steps to strengthen your bond",
                },
                {
                  title: isHindi
                    ? "भविष्य की प्रेम भविष्यवाणियाँ"
                    : "Future Love Predictions",
                  desc: isHindi
                    ? "जानिए आपके प्रेम जीवन में आगे क्या आने वाला है"
                    : "Discover what's coming next in your love journey",
                },
              ].map(({ title, desc }, i) => (
                <div key={i} className="flex items-start">
                  <Heart className="h-6 w-6 text-red-500 fill-red-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-lg">
                    <span className="text-red-600 font-semibold">{title}</span>{" "}
                    – {desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <button
                onClick={handleNavigate}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-bold flex items-center transition-transform hover:scale-105"
              >
                {isHindi
                  ? "अपनी लव रिपोर्ट अभी पाएं"
                  : "Get My Love Report Now"}{" "}
                <Heart className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="py-10 px-4 md:px-10 bg-red-600 text-white text-center">
        <div className="container mx-auto">
          <div className="bg-red-700 rounded-lg p-8 max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              <span className="text-pink-200 text-3xl">
                {isHindi
                  ? "क्या आपके प्यार के सवाल अभी भी बाकी हैं?"
                  : "Still have questions about your love life?"}
              </span>
            </h2>
            <p className="mb-6 text-lg">
              {isHindi
                ? "हमारे विशेषज्ञ ज्योतिषी से बात करें"
                : "Talk to our Expert Astrologer"}
            </p>
            <button
              onClick={handleNavigate}
              className="bg-white cursor-pointer text-red-600 hover:bg-pink-100 px-6 py-3 rounded-md font-bold transition-transform hover:scale-105"
            >
              {isHindi ? "अपनी लव रिपोर्ट पाएं" : "Get your Love Report"}
            </button>
          </div>
        </div>
      </section>

      {/* Who is this for Section */}
      <section className="py-16 px-4 md:px-10">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">
            {t("whoIsThisFor.title", "Who is This Love Report For?")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="bg-pink-50 p-4 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-12 w-12 text-red-500 fill-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">
                {t("whoIsThisFor.singles", "Singles")}
              </h3>
              <p>
                {t(
                  "whoIsThisFor.singlesDesc",
                  "Get clarity on your future love life"
                )}
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="bg-pink-50 p-4 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-red-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">
                {t("whoIsThisFor.couples", "Couples")}
              </h3>
              <p>
                {t(
                  "whoIsThisFor.couplesDesc",
                  "Strengthen your relationship with deeper insights"
                )}
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="bg-pink-50 p-4 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-red-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">
                {t("whoIsThisFor.challenges", "Relationship Challenges?")}
              </h3>
              <p>
                {t(
                  "whoIsThisFor.challengesDesc",
                  "Find solutions and improve your bond"
                )}
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="bg-pink-50 p-4 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-red-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">
                {t("whoIsThisFor.confused", "Confused About Love?")}
              </h3>
              <p>
                {t(
                  "whoIsThisFor.confusedDesc",
                  "Get answers to all your questions"
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 px-4 md:px-10 bg-pink-50">
        <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src={love2}
              alt={t("whyChoose.imageAlt", "Love Hearts")}
              width={500}
              height={500}
              className="rounded-lg shadow-lg mx-auto"
            />
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">
              {t("whyChoose.title", "Why Choose This Love Report?")}
            </h2>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-pink-100 p-3 rounded-full mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-red-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold">
                    {t("whyChoose.personalized", "100% Personalized")}
                  </h3>
                  <p>
                    {t(
                      "whyChoose.personalizedDesc",
                      "Based on your birth details"
                    )}
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-pink-100 p-3 rounded-full mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-red-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold">
                    {t("whyChoose.clearLanguage", "Clear & Simple Language")}
                  </h3>
                  <p>
                    {t("whyChoose.clearLanguageDesc", "No technical jargon")}
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-pink-100 p-3 rounded-full mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-red-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.105 0-2 .895-2 2 0 .213.05.414.13.598L7.13 16.32a3.5 3.5 0 005.366 0l-3.001-5.726c.08-.184.13-.385.13-.598 0-1.105-.895-2-2-2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold">
                    {t("whyChoose.insightful", "Deep Insights")}
                  </h3>
                  <p>
                    {t(
                      "whyChoose.insightfulDesc",
                      "About your love life and relationships"
                    )}
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={() => handleNavigate("checkout")}
              className="mt-12 px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
            >
              {t("whyChoose.cta", "Get Your Love Report Now")}
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 md:px-10">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800">
            {t("faq.title", "Frequently Asked Questions")}
          </h2>

          <FAQAccordion
            items={[
              {
                question: t("faq.q1.question", "What is a Love Report?"),
                answer: t(
                  "faq.q1.answer",
                  "A detailed analysis based on your birth details to understand your love life."
                ),
              },
              {
                question: t("faq.q2.question", "How accurate is the report?"),
                answer: t(
                  "faq.q2.answer",
                  "Our report is generated by experienced astrologers using proven methods."
                ),
              },
              {
                question: t(
                  "faq.q3.question",
                  "Can couples benefit from this report?"
                ),
                answer: t(
                  "faq.q3.answer",
                  "Yes, it provides insights to strengthen your relationship."
                ),
              },
            ]}
          />
        </div>
      </section>

      {/* Final CTA Section */}
      <section
        style={{ backgroundImage: `url(${last})` }}
        className="bg-cover bg-center bg-no-repeat py-16 px-4 md:px-10 text-white text-center"
      >
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-red-600 text-4xl">
              {" "}
              {isHindi ? "प्यार को चाहिए साफ़गोई" : "Love Deserves Clarity"}
            </span>
            <br />
            <button onClick={handleNavigate} className="text-black">
              {isHindi
                ? "अपनी लव रिपोर्ट अभी प्राप्त करें!"
                : "Get Your Love Report Now!"}
            </button>
          </h2>

          <p className="mb-8 text-black text-lg">
            {isHindi
              ? "खुद को या अपने साथी को समझदारी और गहरे रिश्ते का तोहफा दें"
              : "Give yourself or your partner the gift of understanding and deep connection"}
          </p>

          <button
            onClick={handleNavigate}
            className="bg-white cursor-pointer text-red-600 hover:bg-pink-100 px-8 py-4 rounded-md font-bold text-lg transition-transform hover:scale-105"
          >
            {isHindi ? "अपनी लव रिपोर्ट प्राप्त करें" : "Get Your Love Report"}
          </button>
        </div>
      </section>

      {/* Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-red-600 py-3 px-4 text-center z-50">
        <button
          onClick={handleNavigate}
          className="bg-white text-red-600 hover:bg-pink-100 px-6 py-2 rounded-md font-bold transition-transform hover:scale-105"
        >
          {isHindi ? "अभी ऑर्डर करें" : "Order Now"}

          {/* <span className="line-through">₹1399</span>{" "}
          <span className="text-red-600">₹499</span> */}
        </button>
        <p className="text-white text-sm mt-1 animate-pulse">
          {isHindi
            ? "जल्दी करें!! ऑफर जल्दी खत्म हो रहा है"
            : "Hurry!! Offer Ends Soon"}
        </p>
      </div>
    </main>
  );
}
