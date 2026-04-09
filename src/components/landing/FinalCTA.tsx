import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Sparkles, ShieldCheck } from "lucide-react";

const urgencyPoints = [
  { icon: Clock, text: "Launch pricing won't last forever" },
  { icon: ShieldCheck, text: "7-day money-back guarantee" },
  { icon: Sparkles, text: "Instant access — start in 2 minutes" },
];

const FinalCTA = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.08] via-sage/30 to-accent/10" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl translate-y-1/2 translate-x-1/4" />

      <div className="container relative z-10">
        <motion.div
          className="text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-5">
            You've Read This Far — That Means Something
          </span>

          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-light mb-5 leading-tight">
            Your Healthiest Self Is
            <br />
            <span className="italic text-primary">One Prompt Away.</span>
          </h2>

          <p className="text-muted-foreground text-base md:text-lg mb-4 max-w-lg mx-auto">
            You already know what it feels like to scroll endlessly, try random tips, and see zero results.
          </p>
          <p className="text-foreground text-base md:text-lg font-medium mb-10 max-w-lg mx-auto">
            This is different. One library. Personalised answers. Real change — starting today.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <a href="#pricing">
              <Button
                variant="hero"
                size="lg"
                className="h-13 md:h-14 px-8 md:px-10 rounded-full text-base group w-full sm:w-auto"
              >
                Yes, I'm Ready to Transform
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="#get-free">
              <Button
                variant="hero-outline"
                size="lg"
                className="h-13 md:h-14 px-8 md:px-10 rounded-full text-base w-full sm:w-auto"
              >
                Try a Free Sample First
              </Button>
            </a>
          </div>

          <motion.div
            className="flex flex-wrap gap-x-6 gap-y-2 justify-center mt-8 md:mt-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {urgencyPoints.map((point, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground"
              >
                <point.icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary/60" />
                <span>{point.text}</span>
              </div>
            ))}
          </motion.div>

          <p className="text-xs text-muted-foreground/60 mt-6">
            No subscriptions required · Works with free ChatGPT · Cancel-free, keep forever
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
