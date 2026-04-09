import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const painPoints = [
  {
    emoji: "😩",
    title: "Drowning in contradicting advice?",
    description: "Every search gives a different answer. You end up more confused than before. Sound familiar?",
  },
  {
    emoji: "💸",
    title: "Burning money on generic consultations?",
    description: "₹2,000+ per session — and the advice barely feels personalised. There's a smarter way.",
  },
  {
    emoji: "⏰",
    title: "Zero time for endless research?",
    description: "Between work, family, and life — who can spend hours piecing together a wellness plan?",
  },
  {
    emoji: "🤷‍♀️",
    title: "AI feels powerful but… useless?",
    description: "ChatGPT is incredible. But vague questions give vague answers. The right prompt changes everything.",
  },
];

const PainPoints = () => {
  return (
    <section className="py-16 md:py-24 bg-warm section-divider" id="problem">
      <div className="container">
        <motion.div
          className="text-center max-w-xl mx-auto mb-12 md:mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-destructive/10 text-destructive text-sm font-medium mb-4">
            Stop Struggling
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light mb-4">
            This Frustration Ends <span className="italic">Today.</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            You deserve instant clarity — not another rabbit hole.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-3xl mx-auto">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              className="p-5 md:p-8 rounded-2xl bg-background border border-border/60 hover:border-destructive/20 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <span className="text-2xl md:text-3xl mb-3 md:mb-4 block">{point.emoji}</span>
              <h3 className="font-serif text-lg md:text-xl font-medium mb-2">{point.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{point.description}</p>
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
          <a href="#solution">
            <Button variant="hero-outline" size="lg" className="rounded-full h-12 px-8 text-sm group">
              See the Solution
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PainPoints;
