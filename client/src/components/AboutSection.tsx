/*
 * DESIGN: "Garra Brasileira" — About Section
 * Fundo: escuro com imagem lateral
 * Layout: split 50/50 — texto à esquerda, imagem à direita
 */

import { CheckCircle } from "lucide-react";
import cleytonImg from "@/assets/images/cleyton.jpg";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";

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
        <Stagger className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <StaggerItem
            className="relative order-2 lg:order-1"
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 250, damping: 22 }}
          >
            <div
              className="group relative rounded-sm overflow-hidden"
              style={{
                boxShadow:
                  "0 25px 60px rgba(0,0,0,0.5), 0 0 0 1px rgb(var(--brand-1-rgb) / 0.22)",
              }}
            >
              <img
                src={cleytonImg}
                alt="Cleyton Vieira"
                className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-700 will-change-transform group-hover:scale-[1.03]"
                loading="lazy"
                draggable={false}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(13,17,23,0.75) 0%, rgba(13,17,23,0.18) 55%, transparent 80%)",
                }}
              />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="inline-flex items-center px-3 py-1 rounded-sm text-[0.7rem] font-semibold uppercase tracking-widest bg-primary/10 border border-primary/30 text-primary backdrop-blur-sm">
                  Treino personalizado
                </div>
                <div className="mt-3 text-white/80 text-sm leading-relaxed max-w-md">
                  Acompanhamento e metodologia para evolução constante com segurança.
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
          </StaggerItem>

          {/* Text side */}
          <StaggerItem className="order-1 lg:order-2">
            <Reveal delay={0.03}>
            <div className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-widest rounded-sm mb-4 bg-primary/10 border border-primary/30 text-primary">
              Sobre Mim
            </div>
            </Reveal>

            <Reveal delay={0.06}>
            <h2
              className="font-['Barlow_Condensed'] font-black uppercase leading-none mb-6 text-white"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
            >
              QUEM É
              <br />
              <span className="text-gold-gradient">CLEYTON VIEIRA</span>
            </h2>
            </Reveal>

            <Reveal delay={0.1}>
            <p className="text-white/70 text-base leading-relaxed mb-6">
              Sou personal trainer com mais de 5 anos de experiência transformando
              vidas através do exercício físico. Minha metodologia une ciência,
              prática e acompanhamento humanizado para garantir que cada aluno
              alcance seus objetivos de forma segura e sustentável.
            </p>
            </Reveal>

            <Reveal delay={0.14}>
            <p className="text-white/70 text-base leading-relaxed mb-8">
              Atendo tanto online quanto presencialmente, adaptando cada treino
              à realidade, disponibilidade e objetivos de cada pessoa. Não importa
              se você nunca treinou ou já tem experiência — existe um plano ideal
              para você.
            </p>
            </Reveal>

            <Stagger className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map((item) => (
                <StaggerItem key={item} className="flex items-start gap-3">
                  <CheckCircle
                    size={18}
                    className="flex-shrink-0 mt-0.5 text-primary"
                  />
                  <span className="text-white/70 text-sm leading-snug">{item}</span>
                </StaggerItem>
              ))}
            </Stagger>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
}
