import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2, Mail, MessageCircle, ArrowRight, Gift,
  Sparkles, Clock, Zap, Shield, Users, Star,
} from "lucide-react";
import { Link } from "react-router-dom";

const WHATSAPP_GROUP_LINK = "https://chat.whatsapp.com/your-group-link";

const steps = [
  {
    icon: Mail,
    title: "Check your inbox",
    description: "Your free prompt pack is landing right now. Check spam if you don't see it in 2 minutes.",
    status: "done" as const,
  },
  {
    icon: MessageCircle,
    title: "Join our WhatsApp community",
    description: "Get daily tips, exclusive prompts & direct support — completely free.",
    status: "action" as const,
  },
  {
    icon: Sparkles,
    title: "Try your first prompt",
    description: "Open ChatGPT, paste Prompt #1, and watch your personalised plan appear in seconds.",
    status: "next" as const,
  },
];

const starterBenefits = [
  { icon: Zap, text: "25 advanced prompts — skin, gut, nutrition & weight" },
  { icon: Star, text: "Step-by-step quick-start video guide" },
  { icon: Users, text: "Access to private WhatsApp support group" },
  { icon: Shield, text: "7-day full money-back guarantee — zero risk" },
];

const ThankYou = () => {
  const [minutes, setMinutes] = useState(14);
  const [seconds, setSeconds] = useState(59);

  useEffect(() => {
    const end = Date.now() + 15 * 60 * 1000;
    const tick = () => {
      const diff = Math.max(0, end - Date.now());
      setMinutes(Math.floor(diff / 60000));
      setSeconds(Math.floor((diff % 60000) / 1000));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
    const tick = () => {
      const diff = Math.max(0, end - Date.now());
      setMinutes(Math.floor(diff / 60000));
      setSeconds(Math.floor((diff % 60000) / 1000));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.06] via-transparent to-accent/5" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container relative z-10 py-10 md:py-16">
        <div className="max-w-2xl mx-auto">

          {/* ── Confirmation ── */}
          <div className="text-center mb-10 md:mb-12">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
              className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/10 mb-5"
            >
              <CheckCircle2 className="w-8 h-8 md:w-10 md:h-10 text-primary" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-serif text-3xl md:text-5xl font-light leading-tight mb-3"
            >
              You're In! 🎉
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-muted-foreground text-base md:text-lg"
            >
              Your free prompt pack is on its way. <strong>Check your inbox now.</strong>
            </motion.p>
          </div>

          {/* ── Next Steps ── */}
          <div className="space-y-4 mb-10 md:mb-12">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.15 }}
                className={`flex items-start gap-4 p-4 md:p-5 rounded-xl border ${
                  step.status === "action"
                    ? "bg-accent/10 border-accent/30"
                    : step.status === "next"
                    ? "bg-primary/5 border-primary/20"
                    : "bg-card border-border/60"
                }`}
              >
                <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                  step.status === "action"
                    ? "bg-accent/20"
                    : step.status === "next"
                    ? "bg-primary/15"
                    : "bg-primary/10"
                }`}>
                  <step.icon className={`w-5 h-5 ${
                    step.status === "action" ? "text-accent-foreground" : "text-primary"
                  }`} />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-foreground text-sm md:text-base flex items-center gap-2 flex-wrap">
                    {step.title}
                    {step.status === "action" && (
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-accent-foreground bg-accent/20 px-2 py-0.5 rounded-full">
                        Recommended
                      </span>
                    )}
                    {step.status === "next" && (
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                        Your next step
                      </span>
                    )}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                    {step.description}
                  </p>
                  {step.status === "action" && (
                    <Button
                      variant="gold"
                      size="sm"
                      className="mt-3 rounded-lg group"
                      asChild
                    >
                      <a href={WHATSAPP_GROUP_LINK} target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="w-4 h-4 mr-1" />
                        Join WhatsApp Community
                        <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-0.5 transition-transform" />
                      </a>
                    </Button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* ── ₹99 Starter Offer ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="relative bg-card border-2 border-primary/20 rounded-2xl p-6 md:p-8 shadow-xl shadow-primary/5"
          >
            {/* Urgency ribbon */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
              <span className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground text-xs font-semibold px-4 py-1.5 rounded-full shadow-md">
                <Clock className="w-3.5 h-3.5" />
                New-user offer · Expires in {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
              </span>
            </div>

            <div className="pt-4 md:pt-3">
              <div className="flex items-center gap-2 mb-3">
                <Gift className="w-5 h-5 text-primary" />
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                  Only for new members
                </p>
              </div>

              <h2 className="font-serif text-2xl md:text-3xl font-medium mb-1">
                Grab the Starter Pack — Just ₹99
              </h2>
              <p className="text-sm text-muted-foreground mb-1">
                <span className="line-through text-muted-foreground/60">Regular price: ₹299</span>
                <span className="ml-2 text-primary font-semibold">You save ₹200</span>
              </p>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                You just got 10 free prompts. Imagine what <strong>25 advanced prompts</strong> can do — 
                with video walkthroughs and community support. One coffee's worth for a complete wellness transformation.
              </p>

              <ul className="space-y-3 mb-6">
                {starterBenefits.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.1 + i * 0.1 }}
                    className="flex items-center gap-3 text-sm text-foreground/85"
                  >
                    <div className="shrink-0 w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center">
                      <item.icon className="w-3.5 h-3.5 text-primary" />
                    </div>
                    {item.text}
                  </motion.li>
                ))}
              </ul>

              {/* Social proof */}
              <div className="flex items-center gap-2 mb-5 text-xs text-muted-foreground">
                <div className="flex -space-x-1.5">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-6 h-6 rounded-full bg-primary/15 border-2 border-card flex items-center justify-center">
                      <span className="text-[9px] text-primary font-bold">
                        {["S", "A", "P", "R"][i]}
                      </span>
                    </div>
                  ))}
                </div>
                <span>847 women started their transformation this week</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="hero" size="lg" className="rounded-xl text-base group flex-1" asChild>
                  <Link to="/#pricing">
                    Get Starter Pack — ₹99
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button variant="ghost" size="lg" className="rounded-xl text-muted-foreground" asChild>
                  <Link to="/">
                    Maybe later
                  </Link>
                </Button>
              </div>

              <p className="text-[11px] text-muted-foreground text-center mt-4 leading-relaxed">
                <Shield className="w-3 h-3 inline-block mr-1 -mt-0.5" />
                7-day money-back guarantee · No subscription · Instant access
              </p>
            </div>
          </motion.div>

          {/* Footer note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="text-xs text-muted-foreground mt-6 text-center"
          >
            Didn't get the email? Check your spam folder or{" "}
            <a href="mailto:support@example.com" className="text-primary underline underline-offset-2">
              contact us
            </a>.
          </motion.p>
        </div>
      </div>
    </main>
  );
};

export default ThankYou;
