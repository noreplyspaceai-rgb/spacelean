"use client";

import { motion, useInView } from "framer-motion";
import { Globe, MapPin, ExternalLink, Sparkles } from "lucide-react";
import { useRef } from "react";
import WorldMapDemo from "../world-map-demo";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = (delay = 0) => ({
  initial: { y: 28, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.7, delay, ease: EASE },
});

const presenceLocations = [
  {
    country: "USA",
    role: "Headquarters",
    address: "2500 Marconi Ave, STE 101,\nSacramento, CA 95821 USA",
    lat: 38.62, lng: -121.38,
    color: "#06b6d4", // cyan-500 to match brand
    mapsUrl: "https://maps.google.com/?q=2500+Marconi+Ave+Sacramento+CA",
  },
  {
    country: "Singapore",
    role: "Regional Headquarters",
    address: "iSpace Building #04-39,\n7 Soon Lee Street,\nSingapore 627608",
    lat: 1.34, lng: 103.7,
    color: "#06b6d4",
    mapsUrl: "https://maps.google.com/?q=7+Soon+Lee+Street+Singapore",
  },
  {
    country: "Dubai",
    role: "Middle East – Regional Office",
    address: "25.28°N, 55.31°E",
    lat: 25.28, lng: 55.31,
    color: "#06b6d4",
    mapsUrl: "https://maps.google.com/?q=25.28,55.31",
  },
  {
    country: "India",
    role: "Technology & R&D",
    address: "8.91°N, 76.69°E",
    lat: 8.91, lng: 76.69,
    color: "#06b6d4",
    mapsUrl: "https://maps.google.com/?q=8.91,76.69",
  },
  {
    country: "Kuwait",
    role: "Strategic Partner – Gulf Region",
    address: "29.08°N, 48.13°E",
    lat: 29.08, lng: 48.13,
    color: "#06b6d4",
    mapsUrl: "https://maps.google.com/?q=29.08,48.13",
  },
  {
    country: "Canada",
    role: "North America – Regional Office",
    address: "Toronto, ON, Canada",
    lat: 43.65107,
    lng: -79.347015,
    color: "#06b6d4",
    mapsUrl: "https://www.google.com/maps/place/43%C2%B039'03.9%22N+79%C2%B020'49.3%22W/@43.65107,-79.3495899,17z/data=!3m1!4b1!4m4!3m3!8m2!3d43.65107!4d-79.347015?entry=ttu&g_ep=EgoyMDI2MDcwOC4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    country: "Saudi Arabia",
    role: "Middle East Regional Office",
    address: "Riyadh, Kingdom of Saudi Arabia",
    lat: 24.7136,
    lng: 46.6753,
    color: "#06b6d4",
    mapsUrl: "https://www.google.com/maps/place/24%C2%B042'49.0%22N+46%C2%B040'31.1%22E/@24.7135421,46.6751244,21z/data=!4m4!3m3!8m2!3d24.7136!4d46.6753?entry=ttu&g_ep=EgoyMDI2MDcwOC4wIKXMDSoASAFQAw%3D%3D",
  },
];

export default function AboutPresence() {
  const ref     = useRef<HTMLDivElement>(null);
  const inView  = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="w-full  py-20 border-t border-black/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Heading — HeroSection badge + weight-contrast pattern ── */}
        <motion.div
          className="mb-10 flex flex-col items-start"
          {...fadeUp(0.08)}
        >
          {/* Badge */}
          <span className="inline-flex items-center gap-2 text-xs font-medium text-neutral-700 bg-black/5 border border-black/10 rounded-full px-3 py-1 mb-4 tracking-wide">
            <Sparkles className="w-3.5 h-3.5 text-neutral-900" />
            Where We Operate
          </span>

          {/* Heading — same weight rhythm */}
          <h2 className="text-3xl sm:text-5xl font-normal lg:text-4xl tracking-tight leading-tight text-cyan-500 max-w-xl">
            Built close to{" "}
            <span className="font-bold text-5xl lg:text-5xl text-cyan-500">
              every job site.
            </span>
          </h2>

          {/* Tagline — same font-mono + border-l treatment */}
          <p className="mt-6 max-w-lg">
            <span className="block border-l-4 border-cyan-400 pl-4">
              <span className="block text-base sm:text-lg font-mono text-neutral-500 leading-relaxed">
                Seven offices. One platform.
              </span>
              <span className="block text-base sm:text-lg font-mono font-semibold text-cyan-500 leading-relaxed">
                Deployed wherever construction happens.
              </span>
            </span>
          </p>
        </motion.div>

        {/* ── World map — no internal heading ── */}
        <motion.div {...fadeUp(0.14)}>
          <WorldMapDemo />
        </motion.div>

        {/* ── Location cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          {presenceLocations.map((loc, i) => (
            <motion.div
              key={i}
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.55, delay: 0.2 + i * 0.07, ease: EASE }}
              className="relative p-5 rounded-2xl bg-black/[0.02] border border-black/[0.07] hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              style={{ borderLeftWidth: 3, borderLeftColor: loc.color }}
            >
              {/* Country + pin */}
              <div className="flex items-center gap-2 mb-1.5">
                <span
                  className="w-5 h-5 rounded-full bg-black/[0.04] border border-black/10 flex items-center justify-center flex-shrink-0"
                >
                  <MapPin className="w-2.5 h-2.5 text-cyan-500" />
                </span>
                <span className="text-neutral-900 font-semibold text-sm">{loc.country}</span>
              </div>

              {/* Role */}
              <p className="text-[11px] font-medium text-neutral-400 uppercase tracking-widest mb-2">
                {loc.role}
              </p>

              {/* Address */}
              <p className="text-neutral-500 text-xs leading-relaxed whitespace-pre-line mb-3">
                {loc.address}
              </p>

              {/* Coords */}
              <p className="font-mono text-[10px] text-neutral-300 mb-3">
                {loc.lat.toFixed(2)}°, {loc.lng.toFixed(2)}°
              </p>

              {/* Maps link */}
              <a
                href={loc.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] font-medium text-cyan-500 hover:text-cyan-600 transition-colors"
              >
                <ExternalLink className="w-3 h-3" />
                View in Google Maps
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}