import { NextResponse } from "next/server";
import { mockAlerts } from "@/lib/mock/mockData";

export async function GET() {
  return NextResponse.json(mockAlerts);
}
