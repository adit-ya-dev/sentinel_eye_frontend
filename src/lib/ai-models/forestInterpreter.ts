import type { NDVIResult } from "./ndviCalculator";
import type { TransitionSummary } from "./changeDetection";

export interface ForestChangeDescription {
  severity: "LOW" | "MODERATE" | "HIGH" | "CRITICAL";
  description: string;
  recommendations: string[];
}

export function interpretForestChange(
  transitions: TransitionSummary,
  ndvi: NDVIResult,
): ForestChangeDescription {
  const forestLoss = transitions.forestToUrbanPercent;

  if (forestLoss > 20 || ndvi.mean < 0.3) {
    return {
      severity: "CRITICAL",
      description: `Detected ${forestLoss.toFixed(
        1,
      )}% forest-to-urban conversion. NDVI mean is ${ndvi.mean.toFixed(
        2,
      )}, indicating severe vegetation stress.`,
      recommendations: [
        "Immediate field verification required",
        "Deploy rangers to affected coordinates",
        "Initiate legal action if unauthorized activity confirmed",
        "Plan reforestation and restoration",
      ],
    };
  }

  return {
    severity: "MODERATE",
    description: `Moderate land change detected. Forest-to-urban conversion is ${forestLoss.toFixed(
      1,
    )}%. NDVI mean is ${ndvi.mean.toFixed(2)}.`,
    recommendations: ["Continue monitoring", "Run monthly NDVI trend analysis"],
  };
}
