import { useState } from "react";
import backgroundImage from "../assets/call/bg.png";
import Swal from "sweetalert2";
import axios from "axios";

export default function CustomerSupport() {
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
    <>
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        {/* Background overlay with image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-[#0a1e3c]/30"></div>
        </div>

        {/* Content */}
        <div className="relative container mx-auto h-full flex flex-col justify-center items-center text-center px-4 z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Contact US <br />
            <span className="text-cyan-500"></span>{" "}
          </h1>
          <p className="text-white max-w-3xl mb-8">
            Get in touch with our team for inquiries, quotes, or support
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <div className="mb-2 flex items-center">
                <div className="mr-2 h-1 w-10 bg-cyan-500"></div>
                <span className="text-sm font-medium uppercase text-cyan-500">
                  Get in Touch
                </span>
              </div>
              <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
                Contact Information
              </h2>
              <p className="mb-8 text-gray-700">
                We're here to help with any questions or inquiries you may have
                about our products and services. Feel free to reach out to us
                using any of the contact methods below.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cyan-100 text-cyan-600">
                    {/* Replace with your phone icon or text */}
                    <span className="text-xl">📞</span>
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-semibold text-gray-900">
                      Phone
                    </h3>
                    <p className="text-gray-700">+91 9111008359 </p>
                    <p className="text-gray-700">+91 7828912229</p>
                    <p className="text-gray-700">+91 8889415900</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cyan-100 text-cyan-600">
                    {/* Replace with your mail icon or text */}
                    <span className="text-xl">✉️</span>
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-semibold text-gray-900">
                      Email
                    </h3>
                    <p className="text-gray-700">astrovishal1008@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cyan-100 text-cyan-600">
                    {/* Replace with your clock icon or text */}
                    <span className="text-xl">🕰️</span>
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-semibold text-gray-900">
                      Business Hours
                    </h3>
                    <p className="text-gray-700">
                      Monday - Friday: 9:00 AM - 6:00 PM
                    </p>
                    <p className="text-gray-700">Saturday: 9:00 AM - 1:00 PM</p>
                    <p className="text-gray-700">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="rounded-lg bg-white p-8 shadow-lg">
                <h3 className="mb-6 text-2xl font-semibold text-gray-900">
                  Send Us a Message
                </h3>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium text-gray-700"
                      >
                        Your Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        placeholder="Enter Your Name"
                        required
                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-gray-700"
                      >
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Enter Your Email"
                        required
                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="contact"
                      className="text-sm font-medium text-gray-700"
                    >
                      Phone Number
                    </label>
                    <input
                      id="contact"
                      name="contact"
                      type="tel"
                      placeholder="Enter Your Phone Number"
                      className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm"
                      value={formData.contact}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-gray-700"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Your message here..."
                      rows={5}
                      required
                      className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full cursor-pointer rounded-md bg-red-500 px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
