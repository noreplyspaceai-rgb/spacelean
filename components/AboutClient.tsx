"use client";

import AboutHero from "./about/AboutHero";
import AboutMission from "./about/AboutMission";
import AboutTeam from "./about/AboutTeam";
import AboutPillars from "./about/AboutPillars";
import AboutValues from "./about/AboutValues";
import AboutPresence from "./about/AboutPresence";

interface AboutClientProps {
  values: { title: string; description: string; icon: string }[];
  stats:  { number: string; label: string }[];
}

export default function AboutClient({ values }: AboutClientProps) {
  return (
    <div className="relative overflow-hidden">
      <AboutHero />
      <AboutMission />
      <AboutPillars />
      <AboutTeam />
      <AboutValues values={values} />
      <AboutPresence />
    </div>
  );
}
