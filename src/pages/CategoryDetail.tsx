import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import AppHeader from "@/components/AppHeader";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Crown, Lock, Copy, Check } from "lucide-react";
import { toast } from "sonner";

interface Category {
  id: string;
  name: string;
  description: string | null;
  tier: "free" | "premium";
  slug: string;
}

interface Prompt {
  id: string;
  title: string;
  prompt_text: string;
  follow_up: string | null;
  purpose: string | null;
  outcome: string | null;
  output_format: string | null;
  time_saved: string | null;
  tier: "free" | "premium";
}

const CategoryDetail = () => {
  const { slug } = useParams();
  const { tier } = useAuth();
  const [category, setCategory] = useState<Category | null>(null);
  const [prompts, setPrompts] = useState<Prompt[]>([]);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState<string | null>(null);
  const [razorpay, setRazorpay] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;
    (async () => {
      const { data: cat } = await supabase
        .from("prompt_categories")
        .select("*")
        .eq("slug", slug)
        .maybeSingle();
      setCategory(cat as Category | null);

      if (cat) {
        const { data } = await supabase
          .from("prompts")
          .select("*")
          .eq("category_id", cat.id)
          .eq("is_active", true)
          .order("sort_order");
        setPrompts((data ?? []) as Prompt[]);
      }

      const { data: setting } = await supabase
        .from("settings")
        .select("value")
        .eq("key", "razorpay_premium_url")
        .maybeSingle();
      setRazorpay(setting?.value ?? null);
      setLoading(false);
    })();
  }, [slug]);

  const copy = async (id: string, text: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(id);
    toast.success("Prompt copied");
    setTimeout(() => setCopied(null), 1500);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <AppHeader />
        <main className="container py-14"><p className="text-muted-foreground">Loading…</p></main>
      </div>
    );
  }

  if (!category) {
    return (
      <div className="min-h-screen bg-background">
        <AppHeader />
        <main className="container py-14">
          <p className="text-muted-foreground">Category not found.</p>
          <Button asChild variant="link" className="mt-3 px-0"><Link to="/library">Back to library</Link></Button>
        </main>
      </div>
    );
  }

  const isLocked = category.tier === "premium" && tier !== "premium";

  return (
    <div className="min-h-screen bg-background">
      <AppHeader />
      <main className="container py-10 md:py-14">
        <Link to="/library" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="w-4 h-4 mr-1.5" /> All categories
        </Link>

        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <div className="flex items-center gap-3 mb-3">
            <p className="text-sm text-primary uppercase tracking-[0.2em]">Category</p>
            {category.tier === "premium" && (
              <span className="inline-flex items-center gap-1 text-[10px] font-medium uppercase tracking-wider px-2 py-1 rounded-full bg-accent/30 text-accent-foreground">
                <Crown className="w-3 h-3" /> Premium
              </span>
            )}
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-light leading-tight mb-3">{category.name}</h1>
          {category.description && (
            <p className="text-muted-foreground max-w-2xl">{category.description}</p>
          )}
        </motion.div>

        {isLocked && prompts.length === 0 ? (
          <UpgradeBlock razorpay={razorpay} />
        ) : prompts.length === 0 ? (
          <p className="text-muted-foreground mt-10">No prompts in this category yet.</p>
        ) : (
          <div className="grid gap-5 mt-10">
            {prompts.map((p, i) => (
              <motion.article
                key={p.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className="bg-card border border-border/60 rounded-2xl p-6 md:p-7"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="font-serif text-xl md:text-2xl leading-tight">{p.title}</h3>
                  {p.tier === "premium" && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-medium uppercase tracking-wider px-2 py-1 rounded-full bg-accent/30 text-accent-foreground shrink-0">
                      <Crown className="w-3 h-3" /> Premium
                    </span>
                  )}
                </div>

                {p.purpose && <p className="text-sm text-muted-foreground mb-4 italic">{p.purpose}</p>}

                <div className="bg-background/60 border border-border/40 rounded-xl p-4 mb-4 relative group">
                  <pre className="whitespace-pre-wrap text-sm leading-relaxed font-sans">{p.prompt_text}</pre>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => copy(p.id, p.prompt_text)}
                    className="absolute top-2 right-2 h-8 px-2"
                  >
                    {copied === p.id ? <Check className="w-4 h-4 text-primary" /> : <Copy className="w-4 h-4" />}
                  </Button>
                </div>

                {(p.outcome || p.output_format || p.time_saved || p.follow_up) && (
                  <div className="grid sm:grid-cols-2 gap-3 text-xs">
                    {p.outcome && <Meta label="Outcome" value={p.outcome} />}
                    {p.output_format && <Meta label="Output" value={p.output_format} />}
                    {p.time_saved && <Meta label="Time saved" value={p.time_saved} />}
                    {p.follow_up && <Meta label="Follow-up" value={p.follow_up} />}
                  </div>
                )}
              </motion.article>
            ))}

            {isLocked && <UpgradeBlock razorpay={razorpay} />}
          </div>
        )}
      </main>
    </div>
  );
};

const Meta = ({ label, value }: { label: string; value: string }) => (
  <div className="bg-muted/40 rounded-lg px-3 py-2">
    <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-0.5">{label}</p>
    <p className="text-foreground/85 leading-snug">{value}</p>
  </div>
);

const UpgradeBlock = ({ razorpay }: { razorpay: string | null }) => (
  <div className="mt-10 relative bg-gradient-to-br from-primary/10 via-accent/15 to-sage/30 border border-accent/30 rounded-2xl p-8 text-center overflow-hidden">
    <div className="absolute -top-12 -right-12 w-40 h-40 bg-accent/30 rounded-full blur-3xl" />
    <div className="relative">
      <Lock className="w-7 h-7 text-primary mx-auto mb-3" />
      <h3 className="font-serif text-2xl mb-2">Unlock the full collection</h3>
      <p className="text-sm text-muted-foreground max-w-md mx-auto mb-5">
        Upgrade to Premium to access this category and 150+ expert prompts across every topic.
      </p>
      {razorpay ? (
        <Button asChild variant="hero" size="lg" className="rounded-xl">
          <a href={razorpay} target="_blank" rel="noreferrer">
            Upgrade to Premium <Crown className="w-4 h-4 ml-1.5" />
          </a>
        </Button>
      ) : (
        <Button disabled variant="outline" className="rounded-xl">Coming soon</Button>
      )}
    </div>
  </div>
);

export default CategoryDetail;