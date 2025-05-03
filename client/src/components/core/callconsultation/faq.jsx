import React, { useState } from "react";

export default function FAQ() {
  const faqs = [
    {
      question: "How will we book our consultation call?",
      answer:
        "You will receive a link that allows you to access the astrologer's schedule and choose from the available time slot when he is available. From there, you can choose a suitable time to book your call. Additionally, a confirmation email will be sent to provide you with the call details.",
    },
    {
      question: "How many days will it require to book our consultation call?",
      answer:
        "Your consultation call will be scheduled after payment. All Slots are booked till April 2025. (All Calls will be booked after April on the next available date on the calendar.) If you booked urgent call service- The call will be booked on the next available date on the calendar.",
    },
    {
      question: "Does the payment need to be made before having the call?",
      answer:
        "Certainly, you'll need to complete the payment through online banking in advance, and once that's done, we'll proceed to schedule your call with the astrologer.",
    },
    {
      question: "What are the benefits of booking a consultation call?",
      answer:
        "Our astrologer is highly renowned, known for transforming the lives of countless individuals worldwide. Choosing to book a consultation call can pave the way for a successful life, just as he has done for thousands of others.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="w-full py-12 md:py-24 bg-[#800909] text-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            FREQUENTLY ASKED QUESTIONS
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
                <span>{faq.question}</span>
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
                  openIndex === index ? "max-h-40" : "max-h-0" // Adjust max-h as needed
                }`}
                style={{ maxHeight: openIndex === index ? "1000px" : "0px" }} // Fallback for browsers not supporting max-h transition
              >
                <div className="py-2 text-white/80">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
