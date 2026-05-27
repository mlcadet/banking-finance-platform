import Navbar from "../components/layout/Navbar";
import HeroSection from "../components/landing/HeroSection";
import FeaturesSection from "../components/landing/FeaturesSection";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main>
        <HeroSection />
        <FeaturesSection />
      </main>
    </div>
  );
}