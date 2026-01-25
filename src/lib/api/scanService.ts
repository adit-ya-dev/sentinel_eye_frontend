import type { Scan } from "@/types/scan";

export async function getRecentScans(): Promise<Scan[]> {
  const res = await fetch("/api/scans");
  if (!res.ok) throw new Error("Failed to fetch scans");
  return res.json();
}
