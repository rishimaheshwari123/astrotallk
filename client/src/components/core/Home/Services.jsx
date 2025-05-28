import { Link } from "react-router-dom"
import bgImage from "../../../assets/servicebg.webp"
import { FaPhoneAlt } from "react-icons/fa"
import { MdOutlineFavorite, MdOutlineStar, MdPeopleAlt } from "react-icons/md"
import { GiGemPendant } from "react-icons/gi"
import { useTranslation } from "react-i18next"

const ServicesSection = ({ title }) => {
  const { t } = useTranslation()

  const services = [
    {
      name: t("navbar.sadeSati"),
      description: t("services.sadeSatiDesc"),
      link: "/reports/sade-sati",
      icon: <MdOutlineStar size={48} />,
    },
    {
      name: t("navbar.loveReport"),
      description: t("services.loveReportDesc"),
      link: "/reports/love",
      icon: <MdOutlineFavorite size={48} />,
    },
    {
      name: t("navbar.personalizedKundli"),
      description: t("services.personalizedKundliDesc"),
      link: "/reports/premium-personalized-kundli",
      icon: <MdOutlineStar size={48} />,
    },
    {
      name: t("navbar.coupleKundli"),
      description: t("services.coupleKundliDesc"),
      link: "/reports/premium-couple-kundli",
      icon: <MdPeopleAlt size={48} />,
    },
    {
      name: t("navbar.callConsultation"),
      description: t("services.callConsultationDesc"),
      link: "/call-consultation",
      icon: <FaPhoneAlt size={48} />,
    },
    {
      name: t("navbar.gemstone"),
      description: t("services.gemstoneDesc"),
      link: "/gemstone",
      icon: <GiGemPendant size={48} />,
    },
  ]

  return (
    <div className="py-16 bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-red-800 mb-10">{title || t("home.services")}</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition">
              <div className="flex justify-center mb-4">
                <div className="bg-[#ff5c16] text-white rounded-full p-6 inline-flex items-center justify-center">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-red-800">{service.name}</h3>
              <p className="text-sm text-gray-600 mt-2 mb-4">{service.description}</p>
              <Link
                to={service.link}
                className="inline-block px-5 py-2 bg-red-700 text-white rounded hover:bg-red-800 text-sm"
              >
                {t("services.orderNow")}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ServicesSection
