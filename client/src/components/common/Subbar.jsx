import React from "react";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Subbar = () => {
  return (
    <div className="bg-gradient-to-r from-red-700 to-red-800 text-white py-2 px-4 fixed top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-4">
          {/* <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Arya_Samaj_flag.svg/1200px-Arya_Samaj_flag.svg.png"
            alt="Arya Samaj Logo"
            className="w-10 h-10 rounded-full bg-white"
          /> */}
          <p className="text-4xl">Logo</p>
        </div>
        <div className="flex items-center gap-4">
          <Link to="#" aria-label="Facebook" className="hover:text-gray-200">
            <FaFacebook size={20} />
          </Link>
          <Link to="#" aria-label="Twitter" className="hover:text-gray-200">
            <FaTwitter size={20} />
          </Link>
          <Link to="#" aria-label="YouTube" className="hover:text-gray-200">
            <FaYoutube size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Subbar;
