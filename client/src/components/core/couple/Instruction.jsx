import React from "react";
import book from "../../../assets/couple/instruction.png";

const Instruction = ({ isHindi }) => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 ">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <img
              src={book}
              alt={
                isHindi
                  ? "ज्योतिष ज्ञानी - कुंडली मैचिंग में विशेषज्ञ"
                  : "Jyotish Gyani - Expert in Kundali Matching"
              }
              width={500}
              height={500}
              className="rounded-lg shadow-xl"
            />
          </div>

          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-red-800 mb-4">
              {isHindi
                ? "कुंडली मिलान से विवाहिक सामंजस्य खोलें - ज्योतिष ज्ञानी के साथ"
                : "Unlock Marital Harmony with Kundali Matching by Jyotish Gyani"}
            </h2>
            <p className="text-lg md:text-xl italic text-red-700 mb-6">
              {isHindi
                ? "(सटीक कुंडली मिलान के साथ अपने उपयुक्त जीवनसाथी को पाएं)"
                : "(Find Your Compatible Life Partner with Accurate Kundali Milan)"}
            </p>
            <p className="text-base md:text-lg mb-6">
              {isHindi
                ? "विवाह जीवन का एक महत्वपूर्ण पड़ाव है। हिंदू परंपराओं में, कुंडली मिलान यह सुनिश्चित करने में अहम भूमिका निभाता है कि दंपती एक-दूसरे के अनुकूल हों। गुण मिलान के माध्यम से, ज्योतिषीय चार्ट यह निर्धारित करते हैं कि दो व्यक्तियों के बीच कैसा तालमेल है, जिससे विवाह में प्रेम, सम्मान और स्थायी खुशी आती है। यह प्राचीन परंपरा सुखमय विवाहित जीवन की नींव रखती है, जो हिंदू विवाह के लिए आवश्यक है।"
                : "Marriage is a significant milestone in life. In Hindu traditions, Kundali Matching plays a crucial role in ensuring that couples are compatible. Through Gun Milan, astrological charts determine how well two individuals align, bringing love, respect, and lasting happiness to their marriage. This ancient tradition helps to lay the foundation for a blissful married life, making it a must for Hindu weddings."}
            </p>

            <p className="text-base md:text-lg mb-6">
              {isHindi
                ? "कुंडली मिलान एक पवित्र बंधन की तरह है जो एक साथ एक सामंजस्यपूर्ण जीवन यात्रा का मार्ग प्रशस्त करता है। ज्योतिष ज्ञानी के विशेषज्ञ मार्गदर्शन के साथ, आप यह सुनिश्चित कर सकते हैं कि आपका संबंध खुशी और स्थिरता से भरा हो।"
                : "Kundali Matching is like a sacred bond that paves the way for a harmonious life journey together. With Jyotish Gyani’s expert guidance, you can ensure that your union is blessed with joy and stability."}
            </p>

            <div className="mt-8">
              <a
                href="/gemstone"
                className="inline-block bg-red-800 hover:bg-red-900 text-white font-bold py-3 px-8 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
              >
                {isHindi
                  ? "अपनी प्रीमियम व्यक्तिगत कुंडली मिलान प्राप्त करें"
                  : "Get Your Premium Personalized Kundali Matching"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instruction;
