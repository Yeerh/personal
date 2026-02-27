/*
 * DESIGN: "Garra Brasileira" — Plans Section
 * Fundo: imagem abstrata com overlay
 * Cards: escuro com borda dourada no plano destaque
 * Badge "Mais Popular" com pulse-gold
 */

import { Check, Star } from "lucide-react";

const ABSTRACT_BG =
  "https://private-us-east-1.manuscdn.com/sessionFile/ThL9lJHox9qQEFtvTH8lpv/sandbox/70Qlr83AOiNaIuGL3O6YGm-img-3_1772151103000_na1fn_dHJhbnNmb3JtYXRpb24tYmc.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvVGhMOWxKSG94OXFRRUZ0dlRIOGxwdi9zYW5kYm94LzcwUWxyODNBT2lOYUl1R0wzTzZZR20taW1nLTNfMTc3MjE1MTEwMzAwMF9uYTFmbl9kSEpoYm5ObWIzSnRZWFJwYjI0dFltYy5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=wESaZnrWurY2x2DnCNa34dslKK1XCPIli8AGYa7P4W4GsA4J4SxbX-q4EozWbKuF4po-I2kY-kORmbOIMWRKMkkVD0vp3SO9xV2CMA4Aa0DyvMy9IHIJ~sAYfRAoSk6jR8UKuWA93Arfzr9q15Xbq4knN008IhISAQois81SugGGsTVfP9PmhTfDYIy5Hs3S94EsA4ABqZ5kQ8QQHAfc6LAzwj2RP45QBY4DYEflpqxu9kfnu56Gorxyo3mJ2rDMRTdBySdt8JmAQtqbR8Wf4tC6tLCjKTaIofdRP-NMMdONWSr8G627LiPpf~3~Nf5E0jItb7m4NDuPAv3UjUbx2A__";

const plans = [
  {
    id: "starter",
    name: "STARTER",
    subtitle: "Para quem está começando",
    price: "Consultar",
    period: "",
    highlight: false,
    features: [
      "Avaliação física inicial",
      "Planilha de treino personalizada",
      "Revisão mensal do treino",
      "Suporte via WhatsApp",
      "Orientação nutricional básica",
    ],
    cta: "Fazer Pré-Cadastro",
  },
  {
    id: "premium",
    name: "PREMIUM",
    subtitle: "O mais escolhido",
    price: "Consultar",
    period: "",
    highlight: true,
    features: [
      "Tudo do plano Starter",
      "Acompanhamento semanal",
      "Ajuste de treino quinzenal",
      "Vídeos de execução dos exercícios",
      "Planilha de dieta personalizada",
      "Suporte prioritário 7 dias",
    ],
    cta: "Fazer Pré-Cadastro",
  },
  {
    id: "elite",
    name: "ELITE",
    subtitle: "Máxima transformação",
    price: "Consultar",
    period: "",
    highlight: false,
    features: [
      "Tudo do plano Premium",
      "Sessões presenciais inclusas",
      "Acompanhamento diário",
      "Análise de bioimpedância",
      "Planejamento de competição",
      "Acesso exclusivo à comunidade",
    ],
    cta: "Fazer Pré-Cadastro",
  },
];

export default function PlansSection() {
  const scrollToForm = () => {
    document.getElementById("form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="plans"
      className="relative py-20 md:py-28 overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${ABSTRACT_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div
        className="absolute inset-0 z-0"
        style={{ background: "rgba(13,17,23,0.88)" }}
      />

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <div
            className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-widest rounded-sm mb-4"
            style={{
              background: "rgba(245,158,11,0.1)",
              border: "1px solid rgba(245,158,11,0.3)",
              color: "#F59E0B",
            }}
          >
            Investimento
          </div>
          <h2
            className="font-['Barlow_Condensed'] font-black uppercase leading-none text-white"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
          >
            ESCOLHA SEU
            <br />
            <span className="text-gold-gradient">PLANO IDEAL</span>
          </h2>
          <p className="text-white/60 mt-4 max-w-xl mx-auto text-base leading-relaxed">
            Cada plano é adaptado às suas necessidades. Após o pré-cadastro,
            entro em contato para apresentar os valores e a metodologia.
          </p>
        </div>

        {/* Plans grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative flex flex-col rounded-sm overflow-hidden transition-transform duration-300 hover:-translate-y-2 ${
                plan.highlight ? "scale-105 md:scale-105" : ""
              }`}
              style={{
                background: plan.highlight
                  ? "linear-gradient(160deg, #1a1f2e 0%, #111827 100%)"
                  : "rgba(17,24,39,0.8)",
                border: plan.highlight
                  ? "1.5px solid rgba(245,158,11,0.6)"
                  : "1px solid rgba(255,255,255,0.08)",
                boxShadow: plan.highlight
                  ? "0 20px 60px rgba(245,158,11,0.15), 0 0 0 1px rgba(245,158,11,0.2)"
                  : "0 10px 40px rgba(0,0,0,0.4)",
              }}
            >
              {/* Popular badge */}
              {plan.highlight && (
                <div
                  className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-sm text-xs font-bold uppercase tracking-wider pulse-gold"
                  style={{
                    background: "linear-gradient(135deg, #F59E0B, #EA580C)",
                    color: "#0D1117",
                  }}
                >
                  <Star size={11} fill="currentColor" />
                  Mais Popular
                </div>
              )}

              {/* Top bar */}
              {plan.highlight && (
                <div
                  className="h-1 w-full"
                  style={{
                    background: "linear-gradient(90deg, #F59E0B, #EA580C)",
                  }}
                />
              )}

              <div className="p-7 flex flex-col flex-1">
                {/* Plan name */}
                <div className="mb-6">
                  <h3
                    className="font-['Barlow_Condensed'] font-black text-3xl uppercase tracking-wide"
                    style={{ color: plan.highlight ? "#F59E0B" : "white" }}
                  >
                    {plan.name}
                  </h3>
                  <p className="text-white/50 text-sm mt-1">{plan.subtitle}</p>
                </div>

                {/* Price */}
                <div className="mb-6 pb-6 border-b border-white/10">
                  <div
                    className="font-['Barlow_Condensed'] font-black text-2xl"
                    style={{ color: plan.highlight ? "#F59E0B" : "white/80" }}
                  >
                    {plan.price}
                  </div>
                  <p className="text-white/40 text-xs mt-1">
                    Valor informado após contato
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-3 flex-1 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check
                        size={16}
                        className="flex-shrink-0 mt-0.5"
                        style={{ color: "#F59E0B" }}
                      />
                      <span className="text-white/70 text-sm leading-snug">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  onClick={scrollToForm}
                  className={`w-full py-3.5 rounded-sm font-['Barlow_Condensed'] font-800 uppercase tracking-wide text-base transition-all duration-300 ${
                    plan.highlight
                      ? "btn-gold"
                      : "border border-white/20 text-white hover:border-[#F59E0B] hover:text-[#F59E0B]"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-white/40 text-sm mt-10 max-w-lg mx-auto">
          Os valores são personalizados de acordo com o plano escolhido e
          frequência de atendimento. Entre em contato para mais informações.
        </p>
      </div>
    </section>
  );
}
