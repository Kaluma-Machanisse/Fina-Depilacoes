import { gerarLinkWhatsApp } from "../lib/whatsapp";
import {
  redesSociais,
  endereco,
  linkMapa,
  linkMapaEmbed,
  horario,
  telefone,
  email,
} from "../data/contactos";
import {
  IconWhatsApp,
  IconInstagram,
  IconFacebook,
  IconTikTok,
  IconPin,
  IconClock,
  IconPhone,
  IconMail,
} from "./icons";

// Ícone por nome da rede social, para não repetir if/else no JSX.
const iconesPorRede: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  Instagram: IconInstagram,
  Facebook: IconFacebook,
  TikTok: IconTikTok,
};

export default function Contactos() {
  return (
    <section id="contactos" className="py-16 md:py-24 bg-primary-light/20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="font-serif text-3xl text-foreground text-center mb-4">
          Contactos e Localização
        </h2>
        <p className="text-muted text-center max-w-xl mx-auto mb-12">
          Fala connosco pelo WhatsApp, segue-nos nas redes sociais ou
          vem visitar-nos. Estamos à tua espera.
        </p>

        {/* Endereço, horário e mapa */}
        <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
          <iframe
            title="Localização do salão no Google Maps"
            src={linkMapaEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="flex-1 w-full aspect-video max-w-sm rounded-2xl border border-primary-light mx-auto md:mx-0"
          />

          <div className="flex-1 space-y-4">
            <div className="flex items-start gap-3">
              <IconPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <div>
                <p className="text-foreground">{endereco}</p>
                <a
                  href={linkMapa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  Ver no Google Maps
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <IconClock className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <div>
                <p className="text-foreground">{horario.semana}</p>
                <p className="text-foreground">{horario.sabado}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Grid de canais de contacto */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <a
            href={gerarLinkWhatsApp()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 rounded-2xl bg-background shadow-sm hover:shadow-lg transition-shadow p-6"
          >
            <IconWhatsApp className="w-7 h-7 text-primary" />
            <span className="text-sm font-medium text-foreground">WhatsApp</span>
          </a>

          <a
            href={`tel:${telefone.replace(/\s/g, "")}`}
            className="flex flex-col items-center gap-3 rounded-2xl bg-background shadow-sm hover:shadow-lg transition-shadow p-6"
          >
            <IconPhone className="w-7 h-7 text-primary" />
            <span className="text-sm font-medium text-foreground">Telemóvel</span>
          </a>

          <a
            href={`mailto:${email}`}
            className="flex flex-col items-center gap-3 rounded-2xl bg-background shadow-sm hover:shadow-lg transition-shadow p-6"
          >
            <IconMail className="w-7 h-7 text-primary" />
            <span className="text-sm font-medium text-foreground">E-mail</span>
          </a>

          {redesSociais.map((rede) => {
            const Icone = iconesPorRede[rede.nome];
            return (
              <a
                key={rede.nome}
                href={rede.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 rounded-2xl bg-background shadow-sm hover:shadow-lg transition-shadow p-6"
              >
                {Icone && <Icone className="w-7 h-7 text-primary" />}
                <span className="text-sm font-medium text-foreground">
                  {rede.nome}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
