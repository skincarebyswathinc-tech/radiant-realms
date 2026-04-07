import { motion } from "framer-motion";

const painPoints = [
  {
    emoji: "😩",
    title: "Confused by contradicting health advice?",
    description: "Every search gives different answers about what to eat, apply, or avoid.",
  },
  {
    emoji: "💸",
    title: "Tired of expensive consultations?",
    description: "₹2,000+ per session for basic diet or skin advice that feels generic.",
  },
  {
    emoji: "⏰",
    title: "No time for hours of research?",
    description: "Between work and life, who has time to read 20 articles for one answer?",
  },
  {
    emoji: "🤷‍♀️",
    title: "Don't know what to ask AI?",
    description: "ChatGPT is powerful, but vague questions give vague answers.",
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
            The Problem
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light mb-4">
            Sound <span className="italic">Familiar?</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            You're not alone. These are the exact problems our prompt library solves.
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
      </div>
    </section>
  );
};

export default PainPoints;
