import type { ScanSeverity } from "./scan";

export interface AlertItem {
  id: string;
  type: string;
  severity: ScanSeverity;
  message: string;
  createdAt: string;
  scanId?: string;
}
