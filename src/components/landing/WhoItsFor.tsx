import { motion } from "framer-motion";
import { Heart, Bean, TrendingUp, Users, FileText, Zap } from "lucide-react";

const individuals = [
  { icon: Heart, text: "Clear stubborn skin issues with prompts built by dermatology-informed frameworks" },
  { icon: Leaf, text: "Fix gut problems — bloating, inflammation, food sensitivities — with targeted nutrition plans" },
  { icon: TrendingUp, text: "Lose weight sustainably with AI meal plans tailored to your body, not a generic chart" },
  { icon: Zap, text: "Get expert-level answers in 60 seconds instead of hours of conflicting Google results" },
];

const coaches = [
  { icon: Users, text: "Deliver personalised plans to every client — without spending hours on each one" },
  { icon: FileText, text: "Use done-for-you scripts and templates that make you look like a premium brand" },
  { icon: TrendingUp, text: "Scale your practice with systems that work while you sleep" },
  { icon: Zap, text: "Stay ahead of competitors still relying on cookie-cutter PDFs and outdated advice" },
];

const WhoItsFor = () => {
  return (
    <section className="py-16 md:py-24 section-divider" id="who-its-for">
      <div className="container">
        <motion.div
          className="text-center max-w-xl mx-auto mb-12 md:mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-sage text-sage-dark text-sm font-medium mb-4">
            Built for You
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light mb-4">
            Two Paths, One <span className="italic">Transformation</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Whether you're healing yourself or helping others heal — these prompts meet you where you are.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-8 max-w-5xl mx-auto">
          {/* For Individuals */}
          <motion.div
            className="rounded-2xl border border-border/60 bg-card p-6 md:p-8 relative overflow-hidden group hover:border-primary/30 transition-colors duration-300"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide uppercase mb-4">
                For Individuals
              </span>
              <h3 className="font-serif text-xl md:text-2xl font-medium mb-2">
                Your Health, Finally Personalised
              </h3>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                Stop following generic advice that wasn't made for your body. Get plans that actually fit your skin, gut, and goals.
              </p>
              <ul className="space-y-4">
                {individuals.map((item, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 + i * 0.07 }}
                  >
                    <div className="w-8 h-8 rounded-lg bg-sage/60 flex items-center justify-center shrink-0 mt-0.5">
                      <item.icon className="w-4 h-4 text-sage-dark" />
                    </div>
                    <span className="text-sm text-foreground/80 leading-relaxed">{item.text}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* For Coaches */}
          <motion.div
            className="rounded-2xl border border-border/60 bg-card p-6 md:p-8 relative overflow-hidden group hover:border-accent/40 transition-colors duration-300"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative">
              <span className="inline-block px-3 py-1 rounded-full bg-accent/15 text-accent-foreground text-xs font-semibold tracking-wide uppercase mb-4">
                For Coaches
              </span>
              <h3 className="font-serif text-xl md:text-2xl font-medium mb-2">
                Scale Results, Not Your Hours
              </h3>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                Give every client a premium, personalised experience — without burning out or hiring a team.
              </p>
              <ul className="space-y-4">
                {coaches.map((item, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 + i * 0.07 }}
                  >
                    <div className="w-8 h-8 rounded-lg bg-accent/15 flex items-center justify-center shrink-0 mt-0.5">
                      <item.icon className="w-4 h-4 text-accent-foreground" />
                    </div>
                    <span className="text-sm text-foreground/80 leading-relaxed">{item.text}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;
