import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AppHeader from "@/components/AppHeader";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { BookOpen, Crown, Sparkles, ArrowRight, Lock } from "lucide-react";

const Dashboard = () => {
  const { user, tier, isAdmin } = useAuth();
  const [counts, setCounts] = useState({ free: 0, premium: 0, categories: 0 });
  const [razorpay, setRazorpay] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const [{ count: free }, { count: premium }, { count: categories }, { data: setting }] = await Promise.all([
        supabase.from("prompts").select("id", { count: "exact", head: true }).eq("tier", "free").eq("is_active", true),
        supabase.from("prompts").select("id", { count: "exact", head: true }).eq("tier", "premium").eq("is_active", true),
        supabase.from("prompt_categories").select("id", { count: "exact", head: true }).eq("is_active", true),
        supabase.from("settings").select("value").eq("key", "razorpay_premium_url").maybeSingle(),
      ]);
      setCounts({ free: free ?? 0, premium: premium ?? 0, categories: categories ?? 0 });
      setRazorpay(setting?.value ?? null);
    })();
  }, []);

  const greeting = user?.user_metadata?.full_name || user?.email?.split("@")[0] || "there";

  return (
    <div className="min-h-screen bg-background">
      <AppHeader />
      <main className="container py-10 md:py-14">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <p className="text-sm text-primary uppercase tracking-[0.2em] mb-3">Your space</p>
          <h1 className="font-serif text-4xl md:text-5xl font-light leading-tight mb-3">
            Welcome back, <span className="italic text-primary">{greeting}</span>
          </h1>
          <p className="text-muted-foreground max-w-xl">
            {tier === "premium"
              ? "You have full access to the entire prompt library."
              : "Explore your free prompts. Unlock the full library anytime."}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 mt-10">
          <Stat label="Categories" value={counts.categories} />
          <Stat label="Free prompts" value={counts.free} />
          <Stat label="Premium prompts" value={counts.premium} accent />
        </div>

        <div className="grid md:grid-cols-2 gap-5 mt-6">
          <div className="bg-card border border-border/60 rounded-2xl p-7">
            <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <BookOpen className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-serif text-2xl mb-1.5">The Prompt Library</h3>
            <p className="text-sm text-muted-foreground mb-5">
              Curated prompts across nutrition, gut health, skin, hormones, fitness and more.
            </p>
            <Button asChild className="rounded-xl">
              <Link to="/library">Open library <ArrowRight className="w-4 h-4 ml-1" /></Link>
            </Button>
          </div>

          {tier !== "premium" ? (
            <div className="relative bg-gradient-to-br from-primary/10 via-accent/15 to-sage/30 border border-accent/30 rounded-2xl p-7 overflow-hidden">
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-accent/30 rounded-full blur-3xl" />
              <div className="relative">
                <div className="w-11 h-11 rounded-xl bg-accent/30 flex items-center justify-center mb-4">
                  <Crown className="w-5 h-5 text-accent-foreground" />
                </div>
                <h3 className="font-serif text-2xl mb-1.5">Unlock Premium</h3>
                <p className="text-sm text-foreground/75 mb-5">
                  Get all 150+ premium prompts across every category — one-time payment.
                </p>
                {razorpay ? (
                  <Button asChild variant="hero" className="rounded-xl">
                    <a href={razorpay} target="_blank" rel="noreferrer">
                      Upgrade now <Sparkles className="w-4 h-4 ml-1" />
                    </a>
                  </Button>
                ) : (
                  <Button variant="outline" disabled className="rounded-xl">
                    <Lock className="w-4 h-4 mr-1.5" /> Coming soon
                  </Button>
                )}
              </div>
            </div>
          ) : (
            <div className="bg-card border border-border/60 rounded-2xl p-7">
              <div className="w-11 h-11 rounded-xl bg-accent/30 flex items-center justify-center mb-4">
                <Crown className="w-5 h-5 text-accent-foreground" />
              </div>
              <h3 className="font-serif text-2xl mb-1.5">You're Premium</h3>
              <p className="text-sm text-muted-foreground">
                Enjoy unlimited access to every prompt, every category. {isAdmin && "Admin access enabled."}
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

const Stat = ({ label, value, accent }: { label: string; value: number; accent?: boolean }) => (
  <div className={`rounded-2xl p-6 border ${accent ? "bg-accent/10 border-accent/30" : "bg-card border-border/60"}`}>
    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">{label}</p>
    <p className="font-serif text-4xl font-light">{value}</p>
  </div>
);

export default Dashboard;