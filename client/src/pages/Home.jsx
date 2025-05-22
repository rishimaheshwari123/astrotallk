import Slider from "../components/common/Slider"
import Client from "../components/core/Home/Client"
import Client2 from "../components/core/Home/Client2"
import Services from "../components/core/Home/Services"
import StatsSection from "../components/core/Home/StatsSection"
import FreeCalculators from "../components/core/Home/FreeCalculators"
import TestimonialSection from "../components/core/Home/TestimonialSection"
import FeaturesSection from "../components/core/Home/FeaturesSection"
import FAQ from "../components/core/Home/Faq"
import { useTranslation } from "react-i18next"

const Home = () => {
  const { t } = useTranslation()

  return (
    <div>
      <Slider />
      <Client />
      <Client2 />
      <Services title={t("home.services")} />
      <StatsSection />
      <FreeCalculators title={t("home.freeCalculators")} />
      <FeaturesSection />
      <TestimonialSection title={t("home.happyClientTestimonials")} />
      <FAQ title={t("home.frequentlyAskedQuestions")} />
    </div>
  )
}

export default Home
