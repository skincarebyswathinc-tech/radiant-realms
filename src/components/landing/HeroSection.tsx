import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const stats = [
  { number: "100+", label: "Premium Prompts" },
  { number: "6", label: "Core Modules" },
  { number: "7", label: "Bonus Resources" },
];

const tags = [
  "Fat Loss Systems",
  "Client Conversion",
  "Content Engine",
  "Client Delivery",
  "Productivity",
  "Business Growth",
];

const HeroSection = () => {
  return (
    <section className="relative min-h-[88vh] md:min-h-screen overflow-hidden bg-brown-dark text-ivory">
      {/* Soft radial glow background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 30%, hsl(var(--gold) / 0.10) 0%, transparent 70%), radial-gradient(ellipse 80% 60% at 20% 80%, hsl(var(--sage) / 0.08) 0%, transparent 60%)",
        }}
      />
      {/* Double gold frame */}
      <div className="absolute inset-4 md:inset-8 border border-gold/25 pointer-events-none" />
      <div className="absolute inset-6 md:inset-10 border border-gold/10 pointer-events-none" />

      <div className="container relative z-10 flex flex-col items-center justify-center text-center py-20 md:py-28 lg:py-32 min-h-[88vh] md:min-h-screen">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 0.9, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[10px] md:text-[11px] tracking-[5px] uppercase text-gold-light/90 font-medium mb-7"
        >
          Premium Digital Workbook · 2025 Edition
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="w-14 h-14 rounded-full border border-gold/50 flex items-center justify-center mb-9"
        >
          <svg viewBox="0 0 28 28" fill="none" className="w-7 h-7">
            <circle cx="14" cy="14" r="11" stroke="hsl(var(--gold))" strokeWidth="1" />
            <path d="M14 6 Q18 11 14 14 Q10 17 14 22" stroke="hsl(var(--gold))" strokeWidth="1" fill="none" />
            <circle cx="14" cy="14" r="2" fill="hsl(var(--gold))" opacity="0.6" />
          </svg>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif font-light leading-[1.05] tracking-tight text-[44px] md:text-6xl lg:text-7xl text-ivory"
        >
          Nutrition
          <em className="block italic font-light text-gold-light">Prompt Library</em>
        </motion.h1>

        <div className="w-28 md:w-32 h-px my-7 bg-gradient-to-r from-transparent via-gold to-transparent" />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-[11px] md:text-xs tracking-[3px] uppercase text-ivory/60 font-normal max-w-xl"
        >
          The Ultimate AI Prompt System for Nutrition Coaches &amp; Wellness Businesses
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-3 sm:gap-4"
        >
          <Button
            asChild
            size="lg"
            className="bg-gold hover:bg-gold-light text-brown-dark uppercase tracking-[3px] text-[11px] font-semibold rounded-none px-8 h-12 border border-gold"
          >
            <Link to="/auth?mode=signup">Begin Your Library</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="bg-transparent border-gold/50 text-ivory hover:bg-gold/10 hover:text-gold-light uppercase tracking-[3px] text-[11px] font-semibold rounded-none px-8 h-12"
          >
            <a href="#get-free">Free Prompt Pack</a>
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex gap-10 md:gap-14 mt-14"
        >
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <span className="block font-serif font-light text-3xl md:text-4xl text-gold leading-none">
                {s.number}
              </span>
              <span className="block text-[8px] md:text-[9px] tracking-[2px] uppercase text-ivory/40 mt-2">
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="flex flex-wrap gap-2 md:gap-3 justify-center mt-12 max-w-2xl"
        >
          {tags.map((t) => (
            <span
              key={t}
              className="text-[8px] md:text-[9px] tracking-[2px] uppercase text-gold/70 border border-gold/25 px-3 md:px-4 py-1.5 font-medium"
            >
              {t}
            </span>
          ))}
        </motion.div>

        <p className="absolute bottom-7 left-1/2 -translate-x-1/2 text-[9px] tracking-[3px] uppercase text-ivory/25">
          Swathi Inc. · Premium Wellness Digital Products
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
