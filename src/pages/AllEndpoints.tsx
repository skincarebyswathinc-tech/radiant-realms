import { Link } from "react-router-dom";
import AppHeader from "@/components/AppHeader";

const endpoints: { path: string; label: string; description: string; access: string }[] = [
  { path: "/", label: "Landing", description: "Marketing home page", access: "Public" },
  { path: "/auth", label: "Sign in", description: "Login form", access: "Public" },
  { path: "/auth?mode=signup", label: "Sign up", description: "Create account", access: "Public" },
  { path: "/thank-you", label: "Thank you", description: "Post-signup confirmation", access: "Public" },
  { path: "/library", label: "Prompt Library", description: "Browse all prompt categories", access: "Authenticated" },
  { path: "/library/:slug", label: "Category Detail", description: "Prompts in a category (gated by tier)", access: "Authenticated" },
  { path: "/dashboard", label: "Dashboard", description: "User account & tier status", access: "Authenticated" },
  { path: "/admin", label: "Admin Panel", description: "Manage users, leads, prompts, settings", access: "Admin" },
  { path: "/all-endpoints", label: "All Endpoints", description: "This index of routes", access: "Public" },
];

const AllEndpoints = () => {
  return (
    <div className="min-h-screen bg-ivory">
      <AppHeader />
      <main className="container max-w-4xl py-16">
        <div className="text-center mb-12">
          <p className="text-[10px] uppercase tracking-[4px] text-gold mb-3">Site Map</p>
          <h1 className="font-serif text-4xl md:text-5xl font-light text-brown-dark">
            All <span className="italic text-gold">Endpoints</span>
          </h1>
          <p className="text-brown-dark/70 mt-4 font-serif italic">
            Every route available in this application.
          </p>
        </div>

        <div className="border border-gold/30 bg-white/50 divide-y divide-gold/20">
          {endpoints.map((e) => (
            <Link
              key={e.path}
              to={e.path}
              className="flex items-start justify-between gap-4 px-6 py-5 hover:bg-gold/5 transition-colors group"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="font-serif text-lg text-brown-dark group-hover:text-gold transition-colors">
                    {e.label}
                  </span>
                  <code className="text-xs font-mono text-brown-dark/60 bg-beige/60 px-2 py-0.5 rounded">
                    {e.path}
                  </code>
                </div>
                <p className="text-sm text-brown-dark/70 mt-1">{e.description}</p>
              </div>
              <span className="text-[10px] uppercase tracking-[2px] text-gold border border-gold/40 px-2 py-1 whitespace-nowrap">
                {e.access}
              </span>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default AllEndpoints;