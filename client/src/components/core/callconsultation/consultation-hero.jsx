import { Link } from "react-router-dom";
import heroBg from "../../../assets/call/bg.png";
import videoBg from "../../../assets/call/hero.png";

export default function ConsultationHero({ isHindi }) {
  return (
    <section
      className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-amber-50 to-orange-50"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#800909]">
              {isHindi
                ? "कॉल कंसल्टेशन के लिए ज्योतिषी से बात करें!"
                : "Talk to Astrologer for Call Consultation!"}
            </h1>
            <p className="text-lg font-medium">
              <strong>
                {isHindi
                  ? "30 मिनट, कुछ भी पूछें, अपने जीवन की सभी समस्याओं का समाधान पाएं"
                  : "30 minutes, Ask anything, Get solutions to all your life problems"}
              </strong>
            </p>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-sm">
                <strong>
                  {isHindi
                    ? "आपकी कंसल्टेशन कॉल भुगतान के बाद निर्धारित की जाएगी। सभी स्लॉट बुक हो चुके हैं"
                    : "Your consultation call will be scheduled after payment. All Slots are booked till "}
                </strong>
                <span className="text-[#800000]">
                  <strong>{isHindi ? "अप्रैल 2025" : "April 2025"}</strong>
                </span>
              </p>
            </div>
            <div className="flex flex-wrap gap-4 mt-6">
              <Link
                to="/appointment"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-[#800909] hover:bg-[#600707] text-white px-4 py-2"
              >
                {isHindi
                  ? "अपनी कंसल्टेशन कॉल अभी बुक करें"
                  : "Book your consultation call now"}
              </Link>
            </div>
            <div className="flex flex-wrap gap-6 mt-6">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                  <span className="text-amber-600">😊</span>
                </div>
                <div>
                  <p className="text-sm font-medium">
                    {isHindi ? "1.2 लाख+" : "1.2 lakh+"}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {isHindi ? "खुश ग्राहक" : "Happy Customers"}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                  <span className="text-amber-600">✓</span>
                </div>
                <div>
                  <p className="text-sm font-medium">100%</p>
                  <p className="text-xs text-muted-foreground">
                    {isHindi ? "सटीक भविष्यवाणियाँ" : "Accurate Predictions"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative aspect-video overflow-hidden rounded-xl flex items-center justify-center">
            {/* Video Background Image */}
            <div
              className="absolute inset-0 z-10"
              style={{
                backgroundImage: `url(${videoBg})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "auto",
                backgroundSize: "contain",
              }}
            ></div>

            {/* Video Player */}
            <iframe
              width="61%"
              height="61%"
              src="https://www.youtube.com/embed/zkIxJqBKDk8?si=JVXJu17tdthcGfwN"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="relative z-30 rounded-xl mr-2"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
