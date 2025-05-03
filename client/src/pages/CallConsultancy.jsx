import ConsultationHero from "../components/core/callconsultation/consultation-hero";
import ConsultationBenefits from "../components/core/callconsultation/consultation-benefits";
import ConsultationPackages from "../components/core/callconsultation/consultation-packages";
import FAQ from "../components/core/callconsultation/faq";
import StatsCounter from "../components/core/callconsultation/stats-counter";
import LifeChangingStories from "../components/core/callconsultation/life-changing-stories";

export default function ConsultationPage() {
  return (
    <main className="min-h-screen bg-amber-50">
      <ConsultationHero />
      <ConsultationBenefits />
      <ConsultationPackages />
      <StatsCounter />
      <LifeChangingStories />
      <FAQ />
    </main>
  );
}
