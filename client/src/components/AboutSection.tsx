/*
 * DESIGN: "Garra Brasileira" — About Section
 * Fundo: escuro com imagem lateral
 * Layout: split 50/50 — texto à esquerda, imagem à direita
 */

import { CheckCircle } from "lucide-react";

const TRAINING_IMG =
  "https://private-us-east-1.manuscdn.com/sessionFile/ThL9lJHox9qQEFtvTH8lpv/sandbox/70Qlr83AOiNaIuGL3O6YGm-img-2_1772151113000_na1fn_dHJhaW5pbmctc2VjdGlvbg.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvVGhMOWxKSG94OXFRRUZ0dlRIOGxwdi9zYW5kYm94LzcwUWxyODNBT2lOYUl1R0wzTzZZR20taW1nLTJfMTc3MjE1MTExMzAwMF9uYTFmbl9kSEpoYVc1cGJtY3RjMlZqZEdsdmJnLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=XiUOt6zhHlx3FQlD1XoQEjDb5ldIc6tGRMMAiYmN1Uu9jzgeghimY4fg0bDtx7dbMYJbNkVGBEaa7-ClT~ZuRShoa5KYZ7k8RI~e0h~XprvzLdrFJYCDdu~E9~8s~2ihx0dGpDK0XbvsCTXES~58IvmsQXTU625kwxJCK7vPRAwfMxSybQO27vea2gJG9UwMOxnu7YBJFd4NjtBPnFcUL3~3Z0x7iW0qogwoPglVp6mWyzkEHH8J4rdle6mVAT6NEF64mEJmA7TbMDWR9rAkrzOnaa-~oJ-0rQ60g97XpnV3XV2vYnYtoXoJ~mbYSKchvdzyGM1j5m8UiOpk3gsKRw__";

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
      style={{ background: "linear-gradient(135deg, #0D1117 0%, #111827 100%)" }}
    >
      {/* Diagonal top divider */}
      <div
        className="absolute top-0 left-0 right-0 h-16 z-10"
        style={{
          background: "linear-gradient(135deg, #0D1117 0%, #111827 100%)",
          clipPath: "polygon(0 0, 100% 0, 100% 0, 0 100%)",
        }}
      />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <div className="relative order-2 lg:order-1">
            <div
              className="relative rounded-sm overflow-hidden"
              style={{
                boxShadow: "0 25px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(96,165,250,0.2)",
              }}
            >
              <img
                src={TRAINING_IMG}
                alt="Treino com personal trainer"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(13,17,23,0.6) 0%, transparent 60%)",
                }}
              />
            </div>
            {/* Floating badge */}
            <div
              className="absolute -bottom-6 -right-4 md:-right-8 bg-[#0D1117] border border-[#60A5FA]/30 rounded-sm px-6 py-4 shadow-2xl"
            >
              <div
                className="font-['Barlow_Condensed'] font-black text-3xl"
                style={{ color: "#60A5FA" }}
              >
                CREF
              </div>
              <div className="text-white/60 text-xs uppercase tracking-wider">
                Certificado
              </div>
            </div>
          </div>

          {/* Text side */}
          <div className="order-1 lg:order-2">
            <div
            className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-widest rounded-sm mb-4"
            style={{
              background: "rgba(96,165,250,0.1)",
              border: "1px solid rgba(96,165,250,0.3)",
              color: "#60A5FA",
            }}
            >
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
                    className="flex-shrink-0 mt-0.5"
                    style={{ color: "#60A5FA" }}
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
