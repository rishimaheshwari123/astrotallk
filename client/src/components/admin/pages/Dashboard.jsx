import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <>
      <p className="mt-5 mb-10 text-xl">
        Welcome {user?.name.charAt(0).toUpperCase() + user?.name.slice(1)} 👋 to
        our admin dashboard
      </p>

      <div className="mt-10">
        <p className="text-center text-3xl font-semibold mb-2 uppercase ">
          Our features
        </p>
        <p className="border-2 border-black"></p>
      </div>
      <br />
      <br />
    </>
  );
};

export default Dashboard;
