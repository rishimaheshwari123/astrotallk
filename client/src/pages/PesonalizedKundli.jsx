import { ChevronDown } from "lucide-react";
import book from "../assets/kundli/book.webp";
import instuction from "../assets/couple/instruction.png";
export default function PesonalizedKundli() {
  return (
    <div className="min-h-screen bg-[#fff5f0]">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-50 to-orange-100">
        <div className="max-w-7xl mx-auto px-4 py-12 md:py-16 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 space-y-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#800909] font-bold">
              Discover Your Future with Online Janam Kundli Report!
            </h1>
            <p className="text-gray-700">
              Unveil your life path & resolve struggles – Love, Money, Health &
              more with Kundali by date & time of birth in ₹499/-
            </p>
            <p className="text-gray-700">
              You will receive your Premium Personalized Kundli online i.e. in
              e-book format in 5 working days.
            </p>
            <div className="flex flex-wrap gap-8 py-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-500">
                  <span className="text-2xl">😊</span>
                </div>
                <div>
                  <p className="font-medium">1.2 lakh+</p>
                  <p className="text-sm">Astroparivar kundli members</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-500">
                  <span className="text-2xl">✓</span>
                </div>
                <div>
                  <p className="font-medium">Unlock</p>
                  <p className="text-sm">Accurate Predictions</p>
                </div>
              </div>
            </div>
            <button className="bg-[#800909] cursor-pointer hover:bg-[#6a0606] text-white px-6 py-3 rounded-md font-medium flex items-center gap-2">
              BUY PERSONALISED JANAM KUNDLI
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
            <div className="relative w-64 h-80 md:w-80 md:h-96 animate-[spin_20s_linear_infinite]">
              <img
                src={book}
                alt="Premium Personalized Kundli"
                width={600}
                height={400}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Make Your Dreams Come True Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <img
              src={instuction}
              alt="Kundli Chart"
              width={400}
              height={400}
              className="mx-auto"
            />
          </div>
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-3xl md:text-4xl font-serif text-[#800909] font-bold">
              Make Your Dreams Come True
            </h2>
            <p className="text-xl text-[#800909] font-medium">
              Discover Solutions through Expert Online Janam Kundli Analysis
              Report!
            </p>
            <p className="text-gray-700">
              The main purpose with which one's janam Kundli report is developed
              and sent online via mail is to examine your life's past, present,
              and future predictions by studying your birth chart, planets, DOB
              Analysis and houses.
            </p>
            <p className="text-gray-700">
              Our Vedic expert kundali report finds solutions to all love,
              career, marriage & business more related problems.
            </p>
            <button className="bg-[#ff5c16] hover:bg-[#e04e0f] text-white px-6 py-3 rounded-md font-medium">
              WATCH VIDEO
            </button>
          </div>
        </div>
      </section>
      {/* Problems & Solutions Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-400">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Relationship Problems",
                desc: "Are you struggling to develop & maintain healthy relationships with your family and loved ones? Know about your life partner in your kundli report.",
                icon: "❤️‍🩹",
              },
              {
                title: "Business Problems",
                desc: "Struggling to achieve business goals? Overcome Losses, Financial Challenges. Earn Money with your finance analysis details in your online janam kundli report.",
                icon: "💼",
              },
              {
                title: "Financial Troubles",
                desc: "Struggling to Make Ends Meet Due to Financial Troubles? Unable to save your hard-earned money? Discover Effective Solutions in detailed Kundli & Financial analysis report by time & date of birth.",
                icon: "₹",
              },
              {
                title: "Love Troubles",
                desc: "Facing a lack of love from your partner? Is your partner losing interest in you? Feeling Unloved & Unhappy in Your Relationship? Get Expert Insights in kundli report.",
                icon: "❤️",
              },
              {
                title: "Career Prospects",
                desc: "Facing Challenges in getting dream job? Struggling with Government Job Exams? Low Grades? Get complete career analysis to Ace Exams & Secure Jobs, Even Abroad with online janam kundli report.",
                icon: "💼",
              },
              {
                title: "Home and Luxury",
                desc: "Longing for a Luxurious Lifestyle? Have troubles at home & neighborhood? Unable to build a new home & life? Get solutions & in-depth analysis in Your Kundli Report.",
                icon: "✡️",
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="w-12 h-12 rounded-full bg-[#800909] text-white flex items-center justify-center mb-4 text-xl">
                  {item.icon}
                </div>
                <h3 className="text-lg font-serif text-[#800909] font-bold mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 Steps Process Section */}
      <section className="py-16 bg-gradient-to-r from-orange-50 to-orange-100 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif text-[#800909] font-bold text-center mb-12">
            5 Steps Process of Making Your Kundali
          </h2>
          <div className="absolute top-28 left-0 right-0 h-0.5 bg-[#800909] hidden md:block"></div>

          <div className="flex flex-col md:flex-row justify-between gap-6 relative">
            {[
              { step: 1, title: "Enter Your Details" },
              { step: 2, title: "Preparation of Birth Charts" },
              { step: 3, title: "Charts Analysis by Best Kundli Expert" },
              { step: 4, title: "Analyzing Problems in your Kundli" },
              { step: 5, title: "Providing Solution of your problems" },
            ].map((item) => (
              <div
                key={item.step}
                className="flex flex-col items-center text-center z-10"
              >
                <div className="w-20 h-20 rounded-full bg-white border-2 border-[#800909] flex items-center justify-center mb-4">
                  <span className="text-xl font-serif text-[#800909] font-bold">
                    Step {item.step}
                  </span>
                </div>
                <p className="text-sm md:text-base font-medium">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Will You Get Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif text-[#800909] font-bold text-center mb-12">
            What Will You Get In Your Personalized Online Janam Kundli
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              {
                title: "Dosh & Dasha's Analysis",
                desc: "Detailed report of doshas – Kuja (Mangal), Shani (Saturn), Rahu-Ketu, Dasha & remedies, from mantras to rituals.",
              },
              {
                title: "All Yog Report",
                desc: "Know about the yogs that are formed in your kundali-hana, Raja, Graha Maitri, Budhaditya, and Sri Yoga. Unlock wealth, career growth, relationships, intellect.",
              },
              {
                title: "Gemstone Recommendation",
                desc: "When, Why, & How to wear gems by the best gemologist in india. Get personalized gemstone recommendations based on your kundli report.",
              },
              {
                title: "Puja Recommendation",
                desc: "Puja's to do suggestions by studying Kundli's dosha remedies. The rituals are designed to balance life & bring positivity, based on grahas.",
              },
              {
                title: "Ank Jyotish Recommendation",
                desc: "A numerological analysis of your numbers gives out details of your personality, nature, and behaviors.",
              },
              {
                title: "Monthly Prediction for 1 Year",
                desc: "Know what this year has got for you through a detailed report of your monthly horoscope.",
              },
              {
                title: "Yearly Prediction for 10 Years",
                desc: "Know what this decade has got for you through a detailed report of your monthly horoscope.",
              },
              {
                title: "Astrograph / Bhavbal Graph",
                desc: "Get a personalized astrograph through your Kundali and horoscope analysis.",
              },
              {
                title: "Exclusive Access to Astroparivar",
                desc: "A chance to become an exclusive member of your huge community.",
              },
            ].map((item, index) => (
              <div key={index} className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-lg font-serif text-[#800909] font-bold mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-[#800909] to-[#a61b18] p-8 rounded-lg text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {/* <span className="line-through">₹1100</span> ₹499 / - only */}
            </h2>

            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-[#FFC477] flex items-center justify-center"></div>
                <span>10-Year Prediction</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-[#FFC477] flex items-center justify-center"></div>
                <span>Lowest Rates In The Market</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-[#FFC477] flex items-center justify-center"></div>
                <span>100 Percent Success Rate</span>
              </div>
            </div>

            <p className="text-sm mb-6">
              Note: We apologize to inform you that the delivery time for
              Kundali orders has been extended from 5 to 10 days. We appreciate
              your patience and understanding during this adjustment period. Our
              team is working diligently to ensure timely and accurate delivery.
            </p>

            <button className="bg-[#ff5c16] cursor-pointer hover:bg-[#e04e0f] text-white px-8 py-3 rounded-md font-medium">
              BUY YOUR PERSONALIZED KUNDLI
            </button>
          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <section className="py-12 bg-[#800909]">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-serif text-white font-bold">
              Your <span className="text-[#F3DF89]">Kundli</span> Shows The Way
              <br />
              But <span className="text-[#F3DF89]">Consultation</span> Guides
              You Through It!
            </h2>
          </div>
          <button className="bg-gradient-to-r cursor-pointer from-[#F3DF89] to-[#F5C116] hover:from-[#F5C116] hover:to-[#F3DF89] text-[#800909] px-6 py-3 rounded-md font-medium">
            Claim My Kundali Report + Consultation Offer
          </button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif text-[#800909] font-bold text-center mb-12">
            FREQUENTLY ASKED QUESTIONS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                question:
                  "Is Premium Kundali available in any language other than english?",
                answer:
                  "Yes, the Premium Kundali is available in 3 Indian Languages.",
              },
              {
                question:
                  "Can my future be changed through an understanding of kundali?",
                answer:
                  "Kundali helps you understand what's in the future for you. If you do your daily tasks according to the guide of experts, then you can get a grip on your outcomes.",
              },
              {
                question: "Can Astrology predict the future accurately?",
                answer:
                  "Astrology is a science derived from the eyes of the Vedas. These Vedas are used as a guiding tool to understand your Kundali and give you a bigger picture of your future.",
              },
              {
                question: "How and when will I receive the Kundali?",
                answer:
                  "You will receive your Kundli through mail within 5 working days. (Note- Please check your spam and Promotion folder as well.",
              },
              {
                question: "In how many days you will receive your kundali?",
                answer: "In 5 working days you will receive it.",
              },
              {
                question: "Where I can receive my kundali?",
                answer:
                  'You will receive your kundli in your mail. if you can not see it in your primary folder please check your "spam" folder.',
              },
              {
                question: "How Accurate are Personalized Kundali Reports?",
                answer:
                  "Personalized Kundali reports are highly accurate as they are based on precise astrological calculations using Vedic principles. Our expert astrologers meticulously analyze the planetary positions at the time of your birth to provide accurate insights into various aspects of your life.",
              },
              {
                question:
                  "Is Kundali Matching Included in a Personalized Kundli Report?",
                answer:
                  "No, Kundali matching is a separated report and is not included in personalized Kundli reports. You can order your personalised Kundali matching report for seeking compatibility analysis for marriage.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="border border-orange-200 rounded-lg overflow-hidden"
              >
                <div className="bg-[#ffa631] text-[#800909] p-4 font-medium flex justify-between items-center cursor-pointer">
                  {item.question}
                  {/* <ChevronDown size={20} /> */}
                </div>
                <div className="p-4 bg-white">
                  <p className="text-gray-700">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Happy Customers Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif text-[#800909] font-bold text-center mb-4">
            OUR HAPPY CUSTOMERS
          </h2>
          <h3 className="text-2xl font-serif text-[#800909] text-center mb-12">
            We've Helped Thousands Of People
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-orange-50 p-6 rounded-lg shadow">
              <p className="text-gray-700 mb-4">
                I have consulted many online astrology consultants before but I
                never got what I expected. I wanted an in depth personalized
                study according to my horoscope. I got to know about Astro Arun
                Pandit through Instagram and then I also took personal
                consultancy with him and he analyzed my stars in detail. He also
                told why I am facing the problems and how long I might have to
                face the problems. After the detailed discussion I am feeling
                very relieved. I will also talk about my wife and child to Arun
                ji Thankyou so much.
              </p>
              <p className="font-medium text-[#800909]">- Barkha Sanesar</p>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg shadow">
              <p className="text-gray-700 mb-4">
                I started following Astro Arun Pandit on instagram and I also
                ordered personalized premium kundli for myself. I got detailed
                information and I have also been told about the problems that I
                was facing and will face in the future. To find solutions of the
                problems I took a consultation call with panditji And he told me
                all the remedies in detail that I should do for good luck. I am
                presently doing the remedies and I am quite satisfied with the
                positive feeling I have these days.
              </p>
              <p className="font-medium text-[#800909]">- Sunita Chourasiya</p>
            </div>
          </div>
        </div>
      </section>

      {/* Buy Now Fixed Button */}
    </div>
  );
}
