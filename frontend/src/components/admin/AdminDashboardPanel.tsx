import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { mockAdminPartners, mockAdminStats } from "@/data/mockDashboard";

const summaryStats = [
  { label: "Total Sales", value: `₹${mockAdminStats.totalSales.toLocaleString("en-IN")}` },
  { label: "Admin Earnings", value: `₹${mockAdminStats.adminEarnings.toLocaleString("en-IN")}` },
  { label: "Total Partners", value: String(mockAdminStats.totalPartners) },
  { label: "Total Products", value: String(mockAdminStats.totalProducts) },
];

const rankedPartners = [...mockAdminPartners].sort(
  (a, b) => b.revenue - a.revenue,
);
const highestRevenue = Math.max(...rankedPartners.map((p) => p.revenue), 1);

export default function AdminDashboardPanel() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-10">
      <h1 className="font-heading text-3xl font-medium tracking-tight">
        Marketplace Overview
      </h1>
      <p className="mt-1 text-sm text-muted-foreground">
        Monitor partners, products and platform earnings.
      </p>

      {/* KPI strip */}
      <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
        {summaryStats.map((stat) => (
          <div key={stat.label}>
            <p className="text-xs text-muted-foreground">{stat.label}</p>
            <p className="font-heading mt-0.5 text-xl font-medium tracking-tight">
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      {/* Leaderboard */}
      <div className="mt-10">
        <p className="text-sm font-semibold tracking-wide text-muted-foreground uppercase">
          Partner Leaderboard
        </p>

        <div className="mt-4 space-y-5">
          {rankedPartners.map((partner, index) => {
            const barWidthPercent = Math.max(
              (partner.revenue / highestRevenue) * 100,
              4,
            );
            return (
              <div key={partner.id} className="flex items-center gap-4">
                <span className="font-heading w-6 shrink-0 text-lg text-muted-foreground/50">
                  {index + 1}
                </span>

                <Avatar className="h-9 w-9 shrink-0">
                  <AvatarFallback>
                    {partner.name.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>

                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline justify-between gap-3">
                    <p className="truncate text-sm font-medium">
                      {partner.name}
                    </p>
                    <p className="shrink-0 text-sm font-medium">
                      ₹{partner.revenue.toLocaleString("en-IN")}
                    </p>
                  </div>
                  <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                    <div
                      className={
                        "h-full rounded-full " +
                        (partner.isActive ? "bg-foreground" : "bg-muted-foreground/40")
                      }
                      style={{ width: `${barWidthPercent}%` }}
                    />
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {partner.products} products · {partner.sales} sales
                    {!partner.isActive && " · inactive"}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
