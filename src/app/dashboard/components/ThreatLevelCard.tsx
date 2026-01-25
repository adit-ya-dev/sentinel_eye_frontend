export default function ThreatLevelCard() {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#071225] p-5 shadow-xl h-full">
      <p className="text-xs uppercase tracking-widest text-white/40">
        Threat Level
      </p>

      <div className="mt-4">
        <h2 className="text-4xl font-black text-red-500">CRITICAL</h2>
        <p className="mt-2 text-sm text-white/60">
          Forest → Urban transition exceeded 20% threshold.
        </p>
      </div>

      <div className="mt-6 space-y-3">
        <div className="flex items-center justify-between text-sm">
          <span className="text-white/60">Forest Loss</span>
          <span className="font-bold text-white">24%</span>
        </div>

        <div className="flex items-center justify-between text-sm">
          <span className="text-white/60">NDVI Drop</span>
          <span className="font-bold text-white">0.31</span>
        </div>

        <div className="flex items-center justify-between text-sm">
          <span className="text-white/60">Alert Confidence</span>
          <span className="font-bold text-white">0.92</span>
        </div>
      </div>
    </div>
  );
}
