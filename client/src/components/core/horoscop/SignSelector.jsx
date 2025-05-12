import React from "react";
import { ZODIAC_SIGNS } from "../../../data/zodiacData";

const SignSelector = ({ selectedSign, onSignChange, className = "" }) => {
  return (
    <select
      value={selectedSign}
      onChange={(e) => onSignChange(e.target.value)}
      className={`w-[180px] bg-cosmic-800 border border-cosmic-700 text-starlight-100 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cosmic-600 ${className}`}
    >
      <option value="" disabled>
        Select your sign
      </option>
      {ZODIAC_SIGNS.map((zodiac) => (
        <option key={zodiac.name} value={zodiac.name}>
          {zodiac.symbol} {zodiac.displayName}
        </option>
      ))}
    </select>
  );
};

export default SignSelector;
