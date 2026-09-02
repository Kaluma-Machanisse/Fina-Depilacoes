import Image from "next/image";
import { redesSociais } from "../data/contactos";
import { IconInstagram, IconFacebook, IconTikTok } from "./icons";

const iconesPorRede: Record<
  string,
  React.ComponentType<React.SVGProps<SVGSVGElement>>
> = {
  Instagram: IconInstagram,
  Facebook: IconFacebook,
  TikTok: IconTikTok,
};

const linkFoco =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary " +
  "focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded";

// Faixa de fecho — deliberadamente mínima. Morada, horário e contactos
// completos vivem na secção "Contactos", logo acima; aqui não se repete nada.
export default function Footer() {
  return (
    <footer className="border-t border-primary-light bg-primary-light/20">
      <div className="max-w-5xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted">
        <Image
          src="/images/logo-fina-depilacoes.webp"
          alt="Fina Depilações"
          width={900}
          height={523}
          className="h-11 w-auto"
        />

        <ul className="flex gap-5">
          {redesSociais.map((rede) => {
            const Icone = iconesPorRede[rede.nome];
            return (
              <li key={rede.nome}>
                <a
                  href={rede.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={rede.nome}
                  className={`text-primary hover:text-wine transition-colors ${linkFoco}`}
                >
                  {Icone && <Icone className="w-5 h-5" />}
                </a>
              </li>
            );
          })}
        </ul>

        <p className="flex items-center gap-4">
          <span>© {new Date().getFullYear()}</span>
          <a
            href="#topo"
            className={`hover:text-primary transition-colors ${linkFoco}`}
          >
            Voltar ao topo
          </a>
        </p>
      </div>
    </footer>
  );
}
