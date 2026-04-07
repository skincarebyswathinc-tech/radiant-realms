import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const LeadCapture = () => {
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email && !whatsapp) {
      toast.error("Please enter your email or WhatsApp number");
      return;
    }
    toast.success("You're in! Check your inbox for the free sample prompts 🎉");
    setEmail("");
    setWhatsapp("");
  };

  return (
    <section className="py-20 md:py-28 bg-sage/40" id="get-free">
      <div className="container">
        <motion.div
          className="max-w-lg mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl md:text-4xl font-light mb-3">
            Get <span className="italic">10 Free Prompts</span>
          </h2>
          <p className="text-muted-foreground mb-8">
            Try before you buy. Enter your details and we'll send you a curated sample instantly.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 rounded-full px-5 bg-background border-border/60 text-center"
            />
            <Input
              type="tel"
              placeholder="WhatsApp number (optional)"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              className="h-12 rounded-full px-5 bg-background border-border/60 text-center"
            />
            <Button variant="hero" size="lg" className="w-full h-14 rounded-full text-base">
              Send Me Free Prompts
            </Button>
          </form>

          <p className="text-xs text-muted-foreground mt-4">
            No spam. Unsubscribe anytime. Your data is safe with us.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default LeadCapture;
