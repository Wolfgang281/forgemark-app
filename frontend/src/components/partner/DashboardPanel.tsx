import { mockPartnerProducts, mockPartnerStats } from "@/data/mockDashboard";

export default function DashboardPanel() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-10">
      <p className="text-sm text-muted-foreground">Dashboard</p>

      {/* Hero stat */}
      <div className="mt-2 flex flex-col gap-6 border-b border-border pb-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm text-muted-foreground">Total Earnings</p>
          <p className="font-heading mt-1 text-6xl font-medium tracking-tight sm:text-7xl">
            ₹{mockPartnerStats.totalEarnings.toLocaleString("en-IN")}
          </p>
        </div>
        <div className="flex gap-8 sm:flex-col sm:items-end sm:gap-3">
          <div>
            <p className="text-xs text-muted-foreground">Total Sales</p>
            <p className="text-xl font-medium">{mockPartnerStats.totalSales}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Active Products</p>
            <p className="text-xl font-medium">
              {mockPartnerStats.activeProducts}
            </p>
          </div>
        </div>
      </div>

      {/* Product performance, ranked list */}
      <div className="mt-8">
        <p className="text-sm font-semibold tracking-wide text-muted-foreground uppercase">
          Top Products
        </p>
        <div className="mt-4 divide-y divide-border border-t border-border">
          {mockPartnerProducts.map((product, index) => (
            <div key={product.id} className="flex items-center gap-4 py-4">
              <span className="font-heading w-8 shrink-0 text-lg text-muted-foreground/50">
                {index + 1}
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium">
                  {product.title}
                </p>
                <p className="text-xs text-muted-foreground">
                  {product.type}
                </p>
              </div>
              <p className="text-sm text-muted-foreground">
                {product.sales} sales
              </p>
              <p className="w-24 shrink-0 text-right text-sm font-medium">
                ₹{product.revenue.toLocaleString("en-IN")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
