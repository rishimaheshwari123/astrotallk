import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import logo from "../../assets/logo.png";

const Footer = () => {
  const menuLinks = [
    { label: "Sade Sati Report", tag: "New", link: "/reports/sade-sati" },
    { label: "Love Report", tag: "New", link: "/reports/love" },
    { label: "Call Consultation", link: "/call-consultation" },
    { label: "Gemstone", link: "/gemstone" },
  ];

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
            <img src={logo} alt="Logo" className="w-28 mb-4" />
            <p>&copy; 2025 Your Company. All Rights Reserved.</p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
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
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-6">
              <a
                href="https://www.instagram.com/jyotish_gyani?igsh=MWNnaHdkMWI4d2NoNQ%3D%3D"
                className="text-white hover:text-pink-600"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://www.youtube.com/@jyotishgyani3884"
                className="text-white hover:text-blue-700"
              >
                <FaYoutube size={24} />
              </a>
              <a
                href="https://www.facebook.com/astrvishalacharya/?ref=pages_you_manage"
                className="text-white hover:text-blue-600"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://twitter.com"
                className="text-white hover:text-blue-400"
              >
                <FaTwitter size={24} />
              </a>
            </div>
          </div>

          {/* Column 4: Contact Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p>
              <a
                href="mailto:astrovishal1008@gmail.com"
                className="text-white hover:underline"
              >
                astrovishal1008@gmail.com
              </a>
            </p>
            <p>
              Phone:{" "}
              <a
                href="tel:+919111008359"
                className="text-white hover:underline"
              >
                +91 9111008359
              </a>
            </p>
            <p>
              Phone:{" "}
              <a
                href="tel:+917828912229"
                className="text-white hover:underline"
              >
                +91 7828912229{" "}
              </a>
            </p>
            <p>
              Phone:{" "}
              <a
                href="tel:+918889415900"
                className="text-white hover:underline"
              >
                +91 8889415900
              </a>
            </p>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-sm">Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
