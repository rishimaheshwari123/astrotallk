"use client"

import { useState, useRef } from "react"
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { logoutAPI } from "../../services/operations/auth"
import { useTranslation } from "react-i18next"
import LanguageSelector from "./LanguageSelector"

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const [openMobileSubMenu, setOpenMobileSubMenu] = useState(null)
  const dropdownRef = useRef(null)
  const { token, user } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const { t } = useTranslation()

  const navLinks = [
    {
      label: t("navbar.reports"),
      link: "/reports",
      dropdown: [
        { name: t("navbar.sadeSati"), tag: "New", link: "/reports/sade-sati" },
        { name: t("navbar.loveReport"), tag: "New", link: "/reports/love" },
        {
          name: t("navbar.personalizedKundli"),
          link: "/reports/premium-personalized-kundli",
        },
        {
          name: t("navbar.coupleKundli"),
          link: "/reports/premium-couple-kundli",
        },
      ],
    },
    { label: t("navbar.callConsultation"), link: "/call-consultation" },
    { label: t("navbar.gemstone"), link: "/gemstone" },
    {
      label: t("navbar.horoscope"),
      link: "/horoscope",
      dropdown: [
        {
          name: t("navbar.weeklyHoroscope"),
          tag: "New",
          link: "/horoscope/weekly-horoscope",
        },
        {
          name: t("navbar.weeklyLoveHoroscope"),
          link: "/horoscope/weekly-love-horoscope",
        },
        {
          name: t("navbar.yearlyHoroscope"),
          link: "/horoscope/yearly-horoscope",
        },
      ],
    },
    { label: t("navbar.collaborations"), link: "/collaborations" },
    { label: t("navbar.about"), link: "/about" },
    { label: t("navbar.customerSupport"), link: "/support" },
  ]

  const toggleDropdown = (label) => {
    setOpenDropdown(openDropdown === label ? null : label)
  }

  const toggleMobileSubMenu = (label) => {
    setOpenMobileSubMenu(openMobileSubMenu === label ? null : label)
  }

  const handleLogout = () => {
    dispatch(logoutAPI())
  }

  return (
    <>
      <nav className="bg-white shadow-md fixed top-20 w-full z-50">
        <div className="max-w-11/12 mx-auto px-4 py-3 flex justify-between items-center">
          <div className="lg:hidden flex items-center">{/* <Logo /> */}</div>

          <ul className="hidden lg:flex gap-8 font-medium text-gray-700 items-center">
            <li>
              <Link to="/" className="hover:text-red-600 transition-colors whitespace-nowrap">
                {t("navbar.home")}
              </Link>
            </li>

            {navLinks.map((link, index) =>
              link.dropdown ? (
                <li
                  key={index}
                  className="relative group cursor-pointer"
                  onMouseEnter={() => toggleDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <span className="flex items-center gap-1">
                    {link.label}
                    <FaChevronDown className="text-red-600 w-4 h-4" />
                  </span>
                  <ul
                    ref={dropdownRef}
                    className={`absolute left-0 top-4 mt-2 bg-white shadow-lg rounded-md w-72 z-50 ${
                      openDropdown === link.label ? "block" : "hidden group-hover:block"
                    }`}
                  >
                    {link.dropdown.map((item, i) => (
                      <li
                        key={i}
                        className="px-4 py-2 hover:bg-gray-100 flex justify-between items-center text-sm whitespace-nowrap"
                      >
                        <Link to={item.link}>{item.name}</Link>
                        {item.tag && <span className="text-red-500 text-xs">{item.tag}</span>}
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={index}>
                  <Link to={link.link} className="hover:text-red-600 transition-colors whitespace-nowrap">
                    {link.label}
                  </Link>
                </li>
              ),
            )}

            {/* Additional Pages */}
            {token ? (
              <>
                <li>
                  <Link to="/my-orders" className="hover:text-red-600 transition-colors">
                    {t("navbar.myOrder")}
                  </Link>
                </li>

                {user?.role === "admin" && (
                  <li>
                    <Link to="/admin/dashboard" className="hover:text-red-600 transition-colors">
                      {t("navbar.adminDashboard")}
                    </Link>
                  </li>
                )}

                <li>
                  <button onClick={handleLogout} className="hover:text-red-600 cursor-pointer transition-colors">
                    {t("navbar.logout")}
                  </button>
                </li>
              </>
            ) : (
              <li>
                <Link to="/login" className="hover:text-red-600 transition-colors">
                  {t("navbar.login")}
                </Link>
              </li>
            )}

            {/* Language Selector */}
        
          </ul>

          <div className=" flex items-center">
            <LanguageSelector />
            <button onClick={() => setMobileOpen(!mobileOpen)} className="ml-4">
              {mobileOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50">
          <div className="w-64 h-full bg-white shadow-lg p-4 overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold">Menu</span>
              <button onClick={() => setMobileOpen(false)}>
                <FaTimes className="text-red-600" />
              </button>
            </div>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="font-semibold block hover:text-red-600 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {t("navbar.home")}
                </Link>
              </li>

              {navLinks.map((link, index) =>
                link.dropdown ? (
                  <li key={index}>
                    <div
                      className="flex justify-between items-center font-semibold cursor-pointer"
                      onClick={() => toggleMobileSubMenu(link.label)}
                    >
                      <span>{link.label}</span>
                      <span>{openMobileSubMenu === link.label ? "▲" : "▼"}</span>
                    </div>
                    {openMobileSubMenu === link.label && (
                      <ul className="pl-4 mt-1 space-y-1">
                        {link.dropdown.map((item, i) => (
                          <li key={i} className="text-sm">
                            <Link to={item.link} onClick={() => setMobileOpen(false)}>
                              {item.name}
                            </Link>
                            {item.tag && <span className="text-red-500 text-xs">{item.tag}</span>}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ) : (
                  <li key={index}>
                    <Link
                      to={link.link}
                      className="font-semibold block hover:text-red-600 transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ),
              )}

              {/* Additional Pages - Mobile */}
              {token ? (
                <>
                  <li>
                    <Link
                      to="/my-orders"
                      className="font-semibold block hover:text-red-600 transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {t("navbar.myOrder")}
                    </Link>
                  </li>
                  {user?.role === "admin" && (
                    <li>
                      <Link to="/admin/dashboard" className="hover:text-red-600 transition-colors">
                        {t("navbar.adminDashboard")}
                      </Link>
                    </li>
                  )}
                  <li>
                    <button
                      onClick={() => {
                        handleLogout()
                        setMobileOpen(false)
                      }}
                      className="font-semibold block hover:text-red-600 transition-colors"
                    >
                      {t("navbar.logout")}
                    </button>
                  </li>
                </>
              ) : (
                <li>
                  <Link
                    to="/login"
                    className="font-semibold block hover:text-red-600 transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {t("navbar.login")}
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar
