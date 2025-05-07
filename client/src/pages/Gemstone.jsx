import React, { useState } from "react";
import { productArray } from "../data/product";
import BuyNowModal from "../components/common/BuyNowModel";
import { useNavigate } from "react-router-dom";

const Gemstone = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleBuyNow = (product) => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }
    setSelectedProduct(product);
    setModalOpen(true);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Gemstone Products</h1>
      <div className="grid max-w-7xl mx-auto grid-cols-1 md:grid-cols-3 gap-6">
        {productArray.map((product) => (
          <div key={product.id} className="border p-4 rounded shadow">
            <img
              src={product.img}
              alt={product.name}
              className="h-40 mx-auto object-contain mb-4"
            />
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-sm text-gray-600 mb-2">{product.desc}</p>
            <p className="text-red-600 font-bold mb-2">₹{product.price}</p>
            <button
              className="bg-red-600 cursor-pointer text-white w-full py-2 rounded hover:bg-blue-700"
              onClick={() => handleBuyNow(product)}
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>

      <BuyNowModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        product={selectedProduct}
      />
    </div>
  );
};

export default Gemstone;
