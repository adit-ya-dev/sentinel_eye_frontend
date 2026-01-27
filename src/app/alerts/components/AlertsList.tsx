import AlertCard from "./AlertCard";
import type { Alert } from "@/types/alert";
import { ShieldCheck } from "lucide-react";

export default function AlertsList({ alerts }: { alerts: Alert[] }) {
  if (!Array.isArray(alerts) || alerts.length === 0) {
    return (
      <div className="bg-card border border-border border-dashed rounded-2xl p-12 text-muted-foreground flex flex-col items-center justify-center gap-3">
        <div className="bg-emerald-500/10 p-4 rounded-full">
          <ShieldCheck className="w-8 h-8 text-emerald-500" />
        </div>
        <p className="font-bold uppercase tracking-[0.2em] text-xs">
          System Clear: No active alerts
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {alerts.map((a) => (
        <AlertCard key={a.id} alert={a} />
      ))}
    </div>
  );
}
