export default function StatsCards() {
  const stats = [
    { label: "Mean NDVI", value: "0.42", badge: "MODERATE" },
    { label: "Forest Loss", value: "24%", badge: "CRITICAL" },
    { label: "Urban Gain", value: "13%", badge: "WARNING" },
    { label: "Scans Today", value: "08", badge: "ACTIVE" },
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

          <div className="mt-2 flex items-end justify-between">
            <h2 className="text-3xl font-black text-white">{s.value}</h2>

            <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs font-bold text-white/70">
              {s.badge}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
