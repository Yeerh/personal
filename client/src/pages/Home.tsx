/*
 * DESIGN: "Garra Brasileira"
 * Página principal — monta todas as seções em ordem
 */

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EvolutionsSection from "@/components/EvolutionsSection";
import PlansSection from "@/components/PlansSection";
import FormSection from "@/components/FormSection";
import Footer from "@/components/Footer";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <EvolutionsSection />
      <PlansSection />
      <FormSection />
      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
}
