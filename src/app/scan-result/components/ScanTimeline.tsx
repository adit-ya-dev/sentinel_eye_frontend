"use client";

import { Fingerprint, CalendarDays, Zap } from "lucide-react";
import type { ScanResultResponse } from "@/types/scanResult";

export default function ScanTimeline({ data }: { data: ScanResultResponse }) {
  return (
    <div className="flex flex-col py-4">
      <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30">
        Temporal Metadata
      </p>

      <div className="mt-4 space-y-4">
        {/* Scan ID */}
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 border border-white/10">
            <Fingerprint className="h-4 w-4 text-blue-400" />
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-wider text-white/40 font-bold">
              Scan Identity
            </p>
            <p className="text-sm font-mono text-white">{data.scanId}</p>
          </div>
        </div>

        {/* Date Range Group */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 border border-white/10">
              <CalendarDays className="h-4 w-4 text-white/60" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-white/40 font-bold">
                Baseline Date
              </p>
              <p className="text-sm text-white/90">{data.timestamps.before}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 border border-white/10">
              <CalendarDays className="h-4 w-4 text-white/60" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-white/40 font-bold">
                Analysis Date
              </p>
              <p className="text-sm text-white/90">{data.timestamps.after}</p>
            </div>
          </div>
        </div>

        {/* Processing Timestamp */}
        <div className="flex items-center gap-3 border-t border-white/5 pt-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-500/20">
            <Zap className="h-4 w-4 text-emerald-400" />
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-wider text-white/40 font-bold">
              Processed At
            </p>
            <p className="text-sm text-white/90">
              {new Date(data.timestamps.analyzedAt).toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
