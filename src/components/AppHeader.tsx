import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, BookOpen, Shield, LogOut, Sparkles } from "lucide-react";

const AppHeader = () => {
  const { user, isAdmin, tier, signOut } = useAuth();
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-primary" />
          <span className="font-serif text-xl font-medium tracking-tight">
            Nutrition <span className="italic text-primary">Prompts</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          <Button asChild variant="ghost" size="sm">
            <Link to="/dashboard"><LayoutDashboard className="w-4 h-4 mr-1.5" />Dashboard</Link>
          </Button>
          <Button asChild variant="ghost" size="sm">
            <Link to="/library"><BookOpen className="w-4 h-4 mr-1.5" />Library</Link>
          </Button>
          {isAdmin && (
            <Button asChild variant="ghost" size="sm">
              <Link to="/admin"><Shield className="w-4 h-4 mr-1.5" />Admin</Link>
            </Button>
          )}
        </nav>

        <div className="flex items-center gap-2">
          {user && (
            <span className="hidden sm:inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium uppercase tracking-wider">
              {tier}
            </span>
          )}
          {user ? (
            <Button
              variant="ghost"
              size="sm"
              onClick={async () => {
                await signOut();
                navigate("/");
              }}
            >
              <LogOut className="w-4 h-4" />
            </Button>
          ) : (
            <Button asChild size="sm" variant="outline">
              <Link to="/auth">Sign in</Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default AppHeader;