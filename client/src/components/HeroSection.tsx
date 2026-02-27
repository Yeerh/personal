/*
 * DESIGN: "Garra Brasileira" — Hero Section
 * Fundo: imagem gerada com overlay escuro
 * Texto: branco + amarelo-ouro
 * Layout: texto à esquerda, imagem à direita
 * Animação: fade-in + translateY na entrada
 */

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const HERO_BG =
  "https://private-us-east-1.manuscdn.com/sessionFile/ThL9lJHox9qQEFtvTH8lpv/sandbox/70Qlr83AOiNaIuGL3O6YGm-img-1_1772151108000_na1fn_aGVyby1iZw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvVGhMOWxKSG94OXFRRUZ0dlRIOGxwdi9zYW5kYm94LzcwUWxyODNBT2lOYUl1R0wzTzZZR20taW1nLTFfMTc3MjE1MTEwODAwMF9uYTFmbl9hR1Z5YnkxaVp3LmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=J-HwLuKC33cMXeeY0Sb8FsqWU0JZccEo9FGISSDa05s7qTs1dd4qss0a8Q3jeSodG5rKm~fvAHt-Pr9Lb-XjrWMUDXxZQNPX-~NMXYX6CtcesAj~WFo3HN2mjujnBp06jhpTthj7rLSC~l8JFZOHFe9Br9UmMPwypGvdLkWbaj-BPy11vhBenqz3BVJMZTqvD1JrfcYq6YfWvBDmeHiu05sl1YjN-okfQolkXSasdOBTta0ex9SBIviXVPablI1K4GCLM0k3o8fJsAKFcu1MOXXwNbx3WSmlBx3uXKVoGYbGhhrEsKJwO2E9RDT44u~opBrAcriPWel27XhEZSnipA__";

function Counter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1500;
          const step = Math.ceil(end / (duration / 16));
          let current = 0;
          const timer = setInterval(() => {
            current = Math.min(current + step, end);
            setCount(current);
            if (current >= end) clearInterval(timer);
          }, 16);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function HeroSection() {
  const scrollToPlans = () => {
    document.getElementById("plans")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToForm = () => {
    document.getElementById("form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: `linear-gradient(to right, #0D1117 30%, transparent 100%)`,
      }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${HERO_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center right",
          backgroundRepeat: "no-repeat",
        }}
      />
      {/* Overlay gradient */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(to right, #0D1117 40%, rgba(13,17,23,0.75) 65%, rgba(13,17,23,0.3) 100%)",
        }}
      />

      {/* Content */}
      <div className="container relative z-10 pt-24 pb-16">
        <div className="max-w-2xl">
          {/* Tag */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-sm mb-6 text-xs font-semibold uppercase tracking-widest"
            style={{
              background: "rgba(245,158,11,0.15)",
              border: "1px solid rgba(245,158,11,0.4)",
              color: "#F59E0B",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] animate-pulse"
            />
            Personal Trainer Profissional
          </div>

          {/* Main headline */}
          <h1
            className="font-['Barlow_Condensed'] font-black uppercase leading-none mb-6"
            style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}
          >
            <span className="block text-white">TRANSFORME</span>
            <span className="block text-gold-gradient">SEU CORPO</span>
            <span className="block text-white">E SUA VIDA</span>
          </h1>

          {/* Subtitle */}
          <p className="text-white/70 text-lg md:text-xl font-light leading-relaxed mb-8 max-w-lg">
            Treino personalizado com metodologia comprovada. Resultados reais
            para quem quer mais do que uma academia comum.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button
              onClick={scrollToForm}
              className="btn-gold px-8 py-4 rounded-sm text-base"
            >
              Fazer Pré-Cadastro Grátis
            </button>
            <button
              onClick={scrollToPlans}
              className="px-8 py-4 rounded-sm text-base font-['Barlow_Condensed'] font-700 uppercase tracking-wide text-white border border-white/30 hover:border-[#F59E0B] hover:text-[#F59E0B] transition-all duration-300"
            >
              Ver Planos
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8">
            {[
              { value: 200, suffix: "+", label: "Alunos Atendidos" },
              { value: 5, suffix: "+ anos", label: "de Experiência" },
              { value: 98, suffix: "%", label: "de Satisfação" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div
                  className="font-['Barlow_Condensed'] font-black text-3xl md:text-4xl"
                  style={{ color: "#F59E0B" }}
                >
                  <Counter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-white/50 text-xs uppercase tracking-wider mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToPlans}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/40 hover:text-[#F59E0B] transition-colors duration-300 animate-bounce"
      >
        <span className="text-xs uppercase tracking-widest">Rolar</span>
        <ChevronDown size={20} />
      </button>
    </section>
  );
}
