export interface DashboardStats {
  meanNdvi: number;
  forestLossPercent: number;
  urbanGainPercent: number;
  scansToday: number;
  threatLevel: "LOW" | "MODERATE" | "WARNING" | "CRITICAL";
}
