import { RESEARCH_THRESHOLDS } from "./constants";

export function getThreatLevel(input: {
  forestLossPercent: number;
  urbanGainPercent: number;
  meanNdvi: number;
}) {
  const { forestLossPercent, urbanGainPercent, meanNdvi } = input;

  if (forestLossPercent >= RESEARCH_THRESHOLDS.ALERTS.FOREST_LOSS_CRITICAL)
    return "CRITICAL";

  if (urbanGainPercent >= RESEARCH_THRESHOLDS.ALERTS.URBAN_GAIN_WARNING)
    return "WARNING";

  if (meanNdvi <= RESEARCH_THRESHOLDS.ALERTS.NDVI_CRITICAL) return "WARNING";

  return "MODERATE";
}
