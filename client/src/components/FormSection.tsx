/*
 * DESIGN: "Garra Brasileira" — Pre-Registration Form
 * Formulário multi-step com todas as perguntas especificadas
 * Envia via WhatsApp e abre link de email
 * Borda dourada nos campos ativos
 */

import { useState } from "react";
import { CheckCircle, Send, ChevronRight, ChevronLeft } from "lucide-react";

interface FormData {
  name: string;
  whatsapp: string;
  instagram: string;
  trainingStatus: string;
  objective: string;
  pain: string;
}

const trainingOptions = [
  { value: "nunca", label: "Nunca treinei, irei começar agora." },
  { value: "parado", label: "Já treinei mas estou parado." },
  { value: "falta", label: "Já treino mas falto muito." },
  { value: "constancia", label: "Já tenho constância." },
];

const objectiveOptions = [
  { value: "emagrecimento", label: "Emagrecimento" },
  { value: "hipertrofia", label: "Ganho de Massa Muscular (Hipertrofia)" },
  { value: "condicionamento", label: "Condicionamento Físico" },
  { value: "saude", label: "Saúde e Qualidade de Vida" },
  { value: "reabilitacao", label: "Reabilitação / Fisioterapia" },
  { value: "performance", label: "Performance Esportiva" },
  { value: "outro", label: "Outro" },
];

const WHATSAPP_NUMBER = "558194077138"; // +55 81 9407-7138 (apenas números)
const EMAIL = "personalcleytonvieira@gmail.com";

