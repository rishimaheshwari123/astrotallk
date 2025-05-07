import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import logo from "../assets/logo.png";
const Appoinment = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    pin: "",
    location: "domestic",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRazorpayPayment = async () => {
    try {
      const { address, pin, name, phone, email, location } = formData;
      const total = location === "domestic" ? 1500 : 3200;

      if (!address || !pin) {
        toast.error("Please fill all required fields.");
        return;
      }

      const config = { headers: { "Content-Type": "application/json" } };

      const { data } = await axios.post(
        `${import.meta.env.VITE_APP_BASE_URL}/razorpay/capturePayment`,
        { amount: total },
        config
      );

      const options = {
        key: "rzp_test_lQz64anllWjB83",
        amount: data.order.amount,
        currency: data.order.currency,
        name: "Astrotall",
        description: "Astrotall Appointment",
        order_id: data.order.id,
        handler: async (response) => {
          try {
            const verify = await axios.post(
              `${
                import.meta.env.VITE_APP_BASE_URL
              }/razorpay/verifyPayment-appiment`,
              {
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_order_id: response.razorpay_order_id,
                razorpay_signature: response.razorpay_signature,
                addressData: { ...formData },
                total,
                paymentInfo: {
                  id: response.razorpay_payment_id,
                  type: "Razorpay",
                  status: "Paid",
                },
              },
              config
            );

            if (verify?.data?.success) {
              toast.success(verify.data.message);
              navigate("/payment-success");
            } else {
              toast.error("Payment verification failed.");
            }
          } catch (error) {
            toast.error("Error verifying payment.");
          }
        },
        prefill: { name, email, contact: phone },
        theme: { color: "#8B5CF6" },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      toast.error("Payment process error.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      <div className="max-w-6xl w-full bg-white rounded-xl shadow-lg overflow-hidden md:flex">
        {/* Left Side - Info */}
        <div className="w-full md:w-1/2 p-6 bg-gradient-to-br from-purple-700 to-indigo-600 text-white flex flex-col justify-between">
          <div>
            <div className="">
              <img src={logo} alt="Astrotall Logo" className="h-16  mb-6" />
              <h2 className="text-3xl font-bold mb-4">
                Why Book with Astrotall?
              </h2>
            </div>
            <br />
            <ul className="space-y-3 text-lg">
              <li>🔮 Personalized Vedic Astrology Consultation</li>
              <li>🌟 Get Accurate Remedies for Life Issues</li>
              <li>🧘 One-on-One Session with Certified Experts</li>
              <li>🕒 Flexible Domestic & International Timings</li>
              <li>💳 Easy & Secure Online Payment</li>
            </ul>
          </div>
          <p className="mt-10 text-sm text-white/80">
            &copy; 2025 Astrotall. All rights reserved.
          </p>
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
            Book Your Appointment
          </h2>
          <div className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-indigo-500 outline-none"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-indigo-500 outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-indigo-500 outline-none"
            />
            <textarea
              name="address"
              placeholder="Full Address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-indigo-500 outline-none"
            ></textarea>
            <input
              type="text"
              name="pin"
              placeholder="PIN Code"
              value={formData.pin}
              onChange={handleChange}
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-indigo-500 outline-none"
            />
            <div className="flex items-center gap-4">
              <label className="font-medium text-gray-700">Location:</label>
              <select
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="p-2 border rounded-md"
              >
                <option value="domestic">Domestic - ₹1,500</option>
                <option value="international">International - ₹3,200</option>
              </select>
            </div>
            <button
              onClick={handleRazorpayPayment}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-md font-semibold transition"
            >
              Pay & Book Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appoinment;
