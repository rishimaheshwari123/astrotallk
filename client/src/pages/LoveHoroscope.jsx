import { useNavigate } from "react-router-dom";
import { ZODIAC_SIGNS } from "../data/zodiacData";
import ZodiacCard from "../components/core/horoscop/ZodiacCard";
import { motion } from "framer-motion";

const LoveHoroscope = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4 gradient-text text-shadow">
            Love Horoscope
          </h1>
          <p className="text-lg text-starlight-100">
            Discover what the stars reveal about your romantic life
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {ZODIAC_SIGNS.map((zodiac, index) => (
            <motion.div
              key={zodiac.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
              onClick={() =>
                navigate(`/horoscope/weekly-love-horoscope/${zodiac.name}`)
              }
            >
              <ZodiacCard zodiac={zodiac} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default LoveHoroscope;
