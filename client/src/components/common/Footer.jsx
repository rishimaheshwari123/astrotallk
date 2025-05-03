import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const menuLinks = [
    { label: "Reports", link: "/reports" },
    { label: "Call Consultation", link: "/call-consultation" },
    { label: "Gemstone", link: "/gemstone" },
    { label: "Horoscope", link: "/horoscope" },
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
            <img src="your-logo-url.png" alt="Logo" className="h-12 mb-4" />
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
                href="https://facebook.com"
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
              <a
                href="https://instagram.com"
                className="text-white hover:text-pink-600"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://linkedin.com"
                className="text-white hover:text-blue-700"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Column 4: Contact Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p>
              Email:{" "}
              <a
                href="mailto:info@yourcompany.com"
                className="text-white hover:underline"
              >
                info@yourcompany.com
              </a>
            </p>
            <p>
              Phone:{" "}
              <a href="tel:+1234567890" className="text-white hover:underline">
                +1 (234) 567-890
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
