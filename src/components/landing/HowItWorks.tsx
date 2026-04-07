import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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
    <section className="py-16 md:py-24 bg-warm section-divider" id="how-it-works">
      <div className="container">
        <motion.div
          className="text-center max-w-xl mx-auto mb-12 md:mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-4">
            How It Works
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light mb-4">
            Three Steps to <span className="italic">Better Health</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            No apps to install. No subscriptions required. Just prompts that
            work.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative flex gap-5 md:gap-10 items-start"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
            >
              {/* Timeline line */}
              {index < steps.length - 1 && (
                <div className="absolute left-[25px] md:left-[35px] top-16 bottom-0 w-px bg-border" />
              )}

              {/* Step number circle */}
              <div className="shrink-0 w-[50px] h-[50px] md:w-[70px] md:h-[70px] rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center">
                <span className="font-serif text-lg md:text-2xl font-semibold text-primary">
                  {step.number}
                </span>
              </div>

              {/* Content */}
              <div className="pb-10 md:pb-16 pt-1">
                <h3 className="font-serif text-xl md:text-2xl font-medium mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Inline CTA */}
        <motion.div
          className="text-center mt-4 md:mt-8"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a href="#get-free">
            <Button variant="hero-outline" size="lg" className="rounded-full h-12 px-8 text-sm group">
              Try It Free
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
