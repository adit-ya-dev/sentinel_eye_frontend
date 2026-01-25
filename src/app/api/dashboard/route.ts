import { NextResponse } from "next/server";
import { mockDashboardStats } from "@/lib/mock/mockData";

export async function GET() {
  return NextResponse.json(mockDashboardStats);
}
