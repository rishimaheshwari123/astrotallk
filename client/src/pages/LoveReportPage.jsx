import { Heart } from "lucide-react";
import FloatingHearts from "../components/core/love/floating-hearts";
import FAQAccordion from "../components/core/love/faq-accordion";
import bg from "../assets/love/bg.jpg";
import love from "../assets/love/love.jpg";
import love2 from "../assets/love/love2.jpg";
import last from "../assets/love/last.webp";
import { useNavigate } from "react-router-dom";
export default function LoveReportPage() {
  const navitage = useNavigate();
  const handleNavigate = () => {
    navitage("/gemstone");
  };
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
              Let Universe Guide Your Love Life{" "}
              <span className="text-red-500">❤</span>
            </h1>

            <div className="mb-6 space-y-3">
              <p className="flex items-center text-lg">
                <Heart className="h-5 w-5 text-red-500 fill-red-500 mr-2" />
                <span>प्यार ढूंढ रहे हो? मिल के भी प्यार मिल नहीं रहा?</span>
              </p>
              <p className="flex items-center text-lg">
                <Heart className="h-5 w-5 text-red-500 fill-red-500 mr-2" />
                <span>रिश्ता कैसा रहेगा? क्या शादी तक पहुंचेगा किस्सा?</span>
              </p>
            </div>

            <p className="text-lg mb-8 font-medium">
              This Special Love Report will reveal your love compatibility,
              relationship strengths, and future predictions, helping you create
              a deeper, more meaningful connection.
            </p>

            <button
              onClick={handleNavigate}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-bold flex items-center mx-auto md:mx-0 transition-transform hover:scale-105"
            >
              Get My Love Report Now <Heart className="ml-2 h-5 w-5" />
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
              What's Inside Your Love Report?
            </h2>

            <div className="space-y-4">
              <div className="flex items-start">
                <Heart className="h-6 w-6 text-red-500 fill-red-500 mr-3 mt-1 flex-shrink-0" />
                <p className="text-lg">
                  <span className="text-red-600 font-semibold">
                    Your Love Personality
                  </span>{" "}
                  – Understand how you express and receive love
                </p>
              </div>

              <div className="flex items-start">
                <Heart className="h-6 w-6 text-red-500 fill-red-500 mr-3 mt-1 flex-shrink-0" />
                <p className="text-lg">
                  <span className="text-red-600 font-semibold">
                    Compatibility Insights
                  </span>{" "}
                  – Find out how well you and your partner match
                </p>
              </div>

              <div className="flex items-start">
                <Heart className="h-6 w-6 text-red-500 fill-red-500 mr-3 mt-1 flex-shrink-0" />
                <p className="text-lg">
                  <span className="text-red-600 font-semibold">
                    Strengths & Challenges
                  </span>{" "}
                  – Identify what works and what needs improvements
                </p>
              </div>

              <div className="flex items-start">
                <Heart className="h-6 w-6 text-red-500 fill-red-500 mr-3 mt-1 flex-shrink-0" />
                <p className="text-lg">
                  <span className="text-red-600 font-semibold">
                    Love Remedies & Solutions
                  </span>{" "}
                  – Practical steps to strengthen your bond
                </p>
              </div>

              <div className="flex items-start">
                <Heart className="h-6 w-6 text-red-500 fill-red-500 mr-3 mt-1 flex-shrink-0" />
                <p className="text-lg">
                  <span className="text-red-600 font-semibold">
                    Future Love Predictions
                  </span>{" "}
                  – Discover what's coming next in your love journey
                </p>
              </div>
            </div>

            <div className="mt-8">
              <button
                onClick={handleNavigate}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-bold flex items-center transition-transform hover:scale-105"
              >
                Get My Love Report Now <Heart className="ml-2 h-5 w-5" />
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
                Still have questions about your love life?
              </span>
            </h2>
            <p className="mb-6 text-lg">Talk to our Expert Astrologer</p>
            <button
              onClick={handleNavigate}
              className="bg-white cursor-pointer text-red-600 hover:bg-pink-100 px-6 py-3 rounded-md font-bold transition-transform hover:scale-105"
            >
              Get your Love Report
            </button>
          </div>
        </div>
      </section>

      {/* Who is this for Section */}
      <section className="py-16 px-4 md:px-10">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">
            Who is This Love Report For?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="bg-pink-50 p-4 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-12 w-12 text-red-500 fill-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Singles</h3>
              <p>Get clarity on your future love life</p>
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
              <h3 className="text-xl font-bold mb-2">Couples</h3>
              <p>Strengthen your relationship with deeper insights</p>
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
                Relationship Challenges?
              </h3>
              <p>Find solutions and improve your bond</p>
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
              <h3 className="text-xl font-bold mb-2">Confused About Love?</h3>
              <p>Get answers to all your questions</p>
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
              alt="Love Hearts"
              width={500}
              height={500}
              className="rounded-lg shadow-lg mx-auto"
            />
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">
              Why Choose This Love Report?
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
                  <h3 className="text-xl font-bold">100% Personalized</h3>
                  <p>Based on your birth details</p>
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
                  <h3 className="text-xl font-bold">Clear & Simple Language</h3>
                  <p>No complicated astrology terms</p>
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
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold">
                    Practical Remedies & Advice
                  </h3>
                  <p>Easy-to-follow solutions for a happy love life</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <button
                onClick={handleNavigate}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-bold flex items-center transition-transform hover:scale-105"
              >
                Get My Love Report Now <Heart className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 md:px-10">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-gray-800">
            FAQs (Frequently Asked Questions)
          </h2>

          <FAQAccordion />
        </div>
      </section>

      {/* Final CTA Section */}
      <section
        style={{ backgroundImage: `url(${last})` }}
        className="bg-cover bg-center bg-no-repeat py-16 px-4 md:px-10 text-white text-center"
      >
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-red-600 text-4xl">Love Deserves Clarity</span>
            <br />
            <button onClick={handleNavigate} className="text-black">
              Get Your Love Report Now!
            </button>
          </h2>

          <p className="mb-8 text-black text-lg">
            Give yourself or your partner the gift of understanding and deep
            connection
          </p>

          <button
            onClick={handleNavigate}
            className="bg-white cursor-pointer text-red-600 hover:bg-pink-100 px-8 py-4 rounded-md font-bold text-lg transition-transform hover:scale-105"
          >
            Get Your Love Report
          </button>
        </div>
      </section>

      {/* Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-red-600 py-3 px-4 text-center z-50">
        <button
          onClick={handleNavigate}
          className="bg-white text-red-600 hover:bg-pink-100 px-6 py-2 rounded-md font-bold transition-transform hover:scale-105"
        >
          Order Now
          {/* <span className="line-through">₹1399</span>{" "}
          <span className="text-red-600">₹499</span> */}
        </button>
        <p className="text-white text-sm mt-1 animate-pulse">
          Hurry!! Offer Ends Soon
        </p>
      </div>
    </main>
  );
}
