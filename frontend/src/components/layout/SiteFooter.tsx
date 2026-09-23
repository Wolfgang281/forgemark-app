import logo from "@/assets/logo.svg";
import { Contact } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-foreground py-12 text-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 text-center sm:px-6">
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="Forgemark logo"
            className="h-6 w-6 rounded-sm object-contain"
          />
          <span className="text-base font-semibold">Forgemark</span>
        </div>

        <p className="max-w-sm text-sm text-background/70">
          A marketplace where creators sell courses, source code, templates,
          AI prompts and ebooks.
        </p>

        <div className="flex items-center justify-center gap-2 text-sm text-background/70">
          <Contact size={16} />
          hello@forgemark.com
        </div>

        <div className="mt-4 w-full border-t border-background/15 pt-6 text-xs text-background/50">
          <p>© {new Date().getFullYear()} Forgemark. All rights reserved.</p>
          <p className="mt-1 italic">Built by Utkarsh Gupta</p>
        </div>
      </div>
    </footer>
  );
}
