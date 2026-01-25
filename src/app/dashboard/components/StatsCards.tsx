"use client";

import { useDashboardStats } from "@/hooks/useDashboardStats";
import { formatNdvi, formatPercent } from "@/lib/utils/format";

export default function StatsCards() {
  const { data, loading } = useDashboardStats();

  const stats = [
    { label: "Mean NDVI", value: data ? formatNdvi(data.meanNdvi) : "--" },
    {
      label: "Forest Loss",
      value: data ? formatPercent(data.forestLossPercent) : "--",
    },
    {
      label: "Urban Gain",
      value: data ? formatPercent(data.urbanGainPercent) : "--",
    },
    { label: "Scans Today", value: data ? String(data.scansToday) : "--" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
      {stats.map((s) => (
        <div
          key={s.label}
          className="rounded-2xl border border-white/10 bg-[#071225] p-5 shadow-xl"
        >
          <p className="text-xs uppercase tracking-widest text-white/40">
            {s.label}
          </p>

          <h2 className="mt-2 text-3xl font-black text-white">
            {loading ? "..." : s.value}
          </h2>
        </div>
      ))}
    </div>
  );
}
