import { NextResponse } from "next/server";
import type { AOIRequest } from "@/types/geo";

export async function POST(req: Request) {
  try {
    console.log("Received analyze request");

    let body: AOIRequest;
    try {
      body = (await req.json()) as AOIRequest;
    } catch (parseError) {
      return NextResponse.json(
        { error: "Invalid JSON in request body" },
        { status: 400 },
      );
    }

    // Validation logic remains the same...
    if (!body.bbox || !body.startDate || !body.endDate) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    // Coordinates used for the Mock URL generation (centering on the user's request)
    const lat = body.bbox.north.toFixed(4);
    const lon = body.bbox.east.toFixed(4);

    const mock = {
      status: "COMPLETED",
      scanId: `SCAN-${Math.floor(Math.random() * 9000) + 1000}`,
      severity: "CRITICAL",
      processingTimeMs: 1240,

      ndvi: {
        mean: 0.385,
        min: 0.042,
        max: 0.812,
        healthStatus: "POOR",
      },

      transitions: {
        forestToUrbanPercent: 22.4, // High encroachment mock
        waterToLandPercent: 5.1,
      },

      // Timestamps for the frontend timeline
      timestamps: {
        before: body.startDate,
        after: body.endDate,
        analyzedAt: new Date().toISOString(),
      },

      images: {
        // Real Satellite Tiles (ArcGIS World Imagery)
        // These URLs pull high-res satellite captures from India regions
        beforeImageUrl: `https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/21065/12068`,
        afterImageUrl: `https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/21068/12070`,

        // Mocked Heatmaps using colored overlays
        changeMaskUrl:
          "https://www.sentinel-hub.com/docs/change_detection_example.png",
        ndviHeatmapUrl:
          "https://custom-scripts.sentinel-hub.com/sentinel-2/ndvi/sample.png",
      },

      message: `Satellite analysis confirmed for Indian Subcontinent region near ${lat}, ${lon}.`,
    };

    return NextResponse.json(mock);
  } catch (error) {
    console.error("API route error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
