import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Plug, MessageCircle, Sparkles, ShieldCheck } from "lucide-react";

const steps = [
  {
    label: "Plug",
    icon: Plug,
    title: "Pick Your Prompt",
    description:
      "Browse 500+ ready-made prompts — organised by skin, gut, nutrition & fitness. Find exactly what you need in seconds.",
  },
  {
    label: "Ask",
    icon: MessageCircle,
    title: "Paste & Personalise",
    description:
      "Copy the prompt into ChatGPT (free version works perfectly). Fill in a few details — age, skin type, goals — and hit send.",
  },
  {
    label: "Get Results",
    icon: Sparkles,
    title: "Get Your Custom Plan — Instantly",
    description:
      "In under 30 seconds: a detailed routine, meal plan, or workout — tailored to you. No generic advice. No endless research. Just clarity.",
  },
];

const differentiators = [
  "Proven prompts built on real wellness frameworks — not random internet tips",
  "Works for personal use AND for coaches building client protocols",
  "No apps, no subscriptions — copy, paste, transform. It's that effortless.",
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
            Ridiculously Simple
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light mb-4">
            Plug → Ask → <span className="italic text-primary">Transform</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-md mx-auto">
            Three steps. Sixty seconds. A personalised wellness plan that actually works.
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
              {index < steps.length - 1 && (
                <div className="absolute left-[25px] md:left-[35px] top-16 bottom-0 w-px bg-border" />
              )}

              <div className="shrink-0 w-[50px] h-[50px] md:w-[70px] md:h-[70px] rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center">
                <step.icon className="w-5 h-5 md:w-7 md:h-7 text-primary" />
              </div>

              <div className="pb-10 md:pb-16 pt-1">
                <span className="text-xs font-semibold uppercase tracking-widest text-primary/70 mb-1 block">
                  {step.label}
                </span>
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

        <motion.div
          className="max-w-xl mx-auto mt-4 md:mt-8 bg-background/60 border border-border/40 rounded-2xl p-6 md:p-8"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h4 className="font-serif text-lg md:text-xl font-medium mb-4 text-center">
            Why This Beats Random Advice
          </h4>
          <ul className="space-y-3">
            {differentiators.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                <ShieldCheck className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="text-center mt-8 md:mt-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a href="#get-free">
            <Button variant="hero" size="lg" className="rounded-full h-12 px-8 text-sm group">
              Get Your Free Prompts Now
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
