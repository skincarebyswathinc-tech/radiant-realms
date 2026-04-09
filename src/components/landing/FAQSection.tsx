import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What exactly is an AI Prompt Library?",
    a: "It's a curated collection of ready-to-use questions you copy-paste into ChatGPT (or any AI). Each prompt is crafted by wellness experts to give you personalised, actionable answers — instantly. No guesswork.",
  },
  {
    q: "Do I need ChatGPT Plus?",
    a: "Nope! These prompts work with the free version of ChatGPT, Google Gemini, or any AI assistant. Zero paid subscriptions needed.",
  },
  {
    q: "Is this a replacement for a doctor?",
    a: "No. This is an educational tool for general wellness guidance. Always consult a healthcare professional for medical conditions.",
  },
  {
    q: "Can I use this for my coaching business?",
    a: "The Starter and Pro Library are for personal use. The Monthly Membership includes a commercial license — use prompts with your clients, no restrictions.",
  },
  {
    q: "How fast do I get the prompts?",
    a: "Instantly. After purchase, you receive a beautifully organised PDF + Notion template via email. WhatsApp access included for bonus materials.",
  },
  {
    q: "What if I don't like it?",
    a: "7-day no-questions-asked refund. We're confident you'll love it — but there's zero risk either way.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-16 md:py-24 bg-warm" id="faq">
      <div className="container">
        <motion.div
          className="text-center max-w-xl mx-auto mb-10 md:mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-4">
            Got Questions?
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light mb-4">
            We've Got <span className="italic">Answers.</span>
          </h2>
        </motion.div>

        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="space-y-2.5 md:space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="border border-border/60 rounded-xl px-5 md:px-6 bg-background"
              >
                <AccordionTrigger className="text-left font-medium text-sm md:text-base hover:no-underline py-4 md:py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-4 md:pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          className="text-center mt-8 md:mt-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-sm text-muted-foreground mb-4">Still undecided? Start free — zero risk.</p>
          <a href="#get-free">
            <Button variant="hero-outline" size="lg" className="rounded-full h-12 px-8 text-sm group">
              Grab Your Free Prompt Pack
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
