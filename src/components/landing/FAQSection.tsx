import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What exactly is an AI Prompt Library?",
    a: "It's a curated collection of ready-to-use questions and instructions you copy-paste into ChatGPT (or any AI). Each prompt is crafted by wellness experts to give you personalised, actionable answers about skin care, gut health, nutrition, and fitness.",
  },
  {
    q: "Do I need ChatGPT Plus?",
    a: "No! These prompts work with the free version of ChatGPT, Google Gemini, or any AI assistant. No paid subscription needed.",
  },
  {
    q: "Is this a replacement for a doctor?",
    a: "No. This is an educational tool for general wellness guidance. Always consult a healthcare professional for medical conditions.",
  },
  {
    q: "Can I use this for my coaching business?",
    a: "The Starter and Complete Library are for personal use. The Pro Membership includes a commercial license so you can use prompts with your clients.",
  },
  {
    q: "How do I receive the prompts?",
    a: "Instantly via email as a beautifully organised PDF + Notion template. You'll also get WhatsApp access for the bonus materials.",
  },
  {
    q: "Is there a refund policy?",
    a: "Yes — 7-day no-questions-asked refund if you're not satisfied. We're confident you'll love it.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <motion.div
          className="text-center max-w-xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl md:text-5xl font-light mb-4">
            Common <span className="italic">Questions</span>
          </h2>
        </motion.div>

        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="border border-border/60 rounded-xl px-6 bg-card"
              >
                <AccordionTrigger className="text-left font-medium text-sm md:text-base hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
