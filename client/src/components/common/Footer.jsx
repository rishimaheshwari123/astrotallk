import { Link } from "react-router-dom"
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa"
import logo from "../../assets/logo.png"
import { useTranslation } from "react-i18next"

const Footer = () => {
  const { t } = useTranslation()

  const menuLinks = [
    { label: t("navbar.sadeSati"), tag: "New", link: "/reports/sade-sati" },
    { label: t("navbar.loveReport"), tag: "New", link: "/reports/love" },
    { label: t("navbar.callConsultation"), link: "/call-consultation" },
    { label: t("navbar.gemstone"), link: "/gemstone" },
  ]

  return (
    <footer
      style={{
        background: "linear-gradient(360deg, #711604 0%, #B11C1C 100%)",
        color: "white",
        padding: "40px 0",
      }}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Column 1: Logo & Company Info */}
          <div>
            <img src={logo || "/placeholder.svg"} alt="Logo" className="w-28 mb-4" />
            <p>&copy; 2025 Your Company. {t("footer.allRightsReserved")}</p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("footer.quickLinks")}</h3>
            <ul>
              {menuLinks.map((item, index) => (
                <li key={index}>
                  <Link to={item.link} className="text-white hover:underline">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("footer.followUs")}</h3>
            <div className="flex space-x-6">
              <a
                href="https://www.instagram.com/jyotish_gyani?igsh=MWNnaHdkMWI4d2NoNQ%3D%3D"
                className="text-white hover:text-pink-600"
              >
                <FaInstagram size={24} />
              </a>
              <a href="https://www.youtube.com/@jyotishgyani3884" className="text-white hover:text-blue-700">
                <FaYoutube size={24} />
              </a>
              <a
                href="https://www.facebook.com/astrvishalacharya/?ref=pages_you_manage"
                className="text-white hover:text-blue-600"
              >
                <FaFacebook size={24} />
              </a>
              <a href="https://twitter.com" className="text-white hover:text-blue-400">
                <FaTwitter size={24} />
              </a>
            </div>
          </div>

          {/* Column 4: Contact Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("footer.contactUs")}</h3>
            <p>
              <a href="mailto:astrovishal1008@gmail.com" className="text-white hover:underline">
                astrovishal1008@gmail.com
              </a>
            </p>
            <p>
              Phone:{" "}
              <a href="tel:+919111008359" className="text-white hover:underline">
                +91 9111008359
              </a>
            </p>
            <p>
              Phone:{" "}
              <a href="tel:+917828912229" className="text-white hover:underline">
                +91 7828912229{" "}
              </a>
            </p>
            <p>
              Phone:{" "}
              <a href="tel:+918889415900" className="text-white hover:underline">
                +91 8889415900
              </a>
            </p>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-sm">{t("footer.allRightsReserved")}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
