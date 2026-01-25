"use client";

import { useEffect, useState } from "react";
import type { Scan } from "@/types/scan";

export function useRecentScans() {
  const [data, setData] = useState<Scan[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function run() {
      setLoading(true);
      const res = await fetch("/api/scans");
      const json = await res.json();
      setData(json);
      setLoading(false);
    }

    run();
  }, []);

  return { data, loading };
}
