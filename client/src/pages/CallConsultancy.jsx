import ConsultationHero from "../components/core/callconsultation/consultation-hero";
import ConsultationBenefits from "../components/core/callconsultation/consultation-benefits";
import ConsultationPackages from "../components/core/callconsultation/consultation-packages";
import FAQ from "../components/core/callconsultation/faq";
import StatsCounter from "../components/core/callconsultation/stats-counter";
import LifeChangingStories from "../components/core/callconsultation/life-changing-stories";
import { useTranslation } from "react-i18next";

export default function ConsultationPage() {
    const { i18n } = useTranslation();
  
    const isHindi = i18n.language === "hi";
  
  return (
    <main className="min-h-screen bg-amber-50">
      <ConsultationHero isHindi={isHindi} />
      <ConsultationBenefits isHindi={isHindi}/>
      <ConsultationPackages isHindi={isHindi}/>
      <StatsCounter isHindi={isHindi}/>
      <LifeChangingStories isHindi={isHindi}/>
      <FAQ isHindi={isHindi}/>
    </main>
  );
}
