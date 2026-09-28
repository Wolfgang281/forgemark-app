import DashboardPanel from "@/components/partner/DashboardPanel";
import PartnerSidebar, {
  type PartnerTab,
} from "@/components/partner/PartnerSidebar";
import ProductPanel from "@/components/partner/ProductPanel";
import ProfilePanel from "@/components/partner/ProfilePanel";
import { useState } from "react";

export default function PartnerPage() {
  const [activeTab, setActiveTab] = useState<PartnerTab>("dashboard");

  return (
    <div className="flex min-h-screen w-full bg-background text-foreground">
      <PartnerSidebar activeTab={activeTab} onTabChange={setActiveTab} />

      <main className="flex-1 pb-16 md:pb-0">
        {activeTab === "dashboard" && <DashboardPanel />}
        {activeTab === "profile" && <ProfilePanel />}
        {activeTab === "product" && <ProductPanel />}
      </main>
    </div>
  );
}
