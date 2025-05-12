import React from "react";
import { ZODIAC_SIGNS, getElementBorderColor } from "../../../data/zodiacData";

const HoroscopeContent = ({ sign, data, isLoading, type }) => {
  const zodiacInfo = ZODIAC_SIGNS.find((z) => z.name === sign);
  const borderClass = zodiacInfo
    ? getElementBorderColor(zodiacInfo.element)
    : "";

  if (isLoading) {
    return (
      <div className="w-full border-2 bg-cosmic-900 bg-opacity-60 border-cosmic-800 p-6 rounded-lg space-y-6">
        <div className="h-8 w-3/4 bg-cosmic-800 animate-pulse rounded"></div>
        <div className="h-4 w-full bg-cosmic-800 animate-pulse rounded"></div>
        <div className="h-4 w-full bg-cosmic-800 animate-pulse rounded"></div>
        <div className="h-4 w-full bg-cosmic-800 animate-pulse rounded"></div>
        <div className="h-4 w-3/4 bg-cosmic-800 animate-pulse rounded"></div>
        <div className="grid grid-cols-2 gap-4">
          <div className="h-12 w-full bg-cosmic-800 animate-pulse rounded"></div>
          <div className="h-12 w-full bg-cosmic-800 animate-pulse rounded"></div>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="w-full border-2 bg-cosmic-900 bg-opacity-60 border-cosmic-800 p-6 rounded-lg text-center">
        <h2 className="text-starlight-200 text-xl mb-2">
          No horoscope data available
        </h2>
        <p className="text-starlight-100">
          There was a problem loading your horoscope. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <div
      className={`w-full border-2 bg-cosmic-900 bg-opacity-80 ${borderClass} p-6 rounded-lg`}
    >
      <h2 className="text-center gradient-text text-2xl md:text-3xl mb-1">
        {type.charAt(0).toUpperCase() + type.slice(1)} Horoscope for{" "}
        {zodiacInfo?.displayName || sign}
      </h2>
      <p className="text-center text-starlight-100 text-sm mb-6">
        {data.current_date}
      </p>

      <p className="text-starlight-50 leading-relaxed text-sm md:text-base mb-6">
        {data.description}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-cosmic-800 p-3 rounded-lg">
          <p className="text-xs text-starlight-300">Mood</p>
          <p className="text-starlight-100">{data.mood}</p>
        </div>
        <div className="bg-cosmic-800 p-3 rounded-lg">
          <p className="text-xs text-starlight-300">Color</p>
          <p className="text-starlight-100">{data.color}</p>
        </div>
        <div className="bg-cosmic-800 p-3 rounded-lg">
          <p className="text-xs text-starlight-300">Lucky Number</p>
          <p className="text-starlight-100">{data.lucky_number}</p>
        </div>
        <div className="bg-cosmic-800 p-3 rounded-lg">
          <p className="text-xs text-starlight-300">Lucky Time</p>
          <p className="text-starlight-100">{data.lucky_time}</p>
        </div>
      </div>

      <div className="bg-cosmic-800 p-4 rounded-lg">
        <p className="text-xs text-starlight-300">Compatible With</p>
        <p className="text-starlight-100">{data.compatibility}</p>
      </div>
    </div>
  );
};

export default HoroscopeContent;
