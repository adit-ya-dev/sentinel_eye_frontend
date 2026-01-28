export interface BoundingBox {
  north: number;
  south: number;
  east: number;
  west: number;
  minLat: number;
  minLon: number;
  maxLat: number;
  maxLon: number;
}

export interface AOIRequest {
  bbox: BoundingBox;
  startDate: string; 
  endDate: string; 
  regionName?: string;
}
