import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getAllOrdersAPI,
  updateOrderStatusAPI,
} from "../../../services/operations/order";
import { toast } from "react-toastify";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const { token } = useSelector((state) => state.auth);
  const [selectedStatus, setSelectedStatus] = useState({});

  const dispatch = useDispatch();

  const fetchOrders = async () => {
    const response = await dispatch(getAllOrdersAPI(token));
    setOrders(response);
    console.log(response);
  };

  const handleStatusChange = (orderId, newStatus) => {
    setSelectedStatus((prev) => ({ ...prev, [orderId]: newStatus }));
  };

  const updateOrderStatus = async (orderId) => {
    const newStatus = selectedStatus[orderId] || "";
    if (!newStatus) return;

    const response = await dispatch(
      updateOrderStatusAPI(orderId, newStatus, token)
    );
    if (response.success) {
      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order._id === orderId ? { ...order, status: newStatus } : order
        )
      );
      toast.success(response?.message);
    }
  };

  const handleReturnDecision = async (orderId, decision) => {
    const newStatus = decision === "accept" ? "Return" : "Delivered";

    const response = await dispatch(
      updateOrderStatusAPI(orderId, newStatus, token)
    );
    if (response.success) {
      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order._id === orderId ? { ...order, status: newStatus } : order
        )
      );
      toast.success(`Order status updated to ${newStatus}`);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="container mx-auto p-4 text-white min-h-screen">
      <h2 className="text-3xl font-semibold text-black mb-6 text-center">
        Orders
      </h2>

      {orders.length === 0 ? (
        <p className="text-gray-400 text-center">No orders found.</p>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <div
              key={order._id}
              className="border border-gray-700 p-6 rounded-lg shadow-lg bg-gray-900"
            >
              <h3 className="text-xl font-semibold">
                Order ID: <span className="text-gray-400">{order._id}</span>
              </h3>
              <p className="text-gray-400">
                Placed on: {new Date(order.createdAt).toLocaleDateString()}
              </p>
              <p className="text-gray-400">Total Amount: ₹{order.total}</p>
              <p>
                <span className="font-medium">Payment:</span>{" "}
                {order.paymentInfo?.type} -{" "}
                <span
                  className={`${
                    order.paymentInfo?.status === "Paid"
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {order.paymentInfo?.status}
                </span>
              </p>
              <p className="mt-2">
                <span className="font-medium">Status:</span>
                <span
                  className={`ml-2 px-3 py-1 rounded ${
                    order.status === "Delivered"
                      ? "bg-green-500 text-white"
                      : "bg-yellow-500 text-black"
                  }`}
                >
                  {order.status}
                </span>
              </p>

              {/* Cart Items */}
              <div className="mt-4">
                <h4 className="text-lg font-semibold mb-2">Products:</h4>
                <div className="space-y-4">
                  {order.product.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 border-b border-gray-700 pb-3"
                    >
                      <div className="flex-1">
                        <p className="font-medium">{item.name}</p>
                        <p className="text-gray-400">
                          ₹{item.price} x {item.quantity} (Size: {item.size})
                        </p>
                      </div>
                      <Link
                        to={`/shop/${item.id}`}
                        className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600"
                      >
                        View Details
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              {/* Status Dropdown or Return Handling */}
              {order.status === "Cancel" ? (
                <div className="flex gap-4 mt-4">
                  <button
                    onClick={() => handleReturnDecision(order._id, "accept")}
                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                  >
                    Accept Return
                  </button>
                  <button
                    onClick={() => handleReturnDecision(order._id, "reject")}
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Reject Return
                  </button>
                </div>
              ) : (
                <div className="flex gap-5 items-center mt-3">
                  <p className="font-medium">Status:</p>
                  <select
                    value={selectedStatus[order._id] || order.status}
                    onChange={(e) =>
                      handleStatusChange(order._id, e.target.value)
                    }
                    className="px-3 py-1 rounded bg-gray-700 text-white"
                  >
                    <option value="Processing">Processing</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Delivered">Delivered</option>
                  </select>
                  <button
                    onClick={() => updateOrderStatus(order._id)}
                    className="px-4 py-2 bg-white cursor-pointer text-black rounded"
                  >
                    Update
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
