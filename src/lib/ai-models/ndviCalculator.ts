export interface NDVIResult {
  mean: number;
  min: number;
  max: number;
  healthStatus: "CRITICAL" | "POOR" | "MODERATE" | "GOOD" | "EXCELLENT";
}

export function calculateNDVI(
  redBand: number[],
  nirBand: number[],
): NDVIResult {
  const ndviValues = redBand.map((red, idx) => {
    const nir = nirBand[idx];
    const denom = nir + red;
    if (denom === 0) return 0;
    return (nir - red) / denom;
  });

  const mean =
    ndviValues.reduce((sum, v) => sum + v, 0) / Math.max(ndviValues.length, 1);

  const min = Math.min(...ndviValues);
  const max = Math.max(...ndviValues);

  const healthStatus = classifyNDVI(mean);

  return { mean, min, max, healthStatus };
}

export function classifyNDVI(mean: number) {
  if (mean < 0.2) return "CRITICAL";
  if (mean < 0.3) return "POOR";
  if (mean < 0.5) return "MODERATE";
  if (mean < 0.7) return "GOOD";
  return "EXCELLENT";
}
