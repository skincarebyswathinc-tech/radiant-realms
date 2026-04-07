import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-8 md:py-10 border-t border-border/40">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4 text-sm text-muted-foreground">
          <p className="font-serif text-lg text-foreground">Glow Prompts</p>
          <p className="text-xs md:text-sm">© 2026 Glow Prompts. All rights reserved.</p>
          <div className="flex gap-5 md:gap-6">
            <a href="#" className="text-xs md:text-sm hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="text-xs md:text-sm hover:text-foreground transition-colors">Terms</a>
            <a href="#" className="text-xs md:text-sm hover:text-foreground transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
