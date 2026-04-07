import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="py-20 md:py-28 bg-warm">
      <div className="container">
        <motion.div
          className="text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl md:text-5xl font-light mb-4">
            Stop Guessing.
            <br />
            <span className="italic">Start Glowing.</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-md mx-auto">
            Join thousands of women using AI to take control of their skin, gut, nutrition, and fitness — starting today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="h-14 px-10 rounded-full text-base">
              Get the Full Library — ₹3,999 / $45
            </Button>
            </Button>
            <Button variant="hero-outline" size="lg" className="h-14 px-10 rounded-full text-base">
              Try Free Sample First
            </Button>
          </div>
          <p className="mt-6 text-xs text-muted-foreground">
            7-day money-back guarantee · Instant delivery · Works with free ChatGPT
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
