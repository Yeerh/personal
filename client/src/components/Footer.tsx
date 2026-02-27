/*
 * DESIGN: "Garra Brasileira" — Footer
 * Fundo: quase preto
 * Links: branco/60 → amarelo-ouro
 */

import { Instagram, MessageCircle, Mail } from "lucide-react";

export default function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative pt-16 pb-8 bg-background border-t border-border/50">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="font-['Barlow_Condensed'] font-black text-2xl tracking-wide uppercase text-primary">
                CLEYTON
              </span>
              <span className="font-['Barlow_Condensed'] font-light text-2xl tracking-wide uppercase text-white">
                VIEIRA
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Personal trainer especializado em transformação física e qualidade
              de vida. Metodologia personalizada para resultados reais.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-['Barlow_Condensed'] font-bold text-sm uppercase tracking-widest text-white/40 mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Início", id: "hero" },
                { label: "Sobre", id: "about" },
                { label: "Evoluções", id: "evolucoes" },
                { label: "Planos", id: "plans" },
                { label: "Pré-Cadastro", id: "form" },
              ].map((item) => (
                <li key={item.id}>
                  <button
                      onClick={() => scrollTo(item.id)}
                      className="text-white/50 hover:text-primary text-sm transition-colors duration-200 uppercase tracking-wide"
                    >
                      {item.label}
                    </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-['Barlow_Condensed'] font-bold text-sm uppercase tracking-widest text-white/40 mb-4">
              Contato
            </h4>
            <div className="space-y-3">
              <a
                href="https://wa.me/558194077138"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/50 hover:text-primary text-sm transition-colors duration-200"
              >
                <MessageCircle size={16} />
                WhatsApp
              </a>
              <a
                href="https://instagram.com/cleytonvieira"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/50 hover:text-primary text-sm transition-colors duration-200"
              >
                <Instagram size={16} />
                @cleytonvieira
              </a>
              <a
                href="mailto:personalcleytonvieira@gmail.com"
                className="flex items-center gap-3 text-white/50 hover:text-primary text-sm transition-colors duration-200"
              >
                <Mail size={16} />
                personalcleytonvieira@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border/50"
        >
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Cleyton Vieira Personal Trainer. Todos os direitos reservados.
          </p>
          <button
            onClick={() => scrollTo("form")}
            className="btn-gold px-5 py-2 rounded-sm text-xs"
          >
            Fazer Pré-Cadastro
          </button>
        </div>
      </div>
    </footer>
  );
}
