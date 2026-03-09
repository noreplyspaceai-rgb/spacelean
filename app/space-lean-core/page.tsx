import HeroSection from "@/components/space-lean-core/HeroSection";
import FeaturesSection from "@/components/space-lean-core/FeaturesSection";
import ComparisonSection from "@/components/space-lean-core/ComparisonSection";
import UseCasesSection from "@/components/space-lean-core/UseCasesSection";
import WorkflowSection from "@/components/space-lean-core/WorkflowSection";
import MetricsSection from "@/components/space-lean-core/MetricsSection";
import CtaSection from "@/components/space-lean-core/CtaSection";

export default function SpaceLeanCorePage() {
  return (
    <div className="bg-white">
      {/* <HeroSection /> */}
      <FeaturesSection />
      <ComparisonSection />
      <UseCasesSection />
      {/* <WorkflowSection /> */}
      {/* <MetricsSection /> */}
      {/* <CtaSection /> */}
    </div>
  );
}
