export interface TimeSeriesPoint {
  date: string;
  ndvi: number;
}

export interface Anomaly {
  date: string;
  ndvi: number;
  type: "DECLINE" | "GROWTH";
}

export function detectNDVIAnomalies(points: TimeSeriesPoint[]) {
  if (points.length < 3) return [];

  const values = points.map((p) => p.ndvi);
  const mean = values.reduce((a, b) => a + b, 0) / values.length;

  const variance =
    values.reduce((sum, v) => sum + (v - mean) ** 2, 0) / values.length;

  const std = Math.sqrt(variance);

  // simple anomaly rule (AVOCADO-like idea)
  const anomalies: Anomaly[] = [];

  for (const p of points) {
    if (p.ndvi < mean - 2 * std) {
      anomalies.push({ date: p.date, ndvi: p.ndvi, type: "DECLINE" });
    }
    if (p.ndvi > mean + 2 * std) {
      anomalies.push({ date: p.date, ndvi: p.ndvi, type: "GROWTH" });
    }
  }

  return anomalies;
}
