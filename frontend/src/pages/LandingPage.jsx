import Navbar from "../components/layout/Navbar";
import HeroSection from "../components/landing/HeroSection";
import FeaturesSection from "../components/landing/FeaturesSection";
import KPISection from "../components/landing/KPISection";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Global Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        <HeroSection />
        <FeaturesSection />
        <KPISection />
      </main>
    </div>
  );
}
