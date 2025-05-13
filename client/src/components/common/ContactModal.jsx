import { FaUser, FaEnvelope, FaPhone, FaCommentDots } from "react-icons/fa";
import panditji from "../../assets/panditji.png";
import { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";

const ContactModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    onClose(false);
    Swal.fire({
      title: "Loading...",
      text: "Please wait while we process your request.",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_APP_BASE_URL}/contact/create`,
        formData
      );

      if (response?.data) {
        Swal.fire({
          title: "Good job!",
          text: "Your message has been sent successfully!",
          icon: "success",
        });
      }
      setFormData({ name: "", email: "", contact: "", message: "" });
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Error!",
        text: "There was a problem sending your message. Please try again later.",
        icon: "error",
      });
    }
  };
  return (
    <div className="fixed inset-0 z-[99999999] flex items-center justify-center bg-black/40 bg-opacity-50">
      <div className="bg-white rounded-lg w-full max-w-4xl flex flex-col md:flex-row overflow-hidden">
        {/* Left Image */}
        <div className="w-full md:w-1/2 h-64 md:h-auto">
          <img
            src={panditji}
            alt="Popup"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Right Form */}
        <div className="w-full md:w-1/2 p-6 bg-red-100 relative">
          <button
            onClick={onClose}
            className="absolute cursor-pointer top-0 right-2 text-red-600 font-bold text-3xl"
          >
            &times;
          </button>
          <h2 className="text-2xl font-bold mb-4 text-red-700">Contact Us</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="flex items-center bg-white rounded px-3 py-2 shadow">
              <FaUser className="text-red-500 mr-2" />
              <input
                type="text"
                placeholder="Name"
                className="w-full outline-none"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex items-center bg-white rounded px-3 py-2 shadow">
              <FaEnvelope className="text-red-500 mr-2" />
              <input
                type="email"
                placeholder="Email"
                className="w-full outline-none"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex items-center bg-white rounded px-3 py-2 shadow">
              <FaPhone className="text-red-500 mr-2" />
              <input
                type="text"
                placeholder="Contact"
                className="w-full outline-none"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex items-start bg-white rounded px-3 py-2 shadow">
              <FaCommentDots className="text-red-500 mr-2 mt-1" />
              <textarea
                placeholder="Message"
                className="w-full outline-none resize-none h-20"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full cursor-pointer bg-red-600 text-white py-2 rounded hover:bg-red-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
