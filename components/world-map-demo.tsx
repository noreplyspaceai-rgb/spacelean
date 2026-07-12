"use client";

import WorldMap from "@/components/ui/world-map";

// Dots wired to the actual office locations from AboutPresence
const dots = [
  // Sacramento → Singapore
  { start: { lat: 38.62, lng: -121.38 }, end: { lat: 1.34, lng: 103.7 } },
  // Sacramento → Dubai
  { start: { lat: 38.62, lng: -121.38 }, end: { lat: 25.28, lng: 55.31 } },
  // Singapore → India
  { start: { lat: 1.34,  lng: 103.7  }, end: { lat: 8.91,  lng: 76.69 } },
  // India → Kuwait
  { start: { lat: 8.91,  lng: 76.69  }, end: { lat: 29.08, lng: 48.13 } },
  // Dubai → Kuwait
  { start: { lat: 25.28, lng: 55.31  }, end: { lat: 29.08, lng: 48.13 } },
  // Singapore → Dubai
  { start: { lat: 1.34,  lng: 103.7  }, end: { lat: 25.28, lng: 55.31 } },
  // Sacramento → Toronto
  { start: { lat: 38.62, lng: -121.38 }, end: { lat: 43.65107, lng: -79.347015 } },
  // Sacramento → Riyadh (Saudi Arabia)
  { start: { lat: 38.62, lng: -121.38 }, end: { lat: 24.7136, lng: 46.6753 } },
  // Dubai → Riyadh (Saudi Arabia)
  { start: { lat: 25.28, lng: 55.31  }, end: { lat: 24.7136, lng: 46.6753 } },
];

// Pure map — no heading, no description. AboutPresence owns the copy.
export default function WorldMapDemo() {
  return (
    <div className="w-full ">
      <WorldMap dots={dots} />
    </div>
  );
}