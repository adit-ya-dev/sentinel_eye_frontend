"use client";

export default function ScanResultHeader() {
  return (
    <div className="flex flex-col py-4">
      {/* Primary Bold Heading */}
      <h1 className="text-2xl font-bold tracking-tight text-white sm:text-2xl">
        Scan Results
      </h1>

      {/* Minimalist Sub-heading with Bullet Points */}
      <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-white/50 font-medium">
        <span>Sentinel Eye overview</span>
        <span className="text-white/20">•</span>
        <span>NDVI</span>
        <span className="text-white/20">•</span>
        <span>Encroachment</span>
        <span className="text-white/20">•</span>
        <span>Alerts</span>
      </div>
    </div>
  );
}
