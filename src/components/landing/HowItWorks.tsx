import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Choose Your Prompt",
    description:
      "Browse 500+ prompts across skin care, gut health, nutrition, and fitness. Find the one that matches your concern.",
  },
  {
    number: "02",
    title: "Paste into ChatGPT",
    description:
      "Copy the prompt, paste it into ChatGPT (free version works!), and add your personal details where indicated.",
  },
  {
    number: "03",
    title: "Get Your Custom Plan",
    description:
      "Receive a detailed, personalised response — a routine, meal plan, workout, or diagnosis guide tailored to you.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 md:py-28 bg-warm" id="how-it-works">
      <div className="container">
        <motion.div
          className="text-center max-w-xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-4">
            How It Works
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light mb-4">
            Three Steps to <span className="italic">Better Health</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            No apps to install. No subscriptions required. Just prompts that
            work.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative flex gap-6 md:gap-10 items-start"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              {/* Timeline line */}
              {index < steps.length - 1 && (
                <div className="absolute left-[27px] md:left-[35px] top-16 bottom-0 w-px bg-border" />
              )}

              {/* Step number circle */}
              <div className="shrink-0 w-14 h-14 md:w-[70px] md:h-[70px] rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center">
                <span className="font-serif text-xl md:text-2xl font-semibold text-primary">
                  {step.number}
                </span>
              </div>

              {/* Content */}
              <div className="pb-12 md:pb-16">
                <h3 className="font-serif text-2xl font-medium mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
