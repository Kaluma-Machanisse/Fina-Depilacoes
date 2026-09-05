import Image from "next/image";
import { gerarLinkWhatsApp } from "../lib/whatsapp";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative max-w-5xl mx-auto px-6 pt-20 pb-24 md:pt-24 md:pb-32 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left">
          <p className="eyebrow mb-5">Salão de Estética · Maputo</p>
          <h1 className="font-serif text-5xl md:text-6xl leading-[1.05] text-foreground mb-5">
            Depilação com
            <br />
            <span className="italic text-primary">cuidado e elegância.</span>
          </h1>
          <p className="text-muted text-lg max-w-md mx-auto md:mx-0 mb-9">
            Marca já a tua sessão e sente a diferença de um atendimento
            feito à tua medida.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#servicos"
              className="bg-primary text-white rounded-lg px-7 py-3.5 font-medium text-center hover:bg-wine transition-colors"
            >
              Ver tabela de preços
            </a>
            <a
              href={gerarLinkWhatsApp()}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-primary text-primary rounded-lg px-7 py-3.5 font-medium text-center hover:bg-primary hover:text-white transition-colors"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center md:justify-end">
          <span className="logo-hero logo-plate w-full max-w-sm">
            <Image
              src="/images/logo-fina-depilacoes.webp"
              alt="Fina Depilações"
              width={900}
              height={523}
              priority
              className="w-full h-auto"
            />
          </span>
        </div>
      </div>
    </section>
  );
}
