import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Crown, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Starter Pack",
    price: "₹199",
    priceAlt: "$2.50",
    period: "one-time",
    description: "Your first step to ditching generic health advice — try it risk-free and feel the difference one prompt can make.",
    whoFor: "For curious beginners ready to test the waters",
    features: [
      "25 hand-picked prompts for skin & gut health",
      "Personalised answers in under 60 seconds",
      "Copy-paste format — zero learning curve",
      "Quick-start guide included",
    ],
    cta: "Start for ₹199",
    variant: "hero-outline" as const,
    popular: false,
    accent: false,
  },
  {
    name: "Pro Prompt Library",
    price: "₹1,999",
    priceAlt: "$24",
    period: "one-time",
    description: "The complete system — 500+ prompts across every wellness category. One purchase, unlimited transformations.",
    whoFor: "For women & coaches who want the full toolkit",
    features: [
      "500+ prompts — skin, gut, nutrition & fitness",
      "Advanced personalisation frameworks",
      "Coach-ready scripts & client templates",
      "Lifetime updates at no extra cost",
      "Priority WhatsApp support",
    ],
    cta: "Get the Full Library",
    variant: "hero" as const,
    popular: true,
    accent: false,
  },
  {
    name: "Monthly Membership",
    price: "₹499",
    priceAlt: "$6",
    period: "/month",
    description: "Stay ahead with fresh prompts every month, private coaching, and a community of wellness professionals.",
    whoFor: "For coaches & power users scaling their practice",
    features: [
      "Everything in the Pro Library",
      "30+ new prompts dropped monthly",
      "Client-ready templates & workflows",
      "Monthly 1-on-1 prompt coaching call",
      "Private community of wellness coaches",
      "Commercial use license included",
    ],
    cta: "Join the Membership",
    variant: "gold" as const,
    popular: false,
    accent: true,
  },
];

const PricingSection = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden section-divider" id="pricing">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] md:w-[700px] h-[250px] md:h-[350px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <motion.div
          className="text-center max-w-xl mx-auto mb-12 md:mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-sage text-sage-dark text-sm font-medium mb-4">
            Simple Pricing
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light mb-4">
            Invest in Your <span className="italic">Wellness</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Less than the cost of one consultation. Unlimited value.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 max-w-5xl mx-auto items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`relative rounded-2xl border flex flex-col transition-shadow duration-300 ${
                plan.popular
                  ? "bg-card border-primary/40 shadow-2xl shadow-primary/10 md:scale-[1.04] z-10"
                  : plan.accent
                    ? "bg-card border-accent/40 shadow-lg"
                    : "bg-card border-border/60 shadow-sm hover:shadow-lg"
              }`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 px-5 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-semibold tracking-wide shadow-md">
                    <Crown className="w-3.5 h-3.5" />
                    Most Popular
                  </span>
                </div>
              )}

              {plan.popular && (
                <div className="h-1 bg-gradient-to-r from-primary/60 via-primary to-primary/60 rounded-t-2xl" />
              )}
              {plan.accent && (
                <div className="h-1 bg-gradient-to-r from-accent/60 via-accent to-accent/60 rounded-t-2xl" />
              )}

              <div className={`p-6 md:p-8 flex flex-col flex-1 ${plan.popular ? "pt-7 md:pt-8" : ""}`}>
                <h3 className="font-serif text-xl md:text-2xl font-medium mb-1">
                  {plan.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 md:mb-5">
                  {plan.description}
                </p>

                <div className="mb-6 md:mb-7">
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground text-sm">
                      {plan.period}
                    </span>
                  </div>
                  <span className="text-sm text-muted-foreground mt-1 block">
                    or {plan.priceAlt} {plan.period}
                  </span>
                </div>

                <div className="h-px bg-border/50 mb-5 md:mb-6" />

                <ul className="space-y-3 md:space-y-3.5 mb-7 md:mb-9 flex-1">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                          plan.popular
                            ? "bg-primary/15"
                            : plan.accent
                              ? "bg-accent/20"
                              : "bg-sage/60"
                        }`}
                      >
                        <Check
                          className={`w-3 h-3 ${
                            plan.popular
                              ? "text-primary"
                              : plan.accent
                                ? "text-accent-foreground"
                                : "text-sage-dark"
                          }`}
                        />
                      </div>
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.variant}
                  size="lg"
                  className={`w-full rounded-xl h-12 md:h-13 text-sm md:text-base group ${
                    plan.popular ? "shadow-md" : ""
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-center text-xs md:text-sm text-muted-foreground mt-8 md:mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          7-day money-back guarantee · Instant delivery · Works with free ChatGPT
        </motion.p>
      </div>
    </section>
  );
};

export default PricingSection;
