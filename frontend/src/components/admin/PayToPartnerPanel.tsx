import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { mockPayoutEligiblePartners } from "@/data/mockDashboard";
import { IndianRupee } from "lucide-react";

const PAYOUT_ELIGIBILITY_THRESHOLD = 10000;

export default function PayToPartnerPanel() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-10">
      <h1 className="font-heading text-3xl font-medium tracking-tight">
        Partner Payments
      </h1>
      <p className="mt-1 text-sm text-muted-foreground">
        {mockPayoutEligiblePartners.length} partner
        {mockPayoutEligiblePartners.length !== 1 ? "s" : ""} ready for payout.
      </p>

      <div className="mt-8 space-y-4">
        {mockPayoutEligiblePartners.map((partner) => (
          <div
            key={partner.id}
            className="flex items-center gap-4 rounded-xl border border-dashed border-border p-4"
          >
            <Avatar className="h-10 w-10 shrink-0">
              <AvatarFallback>
                {partner.name.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>

            <div className="min-w-0 flex-1">
              <p className="truncate font-medium">{partner.name}</p>
              <p className="truncate text-xs text-muted-foreground">
                {partner.email} · {partner.sales} sales
              </p>
            </div>

            <div className="hidden text-right sm:block">
              <p className="font-heading text-xl font-medium tracking-tight">
                ₹{partner.revenue.toLocaleString("en-IN")}
              </p>
            </div>

            <div className="h-10 border-l border-dashed border-border" />

            <Button size="sm" disabled className="shrink-0 gap-1.5">
              <IndianRupee className="h-3.5 w-3.5" />
              Pay
            </Button>
          </div>
        ))}
      </div>

      <p className="mt-6 text-xs text-muted-foreground">
        Partners become eligible once their earnings reach ₹
        {PAYOUT_ELIGIBILITY_THRESHOLD.toLocaleString("en-IN")}. Payouts aren't
        wired up to a real payment provider yet.
      </p>
    </div>
  );
}
