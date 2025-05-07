import React from "react";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

const PaymentSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-100 p-6">
      <FaCheckCircle className="text-green-600 text-6xl mb-4" />
      <h2 className="text-2xl font-semibold text-green-800">
        Payment Successful!
      </h2>
      <p className="text-gray-700 mt-2">
        Your order has been placed successfully.
      </p>

      <button
        onClick={() => navigate("/my-orders")}
        className="mt-6 px-6 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition"
      >
        View Orders
      </button>
    </div>
  );
};

export default PaymentSuccess;
