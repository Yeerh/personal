import corpo1 from "@/assets/images/corpo-1.jpeg";
import corpo2 from "@/assets/images/corpo-2.jpeg";
import corpo3 from "@/assets/images/corpo-3.jpeg";
import corpo4 from "@/assets/images/corpo-4.jpeg";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useMemo, useState } from "react";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";

type EvolutionImage = {
  src: string;
  alt: string;
};

export default function EvolutionsSection() {
  const images = useMemo<EvolutionImage[]>(
    () => [
      { src: corpo1, alt: "Evolução corporal 1" },
      { src: corpo2, alt: "Evolução corporal 2" },
      { src: corpo3, alt: "Evolução corporal 3" },
      { src: corpo4, alt: "Evolução corporal 4" },
    ],
    []
  );

  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<EvolutionImage | null>(null);

  const openImage = (img: EvolutionImage) => {
    setActive(img);
    setOpen(true);
  };

  return (
    <section
      id="evolucoes"
      className="relative py-20 md:py-28 overflow-hidden"
    >
      <div className="container relative z-10">
        {/* Header */}
        <Reveal>
          <div className="text-center mb-12">
            <div className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-widest rounded-sm mb-4 bg-primary/10 border border-primary/30 text-primary">
              Resultados
            </div>
            <h2
              className="font-['Barlow_Condensed'] font-black uppercase leading-none text-white"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
            >
              EVOLUÇÕES
              <br />
              <span className="text-gold-gradient">NA PRÁTICA</span>
            </h2>
            <p className="text-white/60 mt-4 max-w-2xl mx-auto text-base leading-relaxed">
              Transformações reais com acompanhamento e consistência. Clique para ampliar.
            </p>
          </div>
        </Reveal>

        {/* Gallery */}
        <Stagger className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {images.map((img) => (
            <StaggerItem
              key={img.src}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
            >
              <button
                type="button"
                onClick={() => openImage(img)}
                className="group relative w-full overflow-hidden rounded-sm border border-white/10 bg-black/25 backdrop-blur-sm shadow-[0_18px_55px_rgba(0,0,0,0.45)] focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
                aria-label={`Abrir ${img.alt}`}
              >
                <div className="aspect-[3/4] w-full">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="h-full w-full object-cover transition-transform duration-500 will-change-transform group-hover:scale-[1.04]"
                    loading="lazy"
                    draggable={false}
                  />
                </div>
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                </div>
              </button>
            </StaggerItem>
          ))}
        </Stagger>
      </div>

      <Dialog
        open={open}
        onOpenChange={(next) => {
          setOpen(next);
          if (!next) setActive(null);
        }}
      >
        <DialogContent className="max-w-5xl bg-black/70 border border-white/10 p-2 md:p-4">
          <DialogHeader className="sr-only">
            <DialogTitle>Evolução</DialogTitle>
            <DialogDescription>Imagem ampliada da evolução</DialogDescription>
          </DialogHeader>
          {active && (
            <img
              src={active.src}
              alt={active.alt}
              className="w-full h-auto max-h-[78vh] object-contain rounded-sm"
              draggable={false}
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
