import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchHoroscope } from "../data/horoscopeService";
import HoroscopeContent from "../components/core/horoscop/HoroscopeContent";
import SignSelector from "../components/core/horoscop/SignSelector";

const YearlyDetail = () => {
  const { sign } = useParams();
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  const validSigns = [
    "aries",
    "taurus",
    "gemini",
    "cancer",
    "leo",
    "virgo",
    "libra",
    "scorpio",
    "sagittarius",
    "capricorn",
    "aquarius",
    "pisces",
  ];

  const selectedSign = sign && validSigns.includes(sign) ? sign : "aries";

  useEffect(() => {
    if (sign && !validSigns.includes(sign)) {
      navigate("/yearly");
    }
  }, [sign, navigate]);

  const { data, isLoading } = useQuery({
    queryKey: ["horoscope", selectedSign, "yearly"],
    queryFn: () => fetchHoroscope(selectedSign, "yearly"),
  });

  const handleSignChange = (newSign) => {
    navigate(`/horoscope/yearly-horoscope/${newSign}`);
  };

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold gradient-text mb-4 md:mb-0">
            {currentYear} Yearly Horoscope
          </h1>

          <SignSelector
            selectedSign={selectedSign}
            onSignChange={handleSignChange}
          />
        </div>

        <HoroscopeContent
          sign={selectedSign}
          data={data}
          isLoading={isLoading}
          type="yearly"
        />
      </div>
    </div>
  );
};

export default YearlyDetail;
