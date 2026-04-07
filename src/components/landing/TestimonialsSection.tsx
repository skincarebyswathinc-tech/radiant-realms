import { motion } from "framer-motion";

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
    <section className="py-20 md:py-28">
      <div className="container">
        <motion.div
          className="text-center max-w-xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl md:text-5xl font-light mb-4">
            Real <span className="italic">Results</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Hear from women who transformed their wellness routine.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              className="p-8 rounded-2xl bg-card border border-border/60"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex gap-1 mb-4 text-accent">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-lg">★</span>
                ))}
              </div>
              <p className="text-sm leading-relaxed mb-6 text-foreground/80">"{t.quote}"</p>
              <div>
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
