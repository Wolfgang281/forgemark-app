import { Button } from "@/components/ui/button";
import { mockPartnerProducts } from "@/data/mockDashboard";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function ProductPanel() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-10">
      <div className="flex flex-wrap items-end justify-between gap-4 border-b border-border pb-6">
        <div>
          <h1 className="font-heading text-3xl font-medium tracking-tight">
            Products
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {mockPartnerProducts.length} listed
          </p>
        </div>
        <Button disabled>Add Product</Button>
      </div>

      <div className="divide-y divide-border">
        {mockPartnerProducts.map((product) => {
          const isExpanded = expandedId === product.id;
          return (
            <div key={product.id}>
              <button
                onClick={() =>
                  setExpandedId(isExpanded ? null : product.id)
                }
                className="flex w-full cursor-pointer items-center gap-4 py-5 text-left"
              >
                <div className="min-w-0 flex-1">
                  <p className="font-heading text-xl font-medium tracking-tight">
                    {product.title}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {product.type}
                  </p>
                </div>
                <p className="text-sm font-medium">
                  ₹{product.revenue.toLocaleString("en-IN")}
                </p>
                <ChevronDown
                  className={
                    "h-4 w-4 shrink-0 text-muted-foreground transition-transform " +
                    (isExpanded ? "rotate-180" : "")
                  }
                />
              </button>

              {isExpanded && (
                <div className="grid grid-cols-3 gap-4 pb-6 text-sm">
                  <div>
                    <p className="text-xs text-muted-foreground">Sales</p>
                    <p className="mt-0.5 font-medium">{product.sales}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Revenue</p>
                    <p className="mt-0.5 font-medium">
                      ₹{product.revenue.toLocaleString("en-IN")}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Type</p>
                    <p className="mt-0.5 font-medium">{product.type}</p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
