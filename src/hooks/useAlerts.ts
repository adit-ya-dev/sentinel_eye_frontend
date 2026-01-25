"use client";

import { useEffect, useState } from "react";
import type { AlertItem } from "@/types/alert";

export function useAlerts() {
  const [data, setData] = useState<AlertItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function run() {
      setLoading(true);
      const res = await fetch("/api/alerts");
      const json = await res.json();
      setData(json);
      setLoading(false);
    }

    run();
  }, []);

  return { data, loading };
}
