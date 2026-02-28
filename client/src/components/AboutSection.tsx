/*
 * DESIGN: "Garra Brasileira" — About Section
 * Fundo: escuro com imagem lateral
 * Layout: split 50/50 — texto à esquerda, imagem à direita
 */

import { CheckCircle } from "lucide-react";

const highlights = [
  "Treinos 100% personalizados para o seu perfil",
  "Acompanhamento online e presencial",
  "Metodologia baseada em ciência do esporte",
  "Suporte contínuo via WhatsApp",
  "Avaliação física completa inclusa",
  "Resultados mensuráveis desde a primeira semana",
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-20 md:py-28 overflow-hidden"
    >
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <div className="relative order-2 lg:order-1">
            <div
              className="relative rounded-sm overflow-hidden"
              style={{
                boxShadow:
                  "0 25px 60px rgba(0,0,0,0.5), 0 0 0 1px rgb(var(--brand-1-rgb) / 0.22)",
              }}
            >
              <div
                className="w-full h-[400px] md:h-[500px]"
                style={{
                  background:
                    "radial-gradient(900px 700px at 20% 20%, rgb(var(--brand-1-rgb) / 0.25), transparent 60%)," +
                    "radial-gradient(700px 500px at 80% 70%, rgb(var(--brand-2-rgb) / 0.20), transparent 60%)," +
                    "linear-gradient(135deg, rgba(10,10,10,0.95) 0%, rgba(22,22,22,0.92) 100%)",
                }}
              />
              <div
                className="pointer-events-none absolute inset-0 opacity-70"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
                  backgroundSize: "44px 44px",
                }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(13,17,23,0.6) 0%, transparent 60%)",
                }}
              />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="inline-flex items-center px-3 py-1 rounded-sm text-[0.7rem] font-semibold uppercase tracking-widest bg-primary/10 border border-primary/30 text-primary">
                  Treino personalizado
                </div>
                <div className="mt-3 text-white/80 text-sm leading-relaxed max-w-md">
                  Acompanhamento e metodologia para evoluÃ§Ã£o constante com seguranÃ§a.
                </div>
              </div>
            </div>
            {/* Floating badge */}
            <div
              className="absolute -bottom-6 -right-4 md:-right-8 bg-background border border-primary/30 rounded-sm px-6 py-4 shadow-2xl"
            >
              <div className="font-['Barlow_Condensed'] font-black text-3xl text-primary">
                CREF
              </div>
              <div className="text-white/60 text-xs uppercase tracking-wider">
                Certificado
              </div>
            </div>
          </div>

          {/* Text side */}
          <div className="order-1 lg:order-2">
            <div className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-widest rounded-sm mb-4 bg-primary/10 border border-primary/30 text-primary">
              Sobre Mim
            </div>

            <h2
              className="font-['Barlow_Condensed'] font-black uppercase leading-none mb-6 text-white"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
            >
              QUEM É
              <br />
              <span className="text-gold-gradient">CLEYTON VIEIRA</span>
            </h2>

            <p className="text-white/70 text-base leading-relaxed mb-6">
              Sou personal trainer com mais de 5 anos de experiência transformando
              vidas através do exercício físico. Minha metodologia une ciência,
              prática e acompanhamento humanizado para garantir que cada aluno
              alcance seus objetivos de forma segura e sustentável.
            </p>

            <p className="text-white/70 text-base leading-relaxed mb-8">
              Atendo tanto online quanto presencialmente, adaptando cada treino
              à realidade, disponibilidade e objetivos de cada pessoa. Não importa
              se você nunca treinou ou já tem experiência — existe um plano ideal
              para você.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle
                    size={18}
                    className="flex-shrink-0 mt-0.5 text-primary"
                  />
                  <span className="text-white/70 text-sm leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
