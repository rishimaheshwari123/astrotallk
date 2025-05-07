import React from "react";
import book from "../../../assets/couple/instruction.png";

const Instruction = () => {
  return (
    <div>
      <section className="py-16 px-4 md:px-8 lg:px-16 ">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <img
                src={book}
                alt="Jyotish Gyani - Expert in Kundali Matching"
                width={500}
                height={500}
                className="rounded-lg shadow-xl"
              />
            </div>

            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-red-800 mb-4">
                Unlock Marital Harmony with Kundali Matching by Jyotish Gyani
              </h2>
              <p className="text-lg md:text-xl italic text-red-700 mb-6">
                (Find Your Compatible Life Partner with Accurate Kundali Milan)
              </p>
              <p className="text-base md:text-lg mb-6">
                Marriage is a significant milestone in life. In Hindu
                traditions, Kundali Matching plays a crucial role in ensuring
                that couples are compatible. Through Gun Milan, astrological
                charts determine how well two individuals align, bringing love,
                respect, and lasting happiness to their marriage. This ancient
                tradition helps to lay the foundation for a blissful married
                life, making it a must for Hindu weddings.
              </p>

              <p className="text-base md:text-lg mb-6">
                Kundali Matching is like a sacred bond that paves the way for a
                harmonious life journey together. With Jyotish Gyani’s expert
                guidance, you can ensure that your union is blessed with joy and
                stability.
              </p>

              <div className="mt-8">
                <a
                  href="/gemstone"
                  className="inline-block bg-red-800 hover:bg-red-900 text-white font-bold py-3 px-8 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
                >
                  Get Your Premium Personalized Kundali Matching
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Instruction;
