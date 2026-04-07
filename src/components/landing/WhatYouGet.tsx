import { motion } from "framer-motion";

const categories = [
  {
    icon: "✨",
    title: "Skin Care",
    count: "120+",
    examples: ["Acne routine by skin type", "Anti-aging ingredient guide", "Product recommendations"],
  },
  {
    icon: "🫁",
    title: "Gut Health",
    count: "100+",
    examples: ["Bloating relief protocols", "Probiotic food plans", "Gut-skin axis prompts"],
  },
  {
    icon: "🥗",
    title: "Nutrition",
    count: "150+",
    examples: ["Macro-balanced meal plans", "Deficiency analysis", "Indian diet optimization"],
  },
  {
    icon: "🏋️‍♀️",
    title: "Fitness",
    count: "130+",
    examples: ["Home workout routines", "PCOD-friendly exercises", "Recovery plans"],
  },
];

const WhatYouGet = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <motion.div
          className="text-center max-w-xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-4">
            What's Inside
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light mb-4">
            500+ Ready-to-Use <span className="italic">Prompts</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Copy, paste into ChatGPT, and get expert-level personalised answers instantly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-2xl bg-card border border-border/60 hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <span className="text-4xl mb-4 block">{cat.icon}</span>
              <h3 className="font-serif text-2xl font-medium mb-1">{cat.title}</h3>
              <p className="text-primary font-semibold text-sm mb-4">{cat.count} prompts</p>
              <ul className="space-y-2">
                {cat.examples.map((ex, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-primary mt-0.5">•</span>
                    {ex}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYouGet;
