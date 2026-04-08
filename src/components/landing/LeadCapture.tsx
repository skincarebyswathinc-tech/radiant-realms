import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { Gift, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";

const benefits = [
  "10 ready-to-use prompts for skin, gut, nutrition & weight goals",
  "Get a personalised wellness plan in under 60 seconds — free",
  "Works with free ChatGPT — zero paid tools required",
  "Bonus: Quick-start guide so you nail every prompt first try",
  "Same framework used by 2,000+ women & wellness coaches",
];

const audienceItems = [
  "Women tired of conflicting health advice online",
  "Wellness & nutrition coaches who want faster client results",
  "Anyone ready to stop guessing and start healing smarter",
];

const LeadCapture = () => {
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [optInWhatsApp, setOptInWhatsApp] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedEmail = email.trim();
    const trimmedWhatsapp = whatsapp.trim();

    if (!trimmedEmail) {
      toast.error("Please enter your email address");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail) || trimmedEmail.length > 255) {
      toast.error("Please enter a valid email address");
      return;
    }

    if (optInWhatsApp && trimmedWhatsapp) {
      const phoneRegex = /^[+]?[\d\s\-()]{7,20}$/;
      if (!phoneRegex.test(trimmedWhatsapp)) {
        toast.error("Please enter a valid WhatsApp number");
        return;
      }
    }

    setIsSubmitting(true);

    setTimeout(() => {
      toast.success("You're in! Check your inbox for the free prompt pack 🎉");
      setEmail("");
      setWhatsapp("");
      setOptInWhatsApp(false);
      setIsSubmitting(false);
    }, 800);
  };

  return (
    <section className="py-16 md:py-24 relative overflow-hidden" id="get-free">
      {/* Contrast background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.06] via-sage/30 to-accent/10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] md:w-[800px] h-[300px] md:h-[400px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center">
            {/* Left — Value proposition */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-5 md:mb-6">
                <Gift className="w-4 h-4" />
                Free for a Limited Time
              </div>

              <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl font-light leading-tight mb-3 md:mb-4">
                Your First{" "}
                <span className="italic text-primary">Wellness Breakthrough</span>
                {" "}Starts Here
              </h2>

              <p className="text-muted-foreground text-sm md:text-base mb-6 md:mb-8">
                Download 10 expert-crafted AI prompts and get personalised skin,
                gut & nutrition plans — in seconds, not hours.
              </p>

              <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                {benefits.map((benefit, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
                  >
                    <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/80 leading-relaxed">
                      {benefit}
                    </span>
                  </motion.li>
                ))}
              </ul>

              <div className="border-t border-border/40 pt-5">
                <p className="text-xs font-medium text-primary mb-2 uppercase tracking-wider">Perfect for</p>
                <ul className="space-y-2">
                  {audienceItems.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1 h-1 rounded-full bg-primary/60 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Right — Form card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.12 }}
            >
              <div className="bg-card border border-border/60 rounded-2xl p-6 md:p-9 shadow-xl shadow-primary/5 relative">
                {/* Decorative sparkle */}
                <div className="absolute -top-3 -right-3 w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-accent-foreground/60" />
                </div>

                <h3 className="font-serif text-xl md:text-2xl font-medium mb-2 text-center">
                  Claim Your Free Pack
                </h3>
                <p className="text-sm text-muted-foreground text-center mb-6 md:mb-7">
                  Instant delivery to your inbox
                </p>

                <form onSubmit={handleSubmit} className="space-y-3.5 md:space-y-4">
                  <Input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    maxLength={255}
                    className="h-12 rounded-xl px-5 bg-background border-border/60"
                    required
                  />

                  {/* WhatsApp opt-in */}
                  <div className="flex items-start gap-3 py-0.5">
                    <Checkbox
                      id="whatsapp-optin"
                      checked={optInWhatsApp}
                      onCheckedChange={(checked) =>
                        setOptInWhatsApp(checked === true)
                      }
                      className="mt-0.5"
                    />
                    <label
                      htmlFor="whatsapp-optin"
                      className="text-sm text-muted-foreground leading-snug cursor-pointer select-none"
                    >
                      Also send me tips on WhatsApp (optional)
                    </label>
                  </div>

                  {/* WhatsApp input — shown conditionally */}
                  {optInWhatsApp && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.25 }}
                    >
                      <Input
                        type="tel"
                        placeholder="WhatsApp number (e.g. +91 98765 43210)"
                        value={whatsapp}
                        onChange={(e) => setWhatsapp(e.target.value)}
                        maxLength={20}
                        className="h-12 rounded-xl px-5 bg-background border-border/60"
                      />
                    </motion.div>
                  )}

                  <Button
                    variant="hero"
                    size="lg"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-13 rounded-xl text-base group"
                  >
                    {isSubmitting ? (
                      "Sending…"
                    ) : (
                      <>
                        Send Me Free Prompts
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </form>

                <p className="text-[11px] text-muted-foreground text-center mt-4 md:mt-5 leading-relaxed">
                  No spam, ever. Unsubscribe anytime.
                  <br />
                  Your data is safe & never shared.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadCapture;
