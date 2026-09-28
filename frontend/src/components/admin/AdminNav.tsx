import logo from "@/assets/logo.svg";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

export type AdminSection = "dashboard" | "payments";

interface AdminNavProps {
  activeSection: AdminSection;
  onSectionChange: (section: AdminSection) => void;
}

const sections: { key: AdminSection; label: string }[] = [
  { key: "dashboard", label: "Dashboard" },
  { key: "payments", label: "Pay To Partner" },
];

export default function AdminNav({
  activeSection,
  onSectionChange,
}: AdminNavProps) {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <button
          onClick={() => navigate("/")}
          className="flex cursor-pointer items-center gap-2 py-4"
        >
          <img
            src={logo}
            alt="Forgemark logo"
            className="h-6 w-6 rounded-sm object-contain"
          />
          <span className="font-heading text-lg font-medium tracking-tight">
            Forgemark
          </span>
          <span className="rounded border border-border px-1.5 py-0.5 text-[10px] font-semibold tracking-wide text-muted-foreground">
            ADMIN
          </span>
        </button>

        <nav className="flex items-center gap-6">
          {sections.map((section) => {
            const isActive = activeSection === section.key;
            return (
              <button
                key={section.key}
                onClick={() => onSectionChange(section.key)}
                className={cn(
                  "relative cursor-pointer py-4 text-sm font-medium transition-colors",
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {section.label}
                {isActive && (
                  <span className="absolute right-0 bottom-0 left-0 h-0.5 bg-foreground" />
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
