import { MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/558194077138";

export default function WhatsAppFloatingButton() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir WhatsApp"
      className="fixed bottom-5 right-5 z-[60] btn-gold rounded-full h-14 w-14 md:h-16 md:w-16 flex items-center justify-center shadow-lg shadow-black/40 hover:shadow-xl hover:shadow-black/50 transition-all"
    >
      <MessageCircle className="h-7 w-7 md:h-8 md:w-8" />
    </a>
  );
}
