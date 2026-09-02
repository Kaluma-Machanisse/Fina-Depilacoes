import { gerarLinkWhatsApp } from "../lib/whatsapp";
import { IconWhatsApp } from "./icons";

type Props = {
  nome: string;
  precoFormatado: string;
};

// Uma linha de serviço dentro de uma categoria (nome + preço + marcação directa).
export default function ServicoCard({ nome, precoFormatado }: Props) {
  return (
    <div className="group flex items-baseline gap-3 py-2.5">
      <span className="text-foreground">{nome}</span>
      <span
        aria-hidden
        className="flex-1 border-b border-dotted border-muted/40 translate-y-[-3px]"
      />
      <div className="flex items-center gap-3 shrink-0">
        <span className="text-primary font-medium tabular-nums">{precoFormatado}</span>
        <a
          href={gerarLinkWhatsApp(nome)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Marcar ${nome} via WhatsApp`}
          className="text-primary/70 group-hover:text-primary transition-colors"
        >
          <IconWhatsApp className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
