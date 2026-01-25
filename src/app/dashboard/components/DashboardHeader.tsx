"use client";

import { useState } from "react";
import ResearchPapersModal from "./ResearchPapersModal";

export default function DashboardHeader() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black tracking-wide text-white">
            Dashboard
          </h1>
          <p className="mt-1 text-sm text-white/60">
            Live monitoring overview • NDVI • Encroachment • Alerts
          </p>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10 transition"
        >
          📚 Research Papers
        </button>
      </div>

      <ResearchPapersModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
