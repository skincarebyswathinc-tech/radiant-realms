import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    icon: "✨",
    title: "Skin Care",
    count: "120+",
    examples: ["Proven acne routines by skin type", "Anti-aging ingredient blueprints", "Personalised product guides"],
  },
  {
    icon: "🫁",
    title: "Gut Health",
    count: "100+",
    examples: ["Instant bloating relief protocols", "Probiotic food strategies", "Gut-skin connection prompts"],
  },
  {
    icon: "🥗",
    title: "Nutrition",
    count: "150+",
    examples: ["Effortless macro-balanced meal plans", "Deficiency analysis prompts", "Indian diet optimisation"],
  },
  {
    icon: "🏋️‍♀️",
    title: "Fitness",
    count: "130+",
    examples: ["Fail-proof home workouts", "PCOD-friendly routines", "Science-backed recovery plans"],
  },
];

const WhatYouGet = () => {
  return (
    <section className="py-16 md:py-24 section-divider" id="what-you-get">
      <div className="container">
        <motion.div
          className="text-center max-w-xl mx-auto mb-12 md:mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-4">
            Everything You Need
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light mb-4">
            500+ Proven, Ready-to-Use <span className="italic">Prompts</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Copy. Paste. Get expert-level personalised answers — <strong>instantly.</strong>
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 max-w-5xl mx-auto">
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              className="p-4 md:p-6 rounded-2xl bg-card border border-border/60 hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <span className="text-3xl md:text-4xl mb-3 md:mb-4 block">{cat.icon}</span>
              <h3 className="font-serif text-lg md:text-2xl font-medium mb-0.5 md:mb-1">{cat.title}</h3>
              <p className="text-primary font-semibold text-xs md:text-sm mb-3 md:mb-4">{cat.count} prompts</p>
              <ul className="space-y-1.5 md:space-y-2">
                {cat.examples.map((ex, i) => (
                  <li key={i} className="flex items-start gap-1.5 md:gap-2 text-xs md:text-sm text-muted-foreground">
                    <span className="text-primary mt-0.5">•</span>
                    {ex}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-8 md:mt-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a href="#pricing">
            <Button variant="hero" size="lg" className="rounded-full h-12 px-8 text-sm group">
              Unlock the Full Library
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
          <p className="text-xs text-muted-foreground mt-3">
            ⚡ Early-access pricing — won't last forever
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatYouGet;
