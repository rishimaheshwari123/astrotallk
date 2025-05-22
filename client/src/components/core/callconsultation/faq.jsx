import React, { useState } from "react";

export default function FAQ({ isHindi }) {
  const faqs = [
    {
      question: {
        en: "How will we book our consultation call?",
        hi: "हम अपनी सलाहकार कॉल कैसे बुक करेंगे?",
      },
      answer: {
        en: "You will receive a link that allows you to access the astrologer's schedule and choose from the available time slot when he is available. From there, you can choose a suitable time to book your call. Additionally, a confirmation email will be sent to provide you with the call details.",
        hi: "आपको एक लिंक मिलेगा जो ज्योतिषी के शेड्यूल तक पहुंचने और उपलब्ध समय स्लॉट चुनने की अनुमति देता है। वहां से, आप अपनी कॉल बुक करने के लिए एक उपयुक्त समय चुन सकते हैं। इसके अलावा, कॉल विवरण के साथ एक पुष्टि ईमेल भेजा जाएगा।",
      },
    },
    {
      question: {
        en: "How many days will it require to book our consultation call?",
        hi: "हमारी सलाहकार कॉल बुक करने में कितने दिन लगेंगे?",
      },
      answer: {
        en: "Your consultation call will be scheduled after payment. All Slots are booked till April 2025. (All Calls will be booked after April on the next available date on the calendar.) If you booked urgent call service- The call will be booked on the next available date on the calendar.",
        hi: "आपकी सलाहकार कॉल भुगतान के बाद निर्धारित की जाएगी। सभी स्लॉट अप्रैल 2025 तक बुक हैं। (सभी कॉल अप्रैल के बाद कैलेंडर पर अगले उपलब्ध दिनांक पर बुक होंगी।) यदि आपने अर्जेंट कॉल सेवा बुक की है तो कॉल अगले उपलब्ध दिनांक पर बुक की जाएगी।",
      },
    },
    {
      question: {
        en: "Does the payment need to be made before having the call?",
        hi: "क्या कॉल से पहले भुगतान करना आवश्यक है?",
      },
      answer: {
        en: "Certainly, you'll need to complete the payment through online banking in advance, and once that's done, we'll proceed to schedule your call with the astrologer.",
        hi: "बिल्कुल, आपको पहले ऑनलाइन बैंकिंग के माध्यम से भुगतान करना होगा, और इसके बाद हम आपकी कॉल ज्योतिषी के साथ निर्धारित करेंगे।",
      },
    },
    {
      question: {
        en: "What are the benefits of booking a consultation call?",
        hi: "सलाहकार कॉल बुक करने के क्या लाभ हैं?",
      },
      answer: {
        en: "Our astrologer is highly renowned, known for transforming the lives of countless individuals worldwide. Choosing to book a consultation call can pave the way for a successful life, just as he has done for thousands of others.",
        hi: "हमारा ज्योतिषी बहुत प्रसिद्ध है, जो विश्वभर के अनगिनत लोगों के जीवन को बदल चुका है। सलाहकार कॉल बुक करना एक सफल जीवन के रास्ते खोल सकता है, जैसे उसने हजारों लोगों के लिए किया है।",
      },
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="w-full py-12 md:py-24 bg-[#800909] text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {isHindi ? "अक्सर पूछे जाने वाले प्रश्न" : "FREQUENTLY ASKED QUESTIONS"}
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto my-4"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-white/20">
              <button
                className="flex items-center justify-between w-full py-4 text-left text-white hover:text-amber-200 focus:outline-none"
                onClick={() => toggleAccordion(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-content-${index}`}
              >
                <span>{isHindi ? faq.question.hi : faq.question.en}</span>
                <svg
                  className={`w-4 h-4 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                id={`faq-content-${index}`}
                className={`overflow-hidden transition-max-h duration-300 ease-in-out ${
                  openIndex === index ? "max-h-40" : "max-h-0"
                }`}
                style={{ maxHeight: openIndex === index ? "1000px" : "0px" }}
              >
                <div className="py-2 text-white/80">
                  {isHindi ? faq.answer.hi : faq.answer.en}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
