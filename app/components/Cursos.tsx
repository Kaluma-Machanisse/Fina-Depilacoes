import { cursos } from "../data/cursos";
import { formatarPreco } from "../data/servicos";
import { gerarLinkWhatsAppCurso } from "../lib/whatsapp";
import { IconWhatsApp } from "./icons";

export default function Cursos() {
  return (
    <section id="cursos" className="py-16 md:py-24 bg-primary-light/20">
      <div className="max-w-4xl mx-auto px-6">
        <p className="eyebrow text-center mb-3">Aprende connosco</p>
        <h2 className="font-serif text-3xl text-foreground text-center mb-2">
          Cursos de Depilação
        </h2>
        <p className="text-muted text-center max-w-xl mx-auto mb-12">
          Queres transformar a depilação numa profissão? Escolhe o curso que
          melhor se adapta a ti.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {cursos.map((curso) => (
            <div
              key={curso.nome}
              className="flex flex-col bg-background rounded-2xl shadow-sm p-7"
            >
              <h3 className="font-serif text-xl text-foreground mb-1">
                {curso.nome}
              </h3>
              <p className="text-sm text-muted mb-4">{curso.modalidade}</p>

              <p className="text-primary font-medium text-2xl mb-4">
                {formatarPreco(curso.preco)}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {curso.destaques.map((destaque) => (
                  <span
                    key={destaque}
                    className="text-xs font-medium text-primary bg-primary-light/50 rounded-full px-3 py-1"
                  >
                    {destaque}
                  </span>
                ))}
              </div>

              <ul className="space-y-2 mb-7 flex-1">
                {curso.conteudo.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-foreground/80"
                  >
                    <span className="text-primary mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href={gerarLinkWhatsAppCurso(curso.nome)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-primary text-white rounded-lg py-3 text-sm font-medium hover:bg-wine transition-colors"
              >
                <IconWhatsApp className="w-4 h-4" />
                Inscrever-me
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
