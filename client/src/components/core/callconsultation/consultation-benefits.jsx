import {
  GraduationCap,
  Heart,
  UserRound,
  Briefcase,
  Users,
  BabyIcon as Child,
} from "lucide-react";

export default function ConsultationBenefits() {
  const benefits = [
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "Career",
      description:
        "Many students get confused and want to know what to do after exams, about jobs, and the future. Talk to an astrologer who can assist you in making the right career choices by analyzing your birth chart and planetary influences.",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Love & Relationship",
      description:
        "Looking for the best love horoscope compatibility with your partner? While relationship issues may arise, accurate horoscope matching & predictions can provide insights for a successful, prosperous bond.",
    },
    {
      icon: <UserRound className="h-8 w-8" />,
      title: "Health",
      description:
        "Vedic astrology predictions can forecast health issues or injuries before they appear in your body. This foresight arises from your kundli's impact on various life aspects, guided by celestial houses.",
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: "Business",
      description:
        "When you're starting a business or facing big choices, it's like being on a see-saw, balancing between success and failure. To boost your chances of business success, getting accurate insights from astrology is important.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Marriage",
      description:
        "For centuries in India, the practice of Kundli Milan for marriage is very important. Talk to an astrologer for horoscope matching of couples. Get Gun Milan, Mangal Dosha, & compatibility analysis.",
    },
    {
      icon: <Child className="h-8 w-8" />,
      title: "Child",
      description:
        "The ancient Indian Vedic astrology examines the horoscopes of both partners, especially for those interested in knowing about having children and even predicting the child's name.",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#800909]">
            Best Life Changing Solutions in Just One Call
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto my-4"></div>
          <p className="text-muted-foreground md:text-lg max-w-3xl mx-auto">
            Who would have thought that the answers to your life's challenges
            lie in a single call with the right person? Out of all the calls you
            make in your life, only a few can really help solve your problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-amber-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4 text-[#800909]">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#800909]">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
