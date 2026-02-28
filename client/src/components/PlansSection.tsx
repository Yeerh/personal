/*
 * DESIGN: "Garra Brasileira" — Plans Section
 * Fundo: imagem abstrata com overlay
 * Cards: escuro com borda dourada no plano destaque
 * Badge "Mais Popular" com pulse-gold
 */

import { Check, Star } from "lucide-react";

type PricingOption = {
  label: string;
  price: string;
  installment?: string;
};

type Plan = {
  id: string;
  badge: string;
  title: string;
  subtitle?: string;
  featured: boolean;
  highlight: boolean;
  features: string[];
  pricing: PricingOption[];
  payment: string;
  cta: string;
};

// Plans data
const plans: Plan[] = [
  {
    id: "premium",
    badge: "PLANO PREMIUM",
    title: "CONSULTORIA ONLINE",
    subtitle: "TRIMESTRAL (3 MESES) / SEMESTRAL (6 MESES)",
    featured: true,
    highlight: true,
    features: [
      "Consulta via videochamada",
      "Avaliação por fotos",
      "Treino via APP com vídeos demonstrativos",
      "Suporte VIP",
    ],
    pricing: [
      {
        label: "Trimestral (3 meses)",
        price: "R$ 250,00 (PIX)",
        installment: "ou 3x de R$ 90,00 no cartão",
      },
      {
        label: "Semestral (6 meses)",
        price: "R$ 450,00 (PIX)",
        installment: "ou 6x de R$ 83,00 no cartão",
      },
    ],
    payment: "PIX ou cartão de crédito",
    cta: "Fazer Pré-Cadastro",
  },
  {
    id: "platinum",
    badge: "PLANO PLATINUM",
    title: "CONSULTORIA ONLINE",
    subtitle: "TRIMESTRAL (3 MESES)",
    featured: true,
    highlight: false,
    features: [
      "Consulta presencial",
      "Avaliação física",
      "Treino via APP com vídeos demonstrativos",
      "Suporte VIP",
    ],
    pricing: [
      {
        label: "Trimestral (3 meses)",
        price: "R$ 350,00 (PIX)",
        installment: "ou 3x de R$ 125,00 no cartão",
      },
    ],
    payment: "PIX ou cartão de crédito",
    cta: "Fazer Pré-Cadastro",
  },
  {
    id: "diamante",
    badge: "PLANO DIAMANTE",
    title: "CONSULTORIA + ASSESSORIA",
    subtitle: "TRIMESTRAL (3 MESES)",
    featured: true,
    highlight: false,
    features: [
      "Consultoria online + assessoria esportiva",
      "Consulta presencial",
      "Avaliação física",
      "Treino via APP com zonas de treinamento",
      "Suporte VIP",
    ],
    pricing: [
      {
        label: "Trimestral (3 meses)",
        price: "R$ 440,00 (PIX)",
        installment: "ou 3x de R$ 158,00 no cartão",
      },
    ],
    payment: "PIX ou cartão de crédito",
    cta: "Fazer Pré-Cadastro",
  },
  {
    id: "platinum-dieta",
    badge: "PLANO PLATINUM",
    title: "TREINO E DIETA",
    subtitle: "TRIMESTRAL (3 MESES) / SEMESTRAL (6 MESES)",
    featured: false,
    highlight: false,
    features: [
      "Consulta presencial",
      "Avaliação física",
      "Treino via APP com vídeos demonstrativos",
      "Dieta personalizada",
      "Suporte VIP",
    ],
    pricing: [
      {
        label: "Trimestral (3 meses)",
        price: "R$ 500,00 (PIX)",
        installment: "ou 3x de R$ 179,00 no cartão",
      },
      {
        label: "Semestral (6 meses) (consulta presencial inicial e final)",
        price: "R$ 750,00 (PIX)",
        installment: "ou 6x de R$ 134,00 no cartão",
      },
    ],
    payment: "PIX ou cartão de crédito",
    cta: "Fazer Pré-Cadastro",
  },
  {
    id: "assessoria-esportiva",
    badge: "ASSESSORIA ESPORTIVA",
    title: "ZONAS DE TREINAMENTO",
    featured: false,
    highlight: false,
    features: [
      "Teste para estimar zonas de treinamento",
      "Treino via APP com zonas de treinamento",
      "Suporte VIP",
    ],
    pricing: [
      {
        label: "Preço",
        price: "R$ 180,00",
        installment: "ou 3x de R$ 65,00 no cartão",
      },
    ],
    payment: "PIX ou cartão de crédito",
    cta: "Fazer Pré-Cadastro",
  },
  {
    id: "performance",
    badge: "PLANO PERFORMANCE",
    title: "CONSULTORIA + ASSESSORIA + DIETA",
    subtitle: "TRIMESTRAL (3 MESES)",
    featured: false,
    highlight: false,
    features: [
      "Consultoria online",
      "Assessoria esportiva",
      "Dieta personalizada",
      "Consulta presencial",
      "Avaliação física",
      "Treino via APP com zonas de treinamento",
      "Suporte VIP",
    ],
    pricing: [
      {
        label: "Trimestral (3 meses)",
        price: "R$ 600,00 (PIX)",
        installment: "ou 3x de R$ 215,00 no cartão",
      },
    ],
    payment: "PIX ou cartão de crédito",
    cta: "Fazer Pré-Cadastro",
  },
];

