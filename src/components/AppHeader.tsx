import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, BookOpen, Shield, LogOut } from "lucide-react";

interface AppHeaderProps {
  variant?: "light" | "dark";
}

const AppHeader = ({ variant = "light" }: AppHeaderProps) => {
  const { user, isAdmin, tier, signOut } = useAuth();
  const navigate = useNavigate();
  const dark = variant === "dark";

  return (
    <header
      className={
        dark
          ? "sticky top-0 z-40 border-b border-gold/20 bg-brown-dark/95 backdrop-blur-md text-ivory"
          : "sticky top-0 z-40 border-b border-gold/25 bg-ivory/85 backdrop-blur-md"
      }
    >
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-gold/60">
            <span className="text-gold font-serif text-lg leading-none">✦</span>
          </span>
          <span className={`font-serif text-xl font-light tracking-wide ${dark ? "text-ivory" : "text-brown-dark"}`}>
            Nutrition <span className="italic text-gold">Prompts</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          <Button asChild variant="ghost" size="sm" className={dark ? "text-ivory/85 hover:text-gold hover:bg-transparent" : "text-brown-dark/80 hover:text-gold hover:bg-transparent"}>
            <Link to="/library"><BookOpen className="w-4 h-4 mr-1.5" />Library</Link>
          </Button>
          {user && (
            <Button asChild variant="ghost" size="sm" className={dark ? "text-ivory/85 hover:text-gold hover:bg-transparent" : "text-brown-dark/80 hover:text-gold hover:bg-transparent"}>
              <Link to="/dashboard"><LayoutDashboard className="w-4 h-4 mr-1.5" />Dashboard</Link>
            </Button>
          )}
          {isAdmin && (
            <Button asChild variant="ghost" size="sm" className={dark ? "text-ivory/85 hover:text-gold hover:bg-transparent" : "text-brown-dark/80 hover:text-gold hover:bg-transparent"}>
              <Link to="/admin"><Shield className="w-4 h-4 mr-1.5" />Admin</Link>
            </Button>
          )}
        </nav>

        <div className="flex items-center gap-2">
          {user && (
            <span className="hidden sm:inline-flex items-center gap-1.5 text-[10px] px-2.5 py-1 rounded-full border border-gold/40 text-gold font-medium uppercase tracking-[2px]">
              {tier}
            </span>
          )}
          {user ? (
            <Button
              variant="ghost"
              size="sm"
              className={dark ? "text-ivory/85 hover:text-gold hover:bg-transparent" : "text-brown-dark/80 hover:text-gold hover:bg-transparent"}
              onClick={async () => {
                await signOut();
                navigate("/");
              }}
            >
              <LogOut className="w-4 h-4" />
            </Button>
          ) : (
            <>
              <Button asChild size="sm" variant="ghost" className={dark ? "text-ivory hover:text-gold hover:bg-transparent uppercase tracking-[2px] text-[10px] font-semibold" : "text-brown-dark hover:text-gold hover:bg-transparent uppercase tracking-[2px] text-[10px] font-semibold"}>
                <Link to="/auth">Sign in</Link>
              </Button>
              <Button
                asChild
                size="sm"
                className="bg-gold hover:bg-gold-dark text-brown-dark uppercase tracking-[2px] text-[10px] font-semibold rounded-none px-4 h-9 border border-gold"
              >
                <Link to="/auth?mode=signup">Sign up</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default AppHeader;