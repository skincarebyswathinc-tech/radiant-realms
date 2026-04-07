import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, Heart } from "lucide-react";

const closingPoints = [
  { icon: Zap, text: "Instant digital delivery" },
  { icon: Shield, text: "7-day money-back guarantee" },
  { icon: Heart, text: "Works with free ChatGPT" },
];

const FinalCTA = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Rich gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.06] via-sage/30 to-accent/10" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl translate-y-1/2 translate-x-1/4" />

      <div className="container relative z-10">
        <motion.div
          className="text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-5 md:mb-6">
            Start Your Journey Today
          </span>

          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-light mb-4 md:mb-5 leading-tight">
            Stop Guessing.
            <br />
            <span className="italic text-primary">Start Glowing.</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg mb-8 md:mb-10 max-w-md mx-auto">
            Join thousands of women using AI to take control of their skin, gut,
            nutrition, and fitness — starting today.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <a href="#pricing">
              <Button
                variant="hero"
                size="lg"
                className="h-13 md:h-14 px-8 md:px-10 rounded-full text-base group w-full sm:w-auto"
              >
                Get the Full Library — ₹3,999
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="#get-free">
              <Button
                variant="hero-outline"
                size="lg"
                className="h-13 md:h-14 px-8 md:px-10 rounded-full text-base w-full sm:w-auto"
              >
                Try Free Sample First
              </Button>
            </a>
          </div>

          {/* Closing trust points */}
          <motion.div
            className="flex flex-wrap gap-x-6 gap-y-2 justify-center mt-8 md:mt-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {closingPoints.map((point, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground"
              >
                <point.icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary/60" />
                <span>{point.text}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
