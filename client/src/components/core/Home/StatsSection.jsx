import React from "react";
import CountUp from "react-countup";
import state from "../../../assets/accivement.webp";

const stats = [
  { value: 200, suffix: "k", label: "Kundli Served" },
  { value: 50, suffix: "+", label: "Year's Of Legacy" },
  { value: 50, suffix: "k+", label: "Students Enrolled" },
  { value: 100, suffix: "k+", label: "Consultations Given" },
  { value: 5, suffix: "+", label: "Languages For Reports" },
  { value: 20, suffix: "+", label: "Awards in the field of Occult" },
];

const StatsSection = () => {
  return (
    <div
      className="py-10 px-4 rounded-md mx-auto max-w-7xl flex flex-wrap justify-center gap-6 text-center bg-[#912929] bg-cover bg-center"
      style={{ backgroundImage: `url(${state})` }}
    >
      {stats.map((stat, index) => (
        <div
          key={index}
          className="w-40 h-40 bg-[#FCECEC] rounded-full flex flex-col justify-center items-center shadow-lg"
        >
          <h2 className="text-4xl font-bold text-[#6D0E0E]">
            <CountUp end={stat.value} duration={2} separator="," />
            <span className="text-[#6D0E0E]  font-bold">{stat.suffix}</span>
          </h2>
          <p className="mt-2 text-sm text-[#6D0E0E]">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsSection;
