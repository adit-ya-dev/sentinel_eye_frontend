export type ScanSeverity = "LOW" | "MODERATE" | "WARNING" | "CRITICAL";

export type ScanStatus = "PROCESSING" | "COMPLETED" | "FAILED";

export interface Scan {
  id: string;
  regionName: string;
  createdAt: string;
  status: ScanStatus;
  severity: ScanSeverity;

  forestLossPercent?: number;
  urbanGainPercent?: number;
  meanNdvi?: number;
}
