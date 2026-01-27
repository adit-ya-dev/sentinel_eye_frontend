"use client";
import { useEffect, useRef, useState } from "react";
import { Trash2, Square, Loader2 } from "lucide-react";

export default function LeafletMapClient({
  onBboxChange,
}: {
  onBboxChange: (bbox: any) => void;
}) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<any>(null);
  const rectangleRef = useRef<any>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [drawingMode, setDrawingMode] = useState(false);
  const [hasSelection, setHasSelection] = useState(false);
  const onBboxChangeRef = useRef(onBboxChange);

  useEffect(() => {
    onBboxChangeRef.current = onBboxChange;
  }, [onBboxChange]);

  useEffect(() => {
    if (typeof window === "undefined" || !mapRef.current) return;
    const initMap = () => {
      // @ts-ignore
      const L = window.L;
      if (!L || mapInstance.current) return;
      const map = L.map(mapRef.current, { zoomControl: false }).setView(
        [28.6139, 77.209],
        12,
      );
      mapInstance.current = map;
      L.tileLayer(
        "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
      ).addTo(map);

      let startPoint: any = null;
      map.on("mousedown", (e: any) => {
        if (!drawingMode) return;
        map.dragging.disable();
        startPoint = e.latlng;
        if (rectangleRef.current) map.removeLayer(rectangleRef.current);
        rectangleRef.current = L.rectangle([startPoint, startPoint], {
          color: "#3b82f6",
          weight: 2,
          fillOpacity: 0.2,
        }).addTo(map);
      });
      map.on("mousemove", (e: any) => {
        if (!startPoint || !rectangleRef.current) return;
        rectangleRef.current.setBounds(L.latLngBounds(startPoint, e.latlng));
      });
      map.on("mouseup", () => {
        if (!startPoint || !rectangleRef.current) return;
        const bounds = rectangleRef.current.getBounds();
        onBboxChangeRef.current({
          north: bounds.getNorth(),
          south: bounds.getSouth(),
          east: bounds.getEast(),
          west: bounds.getWest(),
        });
        startPoint = null;
        map.dragging.enable();
        setDrawingMode(false);
        setHasSelection(true);
      });
      setMapLoaded(true);
    };

    if (!document.getElementById("leaflet-css")) {
      const link = document.createElement("link");
      link.id = "leaflet-css";
      link.rel = "stylesheet";
      link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
      document.head.appendChild(link);
    }
    if (!(window as any).L) {
      const script = document.createElement("script");
      script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
      script.async = true;
      script.onload = initMap;
      document.head.appendChild(script);
    } else initMap();

    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, [drawingMode]);

  return (
    <div className="relative w-full h-full min-h-[500px] bg-muted overflow-hidden rounded-xl border border-border">
      <div
        ref={mapRef}
        className="w-full h-full z-0"
        style={{ cursor: drawingMode ? "crosshair" : "grab" }}
      />

      <div className="absolute top-4 right-4 z-[10] flex flex-col gap-2">
        <button
          onClick={() => setDrawingMode(!drawingMode)}
          className={`flex h-10 w-10 items-center justify-center rounded-lg border shadow-lg transition-all ${
            drawingMode
              ? "bg-primary text-primary-foreground border-primary"
              : "bg-card text-foreground border-border hover:bg-muted"
          }`}
        >
          <Square size={18} />
        </button>
        {hasSelection && (
          <button
            onClick={() => {
              if (rectangleRef.current) {
                mapInstance.current.removeLayer(rectangleRef.current);
                setHasSelection(false);
              }
            }}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-rose-500/50 bg-card text-rose-500 shadow-lg hover:bg-rose-500 hover:text-white transition-all"
          >
            <Trash2 size={18} />
          </button>
        )}
      </div>

      {!mapLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-background/50 backdrop-blur-sm z-[20]">
          <Loader2 className="w-8 h-8 text-primary animate-spin" />
        </div>
      )}
    </div>
  );
}
