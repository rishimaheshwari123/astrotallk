import { Link } from "react-router-dom";
import { Youtube, Mic, Instagram } from "lucide-react";
import Client from "../components/core/Home/Client";
import CollaborationCard from "../components/core/collabration/collaboration-card";
import AwardItem from "../components/core/collabration/award-item";
import paditji from "../assets/call/panditji.png";

export default function CollaboratePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-50 to-orange-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Collaborate With Us
              </h1>
              <Link
                to="#collaborate-form"
                className="inline-flex items-center justify-center rounded-md bg-orange-600 px-6 py-3 text-lg font-medium text-white shadow-sm hover:bg-orange-700 transition-colors"
              >
                Let's make a difference together
              </Link>
            </div>
            <div className="md:w-1/2">
              <img
                src={paditji}
                alt="Collaboration Illustration"
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
              How to collaborate
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <CollaborationCard
              title="Youtube Podcast"
              icon={<Youtube className="h-8 w-8 text-orange-500" />}
              description="Astro Arun's extensive repertoire of interests is Astro-spirituality, mystic science, motivation, and crafting happy and successful life."
              additionalText="We have 280,000 audience in youtube. We update content for shorts videos and often youtube live."
              actionText="Book Him"
            />

            <CollaborationCard
              title="Keynote Speaker"
              icon={<Mic className="h-8 w-8 text-orange-500" />}
              description="Over the past years, Astrologer Jyotish Gyani studied the mantras of successful businesses which have turned their passion into purpose."
              additionalText="He treasures talking about the creative and authentic ways to inculcate Astro-Spirituality in our daily lifestyle as a secret of your extraordinary success."
              actionText="Get In Touch"
            />

            <CollaborationCard
              title="Instagram Live"
              icon={<Instagram className="h-8 w-8 text-orange-500" />}
              description="Right from the beginning, he has learned from his father that 'If you want to spread a message tell it to the youth of that generation' and in today's social media platforms is the best way to do that."
              additionalText="Astro Arun often collaborates with different well-known personalities on social media to talk about his life lessons as Spiritual Astrologer."
              actionText="Invite Him"
            />
          </div>
        </div>
      </section>

      {/* NGO/NPO Help Section */}
      <section className="py-12 bg-orange-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Need Astro Arun's Help to spread your message?
            </h2>
            <p className="text-gray-700 mb-6">
              If you are a NGO, NPO or if you are individually working for a
              cause, Jyotish Gyani will be honored to help you spread your words
              among the masses.
            </p>
            <Link
              to="#collaborate-form"
              className="inline-flex items-center justify-center rounded-md bg-orange-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-orange-700 transition-colors"
            >
              Get In Touch
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
              <h2 className="text-3xl font-bold mb-6">To invite -</h2>
              <h3 className="text-2xl font-semibold mb-8">
                Jyotish Gyani as Keynote Speaker, or for any type of
                collaboration.
              </h3>
              <Link
                to=""
                target="_blank"
                className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-base font-medium text-orange-600 shadow-sm hover:bg-gray-100 transition-colors mb-8"
              >
                Download Portfolio
              </Link>

              <div className="flex space-x-4 mt-4">
                <Link
                  to="https://www.youtube.com/@jyotishgyani3884"
                  className="bg-white p-2 rounded-full text-red-600 hover:bg-gray-100"
                >
                  <span className="sr-only">YouTube</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M19.615 3.184C20.403 3.414 21.07 4.08 21.3 4.868C21.736 6.396 22 8.2 22 12C22 15.8 21.736 17.604 21.3 19.132C21.07 19.92 20.403 20.586 19.615 20.816C18.087 21.252 12 21.5 12 21.5C12 21.5 5.913 21.252 4.385 20.816C3.597 20.586 2.93 19.92 2.7 19.132C2.264 17.604 2 15.8 2 12C2 8.2 2.264 6.396 2.7 4.868C2.93 4.08 3.597 3.414 4.385 3.184C5.913 2.748 12 2.5 12 2.5C12 2.5 18.087 2.748 19.615 3.184ZM10 8.5V15.5L16 12L10 8.5Z" />
                  </svg>
                </Link>

                <Link
                  to="https://www.instagram.com/jyotish_gyani?igsh=MWNnaHdkMWI4d2NoNQ%3D%3D"
                  className="bg-white p-2 rounded-full text-orange-600 hover:bg-gray-100"
                >
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link
                  to="https://www.facebook.com/share/1AWKLMtcSx/?mibextid=qi2Omg"
                  className="bg-white p-2 rounded-full text-orange-600 hover:bg-gray-100"
                >
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link
                  to="https://www.threads.com/@jyotish_gyani?xmt=AQF0mpzy0E2Dyn0uWUWqFWRIjcIm1SAZ14CCor4ZUjZ3Ozc"
                  className="bg-white p-2 rounded-full text-orange-600 hover:bg-gray-100"
                >
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Awards</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AwardItem title="Asia Pacific Vastu AwaJyothish Sudarshan Award" />
            <AwardItem title="Rd by International Astrology Federation" />
            <AwardItem title="Jyothish Prabhakar Award" />
            <AwardItem title="Jyothish Sudarshan Award" />
            <AwardItem title="Divine Readers Award" />
          </div>
        </div>
      </section>

      {/* Celebrity Reviews Section */}
      {/* <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Celebrity Review
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <CelebrityReview name="SHRAVANI GOSWAMI" videoId="6dXJ4wp7STw" />
            <CelebrityReview name="ARCHANA GAUTAM" videoId="FnF5v6ptl_M" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <CelebrityReview name="JYOTI GAUBA" videoId="xCC_nVaYZMk" />
            <CelebrityReview name="KRITI VERMA" videoId="6yvesKnxr2w" />
          </div>
        </div>
      </section> */}
    </main>
  );
}
