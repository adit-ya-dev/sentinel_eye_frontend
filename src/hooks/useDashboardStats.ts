"use client";

import { useEffect, useState } from "react";
import type { DashboardStats } from "@/types/analysis";

export function useDashboardStats() {
  const [data, setData] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function run() {
      setLoading(true);
      const res = await fetch("/api/dashboard");
      const json = await res.json();
      setData(json);
      setLoading(false);
    }

    run();
  }, []);

  return { data, loading };
}
