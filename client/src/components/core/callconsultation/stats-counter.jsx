import { Award, Calendar, Users } from "lucide-react"

export default function StatsCounter() {
  const stats = [
    {
      icon: <Calendar className="h-8 w-8" />,
      value: "50",
      label: "Years of Legacy",
    },
    {
      icon: <Users className="h-8 w-8" />,
      value: "100K+",
      label: "Worldwide Clients",
    },
    {
      icon: <Award className="h-8 w-8" />,
      value: "15+",
      label: "Awards In Astrology",
    },
  ]

  return (
    <section className="w-full py-12 bg-gradient-to-r from-[#800909] to-[#a02020] text-white">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-white/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
