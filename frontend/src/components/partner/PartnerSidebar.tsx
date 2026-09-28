import logo from "@/assets/logo.svg";
import { cn } from "@/lib/utils";
import { ArrowLeft, LayoutDashboard, Package, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

export type PartnerTab = "dashboard" | "profile" | "product";

interface PartnerSidebarProps {
  activeTab: PartnerTab;
  onTabChange: (tab: PartnerTab) => void;
}

const navItems: { key: PartnerTab; label: string; icon: typeof LayoutDashboard }[] = [
  { key: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { key: "profile", label: "Profile", icon: User },
  { key: "product", label: "Products", icon: Package },
];

export default function PartnerSidebar({
  activeTab,
  onTabChange,
}: PartnerSidebarProps) {
  const navigate = useNavigate();

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden w-60 shrink-0 flex-col border-r border-border md:flex">
        <button
          onClick={() => navigate("/")}
          className="flex cursor-pointer items-center gap-2 border-b border-border px-6 py-5"
        >
          <img
            src={logo}
            alt="Forgemark logo"
            className="h-6 w-6 rounded-sm object-contain"
          />
          <span className="font-heading text-base font-medium tracking-tight">
            Forgemark
          </span>
        </button>

        <nav className="flex-1 space-y-1 px-3 py-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.key;
            return (
              <button
                key={item.key}
                onClick={() => onTabChange(item.key)}
                className={cn(
                  "flex w-full cursor-pointer items-center gap-3 rounded-lg border-l-2 px-3 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "border-foreground bg-muted text-foreground"
                    : "border-transparent text-muted-foreground hover:bg-muted/50 hover:text-foreground",
                )}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </button>
            );
          })}
        </nav>

        <button
          onClick={() => navigate("/")}
          className="flex cursor-pointer items-center gap-2 border-t border-border px-6 py-4 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Forgemark
        </button>
      </aside>

      {/* Mobile bottom tab bar */}
      <nav className="fixed inset-x-0 bottom-0 z-40 flex border-t border-border bg-background md:hidden">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.key;
          return (
            <button
              key={item.key}
              onClick={() => onTabChange(item.key)}
              className={cn(
                "flex flex-1 cursor-pointer flex-col items-center gap-1 py-2.5 text-xs font-medium transition-colors",
                isActive ? "text-foreground" : "text-muted-foreground",
              )}
            >
              <Icon className="h-5 w-5" />
              {item.label}
            </button>
          );
        })}
      </nav>
    </>
  );
}
