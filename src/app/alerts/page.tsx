"use client";

import AlertsHeader from "./components/AlertsHeader";
import AlertsFilters from "./components/AlertsFilters";
import AlertsList from "./components/AlertsList";
import { useAlerts } from "@/hooks/useAlerts";

export default function AlertsPage() {
  const { alerts, total, severity, setSeverity } = useAlerts();

  return (
    <div className="max-w-7xl mx-auto space-y-8 px-6 pb-12">
      <AlertsHeader total={total} />

      <div className="space-y-6">
        <AlertsFilters value={severity} onChange={setSeverity} />
        <AlertsList alerts={alerts} />
      </div>
    </div>
  );
}
