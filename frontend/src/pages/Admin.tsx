import AdminDashboardPanel from "@/components/admin/AdminDashboardPanel";
import AdminNav, { type AdminSection } from "@/components/admin/AdminNav";
import PayToPartnerPanel from "@/components/admin/PayToPartnerPanel";
import { useState } from "react";

export default function AdminPage() {
  const [activeSection, setActiveSection] = useState<AdminSection>("dashboard");

  return (
    <div className="min-h-screen w-full bg-background text-foreground">
      <AdminNav
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />

      {activeSection === "dashboard" && <AdminDashboardPanel />}
      {activeSection === "payments" && <PayToPartnerPanel />}
    </div>
  );
}
