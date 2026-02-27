/*
 * DESIGN: "Garra Brasileira" (Azul Edition) — Hero Section
 * Fundo: gradiente animado azul
 * Texto: branco + azul vibrante
 * Animação: fade-in + translateY na entrada
 */

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

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
    >
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 z-0 animate-gradient"
        style={{
          background: `linear-gradient(-45deg, #0D1117, #1E3A8A, #0369A1, #0D1117)`,
          backgroundSize: "400% 400%",
        }}
      />

      {/* Overlay gradient para melhor legibilidade */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(to right, #0D1117 40%, rgba(13,17,23,0.75) 65%, rgba(13,17,23,0.3) 100%)",
        }}
      />

      {/* Animated shapes */}
      <div
        className="absolute top-20 right-10 w-72 h-72 rounded-full opacity-20 blur-3xl z-0 animate-pulse"
        style={{
          background: "linear-gradient(135deg, #60A5FA, #0EA5E9)",
          animation: "float 8s ease-in-out infinite",
        }}
      />
      <div
        className="absolute bottom-20 left-10 w-96 h-96 rounded-full opacity-15 blur-3xl z-0 animate-pulse"
        style={{
          background: "linear-gradient(135deg, #0EA5E9, #0369A1)",
          animation: "float 10s ease-in-out infinite reverse",
        }}
      />

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(30px); }
        }
      `}</style>

      {/* Content */}
      <div className="container relative z-10 pt-24 pb-16">
        <div className="max-w-2xl">
          {/* Tag */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-sm mb-6 text-xs font-semibold uppercase tracking-widest"
            style={{
              background: "rgba(96,165,250,0.15)",
              border: "1px solid rgba(96,165,250,0.4)",
              color: "#60A5FA",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full bg-[#60A5FA] animate-pulse"
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
              className="px-8 py-4 rounded-sm text-base font-['Barlow_Condensed'] font-700 uppercase tracking-wide text-white border border-white/30 hover:border-[#60A5FA] hover:text-[#60A5FA] transition-all duration-300"
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
                  style={{ color: "#60A5FA" }}
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/40 hover:text-[#60A5FA] transition-colors duration-300 animate-bounce"
      >
        <span className="text-xs uppercase tracking-widest">Rolar</span>
        <ChevronDown size={20} />
      </button>
    </section>
  );
}
