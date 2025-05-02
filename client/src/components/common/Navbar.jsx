import React, { useState, useRef } from "react";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const navLinks = [
  {
    label: "Reports",
    link: "/reports",
    dropdown: [
      { name: "Sade Sati Report", tag: "New", link: "/reports/sade-sati" },
      { name: "Love Report", tag: "New", link: "/reports/love" },
      {
        name: "Premium Personalized Kundali",
        link: "/reports/premium-personalized-kundli",
      },
      {
        name: "Premium Couple Kundali",
        link: "/reports/premium-couple-kundli",
      },
    ],
  },
  { label: "Call Consultation", link: "/call-consultation" },
  { label: "Gemstone", link: "/gemstone" },
  {
    label: "Horoscope",
    link: "/horoscope",
    dropdown: [
      {
        name: " Weekly Horoscope",
        tag: "New",
        link: "/horoscope/weekly-horoscope",
      },
      {
        name: " Weekly Love Horoscope",
        link: "/horoscope/weekly-love-horoscope",
      },
      {
        name: " Weekly Love Horoscope",
        link: "/horoscope/weekly-love-horoscope",
      },
      {
        name: "  Yearly Horoscope",
        link: "/horoscope/yearly-horoscope",
      },
    ],
  },
  { label: "Collaborations", link: "/collaborations" },
  { label: "About", link: "/about" },
  { label: "Customer Support", link: "/support" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openMobileSubMenu, setOpenMobileSubMenu] = useState(null); // New state
  const dropdownRef = useRef(null);

  const toggleDropdown = (label) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  const toggleMobileSubMenu = (label) => {
    setOpenMobileSubMenu(openMobileSubMenu === label ? null : label);
  };

  const Logo = () => <div className="text-xl font-bold text-red-600">Logo</div>;

  return (
    <>
      <nav className="bg-white shadow-md fixed top-14  w-full z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="lg:hidden flex items-center">
            <Logo />
          </div>

          <ul className="hidden lg:flex gap-8 font-medium text-gray-700 items-center">
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
                      openDropdown === link.label
                        ? "block"
                        : "hidden group-hover:block"
                    }`}
                  >
                    {link.dropdown.map((item, i) => (
                      <li
                        key={i}
                        className="px-4 py-2 hover:bg-gray-100 flex justify-between items-center text-sm whitespace-nowrap"
                      >
                        <Link to={item.link}>{item.name}</Link>
                        {item.tag && (
                          <span className="text-red-500 text-xs">
                            {item.tag}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={index}>
                  <Link
                    to={link.link}
                    className="hover:text-red-600 transition-colors whitespace-nowrap"
                  >
                    {link.label}
                  </Link>
                </li>
              )
            )}
          </ul>

          <div className="lg:hidden flex items-center">
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
              {navLinks.map((link, index) =>
                link.dropdown ? (
                  <li key={index}>
                    <div
                      className="flex justify-between items-center font-semibold cursor-pointer"
                      onClick={() => toggleMobileSubMenu(link.label)}
                    >
                      <span>{link.label}</span>
                      <span>
                        {openMobileSubMenu === link.label ? "▲" : "▼"}
                      </span>
                    </div>
                    {openMobileSubMenu === link.label && (
                      <ul className="pl-4 mt-1 space-y-1">
                        {link.dropdown.map((item, i) => (
                          <li key={i} className="text-sm">
                            <Link
                              to={item.link}
                              onClick={() => setMobileOpen(false)}
                            >
                              {item.name}
                            </Link>
                            {item.tag && (
                              <span className="text-red-500 text-xs">
                                {item.tag}
                              </span>
                            )}
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
                )
              )}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
