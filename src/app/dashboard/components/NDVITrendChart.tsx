"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", ndvi: 0.62 },
  { month: "Feb", ndvi: 0.58 },
  { month: "Mar", ndvi: 0.52 },
  { month: "Apr", ndvi: 0.44 },
  { month: "May", ndvi: 0.39 },
  { month: "Jun", ndvi: 0.32 },
];

export default function NDVITrendChart() {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#071225] p-5 shadow-xl h-full">
      <div className="flex items-center justify-between">
        <p className="text-xs uppercase tracking-widest text-white/40">
          NDVI Trend
        </p>
        <span className="text-xs text-white/50">Last 6 months</span>
      </div>

      <div className="mt-4 h-[260px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="month" stroke="rgba(255,255,255,0.3)" />
            <YAxis stroke="rgba(255,255,255,0.3)" />
            <Tooltip
              contentStyle={{
                background: "#0B1A33",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "white",
              }}
            />
            <Line type="monotone" dataKey="ndvi" strokeWidth={3} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
