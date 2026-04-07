import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter Pack",
    price: "₹449",
    priceAlt: "$5",
    period: "one-time",
    description: "Perfect to try before you commit",
    features: [
      "50 curated prompts",
      "Skin care + gut health",
      "Copy-paste ready",
      "Beginner-friendly guide",
    ],
    cta: "Get Starter Pack",
    variant: "hero-outline" as const,
    popular: false,
  },
  {
    name: "Complete Library",
    price: "₹3,999",
    priceAlt: "$45",
    period: "one-time",
    description: "Full access to every prompt category",
    features: [
      "500+ prompts — all 4 categories",
      "Advanced customisation tips",
      "Bonus: Coach scripts",
      "Lifetime updates",
      "Priority WhatsApp support",
    ],
    cta: "Get Full Library",
    variant: "hero" as const,
    popular: true,
  },
  {
    name: "Pro Membership",
    price: "₹499",
    priceAlt: "$5",
    period: "/month",
    description: "For coaches & power users",
    features: [
      "Everything in Complete Library",
      "Monthly new prompt drops",
      "Client-ready templates",
      "1-on-1 prompt coaching call",
      "Private community access",
      "Commercial use license",
    ],
    cta: "Start Membership",
    variant: "gold" as const,
    popular: false,
  },
];

const PricingSection = () => {
  return (
    <section className="py-20 md:py-28 bg-warm" id="pricing">
      <div className="container">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`relative p-8 rounded-2xl border flex flex-col ${
                plan.popular
                  ? "bg-background border-primary/30 shadow-xl scale-[1.02]"
                  : "bg-background border-border/60"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold tracking-wide">
                  Most Popular
                </span>
              )}
              <h3 className="font-serif text-2xl font-medium mb-1">{plan.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
              <div className="mb-6">
                <span className="font-serif text-4xl font-semibold">{plan.price}</span>
                <span className="text-muted-foreground text-sm ml-1">{plan.period}</span>
                <span className="block text-sm text-muted-foreground mt-1">or {plan.priceAlt} {plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button variant={plan.variant} size="lg" className="w-full rounded-full h-12">
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
