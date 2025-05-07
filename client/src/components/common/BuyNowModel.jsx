import React, { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BuyNowModal = ({ isOpen, onClose, product }) => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    pin: "",
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRazorpayPayment = async () => {
    try {
      const addressData = {
        address: formData.address,
        pin: formData.pin,
      };

      const total = product?.price;

      if (!product || !addressData.address || !total || !user) {
        toast.error("Missing order details.");
        console.log(
          "Missing order details: product, addressData, total, or user"
        );
        return;
      }

      const config = { headers: { "Content-Type": "application/json" } };

      // Step 1: Create Razorpay Order
      const { data } = await axios.post(
        `${import.meta.env.VITE_APP_BASE_URL}/razorpay/capturePayment`,
        { amount: total },
        config
      );

      console.log("Backend response:", data);

      if (!data?.order) {
        toast.error("Failed to initiate payment.");
        console.log("Failed to initiate payment: No order returned");
        return;
      }

      const options = {
        key: "rzp_test_lQz64anllWjB83",
        amount: data.order.amount,
        currency: data.order.currency,
        name: "Maheshwari Shop",
        description: "Order Payment",
        order_id: data.order.id,
        handler: async (response) => {
          try {
            console.log("Sending payment verification to backend...");

            const verifyResponse = await axios.post(
              `${import.meta.env.VITE_APP_BASE_URL}/razorpay/verifyPayment`,
              {
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_order_id: response.razorpay_order_id,
                razorpay_signature: response.razorpay_signature,
                product,
                addressData,
                user,
                total,
                paymentInfo: {
                  id: response.razorpay_payment_id,
                  type: "Razorpay",
                  status: "Paid",
                },
              },
              config
            );

            console.log("Payment verification response:", verifyResponse.data);

            if (verifyResponse?.data?.success) {
              toast.success(verifyResponse?.data?.message);
              navigate("/payment-success");
            } else {
              toast.error("Payment verification failed.");
            }
          } catch (error) {
            toast.error("Error verifying payment.");
            console.log("Error during payment verification:", error);
          }
        },
        prefill: {
          name: formData.name || user.name,
          email: formData.email || user.email,
          contact: formData.phone || user.phone,
        },
        theme: { color: "#f63b60" },
      };

      console.log("Opening Razorpay checkout modal...");
      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      toast.error(
        error.message || "Something went wrong during payment process."
      );
      console.log("Error during payment process:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg w-full max-w-md relative max-h-[90vh] overflow-y-auto p-6">
        <button
          onClick={onClose}
          className="absolute cursor-pointer top-2 right-3 text-2xl font-bold"
        >
          ×
        </button>
        <h2 className="text-xl font-bold mb-2">Buy Now: {product?.name}</h2>
        <img
          src={product?.img}
          alt={product?.name}
          className="h-40 object-contain mb-4 mx-auto"
        />
        <p className="text-gray-700 text-sm mb-2">{product?.desc}</p>
        <p className="text-red-600 font-bold mb-4">₹{product?.price}</p>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
          <textarea
            name="address"
            placeholder="Full Address"
            required
            value={formData.address}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
          <input
            type="text"
            name="pin"
            placeholder="PIN Code"
            required
            value={formData.pin}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
          <button
            type="submit"
            onClick={handleRazorpayPayment}
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
          >
            Pay Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default BuyNowModal;
