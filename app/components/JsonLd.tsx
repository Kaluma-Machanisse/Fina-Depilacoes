import { SITE_URL, NOME_NEGOCIO, DESCRICAO_CURTA } from "../data/site";
import {
  telefone,
  email,
  redesSociais,
  linkMapa,
} from "../data/contactos";

// Dados estruturados (schema.org) para o Google perceber que isto é um
// negócio local: nome, morada, contactos, horário e redes. Ajuda a aparecer
// na pesquisa local e no mapa. Horário espelha o de data/contactos.ts.
const dados = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  name: NOME_NEGOCIO,
  description: DESCRICAO_CURTA,
  url: SITE_URL,
  image: `${SITE_URL}/opengraph-image.png`,
  telephone: telefone,
  email,
  priceRange: "$$",
  currenciesAccepted: "MZN",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Eduardo Mondlane, prédio 481, esquina do KFC",
    addressLocality: "Maputo",
    addressCountry: "MZ",
  },
  hasMap: linkMapa,
  areaServed: "Maputo",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "14:00",
    },
  ],
  sameAs: redesSociais.map((rede) => rede.url),
};

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      // O conteúdo é estático e vem só do nosso código (sem dados do utilizador).
      dangerouslySetInnerHTML={{ __html: JSON.stringify(dados) }}
    />
  );
}
