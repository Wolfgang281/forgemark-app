import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.svg";
import { Menu, X } from "lucide-react";
import { useState } from "react";

interface SiteHeaderProps {
  onSignInClick: () => void;
}

export function SiteHeader({ onSignInClick }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="Forgemark logo"
            className="h-6 w-6 rounded-sm object-contain"
          />
          <span className="text-lg font-semibold tracking-tight">
            Forgemark
          </span>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Button onClick={onSignInClick}>Sign In</Button>
        </div>

        <button
          className="cursor-pointer text-muted-foreground transition-colors hover:text-foreground md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="flex flex-col gap-4 border-t border-border px-4 py-4 sm:px-6 md:hidden">
          <Button className="w-full" onClick={onSignInClick}>
            Sign In
          </Button>
        </div>
      )}
    </header>
  );
}
