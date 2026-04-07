import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-wellness.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Natural wellness ingredients"
          className="w-full h-full object-cover opacity-20"
          width={1280}
          height={720}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      <div className="container relative z-10 py-20 md:py-32">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-sage text-sage-dark text-sm font-medium tracking-wide mb-6">
              AI-Powered Wellness Prompts
            </span>
          </motion.div>

          <motion.h1
            className="font-serif text-4xl md:text-6xl lg:text-7xl font-light leading-[1.1] tracking-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            Your Personal AI
            <br />
            <span className="italic font-normal text-primary">Wellness Guide</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            500+ expert-crafted AI prompts for skin care, gut health, nutrition & fitness — get personalised answers in seconds.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            <Button variant="hero" size="lg" className="h-14 px-10 rounded-full text-base">
              Get Started — ₹99
            </Button>
            <Button variant="hero-outline" size="lg" className="h-14 px-10 rounded-full text-base">
              Download Free Sample
            </Button>
          </motion.div>

          <motion.p
            className="mt-6 text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Trusted by 2,000+ women & health coaches across India
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
