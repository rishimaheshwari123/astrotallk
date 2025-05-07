import React, { useEffect, useState } from "react";
import { getUserOrderAPI } from "../services/operations/order";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const fetchOrders = async () => {
    const response = await dispatch(getUserOrderAPI(user._id));
    setOrders(response);
    console.log(response);
  };

  useEffect(() => {
    if (user?._id) {
      fetchOrders();
    }
  }, [user]);

  return (
    <div className="container mx-auto p-4 text-black min-h-screen">
      <h2 className="text-3xl font-semibold mb-6 text-center">My Orders</h2>

      {orders.length === 0 ? (
        <p className="text-center text-gray-500">No orders found.</p>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <div key={order._id} className="border p-4 rounded shadow bg-white">
              <h3 className="text-xl font-bold mb-2">Order ID: {order._id}</h3>
              <p className="mb-1">
                <strong>Status:</strong> {order.status}
              </p>
              <p className="mb-1">
                <strong>Total Amount:</strong> ₹{order.total}
              </p>
              <p className="mb-2">
                <strong>Payment Method:</strong> {order.paymentInfo?.type}
              </p>
              <div>
                <h4 className="font-semibold mb-1">Products:</h4>
                {order.product.map((item, index) => (
                  <div key={index} className="pl-4 border-l mb-2">
                    <p>
                      <strong>Title:</strong> {item.name}
                    </p>

                    <p>
                      <strong>Price:</strong> ₹{item.price}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyOrders;
