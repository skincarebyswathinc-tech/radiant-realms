import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AppHeader from "@/components/AppHeader";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { Crown, Lock, ArrowRight } from "lucide-react";

interface Category {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  tier: "free" | "premium";
  color: string | null;
  sort_order: number;
  prompt_count?: number;
}

const Library = () => {
  const { tier } = useAuth();
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const { data: cats } = await supabase
        .from("prompt_categories")
        .select("*")
        .eq("is_active", true)
        .order("sort_order");

      if (!cats) {
        setLoading(false);
        return;
      }

      // count prompts per category
      const withCounts = await Promise.all(
        cats.map(async (c) => {
          const { count } = await supabase
            .from("prompts")
            .select("id", { count: "exact", head: true })
            .eq("category_id", c.id)
            .eq("is_active", true);
          return { ...c, prompt_count: count ?? 0 } as Category;
        })
      );
      setCategories(withCounts);
      setLoading(false);
    })();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <AppHeader />
      <main className="container py-10 md:py-14">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <p className="text-sm text-primary uppercase tracking-[0.2em] mb-3">The Library</p>
          <h1 className="font-serif text-4xl md:text-5xl font-light leading-tight mb-3">
            Prompts for every <span className="italic text-primary">moment</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            Each category is hand-crafted. Free prompts are open to all; premium unlocks the full collection.
          </p>
        </motion.div>

        {loading ? (
          <p className="text-muted-foreground mt-10">Loading…</p>
        ) : categories.length === 0 ? (
          <p className="text-muted-foreground mt-10">No categories yet.</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {categories.map((c, i) => {
              const locked = c.tier === "premium" && tier !== "premium";
              return (
                <motion.div
                  key={c.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                >
                  <Link
                    to={`/library/${c.slug}`}
                    className="group block h-full bg-card border border-border/60 rounded-2xl p-6 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-serif text-xl">
                        {c.name.charAt(0)}
                      </div>
                      {c.tier === "premium" ? (
                        <span className="inline-flex items-center gap-1 text-[10px] font-medium uppercase tracking-wider px-2 py-1 rounded-full bg-accent/30 text-accent-foreground">
                          <Crown className="w-3 h-3" /> Premium
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[10px] font-medium uppercase tracking-wider px-2 py-1 rounded-full bg-primary/10 text-primary">
                          Free
                        </span>
                      )}
                    </div>
                    <h3 className="font-serif text-2xl mb-1.5 leading-tight">{c.name}</h3>
                    {c.description && (
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{c.description}</p>
                    )}
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">{c.prompt_count} prompts</span>
                      <span className="inline-flex items-center text-primary font-medium group-hover:translate-x-0.5 transition-transform">
                        {locked ? (
                          <><Lock className="w-3.5 h-3.5 mr-1" /> Preview</>
                        ) : (
                          <>Explore <ArrowRight className="w-3.5 h-3.5 ml-1" /></>
                        )}
                      </span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
};

export default Library;