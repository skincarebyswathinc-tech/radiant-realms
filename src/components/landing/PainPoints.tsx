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
    <section className="py-20 md:py-28 bg-warm">
      <div className="container">
        <motion.div
          className="text-center max-w-xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl md:text-5xl font-light mb-4">
            Sound <span className="italic">Familiar?</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            You're not alone. These are the exact problems our prompt library solves.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              className="p-6 md:p-8 rounded-2xl bg-background border border-border/60"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <span className="text-3xl mb-4 block">{point.emoji}</span>
              <h3 className="font-serif text-xl font-medium mb-2">{point.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
