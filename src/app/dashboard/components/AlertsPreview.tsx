export default function AlertsPreview() {
  const alerts = [
    { type: "Illegal Encroachment", time: "5 min ago", level: "CRITICAL" },
    { type: "NDVI Drop Detected", time: "18 min ago", level: "WARNING" },
    { type: "Waterbody Shrink", time: "1 hour ago", level: "MODERATE" },
  ];

  return (
    <div className="rounded-2xl border border-white/10 bg-[#071225] p-5 shadow-xl h-full">
      <p className="text-xs uppercase tracking-widest text-white/40">
        Alerts Preview
      </p>

      <div className="mt-4 space-y-3">
        {alerts.map((a, i) => (
          <div
            key={i}
            className="rounded-xl border border-white/10 bg-white/5 p-4"
          >
            <div className="flex items-center justify-between">
              <p className="font-semibold text-white">{a.type}</p>
              <span className="text-xs font-bold text-red-400">{a.level}</span>
            </div>
            <p className="mt-1 text-xs text-white/50">{a.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
