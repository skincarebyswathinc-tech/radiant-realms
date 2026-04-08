import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Shield, Zap, Users } from "lucide-react";

const promptCards = [
  { category: "Skin Care", prompt: "Create a morning routine for oily, acne-prone skin with Indian climate considerations…", color: "bg-primary/10 text-primary" },
  { category: "Gut Health", prompt: "Design a 7-day gut reset plan for someone with frequent bloating after meals…", color: "bg-accent/20 text-accent-foreground" },
  { category: "Nutrition", prompt: "Build a 1,800 cal vegetarian meal plan optimised for PCOD management…", color: "bg-sage text-sage-dark" },
  { category: "Fitness", prompt: "Create a low-impact home workout for post-pregnancy recovery…", color: "bg-secondary text-secondary-foreground" },
];

const trustBadges = [
  { icon: Users, label: "2,000+ Users" },
  { icon: Star, label: "4.9★ Rated" },
  { icon: Shield, label: "7-Day Guarantee" },
  { icon: Zap, label: "Instant Access" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-sage/20" />
      <div className="absolute top-0 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-accent/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

      <div className="container relative z-10 py-12 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left — Copy */}
          <div className="text-center lg:text-left order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sage text-sage-dark text-sm font-medium tracking-wide mb-5 md:mb-6">
                <Zap className="w-3.5 h-3.5" />
                AI-Powered Wellness Prompts
              </span>
            </motion.div>

            <motion.h1
              className="font-serif text-[2.25rem] md:text-5xl lg:text-6xl xl:text-7xl font-light leading-[1.08] tracking-tight mb-5 md:mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              Transform Your Health
              <br />
              <span className="italic font-normal text-primary">
                With One Prompt
              </span>
            </motion.h1>

            <motion.p
              className="text-base md:text-xl text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0 mb-8 md:mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              500+ expert-crafted AI prompts for skin care, gut health,
              nutrition & fitness — personalised answers in seconds, not hours.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              <a href="#get-free">
                <Button
                  variant="hero"
                  size="lg"
                  className="h-13 md:h-14 px-8 md:px-10 rounded-full text-base group w-full sm:w-auto"
                >
                  Get Free Prompt Pack
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href="#pricing">
                <Button
                  variant="hero-outline"
                  size="lg"
                  className="h-13 md:h-14 px-8 md:px-10 rounded-full text-base w-full sm:w-auto"
                >
                  Unlock Full Library
                </Button>
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              className="flex flex-wrap gap-x-5 md:gap-x-6 gap-y-2.5 mt-8 md:mt-10 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              {trustBadges.map((badge, i) => (
                <div
                  key={i}
                  className="flex items-center gap-1.5 md:gap-2 text-xs md:text-sm text-muted-foreground"
                >
                  <badge.icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary/70" />
                  <span>{badge.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — UI Mockup */}
          <motion.div
            className="relative order-2 hidden md:block"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative bg-card/80 backdrop-blur-sm border border-border/60 rounded-2xl p-5 shadow-2xl shadow-primary/5">
              {/* Mockup header */}
              <div className="flex items-center gap-3 mb-5 pb-4 border-b border-border/40">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-destructive/40" />
                  <div className="w-3 h-3 rounded-full bg-accent/50" />
                  <div className="w-3 h-3 rounded-full bg-primary/40" />
                </div>
                <div className="flex-1 h-7 bg-muted/60 rounded-lg flex items-center px-3">
                  <span className="text-xs text-muted-foreground">
                    glowprompts.com/library
                  </span>
                </div>
              </div>

              {/* Prompt cards */}
              <div className="space-y-3">
                {promptCards.map((card, i) => (
                  <motion.div
                    key={i}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-background/80 border border-border/30 hover:border-primary/20 transition-colors duration-300"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + i * 0.12 }}
                  >
                    <span className={`shrink-0 mt-0.5 px-2.5 py-1 rounded-md text-[11px] font-semibold tracking-wide ${card.color}`}>
                      {card.category}
                    </span>
                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                      {card.prompt}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Bottom stat bar */}
              <div className="mt-5 pt-4 border-t border-border/40 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                    <Star className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-xs text-muted-foreground">
                    500+ prompts ready
                  </span>
                </div>
                <span className="text-[11px] font-medium text-primary">
                  Copy & Paste →
                </span>
              </div>
            </div>

            {/* Floating accent elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/15 rounded-full blur-2xl" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
