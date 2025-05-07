import React, { useEffect, useState } from "react";
import { getAllAppoimentAPI } from "../../../services/operations/order";
import { useDispatch } from "react-redux";

const GetAllAppointment = () => {
  const [appointments, setAppointments] = useState([]);
  const dispatch = useDispatch();

  const fetchAppointment = async () => {
    const response = await dispatch(getAllAppoimentAPI());
    if (response && Array.isArray(response)) {
      setAppointments(response);
    }
  };

  useEffect(() => {
    fetchAppointment();
  }, []);

  return (
    <div className="p-4 overflow-x-auto">
      <h2 className="text-xl font-bold text-center mb-4">All Appointments</h2>
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Address</th>
            <th className="p-2 border">Location</th>
            <th className="p-2 border">PIN</th>
            <th className="p-2 border">Payment ID</th>
            <th className="p-2 border">Status</th>
            <th className="p-2 border">Type</th>
            <th className="p-2 border">Total</th>
            <th className="p-2 border">Order Status</th>
            <th className="p-2 border">Date</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((item, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="p-2 border">{item.addressData?.name}</td>
              <td className="p-2 border">{item.addressData?.email}</td>
              <td className="p-2 border">{item.addressData?.address}</td>
              <td className="p-2 border">{item.addressData?.location}</td>
              <td className="p-2 border">{item.addressData?.pin}</td>
              <td className="p-2 border">{item.paymentInfo?.id}</td>
              <td className="p-2 border">{item.paymentInfo?.status}</td>
              <td className="p-2 border">{item.paymentInfo?.type}</td>
              <td className="p-2 border">₹{item.total}</td>
              <td className="p-2 border">{item.status}</td>
              <td className="p-2 border">
                {new Date(item.createdAt).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GetAllAppointment;
