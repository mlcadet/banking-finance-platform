import Navbar from "../components/layout/Navbar";
import HeroSection from "../components/landing/HeroSection";
import FeaturesSection from "../components/landing/FeaturesSection";
import ScrollReveal from "../components/animation/ScrollReveal"; 

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Global Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="pt-20">
        <ScrollReveal>
          <HeroSection />
        </ScrollReveal>
        
        <ScrollReveal>
          <FeaturesSection />
        </ScrollReveal>
      </main>
    </div>
  );
}
