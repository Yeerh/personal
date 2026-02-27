/*
 * DESIGN: "Garra Brasileira" — Navbar
 * Fundo: transparente → sólido ao rolar
 * Logo: Barlow Condensed 800, amarelo-ouro
 * Links: Inter 500, branco
 */

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0D1117]/95 backdrop-blur-md shadow-lg shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <button
          onClick={() => scrollTo("hero")}
          className="flex items-center gap-2 group"
        >
          <span
            className="font-['Barlow_Condensed'] font-black text-2xl md:text-3xl tracking-wide uppercase"
            style={{ color: "#F59E0B" }}
          >
            CLEYTON
          </span>
          <span className="font-['Barlow_Condensed'] font-light text-2xl md:text-3xl tracking-wide uppercase text-white">
            VIEIRA
          </span>
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "Início", id: "hero" },
            { label: "Sobre", id: "about" },
            { label: "Planos", id: "plans" },
            { label: "Pré-Cadastro", id: "form" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-white/80 hover:text-[#F59E0B] font-medium text-sm tracking-wide transition-colors duration-200 uppercase font-['Inter']"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("form")}
            className="btn-gold px-5 py-2 rounded-sm text-sm"
          >
            Quero Começar
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0D1117]/98 backdrop-blur-md border-t border-white/10">
          <div className="container py-4 flex flex-col gap-4">
            {[
              { label: "Início", id: "hero" },
              { label: "Sobre", id: "about" },
              { label: "Planos", id: "plans" },
              { label: "Pré-Cadastro", id: "form" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-white/80 hover:text-[#F59E0B] font-medium text-base tracking-wide transition-colors duration-200 uppercase text-left py-2 border-b border-white/5"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("form")}
              className="btn-gold px-5 py-3 rounded-sm text-base mt-2"
            >
              Quero Começar
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
