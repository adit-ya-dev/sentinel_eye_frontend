export type LandCoverClass = "FOREST" | "URBAN" | "WATER" | "BARREN" | "AGRI";

export interface TransitionSummary {
  forestToUrbanPercent: number;
  waterToLandPercent: number;
}

export function computeTransitions(
  mapT1: LandCoverClass[],
  mapT2: LandCoverClass[],
): TransitionSummary {
  let forestToUrban = 0;
  let waterToLand = 0;

  const total = Math.min(mapT1.length, mapT2.length);

  for (let i = 0; i < total; i++) {
    const a = mapT1[i];
    const b = mapT2[i];

    if (a === "FOREST" && b === "URBAN") forestToUrban++;
    if (a === "WATER" && b !== "WATER") waterToLand++;
  }

  return {
    forestToUrbanPercent: (forestToUrban / total) * 100,
    waterToLandPercent: (waterToLand / total) * 100,
  };
}
