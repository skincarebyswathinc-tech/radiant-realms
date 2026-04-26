import { useEffect, useState } from "react";
import AppHeader from "@/components/AppHeader";
import { supabase } from "@/integrations/supabase/client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import {
  Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import { Pencil, Plus, Trash2, Users, Mail, BookOpen, Settings as SettingsIcon, Folder } from "lucide-react";

interface Profile { id: string; full_name: string | null; tier: "free" | "premium"; created_at: string; }
interface Role { user_id: string; role: "admin" | "user"; }
interface Lead { id: string; email: string; whatsapp: string | null; source: string | null; created_at: string; }
interface Category { id: string; name: string; slug: string; description: string | null; tier: "free" | "premium"; sort_order: number; is_active: boolean; }
interface Prompt {
  id: string; category_id: string; title: string; prompt_text: string;
  follow_up: string | null; purpose: string | null; outcome: string | null;
  output_format: string | null; time_saved: string | null; tier: "free" | "premium";
  sort_order: number; is_active: boolean;
}

const Admin = () => {
  return (
    <div className="min-h-screen bg-background">
      <AppHeader />
      <main className="container py-10">
        <p className="text-sm text-primary uppercase tracking-[0.2em] mb-3">Admin</p>
        <h1 className="font-serif text-4xl md:text-5xl font-light leading-tight mb-8">Control panel</h1>

        <Tabs defaultValue="users">
          <TabsList className="mb-6 flex-wrap h-auto">
            <TabsTrigger value="users"><Users className="w-4 h-4 mr-1.5" />Users</TabsTrigger>
            <TabsTrigger value="leads"><Mail className="w-4 h-4 mr-1.5" />Leads</TabsTrigger>
            <TabsTrigger value="categories"><Folder className="w-4 h-4 mr-1.5" />Categories</TabsTrigger>
            <TabsTrigger value="prompts"><BookOpen className="w-4 h-4 mr-1.5" />Prompts</TabsTrigger>
            <TabsTrigger value="settings"><SettingsIcon className="w-4 h-4 mr-1.5" />Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="users"><UsersPanel /></TabsContent>
          <TabsContent value="leads"><LeadsPanel /></TabsContent>
          <TabsContent value="categories"><CategoriesPanel /></TabsContent>
          <TabsContent value="prompts"><PromptsPanel /></TabsContent>
          <TabsContent value="settings"><SettingsPanel /></TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

/* ============ USERS ============ */
const UsersPanel = () => {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [roles, setRoles] = useState<Role[]>([]);

  const load = async () => {
    const [{ data: p }, { data: r }] = await Promise.all([
      supabase.from("profiles").select("*").order("created_at", { ascending: false }),
      supabase.from("user_roles").select("user_id, role"),
    ]);
    setProfiles((p ?? []) as Profile[]);
    setRoles((r ?? []) as Role[]);
  };

  useEffect(() => { load(); }, []);

  const setTier = async (id: string, tier: "free" | "premium") => {
    const { error } = await supabase.from("profiles").update({ tier }).eq("id", id);
    if (error) return toast.error(error.message);
    toast.success("Tier updated");
    load();
  };

  return (
    <Card title="Users" desc="Manage tier (free / premium) for each user.">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-xs uppercase tracking-wider text-muted-foreground border-b border-border/60">
              <th className="py-3 pr-4">Name</th>
              <th className="py-3 pr-4">Tier</th>
              <th className="py-3 pr-4">Roles</th>
              <th className="py-3 pr-4">Joined</th>
              <th className="py-3"></th>
            </tr>
          </thead>
          <tbody>
            {profiles.map((p) => {
              const userRoles = roles.filter((r) => r.user_id === p.id).map((r) => r.role);
              return (
                <tr key={p.id} className="border-b border-border/30">
                  <td className="py-3 pr-4">{p.full_name ?? "—"}</td>
                  <td className="py-3 pr-4">
                    <span className={`text-[11px] uppercase tracking-wider px-2 py-0.5 rounded-full ${p.tier === "premium" ? "bg-accent/30 text-accent-foreground" : "bg-muted text-muted-foreground"}`}>
                      {p.tier}
                    </span>
                  </td>
                  <td className="py-3 pr-4 text-xs text-muted-foreground">{userRoles.join(", ") || "user"}</td>
                  <td className="py-3 pr-4 text-xs text-muted-foreground">{new Date(p.created_at).toLocaleDateString()}</td>
                  <td className="py-3 text-right">
                    <Select value={p.tier} onValueChange={(v) => setTier(p.id, v as "free" | "premium")}>
                      <SelectTrigger className="w-[130px] h-9"><SelectValue /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="free">Free</SelectItem>
                        <SelectItem value="premium">Premium</SelectItem>
                      </SelectContent>
                    </Select>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

/* ============ LEADS ============ */
const LeadsPanel = () => {
  const [leads, setLeads] = useState<Lead[]>([]);

  useEffect(() => {
    supabase.from("leads").select("*").order("created_at", { ascending: false }).limit(500)
      .then(({ data }) => setLeads((data ?? []) as Lead[]));
  }, []);

  const exportCsv = () => {
    const rows = [
      ["email", "whatsapp", "source", "created_at"],
      ...leads.map((l) => [l.email, l.whatsapp ?? "", l.source ?? "", l.created_at]),
    ];
    const csv = rows.map((r) => r.map((c) => `"${String(c).replace(/"/g, '""')}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a"); a.href = url; a.download = "leads.csv"; a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <Card title="Leads" desc={`${leads.length} email signups from the landing page.`}
      action={<Button size="sm" variant="outline" onClick={exportCsv}>Export CSV</Button>}>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-xs uppercase tracking-wider text-muted-foreground border-b border-border/60">
              <th className="py-3 pr-4">Email</th>
              <th className="py-3 pr-4">WhatsApp</th>
              <th className="py-3 pr-4">Source</th>
              <th className="py-3">Date</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((l) => (
              <tr key={l.id} className="border-b border-border/30">
                <td className="py-3 pr-4">{l.email}</td>
                <td className="py-3 pr-4 text-muted-foreground">{l.whatsapp ?? "—"}</td>
                <td className="py-3 pr-4 text-xs text-muted-foreground">{l.source ?? "—"}</td>
                <td className="py-3 text-xs text-muted-foreground">{new Date(l.created_at).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

/* ============ CATEGORIES ============ */
const CategoriesPanel = () => {
  const [cats, setCats] = useState<Category[]>([]);
  const [editing, setEditing] = useState<Category | null>(null);
  const [open, setOpen] = useState(false);

  const load = () =>
    supabase.from("prompt_categories").select("*").order("sort_order")
      .then(({ data }) => setCats((data ?? []) as Category[]));

  useEffect(() => { load(); }, []);

  const blank = (): Category => ({
    id: "", name: "", slug: "", description: "", tier: "premium", sort_order: 0, is_active: true,
  });

  const save = async (c: Category) => {
    const payload = {
      name: c.name, slug: c.slug, description: c.description,
      tier: c.tier, sort_order: c.sort_order, is_active: c.is_active,
    };
    const { error } = c.id
      ? await supabase.from("prompt_categories").update(payload).eq("id", c.id)
      : await supabase.from("prompt_categories").insert(payload);
    if (error) return toast.error(error.message);
    toast.success("Saved");
    setOpen(false); setEditing(null); load();
  };

  const remove = async (id: string) => {
    if (!confirm("Delete this category and all its prompts?")) return;
    const { error } = await supabase.from("prompt_categories").delete().eq("id", id);
    if (error) return toast.error(error.message);
    toast.success("Deleted"); load();
  };

  return (
    <Card title="Categories" desc="Organize prompts into categories. Free categories are visible to everyone."
      action={
        <Button size="sm" onClick={() => { setEditing(blank()); setOpen(true); }}>
          <Plus className="w-4 h-4 mr-1" /> New
        </Button>
      }>
      <div className="grid sm:grid-cols-2 gap-3">
        {cats.map((c) => (
          <div key={c.id} className="border border-border/60 rounded-xl p-4 flex items-start justify-between">
            <div className="min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h4 className="font-serif text-lg">{c.name}</h4>
                <span className={`text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded-full ${c.tier === "premium" ? "bg-accent/30 text-accent-foreground" : "bg-primary/10 text-primary"}`}>
                  {c.tier}
                </span>
                {!c.is_active && <span className="text-[10px] uppercase text-muted-foreground">hidden</span>}
              </div>
              <p className="text-xs text-muted-foreground">/{c.slug}</p>
              {c.description && <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{c.description}</p>}
            </div>
            <div className="flex gap-1 shrink-0">
              <Button size="icon" variant="ghost" onClick={() => { setEditing(c); setOpen(true); }}>
                <Pencil className="w-4 h-4" />
              </Button>
              <Button size="icon" variant="ghost" onClick={() => remove(c.id)}>
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>{editing?.id ? "Edit category" : "New category"}</DialogTitle>
          </DialogHeader>
          {editing && <CategoryForm value={editing} onChange={setEditing} />}
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
            <Button onClick={() => editing && save(editing)}>Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Card>
  );
};

const CategoryForm = ({ value, onChange }: { value: Category; onChange: (c: Category) => void }) => (
  <div className="space-y-3">
    <Field label="Name">
      <Input value={value.name} onChange={(e) => onChange({ ...value, name: e.target.value })} />
    </Field>
    <Field label="Slug (url segment)">
      <Input value={value.slug} onChange={(e) => onChange({ ...value, slug: e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, "-") })} />
    </Field>
    <Field label="Description">
      <Textarea value={value.description ?? ""} onChange={(e) => onChange({ ...value, description: e.target.value })} />
    </Field>
    <div className="grid grid-cols-2 gap-3">
      <Field label="Tier">
        <Select value={value.tier} onValueChange={(v) => onChange({ ...value, tier: v as "free" | "premium" })}>
          <SelectTrigger><SelectValue /></SelectTrigger>
          <SelectContent>
            <SelectItem value="free">Free</SelectItem>
            <SelectItem value="premium">Premium</SelectItem>
          </SelectContent>
        </Select>
      </Field>
      <Field label="Sort order">
        <Input type="number" value={value.sort_order} onChange={(e) => onChange({ ...value, sort_order: Number(e.target.value) })} />
      </Field>
    </div>
    <div className="flex items-center justify-between border-t border-border/50 pt-3">
      <Label>Active</Label>
      <Switch checked={value.is_active} onCheckedChange={(v) => onChange({ ...value, is_active: v })} />
    </div>
  </div>
);

/* ============ PROMPTS ============ */
const PromptsPanel = () => {
  const [prompts, setPrompts] = useState<Prompt[]>([]);
  const [cats, setCats] = useState<Category[]>([]);
  const [filter, setFilter] = useState<string>("all");
  const [search, setSearch] = useState("");
  const [editing, setEditing] = useState<Prompt | null>(null);
  const [open, setOpen] = useState(false);

  const load = async () => {
    const [{ data: p }, { data: c }] = await Promise.all([
      supabase.from("prompts").select("*").order("category_id").order("sort_order"),
      supabase.from("prompt_categories").select("*").order("sort_order"),
    ]);
    setPrompts((p ?? []) as Prompt[]);
    setCats((c ?? []) as Category[]);
  };

  useEffect(() => { load(); }, []);

  const filtered = prompts.filter((p) => {
    if (filter !== "all" && p.category_id !== filter) return false;
    if (search && !p.title.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  const blank = (): Prompt => ({
    id: "", category_id: cats[0]?.id ?? "", title: "", prompt_text: "",
    follow_up: "", purpose: "", outcome: "", output_format: "", time_saved: "",
    tier: "premium", sort_order: 0, is_active: true,
  });

  const save = async (p: Prompt) => {
    if (!p.category_id) return toast.error("Pick a category");
    const payload = {
      category_id: p.category_id, title: p.title, prompt_text: p.prompt_text,
      follow_up: p.follow_up, purpose: p.purpose, outcome: p.outcome,
      output_format: p.output_format, time_saved: p.time_saved,
      tier: p.tier, sort_order: p.sort_order, is_active: p.is_active,
    };
    const { error } = p.id
      ? await supabase.from("prompts").update(payload).eq("id", p.id)
      : await supabase.from("prompts").insert(payload);
    if (error) return toast.error(error.message);
    toast.success("Saved"); setOpen(false); setEditing(null); load();
  };

  const remove = async (id: string) => {
    if (!confirm("Delete this prompt?")) return;
    const { error } = await supabase.from("prompts").delete().eq("id", id);
    if (error) return toast.error(error.message);
    toast.success("Deleted"); load();
  };

  const catName = (id: string) => cats.find((c) => c.id === id)?.name ?? "—";

  return (
    <Card
      title={`Prompts (${prompts.length})`}
      desc="Add, edit, or remove prompts. Premium prompts are gated to upgraded users."
      action={
        <Button size="sm" onClick={() => { setEditing(blank()); setOpen(true); }}>
          <Plus className="w-4 h-4 mr-1" /> New prompt
        </Button>
      }
    >
      <div className="flex flex-wrap gap-3 mb-4">
        <Input
          placeholder="Search title…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-xs h-9"
        />
        <Select value={filter} onValueChange={setFilter}>
          <SelectTrigger className="w-[200px] h-9"><SelectValue /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All categories</SelectItem>
            {cats.map((c) => <SelectItem key={c.id} value={c.id}>{c.name}</SelectItem>)}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2 max-h-[60vh] overflow-y-auto pr-2">
        {filtered.map((p) => (
          <div key={p.id} className="border border-border/60 rounded-xl p-4 flex items-start justify-between gap-3">
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                <h4 className="font-medium truncate">{p.title}</h4>
                <span className={`text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded-full ${p.tier === "premium" ? "bg-accent/30 text-accent-foreground" : "bg-primary/10 text-primary"}`}>
                  {p.tier}
                </span>
                <span className="text-[10px] text-muted-foreground">{catName(p.category_id)}</span>
                {!p.is_active && <span className="text-[10px] text-muted-foreground">hidden</span>}
              </div>
              <p className="text-xs text-muted-foreground line-clamp-2">{p.prompt_text}</p>
            </div>
            <div className="flex gap-1 shrink-0">
              <Button size="icon" variant="ghost" onClick={() => { setEditing(p); setOpen(true); }}>
                <Pencil className="w-4 h-4" />
              </Button>
              <Button size="icon" variant="ghost" onClick={() => remove(p.id)}>
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
        ))}
        {filtered.length === 0 && <p className="text-sm text-muted-foreground py-6 text-center">No prompts.</p>}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{editing?.id ? "Edit prompt" : "New prompt"}</DialogTitle>
          </DialogHeader>
          {editing && <PromptForm value={editing} onChange={setEditing} categories={cats} />}
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
            <Button onClick={() => editing && save(editing)}>Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Card>
  );
};

const PromptForm = ({ value, onChange, categories }: { value: Prompt; onChange: (p: Prompt) => void; categories: Category[] }) => (
  <div className="space-y-3">
    <div className="grid grid-cols-2 gap-3">
      <Field label="Category">
        <Select value={value.category_id} onValueChange={(v) => onChange({ ...value, category_id: v })}>
          <SelectTrigger><SelectValue placeholder="Pick category" /></SelectTrigger>
          <SelectContent>
            {categories.map((c) => <SelectItem key={c.id} value={c.id}>{c.name}</SelectItem>)}
          </SelectContent>
        </Select>
      </Field>
      <Field label="Tier">
        <Select value={value.tier} onValueChange={(v) => onChange({ ...value, tier: v as "free" | "premium" })}>
          <SelectTrigger><SelectValue /></SelectTrigger>
          <SelectContent>
            <SelectItem value="free">Free</SelectItem>
            <SelectItem value="premium">Premium</SelectItem>
          </SelectContent>
        </Select>
      </Field>
    </div>
    <Field label="Title">
      <Input value={value.title} onChange={(e) => onChange({ ...value, title: e.target.value })} />
    </Field>
    <Field label="Prompt text">
      <Textarea rows={6} value={value.prompt_text} onChange={(e) => onChange({ ...value, prompt_text: e.target.value })} />
    </Field>
    <Field label="Purpose">
      <Input value={value.purpose ?? ""} onChange={(e) => onChange({ ...value, purpose: e.target.value })} />
    </Field>
    <div className="grid grid-cols-2 gap-3">
      <Field label="Outcome"><Input value={value.outcome ?? ""} onChange={(e) => onChange({ ...value, outcome: e.target.value })} /></Field>
      <Field label="Output format"><Input value={value.output_format ?? ""} onChange={(e) => onChange({ ...value, output_format: e.target.value })} /></Field>
      <Field label="Time saved"><Input value={value.time_saved ?? ""} onChange={(e) => onChange({ ...value, time_saved: e.target.value })} /></Field>
      <Field label="Sort order"><Input type="number" value={value.sort_order} onChange={(e) => onChange({ ...value, sort_order: Number(e.target.value) })} /></Field>
    </div>
    <Field label="Follow-up">
      <Textarea rows={2} value={value.follow_up ?? ""} onChange={(e) => onChange({ ...value, follow_up: e.target.value })} />
    </Field>
    <div className="flex items-center justify-between border-t border-border/50 pt-3">
      <Label>Active</Label>
      <Switch checked={value.is_active} onCheckedChange={(v) => onChange({ ...value, is_active: v })} />
    </div>
  </div>
);

/* ============ SETTINGS ============ */
const SettingsPanel = () => {
  const [vals, setVals] = useState<Record<string, string>>({
    razorpay_premium_url: "",
    razorpay_starter_url: "",
    whatsapp_group_url: "",
    free_pack_url: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.from("settings").select("*").then(({ data }) => {
      const map: Record<string, string> = { ...vals };
      (data ?? []).forEach((row: { key: string; value: string | null }) => {
        map[row.key] = row.value ?? "";
      });
      setVals(map);
      setLoading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const save = async () => {
    const rows = Object.entries(vals).map(([key, value]) => ({ key, value }));
    const { error } = await supabase.from("settings").upsert(rows, { onConflict: "key" });
    if (error) return toast.error(error.message);
    toast.success("Settings saved");
  };

  if (loading) return <Card title="Settings" desc=""><p className="text-muted-foreground text-sm">Loading…</p></Card>;

  return (
    <Card title="Settings" desc="Paste your Razorpay payment links and other public URLs.">
      <div className="space-y-4 max-w-xl">
        <Field label="Razorpay — Premium upgrade URL">
          <Input value={vals.razorpay_premium_url} onChange={(e) => setVals({ ...vals, razorpay_premium_url: e.target.value })} placeholder="https://rzp.io/l/..." />
        </Field>
        <Field label="Razorpay — ₹99 starter URL">
          <Input value={vals.razorpay_starter_url} onChange={(e) => setVals({ ...vals, razorpay_starter_url: e.target.value })} placeholder="https://rzp.io/l/..." />
        </Field>
        <Field label="WhatsApp group / channel URL">
          <Input value={vals.whatsapp_group_url} onChange={(e) => setVals({ ...vals, whatsapp_group_url: e.target.value })} placeholder="https://chat.whatsapp.com/..." />
        </Field>
        <Field label="Free prompt pack download URL">
          <Input value={vals.free_pack_url} onChange={(e) => setVals({ ...vals, free_pack_url: e.target.value })} placeholder="https://..." />
        </Field>
        <Button onClick={save}>Save settings</Button>
      </div>
    </Card>
  );
};

/* ============ helpers ============ */
const Card = ({ title, desc, children, action }: { title: string; desc: string; children: React.ReactNode; action?: React.ReactNode }) => (
  <div className="bg-card border border-border/60 rounded-2xl p-6 md:p-7">
    <div className="flex items-start justify-between mb-5 gap-4">
      <div>
        <h2 className="font-serif text-2xl mb-1">{title}</h2>
        {desc && <p className="text-sm text-muted-foreground">{desc}</p>}
      </div>
      {action}
    </div>
    {children}
  </div>
);

const Field = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div>
    <Label className="mb-1.5 block">{label}</Label>
    {children}
  </div>
);

export default Admin;