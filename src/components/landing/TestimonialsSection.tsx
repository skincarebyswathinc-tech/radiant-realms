import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "I used the gut health prompts and ChatGPT gave me a complete bloating relief plan tailored to my diet. Saved me a ₹2,000 consultation!",
    name: "Priya S.",
    role: "Working Professional, Mumbai",
  },
  {
    quote: "As a health coach, these prompts save me hours. I use them to create personalised plans for my clients in minutes.",
    name: "Dr. Meera K.",
    role: "Certified Health Coach, Bangalore",
  },
  {
    quote: "The skin care prompts helped me understand my acne triggers better than any dermatologist visit. Absolutely worth it.",
    name: "Ananya R.",
    role: "College Student, Delhi",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-warm section-divider" id="testimonials">
      <div className="container">
        <motion.div
          className="text-center max-w-xl mx-auto mb-12 md:mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent-foreground text-sm font-medium mb-4">
            Trusted by Thousands
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light mb-4">
            Real <span className="italic">Results</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Hear from women who transformed their wellness routine.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              className="p-6 md:p-8 rounded-2xl bg-background border border-border/60 flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Quote className="w-5 h-5 text-primary/40 mb-3 md:mb-4" />
              <div className="flex gap-0.5 mb-3 md:mb-4 text-accent">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-base md:text-lg">★</span>
                ))}
              </div>
              <p className="text-sm leading-relaxed mb-5 md:mb-6 text-foreground/80 flex-1">
                "{t.quote}"
              </p>
              <div className="pt-4 border-t border-border/40">
                <p className="font-semibold text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
