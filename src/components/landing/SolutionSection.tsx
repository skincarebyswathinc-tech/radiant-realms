import { motion } from "framer-motion";
import { Sparkles, Brain, Clock, Shield } from "lucide-react";

const solutions = [
  {
    icon: Sparkles,
    title: "Expert-Crafted Prompts",
    description:
      "Each prompt is designed by wellness professionals — no guesswork, just copy-paste into any AI and get personalised guidance.",
  },
  {
    icon: Brain,
    title: "Smarter AI Responses",
    description:
      "Structured prompts unlock deeper, more actionable answers from ChatGPT — the kind that generic questions never produce.",
  },
  {
    icon: Clock,
    title: "Results in 60 Seconds",
    description:
      "Skip hours of research. Paste one prompt, get a tailored plan for your skin type, gut issues, diet, or fitness goal.",
  },
  {
    icon: Shield,
    title: "Trusted & Safe Guidance",
    description:
      "Prompts are reviewed for accuracy and always remind you to consult professionals for medical concerns.",
  },
];

const SolutionSection = () => {
  return (
    <section className="py-20 md:py-28" id="solution">
      <div className="container">
        <motion.div
          className="text-center max-w-xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-sage text-sage-dark text-sm font-medium mb-4">
            The Solution
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light mb-4">
            What If AI Could Be Your{" "}
            <span className="italic">Wellness Expert?</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            With the right prompts, ChatGPT becomes your personal skin care
            advisor, gut health coach, nutritionist, and fitness trainer — all
            in one.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {solutions.map((item, index) => (
            <motion.div
              key={index}
              className="relative p-8 rounded-2xl bg-card border border-border/60 group hover:border-primary/30 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-12 h-12 rounded-xl bg-sage/60 flex items-center justify-center mb-5 group-hover:bg-sage transition-colors duration-300">
                <item.icon className="w-6 h-6 text-sage-dark" />
              </div>
              <h3 className="font-serif text-xl font-medium mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
