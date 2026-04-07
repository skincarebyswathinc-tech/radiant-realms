import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Crown, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Starter Pack",
    price: "₹449",
    priceAlt: "$5",
    period: "one-time",
    description: "Perfect to try before you commit",
    features: [
      "50 curated prompts",
      "Skin care + gut health categories",
      "Copy-paste ready format",
      "Beginner-friendly quick-start guide",
    ],
    cta: "Get Starter Pack",
    variant: "hero-outline" as const,
    popular: false,
    accent: false,
  },
  {
    name: "Pro Prompt Library",
    price: "₹3,999",
    priceAlt: "$45",
    period: "one-time",
    description: "Full access to every prompt category",
    features: [
      "500+ prompts — all 4 categories",
      "Advanced customisation tips",
      "Bonus: Coach scripts & templates",
      "Lifetime updates included",
      "Priority WhatsApp support",
    ],
    cta: "Unlock Full Library",
    variant: "hero" as const,
    popular: true,
    accent: false,
  },
  {
    name: "Subscription Plan",
    price: "₹499",
    priceAlt: "$5",
    period: "/month",
    description: "For coaches & power users",
    features: [
      "Everything in Pro Library",
      "Monthly new prompt drops",
      "Client-ready templates",
      "1-on-1 prompt coaching call",
      "Private community access",
      "Commercial use license",
    ],
    cta: "Start Membership",
    variant: "gold" as const,
    popular: false,
    accent: true,
  },
];

const PricingSection = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden" id="pricing">
      {/* Background */}
      <div className="absolute inset-0 bg-warm" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <motion.div
          className="text-center max-w-xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-sage text-sage-dark text-sm font-medium mb-4">
            Simple Pricing
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light mb-4">
            Invest in Your <span className="italic">Wellness</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Less than the cost of one consultation. Unlimited value.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 max-w-5xl mx-auto items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`relative rounded-2xl border flex flex-col transition-shadow duration-300 ${
                plan.popular
                  ? "bg-background border-primary/40 shadow-2xl shadow-primary/10 md:scale-[1.04] z-10"
                  : plan.accent
                    ? "bg-background border-accent/40 shadow-lg"
                    : "bg-background border-border/60 shadow-sm hover:shadow-lg"
              }`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 px-5 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-semibold tracking-wide shadow-md">
                    <Crown className="w-3.5 h-3.5" />
                    Most Popular
                  </span>
                </div>
              )}

              {/* Accent top bar for popular */}
              {plan.popular && (
                <div className="h-1 bg-gradient-to-r from-primary/60 via-primary to-primary/60 rounded-t-2xl" />
              )}
              {plan.accent && (
                <div className="h-1 bg-gradient-to-r from-accent/60 via-accent to-accent/60 rounded-t-2xl" />
              )}

              <div className={`p-7 md:p-8 flex flex-col flex-1 ${plan.popular ? "pt-8" : ""}`}>
                <h3 className="font-serif text-2xl font-medium mb-1">
                  {plan.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-5">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-7">
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-serif text-4xl lg:text-5xl font-semibold tracking-tight">
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

                {/* Divider */}
                <div className="h-px bg-border/50 mb-6" />

                {/* Features */}
                <ul className="space-y-3.5 mb-9 flex-1">
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

                {/* CTA */}
                <Button
                  variant={plan.variant}
                  size="lg"
                  className={`w-full rounded-xl h-13 text-base group ${
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

        {/* Trust note */}
        <motion.p
          className="text-center text-sm text-muted-foreground mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          7-day money-back guarantee · Instant delivery · Works with free ChatGPT
        </motion.p>
      </div>
    </section>
  );
};

export default PricingSection;
