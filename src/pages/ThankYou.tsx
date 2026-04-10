import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Mail, MessageCircle, ArrowRight, Gift, Sparkles, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const steps = [
  {
    icon: Mail,
    title: "Check your inbox",
    description: "Your free prompt pack is landing in your email right now. Check spam if you don't see it within 2 minutes.",
    status: "done" as const,
  },
  {
    icon: MessageCircle,
    title: "WhatsApp tip incoming",
    description: "A quick-start message with your download link is on its way to WhatsApp.",
    status: "done" as const,
  },
  {
    icon: Sparkles,
    title: "Try your first prompt",
    description: "Open ChatGPT, paste Prompt #1, and get your personalised plan in under 60 seconds.",
    status: "next" as const,
  },
];

const paidFeatures = [
  "50+ advanced prompts for every wellness goal",
  "Done-for-you meal plans & supplement guides",
  "Private community of 2,000+ women",
  "Monthly live Q&A with wellness experts",
];

const ThankYou = () => {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.06] via-transparent to-accent/5" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container relative z-10 py-12 md:py-20">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
            className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/10 mb-6"
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
            className="text-muted-foreground text-base md:text-lg mb-10"
          >
            Your free prompt pack is on its way. Here's what happens next — <strong>in the next 60 seconds.</strong>
          </motion.p>

          {/* Steps */}
          <div className="space-y-4 md:space-y-5 mb-12 text-left">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.15 }}
                className={`flex items-start gap-4 p-4 md:p-5 rounded-xl border ${
                  step.status === "next"
                    ? "bg-primary/5 border-primary/20"
                    : "bg-card border-border/60"
                }`}
              >
                <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                  step.status === "next" ? "bg-primary/15" : "bg-primary/10"
                }`}>
                  <step.icon className={`w-5 h-5 ${
                    step.status === "next" ? "text-primary" : "text-primary/70"
                  }`} />
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm md:text-base flex items-center gap-2">
                    {step.title}
                    {step.status === "next" && (
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                        Your next step
                      </span>
                    )}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Soft upsell */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="bg-card border border-border/60 rounded-2xl p-6 md:p-8 shadow-lg shadow-primary/5 text-left"
          >
            <div className="flex items-center gap-2 mb-4">
              <Gift className="w-5 h-5 text-accent-foreground/70" />
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                Loved the free pack? Go deeper.
              </p>
            </div>

            <h2 className="font-serif text-xl md:text-2xl font-medium mb-2">
              Unlock the Full Prompt Library
            </h2>
            <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
              Your free pack is powerful — but it's just the beginning. The Pro Library gives you <strong>50+ expert-crafted prompts</strong> covering every wellness goal, plus done-for-you plans and a private community.
            </p>

            <ul className="space-y-2.5 mb-6">
              {paidFeatures.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-foreground/80">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3 mb-5">
              <Clock className="w-4 h-4 text-primary/70" />
              <p className="text-xs text-primary/80 font-medium">
                Early-access pricing ends soon — lock in the lowest rate today.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="hero" size="lg" className="rounded-xl group" asChild>
                <Link to="/#pricing">
                  See Pro Plans
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="lg" className="rounded-xl" asChild>
                <Link to="/">
                  Back to Homepage
                </Link>
              </Button>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-xs text-muted-foreground mt-6"
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
