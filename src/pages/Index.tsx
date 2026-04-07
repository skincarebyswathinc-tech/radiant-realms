import HeroSection from "@/components/landing/HeroSection";
import PainPoints from "@/components/landing/PainPoints";
import SolutionSection from "@/components/landing/SolutionSection";
import LeadCapture from "@/components/landing/LeadCapture";
import WhatYouGet from "@/components/landing/WhatYouGet";
import PricingSection from "@/components/landing/PricingSection";
import HowItWorks from "@/components/landing/HowItWorks";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import FAQSection from "@/components/landing/FAQSection";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      {/* 1. Hero */}
      <HeroSection />
      {/* 2. Problem */}
      <PainPoints />
      {/* 3. Solution */}
      <SolutionSection />
      {/* 4. Free Lead Magnet */}
      <LeadCapture />
      {/* 5. Product Stack */}
      <WhatYouGet />
      {/* 6. How It Works */}
      <HowItWorks />
      {/* 7. Trust / Proof */}
      <TestimonialsSection />
      {/* 8. Pricing */}
      <PricingSection />
      {/* 9. FAQ */}
      <FAQSection />
      {/* 10. Final CTA */}
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Index;
