import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, Brain, Clock, Shield, ArrowRight } from "lucide-react";

const solutions = [
  {
    icon: Sparkles,
    title: "Expert-Crafted. Battle-Tested.",
    description:
      "Every prompt is designed by wellness professionals. No guesswork — just copy, paste, and get proven guidance instantly.",
  },
  {
    icon: Brain,
    title: "Unlock Smarter AI Answers",
    description:
      "Structured prompts pull deeper, actionable insights from ChatGPT. Generic questions can't compete.",
  },
  {
    icon: Clock,
    title: "Results in 60 Seconds Flat",
    description:
      "Skip hours of research. One prompt → one tailored plan for your skin, gut, diet, or fitness goal. Effortless.",
  },
  {
    icon: Shield,
    title: "Trusted & Safe. Always.",
    description:
      "Every prompt is reviewed for accuracy. Your health matters — we never cut corners.",
  },
];

const SolutionSection = () => {
  return (
    <section className="py-16 md:py-24 section-divider" id="solution">
      <div className="container">
        <motion.div
          className="text-center max-w-xl mx-auto mb-12 md:mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-sage text-sage-dark text-sm font-medium mb-4">
            The Breakthrough
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light mb-4">
            What If AI Could Be Your{" "}
            <span className="italic">Personal Wellness Expert?</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            With the right prompts, ChatGPT becomes your skin advisor, gut coach, nutritionist, and trainer — <strong>all in one.</strong>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
          {solutions.map((item, index) => (
            <motion.div
              key={index}
              className="relative p-6 md:p-8 rounded-2xl bg-card border border-border/60 group hover:border-primary/30 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl bg-sage/60 flex items-center justify-center mb-4 md:mb-5 group-hover:bg-sage transition-colors duration-300">
                <item.icon className="w-5 h-5 md:w-6 md:h-6 text-sage-dark" />
              </div>
              <h3 className="font-serif text-lg md:text-xl font-medium mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
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
          <a href="#get-free">
            <Button variant="hero" size="lg" className="rounded-full h-12 px-8 text-sm group">
              Try It Free — No Risk
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSection;
