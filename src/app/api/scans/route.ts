import { NextResponse } from "next/server";
import { mockRecentScans } from "@/lib/mock/mockData";

export async function GET() {
  return NextResponse.json(mockRecentScans);
}
