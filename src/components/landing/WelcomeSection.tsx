import { motion } from "framer-motion";

const bullets = [
  "Identify the module that matches your current need",
  "Open the corresponding section for context",
  "Replace [bracketed variables] with real client data",
  "Paste into ChatGPT, Claude, or your AI tool of choice",
  "Review, refine, and deliver premium-quality output",
  "Use follow-up prompts to go deeper when needed",
];

const steps = [
  { num: "01", title: "Customize", desc: "Replace variables with real client details for personalization" },
  { num: "02", title: "Generate", desc: "Paste into any AI tool and generate in seconds" },
  { num: "03", title: "Refine", desc: "Use follow-up prompts to add depth and detail" },
  { num: "04", title: "Deliver", desc: "Package beautifully and deliver as a premium offering" },
];

const Corner = ({ pos }: { pos: "tl" | "tr" | "bl" | "br" }) => {
  const map: Record<string, string> = {
    tl: "top-7 left-7 border-t border-l",
    tr: "top-7 right-7 border-t border-r",
    bl: "bottom-7 left-7 border-b border-l",
    br: "bottom-7 right-7 border-b border-r",
  };
  return <div className={`absolute w-14 h-14 border-gold/50 ${map[pos]} pointer-events-none`} />;
};

const WelcomeSection = () => {
  return (
    <section className="relative bg-ivory py-20 md:py-28">
      <Corner pos="tl" />
      <Corner pos="tr" />
      <Corner pos="bl" />
      <Corner pos="br" />

      <div className="container max-w-5xl">
        <div className="flex items-start justify-between pb-8 mb-10 border-b border-beige">
          <span className="text-[9px] md:text-[10px] tracking-[4px] uppercase text-text-light/80 font-medium">
            Nutrition Prompt Library · Premium Edition
          </span>
          <span className="font-serif italic text-sm text-text-light hidden md:block">Welcome</span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-serif font-light text-4xl md:text-5xl lg:text-6xl text-brown-dark leading-[1.1]"
        >
          Welcome to Your<br />
          <em className="italic text-gold font-light">Prompt Library</em>
        </motion.h2>
        <div className="w-16 h-px bg-gold mt-5" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-10">
          <div className="space-y-4">
            <p className="text-[13px] md:text-sm text-muted-foreground leading-[1.85]">
              This is not just a prompt collection. It is a <strong className="text-brown-dark font-semibold">complete AI-powered wellness system</strong> designed for nutrition coaches, health entrepreneurs, and wellness practitioners who want to save hours every week while delivering premium-quality work.
            </p>
            <p className="text-[13px] md:text-sm text-muted-foreground leading-[1.85]">
              Every prompt has been crafted to produce <strong className="text-brown-dark font-semibold">client-ready, results-oriented outputs</strong> — from personalized fat loss plans and DM conversion scripts to weekly check-in analyses and content that converts.
            </p>
            <p className="text-[13px] md:text-sm text-muted-foreground leading-[1.85]">
              Over <strong className="text-brown-dark font-semibold">160 precision-engineered prompts</strong> across core modules, plus bonus resources to power your complete workflow.
            </p>
            <p className="font-serif italic text-lg md:text-xl text-brown-dark leading-relaxed pt-2">
              Copy. Paste. Customize. Transform your practice.
            </p>
          </div>

          <div className="space-y-5">
            <div className="bg-beige border-l-2 border-gold p-7">
              <h4 className="font-serif text-lg text-brown-dark mb-3 font-medium">How to Use This Library</h4>
              <ul className="space-y-2.5">
                {bullets.map((b) => (
                  <li key={b} className="text-xs md:text-[13px] text-muted-foreground flex items-start gap-2.5 leading-relaxed">
                    <span className="text-gold text-[7px] mt-2 shrink-0">◆</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-3.5">
              {steps.map((s) => (
                <div key={s.num} className="bg-ivory border border-gold/25 p-5">
                  <span className="block font-serif text-3xl text-gold font-light leading-none mb-1.5">{s.num}</span>
                  <div className="text-[11px] font-semibold text-brown-dark uppercase tracking-[1px] mb-1">{s.title}</div>
                  <p className="text-[11px] text-muted-foreground leading-[1.6]">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
