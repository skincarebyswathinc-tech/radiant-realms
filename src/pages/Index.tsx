import AppHeader from "@/components/AppHeader";
import HeroSection from "@/components/landing/HeroSection";
import WelcomeSection from "@/components/landing/WelcomeSection";
import PainPoints from "@/components/landing/PainPoints";
import SolutionSection from "@/components/landing/SolutionSection";
import WhoItsFor from "@/components/landing/WhoItsFor";
import HowItWorks from "@/components/landing/HowItWorks";
import WhatYouGet from "@/components/landing/WhatYouGet";
import LeadCapture from "@/components/landing/LeadCapture";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import PricingSection from "@/components/landing/PricingSection";
import FAQSection from "@/components/landing/FAQSection";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <AppHeader variant="light" />
      <HeroSection />
      <WelcomeSection />
      <PainPoints />
      <SolutionSection />
      <WhoItsFor />
      <HowItWorks />
      <WhatYouGet />
      <LeadCapture />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Index;