export default function PlansSection() {
  const scrollToForm = () => {
    document.getElementById("form")?.scrollIntoView({ behavior: "smooth" });
  };

  const featuredPlans = plans.filter((p) => p.featured);
  const otherPlans = plans.filter((p) => !p.featured);

  return (
    <section
      id="plans"
      className="relative py-20 md:py-28 overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(900px 700px at 20% 15%, rgb(var(--brand-1-rgb) / 0.18), transparent 55%)," +
            "radial-gradient(800px 600px at 80% 70%, rgb(var(--brand-2-rgb) / 0.14), transparent 55%)," +
            "linear-gradient(135deg, rgba(0,0,0,0.88) 0%, rgba(10,10,10,0.90) 100%)",
        }}
      />

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <div
            className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-widest rounded-sm mb-4 bg-primary/10 border border-primary/30 text-primary"
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
            Consultoria online com acompanhamento e valores organizados.
            Escolha o plano e comece a treinar de verdade.
          </p>
        </div>

        {/* Plans grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {featuredPlans.map((plan) => (
            <div
              key={plan.id}
              className={`relative flex flex-col rounded-sm overflow-hidden transition-transform duration-300 hover:-translate-y-2 ${
                plan.highlight
                  ? "md:scale-105"
                  : plan.featured
                    ? "md:scale-[1.02]"
                    : ""
              }`}
              style={{
                background: plan.featured
                  ? "linear-gradient(160deg, #161616 0%, #0f0f0f 100%)"
                  : "rgba(20,20,20,0.8)",
                border: plan.highlight
                  ? "1.5px solid rgb(var(--brand-1-rgb) / 0.55)"
                  : plan.featured
                    ? "1px solid rgb(var(--brand-1-rgb) / 0.28)"
                    : "1px solid rgba(255,255,255,0.08)",
                boxShadow: plan.highlight
                  ? "0 20px 60px rgb(var(--brand-1-rgb) / 0.16), 0 0 0 1px rgb(var(--brand-1-rgb) / 0.22)"
                  : plan.featured
                    ? "0 18px 55px rgba(0,0,0,0.45)"
                    : "0 10px 40px rgba(0,0,0,0.4)",
              }}
            >
              {/* Popular badge */}
              {plan.highlight && (
                <div
                  className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-sm text-xs font-bold uppercase tracking-wider pulse-gold"
                  style={{
                    background: "linear-gradient(135deg, var(--brand-1), var(--brand-2))",
                    color: "var(--background)",
                  }}
                >
                  <Star size={11} fill="currentColor" />
                  Mais Popular
                </div>
              )}

              {/* Top bar */}
              {plan.featured && (
                <div
                  className="h-1 w-full"
                  style={{
                    background: plan.highlight
                      ? "linear-gradient(90deg, var(--brand-2), var(--brand-1))"
                      : "linear-gradient(90deg, rgb(var(--brand-1-rgb) / 0.35), rgb(var(--brand-2-rgb) / 0.35))",
                  }}
                />
              )}

              <div className="p-7 flex flex-col flex-1">
                {/* Plan header */}
                <div className="mb-6">
                  <div className="inline-flex items-center px-2.5 py-1 rounded-sm text-[0.7rem] font-semibold uppercase tracking-widest bg-primary/10 border border-primary/30 text-primary">
                    {plan.badge}
                  </div>
                  <h3 className="mt-4 font-['Barlow_Condensed'] font-black uppercase leading-none text-white text-3xl tracking-wide">
                    <span className="text-gold-gradient">{plan.title}</span>
                  </h3>
                  {plan.subtitle && (
                    <p className="mt-2 text-white/55 text-xs uppercase tracking-widest">
                      {plan.subtitle}
                    </p>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-3 flex-1 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check size={16} className="flex-shrink-0 mt-0.5 text-primary" />
                      <span className="text-white/70 text-sm leading-snug">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Pricing */}
                <div className="mb-7 rounded-sm p-4 border border-white/10 bg-black/20">
                  <p className="text-white/40 text-[0.7rem] uppercase tracking-widest mb-3">
                    Preço
                  </p>
                  <div className="space-y-3">
                    {plan.pricing.map((opt) => (
                      <div key={opt.label} className="flex items-start justify-between gap-4">
                        <div className="min-w-0">
                          <div className="text-white/70 text-sm leading-tight">
                            {opt.label}
                          </div>
                          {opt.installment && (
                            <div className="text-white/40 text-xs mt-1">
                              {opt.installment}
                            </div>
                          )}
                        </div>
                        <div className="text-right flex-shrink-0">
                          <div className="font-['Barlow_Condensed'] font-black text-xl text-white tabular-nums">
                            {opt.price}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/10 text-white/40 text-xs">
                    {plan.payment}
                  </div>
                </div>

                {/* CTA */}
                <button
                  onClick={scrollToForm}
                  className={`w-full py-3.5 rounded-sm font-['Barlow_Condensed'] font-800 uppercase tracking-wide text-base transition-all duration-300 ${
                    plan.highlight
                      ? "btn-gold"
                      : "border border-white/20 text-white hover:border-primary hover:text-primary"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Other plans */}
        <details className="mt-12">
          <summary className="cursor-pointer select-none text-white/80 hover:text-white transition-colors uppercase tracking-widest text-sm font-semibold">
            Ver todos os planos ({plans.length})
          </summary>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {otherPlans.map((plan) => (
              <div
                key={plan.id}
                className="relative flex flex-col rounded-sm overflow-hidden transition-transform duration-300 hover:-translate-y-2"
                style={{
                  background: "rgba(20,20,20,0.8)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
                }}
              >
                <div className="p-7 flex flex-col flex-1">
                  {/* Plan header */}
                  <div className="mb-6">
                    <div className="inline-flex items-center px-2.5 py-1 rounded-sm text-[0.7rem] font-semibold uppercase tracking-widest bg-primary/10 border border-primary/30 text-primary">
                      {plan.badge}
                    </div>
                    <h3 className="mt-4 font-['Barlow_Condensed'] font-black uppercase leading-none text-white text-3xl tracking-wide">
                      <span className="text-gold-gradient">{plan.title}</span>
                    </h3>
                    {plan.subtitle && (
                      <p className="mt-2 text-white/55 text-xs uppercase tracking-widest">
                        {plan.subtitle}
                      </p>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 flex-1 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check size={16} className="flex-shrink-0 mt-0.5 text-primary" />
                        <span className="text-white/70 text-sm leading-snug">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Pricing */}
                  <div className="mb-7 rounded-sm p-4 border border-white/10 bg-black/20">
                    <p className="text-white/40 text-[0.7rem] uppercase tracking-widest mb-3">
                      Preço
                    </p>
                    <div className="space-y-3">
                      {plan.pricing.map((opt) => (
                        <div key={opt.label} className="flex items-start justify-between gap-4">
                          <div className="min-w-0">
                            <div className="text-white/70 text-sm leading-tight">
                              {opt.label}
                            </div>
                            {opt.installment && (
                              <div className="text-white/40 text-xs mt-1">
                                {opt.installment}
                              </div>
                            )}
                          </div>
                          <div className="text-right flex-shrink-0">
                            <div className="font-['Barlow_Condensed'] font-black text-xl text-white tabular-nums">
                              {opt.price}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 pt-3 border-t border-white/10 text-white/40 text-xs">
                      {plan.payment}
                    </div>
                  </div>

                  {/* CTA */}
                  <button
                    onClick={scrollToForm}
                    className="w-full py-3.5 rounded-sm font-['Barlow_Condensed'] font-800 uppercase tracking-wide text-base transition-all duration-300 border border-white/20 text-white hover:border-primary hover:text-primary"
                  >
                    {plan.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </details>

        {/* Disclaimer */}
        <p className="text-center text-white/40 text-sm mt-10 max-w-lg mx-auto">
          Dúvidas sobre qual plano escolher? Faça o pré-cadastro que eu te ajudo a decidir.
        </p>
      </div>
    </section>
  );
}