export default function FormSection() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [emailStatus, setEmailStatus] = useState<
    "idle" | "sending" | "sent" | "failed"
  >("idle");
  const [formData, setFormData] = useState<FormData>({
    name: "",
    whatsapp: "",
    instagram: "",
    trainingStatus: "",
    objective: "",
    pain: "",
  });

  const totalSteps = 3;

  const trainingStatusLabel =
    trainingOptions.find((o) => o.value === formData.trainingStatus)?.label ||
    formData.trainingStatus;
  const objectiveLabel =
    objectiveOptions.find((o) => o.value === formData.objective)?.label ||
    formData.objective;

  const update = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const canProceed = () => {
    if (step === 1) return formData.name.trim() && formData.whatsapp.trim();
    if (step === 2) return formData.trainingStatus && formData.objective;
    return true;
  };

  const handleSubmit = () => {
    // Build WhatsApp message
    const msg = encodeURIComponent(
      `*PRÉ-CADASTRO — Cleyton Vieira Personal Trainer*\n\n` +
        `👤 *Nome:* ${formData.name}\n` +
        `📱 *WhatsApp:* ${formData.whatsapp}\n` +
        `📸 *Instagram:* ${formData.instagram || "Não informado"}\n\n` +
        `🏋️ *Status de treino:* ${trainingStatusLabel}\n` +
        `🎯 *Objetivo:* ${objectiveLabel}\n\n` +
        `💊 *Dores/desconfortos:* ${formData.pain || "Nenhum informado"}\n\n` +
        `_Enviado pelo site cleytonvieira.com.br_`
    );

    // Open WhatsApp (keep as direct user gesture)
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");

    // Send email automatically via API (server-side). Falls back to manual mailto in UI if it fails.
    setEmailStatus("sending");
    fetch("/api/pre-cadastro", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.name,
        whatsapp: formData.whatsapp,
        instagram: formData.instagram,
        trainingStatus: trainingStatusLabel,
        objective: objectiveLabel,
        pain: formData.pain,
        submittedAtISO: new Date().toISOString(),
      }),
    })
      .then(async (r) => {
        if (!r.ok) throw new Error(await r.text());
        setEmailStatus("sent");
      })
      .catch(() => {
        setEmailStatus("failed");
      });

    setSubmitted(true);
  };

  if (submitted) {
    const manualEmailSubject = encodeURIComponent(`Pré-Cadastro: ${formData.name}`);
    const manualEmailBody = encodeURIComponent(
      `PRÉ-CADASTRO — Cleyton Vieira Personal Trainer\n\n` +
        `Nome: ${formData.name}\n` +
        `WhatsApp: ${formData.whatsapp}\n` +
        `Instagram: ${formData.instagram || "Não informado"}\n\n` +
        `Status de treino: ${trainingStatusLabel}\n` +
        `Objetivo: ${objectiveLabel}\n\n` +
        `Dores/desconfortos: ${formData.pain || "Nenhum informado"}`
    );

    return (
      <section
        id="form"
        className="relative py-20 md:py-28"
        style={{ background: "linear-gradient(135deg, var(--background) 0%, var(--card) 100%)" }}
      >
        <div className="container max-w-2xl mx-auto text-center">
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{
              background: "rgb(var(--brand-2-rgb) / 0.15)",
              border: "2px solid var(--brand-1)",
            }}
          >
            <CheckCircle size={40} style={{ color: "var(--brand-1)" }} />
          </div>
          <h2
            className="font-['Barlow_Condensed'] font-black uppercase text-white mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            PRÉ-CADASTRO ENVIADO!
          </h2>
          <p className="text-white/70 text-lg leading-relaxed mb-4">
            Suas informações foram enviadas com sucesso. Em breve o Cleyton
            entrará em contato explicando como funciona a metodologia de treino.
          </p>
          {emailStatus === "sending" && (
            <p className="text-white/50 text-sm mt-2">
              Enviando e-mail automático…
            </p>
          )}
          {emailStatus === "sent" && (
            <p className="text-white/50 text-sm mt-2">
              E-mail enviado para {EMAIL}.
            </p>
          )}
          {emailStatus === "failed" && (
            <p className="text-white/50 text-sm mt-2">
              Não consegui enviar o e-mail automaticamente. Você pode enviar manualmente por aqui:{" "}
              <a
                href={`mailto:${EMAIL}?subject=${manualEmailSubject}&body=${manualEmailBody}`}
                className="text-primary underline underline-offset-4"
              >
                enviar e-mail
              </a>
              .
            </p>
          )}
          <div
            className="rounded-sm p-5 text-left mt-6"
            style={{
              background: "rgb(var(--brand-2-rgb) / 0.08)",
              border: "1px solid rgb(var(--brand-2-rgb) / 0.3)",
            }}
          >
            <p className="text-primary font-semibold text-sm mb-2 uppercase tracking-wide">
              Lembre-se
            </p>
            <p className="text-white/70 text-sm leading-relaxed">
              Nenhuma das respostas acima influencia no valor da consultoria. O
              Pré-Cadastro é uma forma de começarmos o atendimento entendendo
              suas necessidades.
            </p>
          </div>
          <p className="text-white/40 text-sm mt-6 italic">
            "OK, fico aguardando."
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="form"
      className="relative py-20 md:py-28 overflow-hidden"
      style={{ background: "linear-gradient(135deg, var(--background) 0%, var(--card) 100%)" }}
    >
      {/* Decorative element */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{
          background: "linear-gradient(90deg, var(--brand-2), var(--brand-1), var(--brand-2))",
        }}
      />

      <div className="container max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div
            className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-widest rounded-sm mb-4 bg-primary/10 border border-primary/30 text-primary"
          >
            Gratuito
          </div>
          <h2
            className="font-['Barlow_Condensed'] font-black uppercase leading-none text-white"
            style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)" }}
          >
            FAÇA SEU
            <br />
            <span className="text-gold-gradient">PRÉ-CADASTRO</span>
          </h2>
          <p className="text-white/60 mt-4 text-base leading-relaxed">
            Responda algumas perguntas para que possamos entender melhor suas
            necessidades e iniciar o atendimento.
          </p>
        </div>

        {/* Progress bar */}
        <div className="flex items-center gap-2 mb-8">
          {Array.from({ length: totalSteps }).map((_, i) => (
            <div key={i} className="flex-1 flex items-center gap-2">
              <div
                className="h-1.5 flex-1 rounded-full transition-all duration-500"
                style={{
                  background:
                    i + 1 <= step
                      ? "linear-gradient(90deg, var(--brand-2), var(--brand-1))"
                      : "rgba(255,255,255,0.1)",
                }}
              />
            </div>
          ))}
        </div>
        <p className="text-white/40 text-xs uppercase tracking-widest text-right mb-8">
          Etapa {step} de {totalSteps}
        </p>

        {/* Form card */}
        <div
          className="rounded-sm p-7 md:p-10"
          style={{
            background: "rgba(17,24,39,0.8)",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
          }}
        >
          {/* Step 1: Personal info */}
          {step === 1 && (
            <div className="space-y-6 animate-fade-in-up">
              <h3 className="font-['Barlow_Condensed'] font-bold text-xl uppercase text-white tracking-wide">
                Dados Pessoais
              </h3>

              <div>
                <label className="block text-white/60 text-sm mb-2 uppercase tracking-wide">
                  Qual o seu nome? <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => update("name", e.target.value)}
                  placeholder="Seu nome completo"
                  className="w-full form-input-dark rounded-sm px-4 py-3 text-white placeholder-white/30 text-base"
                />
              </div>

              <div>
                <label className="block text-white/60 text-sm mb-2 uppercase tracking-wide">
                  Qual o seu WhatsApp? <span className="text-primary">*</span>
                </label>
                <input
                  type="tel"
                  value={formData.whatsapp}
                  onChange={(e) => update("whatsapp", e.target.value)}
                  placeholder="(00) 00000-0000"
                  className="w-full form-input-dark rounded-sm px-4 py-3 text-white placeholder-white/30 text-base"
                />
              </div>

              <div>
                <label className="block text-white/60 text-sm mb-2 uppercase tracking-wide">
                  Qual o seu Instagram?
                </label>
                <input
                  type="text"
                  value={formData.instagram}
                  onChange={(e) => update("instagram", e.target.value)}
                  placeholder="@seuinstagram (opcional)"
                  className="w-full form-input-dark rounded-sm px-4 py-3 text-white placeholder-white/30 text-base"
                />
              </div>
            </div>
          )}

          {/* Step 2: Training status & objective */}
          {step === 2 && (
            <div className="space-y-8 animate-fade-in-up">
              <div>
                <h3 className="font-['Barlow_Condensed'] font-bold text-xl uppercase text-white tracking-wide mb-1">
                  Treino & Objetivo
                </h3>
              </div>

              <div>
                <label className="block text-white/60 text-sm mb-3 uppercase tracking-wide">
                  Você já está treinando ou pretende começar a treinar em 2025?{" "}
                  <span className="text-primary">*</span>
                </label>
                <div className="space-y-2.5">
                  {trainingOptions.map((opt) => (
                    <label
                      key={opt.value}
                      className="flex items-center gap-3 p-3.5 rounded-sm cursor-pointer transition-all duration-200"
                      style={{
                        background:
                          formData.trainingStatus === opt.value
                            ? "rgb(var(--brand-2-rgb) / 0.12)"
                            : "rgba(255,255,255,0.03)",
                        border:
                          formData.trainingStatus === opt.value
                            ? "1.5px solid rgb(var(--brand-2-rgb) / 0.5)"
                            : "1px solid rgba(255,255,255,0.07)",
                      }}
                    >
                      <div
                        className="w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all"
                        style={{
                          borderColor:
                            formData.trainingStatus === opt.value
                              ? "var(--brand-1)"
                              : "rgba(255,255,255,0.3)",
                          background:
                            formData.trainingStatus === opt.value
                              ? "var(--brand-1)"
                              : "transparent",
                        }}
                      >
                        {formData.trainingStatus === opt.value && (
                          <div className="w-1.5 h-1.5 rounded-full bg-background" />
                        )}
                      </div>
                      <input
                        type="radio"
                        name="trainingStatus"
                        value={opt.value}
                        checked={formData.trainingStatus === opt.value}
                        onChange={(e) => update("trainingStatus", e.target.value)}
                        className="sr-only"
                      />
                      <span className="text-white/80 text-sm">{opt.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-white/60 text-sm mb-3 uppercase tracking-wide">
                  Qual o seu objetivo?{" "}
                  <span className="text-primary">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {objectiveOptions.map((opt) => (
                    <label
                      key={opt.value}
                      className="flex items-center gap-3 p-3 rounded-sm cursor-pointer transition-all duration-200"
                      style={{
                        background:
                          formData.objective === opt.value
                            ? "rgb(var(--brand-2-rgb) / 0.12)"
                            : "rgba(255,255,255,0.03)",
                        border:
                          formData.objective === opt.value
                            ? "1.5px solid rgb(var(--brand-2-rgb) / 0.5)"
                            : "1px solid rgba(255,255,255,0.07)",
                      }}
                    >
                      <div
                        className="w-4 h-4 rounded-sm border-2 flex items-center justify-center flex-shrink-0 transition-all"
                        style={{
                          borderColor:
                            formData.objective === opt.value
                              ? "var(--brand-1)"
                              : "rgba(255,255,255,0.3)",
                          background:
                            formData.objective === opt.value
                              ? "var(--brand-1)"
                              : "transparent",
                        }}
                      >
                        {formData.objective === opt.value && (
                          <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                            <path
                              d="M1 4L3.5 6.5L9 1"
                              stroke="var(--background)"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                      </div>
                      <input
                        type="radio"
                        name="objective"
                        value={opt.value}
                        checked={formData.objective === opt.value}
                        onChange={(e) => update("objective", e.target.value)}
                        className="sr-only"
                      />
                      <span className="text-white/80 text-sm">{opt.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Pain & confirmation */}
          {step === 3 && (
            <div className="space-y-6 animate-fade-in-up">
              <h3 className="font-['Barlow_Condensed'] font-bold text-xl uppercase text-white tracking-wide">
                Saúde & Confirmação
              </h3>

              <div>
                <label className="block text-white/60 text-sm mb-2 uppercase tracking-wide">
                  Tem alguma dor ou desconforto durante o dia a dia?
                </label>
                <p className="text-white/40 text-xs mb-3">
                  Se sim, informe por favor.
                </p>
                <textarea
                  value={formData.pain}
                  onChange={(e) => update("pain", e.target.value)}
                  placeholder="Ex: dor no joelho ao subir escadas, dor nas costas ao sentar por muito tempo... (opcional)"
                  rows={4}
                  className="w-full form-input-dark rounded-sm px-4 py-3 text-white placeholder-white/30 text-base resize-none"
                />
              </div>

              {/* Disclaimer */}
              <div
                className="rounded-sm p-5"
                style={{
                  background: "rgb(var(--brand-2-rgb) / 0.06)",
                  border: "1px solid rgb(var(--brand-2-rgb) / 0.25)",
                }}
              >
                <p className="text-white/70 text-sm leading-relaxed mb-3">
                  <span className="text-primary font-semibold">
                    Importante:
                  </span>{" "}
                  Nenhuma das respostas acima influencia no valor da consultoria.
                  O Pré-Cadastro é uma forma de começarmos o atendimento
                  entendendo suas necessidades. Em breve entrarei em contato
                  explicando como funciona minha metodologia de treino.
                </p>
                <p className="text-white/50 text-sm italic">
                  "OK, fico aguardando."
                </p>
              </div>

              {/* Summary */}
              <div
                className="rounded-sm p-5 space-y-2"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <p className="text-white/40 text-xs uppercase tracking-widest mb-3">
                  Resumo do cadastro
                </p>
                <div className="flex gap-2">
                  <span className="text-white/40 text-sm w-20 flex-shrink-0">Nome:</span>
                  <span className="text-white/80 text-sm">{formData.name}</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-white/40 text-sm w-20 flex-shrink-0">WhatsApp:</span>
                  <span className="text-white/80 text-sm">{formData.whatsapp}</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-white/40 text-sm w-20 flex-shrink-0">Objetivo:</span>
                  <span className="text-white/80 text-sm">
                    {objectiveOptions.find((o) => o.value === formData.objective)?.label}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Navigation buttons */}
          <div className="flex gap-4 mt-8">
            {step > 1 && (
              <button
                onClick={() => setStep((s) => s - 1)}
                className="flex items-center gap-2 px-5 py-3 rounded-sm border border-white/20 text-white/70 hover:border-white/40 hover:text-white transition-all duration-200 font-['Barlow_Condensed'] font-bold uppercase tracking-wide text-sm"
              >
                <ChevronLeft size={16} />
                Voltar
              </button>
            )}

            {step < totalSteps ? (
              <button
                onClick={() => setStep((s) => s + 1)}
                disabled={!canProceed()}
                className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-sm font-['Barlow_Condensed'] font-black uppercase tracking-wide text-base transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
                style={{
                  background: canProceed()
                    ? "linear-gradient(135deg, var(--brand-1), var(--brand-2))"
                    : "rgb(var(--brand-2-rgb) / 0.3)",
                  color: "var(--background)",
                  boxShadow: canProceed()
                    ? "0 4px 20px rgb(var(--brand-1-rgb) / 0.25)"
                    : "none",
                }}
              >
                Continuar
                <ChevronRight size={16} />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-sm font-['Barlow_Condensed'] font-black uppercase tracking-wide text-base transition-all duration-300"
                style={{
                  background: "linear-gradient(135deg, var(--brand-1), var(--brand-2))",
                  color: "var(--background)",
                  boxShadow: "0 4px 20px rgb(var(--brand-1-rgb) / 0.35)",
                }}
              >
                <Send size={16} />
                Enviar Pré-Cadastro
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
