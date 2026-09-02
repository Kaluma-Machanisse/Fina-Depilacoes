import { gerarLinkWhatsApp } from "../lib/whatsapp";
import SectionHeading from "./SectionHeading";
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
    <section id="contactos" className="py-16 md:py-28">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading
          eyebrow="Onde nos encontrar"
          titulo="Contactos e Localização"
        >
          Fala connosco pelo WhatsApp, segue-nos nas redes sociais ou
          vem visitar-nos. Estamos à tua espera.
        </SectionHeading>

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

        {/* Canais de contacto: redes sociais à esquerda, contactos directos à direita */}
        <div className="grid gap-8 sm:grid-cols-2">
          {/* Redes sociais */}
          <div>
            <h3 className="eyebrow mb-4">Redes sociais</h3>
            <ul className="space-y-3">
              {redesSociais.map((rede) => {
                const Icone = iconesPorRede[rede.nome];
                return (
                  <li key={rede.nome}>
                    <a
                      href={rede.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                    >
                      {Icone && <Icone className="w-5 h-5 text-primary shrink-0" />}
                      <span className="text-sm">
                        <span className="font-medium">{rede.nome}</span>
                        <span className="text-muted group-hover:text-primary">
                          {" "}· {rede.handle}
                        </span>
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contactos directos */}
          <div>
            <h3 className="eyebrow mb-4">Fala connosco</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={gerarLinkWhatsApp()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                >
                  <IconWhatsApp className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm">
                    <span className="font-medium">WhatsApp</span>
                    <span className="text-muted group-hover:text-primary">
                      {" "}· {telefone}
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${telefone.replace(/\s/g, "")}`}
                  className="group flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                >
                  <IconPhone className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm">
                    <span className="font-medium">Telemóvel</span>
                    <span className="text-muted group-hover:text-primary">
                      {" "}· {telefone}
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${email}`}
                  className="group flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                >
                  <IconMail className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm break-all">
                    <span className="font-medium">E-mail</span>
                    <span className="text-muted group-hover:text-primary">
                      {" "}· {email}
                    </span>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
