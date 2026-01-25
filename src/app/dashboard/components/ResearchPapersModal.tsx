"use client";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function ResearchPapersModal({ open, onClose }: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      {/* Background */}
      <div className="absolute inset-0 bg-black/70" onClick={onClose} />

      {/* Modal */}
      <div className="relative w-[95%] max-w-3xl rounded-2xl border border-white/10 bg-[#071225] p-6 shadow-2xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-xl font-black text-white">
              📚 Research Papers Used
            </h2>
            <p className="mt-1 text-sm text-white/60">
              These papers directly power Land Guard’s NDVI + Change Detection
              pipeline.
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/70 hover:bg-white/10"
          >
            ✕ Close
          </button>
        </div>

        <div className="mt-6 space-y-4 text-sm text-white/70">
          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <p className="font-bold text-white">
              1) NDVI Vegetation Index (NASA / USGS)
            </p>
            <p className="mt-1 text-white/60">
              NDVI = (NIR - RED) / (NIR + RED) • Used for vegetation health
              scoring.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <p className="font-bold text-white">
              2) Semantic Change Detection (arXiv 2024)
            </p>
            <p className="mt-1 text-white/60">
              Bi-temporal segmentation comparison → transition matrix
              (Forest→Urban).
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <p className="font-bold text-white">
              3) DeepLabV3+ LULC Segmentation
            </p>
            <p className="mt-1 text-white/60">
              Pixel-wise land cover classification for
              forest/urban/water/barren.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <p className="font-bold text-white">
              4) AVOCADO Time-Series Anomaly Detection
            </p>
            <p className="mt-1 text-white/60">
              Detect gradual forest decline using NDVI likelihood patterns.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <p className="font-bold text-white">
              5) Forest-Chat Interpretation (VLM)
            </p>
            <p className="mt-1 text-white/60">
              Generates human-readable forest change descriptions +
              recommendations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
