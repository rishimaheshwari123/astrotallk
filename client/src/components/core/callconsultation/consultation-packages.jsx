import { Phone, CheckCircle, Clock, Headphones } from "lucide-react";
import { Link } from "react-router-dom";
import pandit from "../../../assets/call/panditji.png";

export default function ConsultationPackages({ isHindi }) {
  const packages = [
    {
      title: {
        en: "Astrologer Consultation",
        hi: "ज्योतिषी सलाह",
      },
      subtitle: {
        en: "Urgent Call - 30Min",
        hi: "आपातकालीन कॉल - 30 मिनट",
      },
      audioPrice: "₹2,24,000/-",
      videoPrice: "₹2,34,000/-",
      image: pandit,
      audioLink: "https://example.com/book-audio",
      videoLink: "https://example.com/book-video",
      note: {
        en: "The slot will be booked within 5-7 days",
        hi: "स्लॉट 5-7 दिनों के भीतर बुक किया जाएगा",
      },
    },
    {
      title: {
        en: "Couple Consultation",
        hi: "युगल सलाह",
      },
      subtitle: {
        en: "30Min",
        hi: "30 मिनट",
      },
      audioPrice: "₹1,85,000/-",
      videoPrice: "₹1,95,000/-",
      image: pandit,
      audioLink: "https://example.com/book-audio-couple",
      videoLink: "https://example.com/book-video-couple",
      note: {
        en: "All Slots are booked till April 2025",
        hi: "सभी स्लॉट अप्रैल 2025 तक बुक हैं",
      },
    },
    {
      title: {
        en: "Regular Consultation",
        hi: "नियमित सलाह",
      },
      subtitle: {
        en: "30Min",
        hi: "30 मिनट",
      },
      audioPrice: "₹1,48,000/-",
      videoPrice: "₹1,58,000/-",
      image: pandit,
      audioLink: "https://example.com/book-audio-regular",
      videoLink: "https://example.com/book-video-regular",
      note: {
        en: "All Slots are booked till April 2025",
        hi: "सभी स्लॉट अप्रैल 2025 तक बुक हैं",
      },
    },
    {
      title: {
        en: "Urgent Couple Consultation",
        hi: "आपातकालीन युगल सलाह",
      },
      subtitle: {
        en: "30Min",
        hi: "30 मिनट",
      },
      audioPrice: "₹2,62,000/-",
      videoPrice: "₹2,72,000/-",
      image: pandit,
      audioLink: "https://example.com/book-audio-urgent-couple",
      videoLink: "https://example.com/book-video-urgent-couple",
      note: {
        en: "The slot will be booked within 5-7 days",
        hi: "स्लॉट 5-7 दिनों के भीतर बुक किया जाएगा",
      },
    },
  ];

  return (
    <section id="packages" className="w-full py-12 md:py-24 bg-amber-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#800909]">
            {isHindi
              ? "अभी अपनी कॉल बुक करें"
              : "Book Your Call Now"}
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto my-4"></div>
          <p className="text-muted-foreground md:text-lg max-w-3xl mx-auto">
            {isHindi
              ? "कौन सोच सकता था कि सही व्यक्ति को एक कॉल आपके जीवन की सारी समस्याओं का समाधान हो सकती है? हमारे ज्योतिषी के साथ एक कॉल आपके जीवन को बदल सकती है।"
              : "Who would have imagined that a single call to the right person could hold the solutions to all your life problems? With our astrologer, one call has the potential to transform your life."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col"
            >
              <div className="flex justify-center mb-4">
                <img
                  src={pkg.image || "/placeholder.svg"}
                  alt={isHindi ? pkg.title.hi : pkg.title.en}
                  width={150}
                  height={200}
                  className="rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-center text-[#800909]">
                {isHindi ? pkg.title.hi : pkg.title.en}
              </h3>
              <p className="text-center text-muted-foreground mb-4">
                {isHindi ? pkg.subtitle.hi : pkg.subtitle.en}
              </p>

              <div className="mt-auto space-y-3">
                <Link
                  to={"/appointment"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-[#800909] hover:bg-[#600707] text-white w-full px-4 py-2"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  {isHindi ? "कॉल बुक करें" : "Book Call"}
                </Link>

                <p className="text-xs text-center text-muted-foreground mt-2">
                  {isHindi
                    ? `नोट: आपकी कॉल 30 मिनट के लिए निर्धारित है।\n${pkg.note.hi}`
                    : `Note: Your call is scheduled for 30 minutes.\n${pkg.note.en}`}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-xl font-bold text-center text-[#800909] uppercase mb-4">
            {isHindi ? "महत्वपूर्ण नोट्स" : "Important Notes"}
          </h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              <p>
                {isHindi
                  ? "बुकिंग के बाद, आपको अगला उपलब्ध स्लॉट असाइन किया जाएगा। अगर ज्योतिषी के व्यस्त शेड्यूल के कारण पुनर्निर्धारण होता है, तो आपकी कॉल प्राथमिकता बनी रहेगी।"
                  : "After booking, you'll be assigned the next available slot. If rescheduling occurs due to the astrologer's busy schedule, your call remains a priority."}
              </p>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              <p>
                <em>
                  {isHindi ? (
                    <>
                      आपकी सलाह कॉल भुगतान के बाद निर्धारित की जाएगी। सभी स्लॉट{" "}
                      <span className="text-[#800000]">अप्रैल 2025</span> तक बुक हैं।
                    </>
                  ) : (
                    <>
                      Your consultation call will be scheduled after payment. All
                      Slots are booked till{" "}
                      <span className="text-[#800000]">April 2025</span>
                    </>
                  )}
                </em>
              </p>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              <p>
                <strong>
                  <em>
                    {isHindi ? (
                      <>
                        नोट: <span className="text-[#800000]">यह एक बार की सलाह है। कॉल बुकिंग के बाद कोई रिफंड नीति नहीं है।</span>
                      </>
                    ) : (
                      <>
                        Note: <span className="text-[#800000]">This is a one-time consultation only. There is no refund policy after call booking.</span>
                      </>
                    )}
                  </em>
                </strong>
              </p>
            </li>
          </ul>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 p-4 bg-amber-50 rounded-lg">
            <div className="flex items-center justify-center">
              <Phone className="h-5 w-5 text-[#800909] mr-2" />
              <span>{isHindi ? "एक बार सेवा" : "One time service"}</span>
            </div>
            <div className="flex items-center justify-center">
              <Clock className="h-5 w-5 text-[#800909] mr-2" />
              <span>{isHindi ? "समय अवधि - 30 मिनट" : "Time duration - 30 min"}</span>
            </div>
            <div className="flex items-center justify-center">
              <Headphones className="h-5 w-5 text-[#800909] mr-2" />
              <span>{isHindi ? "7 दिनों का समर्थन" : "7 days support"}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
