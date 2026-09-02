import Image from "next/image";
import {
  redesSociais,
  endereco,
  linkMapa,
  horario,
  telefone,
  email,
} from "../data/contactos";
import {
  IconInstagram,
  IconFacebook,
  IconTikTok,
  IconPhone,
  IconMail,
  IconPin,
  IconClock,
} from "./icons";

const iconesPorRede: Record<
  string,
  React.ComponentType<React.SVGProps<SVGSVGElement>>
> = {
  Instagram: IconInstagram,
  Facebook: IconFacebook,
  TikTok: IconTikTok,
};

const navLinks = [
  { href: "#servicos", label: "Serviços" },
  { href: "#cursos", label: "Cursos" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contactos", label: "Contactos" },
];

const linkFoco =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary " +
  "focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded";

export default function Footer() {
  return (
    <footer className="border-t border-primary-light bg-primary-light/20">
      <div className="max-w-5xl mx-auto px-6 py-12 grid gap-10 sm:grid-cols-2 md:grid-cols-[1.5fr_1fr_1.5fr]">
        {/* Marca */}
        <div>
          <Image
            src="/images/logo-fina-depilacoes.webp"
            alt="Fina Depilações"
            width={900}
            height={523}
            className="h-12 w-auto"
          />
          <p className="mt-4 text-sm text-muted max-w-xs">
            Salão de estética e depilação em Maputo. Cuidado, higiene e um
            atendimento feito à tua medida.
          </p>
          <ul className="mt-5 flex gap-4">
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
        </div>

        {/* Navegação */}
        <nav aria-label="Rodapé">
          <h2 className="eyebrow mb-4">Navegação</h2>
          <ul className="space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`text-sm text-foreground hover:text-primary transition-colors ${linkFoco}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contactos */}
        <div>
          <h2 className="eyebrow mb-4">Contactos</h2>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <IconPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
              <a
                href={linkMapa}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-foreground hover:text-primary transition-colors ${linkFoco}`}
              >
                {endereco}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <IconClock className="w-4 h-4 text-primary mt-0.5 shrink-0" />
              <span className="text-foreground">
                {horario.semana}
                <br />
                {horario.sabado}
              </span>
            </li>
            <li className="flex items-center gap-3">
              <IconPhone className="w-4 h-4 text-primary shrink-0" />
              <a
                href={`tel:${telefone.replace(/\s/g, "")}`}
                className={`text-foreground hover:text-primary transition-colors ${linkFoco}`}
              >
                {telefone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <IconMail className="w-4 h-4 text-primary shrink-0" />
              <a
                href={`mailto:${email}`}
                className={`text-foreground hover:text-primary transition-colors break-all ${linkFoco}`}
              >
                {email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-light/60">
        <p className="max-w-5xl mx-auto px-6 py-5 text-xs text-muted text-center sm:text-left">
          © {new Date().getFullYear()} Fina Depilações · Maputo, Moçambique
        </p>
      </div>
    </footer>
  );
}
