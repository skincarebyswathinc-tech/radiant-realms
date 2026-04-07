import HeroSection from "@/components/landing/HeroSection";
import PainPoints from "@/components/landing/PainPoints";
import SolutionSection from "@/components/landing/SolutionSection";
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
      {/* 1. Hook — Grab attention */}
      <HeroSection />
      {/* 2. Problem — Agitate the pain */}
      <PainPoints />
      {/* 3. Solution — Present the answer */}
      <SolutionSection />
      {/* 4. How It Works — Make it simple */}
      <HowItWorks />
      {/* 5. What You Get — Show the product */}
      <WhatYouGet />
      {/* 6. Lead Magnet — Capture mid-page */}
      <LeadCapture />
      {/* 7. Social Proof — Build trust */}
      <TestimonialsSection />
      {/* 8. Pricing — The offer */}
      <PricingSection />
      {/* 9. FAQ — Overcome objections */}
      <FAQSection />
      {/* 10. Final CTA — Close */}
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Index;
