import { Link } from "react-router-dom";
import { Youtube, Mic, Instagram } from "lucide-react";
import Client from "../components/core/Home/Client";
import CollaborationCard from "../components/core/collabration/collaboration-card";
import AwardItem from "../components/core/collabration/award-item";
import paditji from "../assets/call/panditji.png";
import { useTranslation } from "react-i18next";

export default function CollaboratePage() {
  const { i18n } = useTranslation();

  const isHindi = i18n.language === "hi";

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-50 to-orange-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {isHindi ? "हमारे साथ सहयोग करें" : "Collaborate With Us"}
              </h1>
              <Link
                to="#collaborate-form"
                className="inline-flex items-center justify-center rounded-md bg-orange-600 px-6 py-3 text-lg font-medium text-white shadow-sm hover:bg-orange-700 transition-colors"
              >
                {isHindi ? "आइए साथ मिलकर बदलाव करें" : "Let's make a difference together"}
              </Link>
            </div>
            <div className="md:w-1/2">
              <img
                src={paditji}
                alt={isHindi ? "सहयोग चित्रण" : "Collaboration Illustration"}
                width={500}
                height={500}
                className="mx-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured In Section */}
      <Client />

      {/* How to Collaborate Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {isHindi ? "कैसे सहयोग करें" : "How to collaborate"}
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <CollaborationCard
              title={isHindi ? "यूट्यूब पॉडकास्ट" : "Youtube Podcast"}
              icon={<Youtube className="h-8 w-8 text-orange-500" />}
              description={
                isHindi
                  ? "अस्ट्रो अरुण की रुचियां हैं एस्ट्रो-आध्यात्मिकता, रहस्यमय विज्ञान, प्रेरणा, और खुशहाल सफल जीवन बनाना।"
                  : "Astro Arun's extensive repertoire of interests is Astro-spirituality, mystic science, motivation, and crafting happy and successful life."
              }
              additionalText={
                isHindi
                  ? "हमारे पास यूट्यूब पर 280,000 दर्शक हैं। हम शॉर्ट वीडियो और अक्सर यूट्यूब लाइव के लिए सामग्री अपडेट करते हैं।"
                  : "We have 280,000 audience in youtube. We update content for shorts videos and often youtube live."
              }
              actionText={isHindi ? "बुक करें" : "Book Him"}
            />

            <CollaborationCard
              title={isHindi ? "मुख्य वक्ता" : "Keynote Speaker"}
              icon={<Mic className="h-8 w-8 text-orange-500" />}
              description={
                isHindi
                  ? "पिछले वर्षों में, ज्योतिष ज्ञानी ने सफल व्यवसायों के मंत्रों का अध्ययन किया है जिन्होंने अपने जुनून को उद्देश्य में बदला है।"
                  : "Over the past years, Astrologer Jyotish Gyani studied the mantras of successful businesses which have turned their passion into purpose."
              }
              additionalText={
                isHindi
                  ? "वे रोज़मर्रा की जिंदगी में एस्ट्रो-आध्यात्मिकता को शामिल करने के रचनात्मक और प्रामाणिक तरीकों के बारे में बात करना पसंद करते हैं।"
                  : "He treasures talking about the creative and authentic ways to inculcate Astro-Spirituality in our daily lifestyle as a secret of your extraordinary success."
              }
              actionText={isHindi ? "संपर्क करें" : "Get In Touch"}
            />

            <CollaborationCard
              title={isHindi ? "इंस्टाग्राम लाइव" : "Instagram Live"}
              icon={<Instagram className="h-8 w-8 text-orange-500" />}
              description={
                isHindi
                  ? "शुरुआत से ही उन्होंने अपने पिता से सीखा है कि संदेश फैलाने के लिए उस पीढ़ी के युवाओं को बताना चाहिए, और आज के सोशल मीडिया प्लेटफॉर्म सबसे अच्छे माध्यम हैं।"
                  : "Right from the beginning, he has learned from his father that 'If you want to spread a message tell it to the youth of that generation' and in today's social media platforms is the best way to do that."
              }
              additionalText={
                isHindi
                  ? "अस्ट्रो अरुण अक्सर सोशल मीडिया पर विभिन्न प्रसिद्ध हस्तियों के साथ सहयोग करते हैं ताकि अपने जीवन के अनुभव साझा कर सकें।"
                  : "Astro Arun often collaborates with different well-known personalities on social media to talk about his life lessons as Spiritual Astrologer."
              }
              actionText={isHindi ? "आमंत्रित करें" : "Invite Him"}
            />
          </div>
        </div>
      </section>

      {/* NGO/NPO Help Section */}
      <section className="py-12 bg-orange-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {isHindi ? "क्या आपको अपने संदेश को फैलाने के लिए अस्ट्रो अरुण की मदद चाहिए?" : "Need Astro Arun's Help to spread your message?"}
            </h2>
            <p className="text-gray-700 mb-6">
              {isHindi
                ? "यदि आप एक एनजीओ, एनपीओ हैं या किसी कारण के लिए व्यक्तिगत रूप से काम कर रहे हैं, तो ज्योतिष ज्ञानी आपके संदेश को जनता तक पहुंचाने में मदद करेंगे।"
                : "If you are a NGO, NPO or if you are individually working for a cause, Jyotish Gyani will be honored to help you spread your words among the masses."}
            </p>
            <Link
              to="#collaborate-form"
              className="inline-flex items-center justify-center rounded-md bg-orange-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-orange-700 transition-colors"
            >
              {isHindi ? "संपर्क करें" : "Get In Touch"}
            </Link>
          </div>
        </div>
      </section>

      {/* Collaborate Form Section */}
      <section
        id="collaborate-form"
        className="py-16 bg-gradient-to-b from-orange-500 to-amber-600 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">{isHindi ? "आमंत्रित करने के लिए -" : "To invite -"}</h2>
              <h3 className="text-2xl font-semibold mb-8">
                {isHindi
                  ? "ज्योतिष ज्ञानी को मुख्य वक्ता के रूप में, या किसी भी प्रकार के सहयोग के लिए।"
                  : "Jyotish Gyani as Keynote Speaker, or for any type of collaboration."}
              </h3>
              <Link
                to=""
                target="_blank"
                className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-base font-medium text-orange-600 shadow-sm hover:bg-gray-100 transition-colors mb-8"
              >
                {isHindi ? "पोर्टफोलियो डाउनलोड करें" : "Download Portfolio"}
              </Link>

              {/* Social Links */}
              <div className="flex space-x-4 mt-4">
                {/* YouTube */}
                <Link
                  to="https://www.youtube.com/@jyotishgyani3884"
                  className="bg-white p-2 rounded-full text-red-600 hover:bg-gray-100"
                  aria-label={isHindi ? "यूट्यूब" : "YouTube"}
                >
                  {/* YouTube SVG icon here */}
                  <Youtube className="h-6 w-6" />
                </Link>

                {/* Instagram */}
                <Link
                  to="https://www.instagram.com/jyotish_gyani?igsh=MWNnaHdkMWI4d2VlYzQxMzM4NA=="
                  className="bg-white p-2 rounded-full text-pink-600 hover:bg-gray-100"
                  aria-label={isHindi ? "इंस्टाग्राम" : "Instagram"}
                >
                  <Instagram className="h-6 w-6" />
                </Link>
              </div>
            </div>

            <div>
              {/* Form goes here - you can add your form components */}
              <h3 className="text-xl font-semibold mb-4">{isHindi ? "फॉर्म भेजें" : "Send a form"}</h3>
              {/* Form fields - example */}
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block mb-2 text-white">
                    {isHindi ? "नाम" : "Name"}
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full rounded-md px-3 py-2 text-gray-900"
                    placeholder={isHindi ? "अपना नाम दर्ज करें" : "Enter your name"}
                  />
                </div>
                {/* More form fields */}
                <button
                  type="submit"
                  className="bg-white text-orange-600 font-semibold rounded-md px-4 py-2 hover:bg-gray-100"
                >
                  {isHindi ? "जमा करें" : "Submit"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
  <div className="container mx-auto px-4 md:px-6">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        {isHindi ? "पुरस्कार" : "Awards"}
      </h2>
      <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <AwardItem
        title={
          isHindi
            ? "एशिया पैसिफिक वास्तु ज्योतिर्विद सुदर्शन पुरस्कार"
            : "Asia Pacific Vastu AwaJyothish Sudarshan Award"
        }
      />
      <AwardItem
        title={
          isHindi
            ? "अंतरराष्ट्रीय ज्योतिष महासंघ द्वारा मान्यता प्राप्त"
            : "Rd by International Astrology Federation"
        }
      />
      <AwardItem
        title={isHindi ? "ज्योतिष प्रभाकर पुरस्कार" : "Jyothish Prabhakar Award"}
      />
      <AwardItem
        title={isHindi ? "ज्योतिष सुदर्शन पुरस्कार" : "Jyothish Sudarshan Award"}
      />
      <AwardItem
        title={isHindi ? "दिव्य रीडर्स पुरस्कार" : "Divine Readers Award"}
      />
    </div>
  </div>
</section>

    </main>
  );
}
