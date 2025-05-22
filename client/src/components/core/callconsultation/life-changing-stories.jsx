export default function LifeChangingStories({ isHindi }) {
  return (
    <section className="w-full py-12 md:py-24 bg-amber-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#800909]">
            {isHindi ? "जीवन बदल देने वाली कहानियाँ" : "Life Changing Stories"}
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto my-4"></div>
          <p className="text-muted-foreground md:text-lg max-w-3xl mx-auto">
            {isHindi
              ? "हमारी ज्योतिष सेवा का एकमात्र उद्देश्य लोगों को फंसी हुई परिस्थितियों से निकालना था, और हमें गर्व महसूस होता है जब लोग हम पर विश्वास करते हैं और अपनी जीवन बदल देने वाली कहानियाँ साझा करते हैं।"
              : "The sole purpose behind our astrology service was to take people out of stuck situations, and we feel accomplished when people believe in us and share their life-changing stories."}
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-sm">
          <div className="border-b pb-6 mb-6">
            <p className="text-muted-foreground italic">
              {isHindi
                ? "जीवन के कठिन समय में, मुझे ज्योतिषी की ऑनलाइन सलाह से मदद मिली। वह सच्चे और देखभाल करने वाले थे, जैसे एक अच्छा दोस्त। उन्होंने मुझे उपयोगी सुझाव दिए, जैसे नाम बदलना और उपचार आज़माना, जिससे मैं बेहतर और सकारात्मक महसूस करने लगा। उनकी मार्गदर्शना ने मेरा जीवन बेहतर बनाया। अगर आप कठिन दौर से गुजर रहे हैं, तो मैं आपको सलाह दूंगा कि ऑनलाइन ज्योतिषी से कॉल पर बात करें। इससे मुझे बहुत मदद मिली।"
                : "During hard times in life, I found help from the astrologer's online consultation. He was genuine and caring, like a good friend. He gave me useful ideas, like changing my name and trying remedies, which made me feel better and more positive. His guidance changed my life for the better. If you're going through tough times, I suggest talking to an online astrologer through a call. It really helped me a lot."}
            </p>
          </div>

          <div>
            <p className="text-muted-foreground">
              {isHindi
                ? "मैंने ज्योतिषी को इंस्टाग्राम पर फॉलो करना शुरू किया और अपने लिए एक व्यक्तिगत प्रीमियम कुंडली भी ऑर्डर की। कुंडली ने मेरी वर्तमान समस्याओं और संभावित भविष्य की चुनौतियों के बारे में विस्तृत जानकारी दी। समाधान खोजने के लिए, मैंने ऑनलाइन कंसल्टेशन कॉल बुक की, जिन्होंने किस्मत बढ़ाने के लिए उपचार विस्तार से बताए।"
                : "I began following the astrologer on Instagram and also ordered a personalized premium kundli for myself. The kundli provided me with detailed insights into my current issues and potential future challenges. Seeking solutions, I scheduled an online consultation call, who carefully explained the remedies for enhancing my luck."}
            </p>
            <p className="text-muted-foreground mt-4">
              {isHindi
                ? "मैं वर्तमान में इन उपायों को अपना रही हूँ और सकारात्मक प्रभाव महसूस कर रही हूँ। बाद में, मैंने अपने पति के लिए भी कंसल्टेशन कराया। उन्होंने भी मार्गदर्शन से आत्मविश्वास महसूस किया। हम इस मार्गदर्शन के लिए अत्यंत आभारी हैं। कृपया हमारा मार्गदर्शन यूं ही जारी रखें।"
                : "I'm currently implementing these remedies and am pleased with the positive vibes I'm experiencing. Subsequently, I arranged a consultation for my husband as well. He, too, feels more confident after following the guidance. We're immensely grateful for the guidance provided. Please continue to illuminate our path."}
            </p>
            <p className="text-right mt-4 text-[#800000] font-bold">
              {isHindi ? "- प्रिया सोनी" : "- Priya Soni"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
