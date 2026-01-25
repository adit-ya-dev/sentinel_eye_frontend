import type { AlertItem } from "@/types/alert";

export async function getAlerts(): Promise<AlertItem[]> {
  const res = await fetch("/api/alerts");
  if (!res.ok) throw new Error("Failed to fetch alerts");
  return res.json();
}
