/*
 * DESIGN: "Garra Brasileira"
 * Página principal — monta todas as seções em ordem
 */

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PlansSection from "@/components/PlansSection";
import FormSection from "@/components/FormSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "#0D1117" }}>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <PlansSection />
      <FormSection />
      <Footer />
    </div>
  );
}
