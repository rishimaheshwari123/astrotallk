import {
  getElementColor,
  getElementBorderColor,
} from "../../../data/zodiacData";
import { useNavigate } from "react-router-dom";

const ZodiacCard = ({ zodiac }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // navigate(`/horoscope/${zodiac.name}`);
  };

  return (
    <div
      className={`relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer border-2 ${getElementBorderColor(
        zodiac.element
      )} bg-cosmic-900 bg-opacity-60`}
      onClick={handleClick}
    >
      <div className="p-4">
        <div className="flex flex-col items-center gap-2">
          <span className="text-4xl animate-float">{zodiac.symbol}</span>
          <h3 className="text-xl font-bold gradient-text text-shadow">
            {zodiac.displayName}
          </h3>
          <p className="text-xs text-starlight-100 opacity-80">
            {zodiac.dateRange}
          </p>
          <div
            className={`text-xs px-2 py-1 rounded-full text-white ${getElementColor(
              zodiac.element
            )}`}
          >
            {zodiac.element.charAt(0).toUpperCase() + zodiac.element.slice(1)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZodiacCard;
