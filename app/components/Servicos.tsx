import ServicoCard from "./ServicoCard";
import Carrossel from "./Carrossel";
import { categorias, formatarPreco } from "../data/servicos";

// Imagens de exemplo (placeholders), até termos fotos reais em boa qualidade
// para cada categoria de serviço.
const fotosServicos = [
  { src: "/images/exemplo-1.webp", alt: "Depilação Facial", width: 1200, height: 800 },
  { src: "/images/exemplo-2.webp", alt: "Depilação de Virilha", width: 1200, height: 800 },
  { src: "/images/exemplo-3.webp", alt: "Depilação Corporal", width: 1200, height: 800 },
  { src: "/images/exemplo-4.webp", alt: "Sobrancelhas e Pestanas", width: 1200, height: 800 },
  { src: "/images/exemplo-5.webp", alt: "Espaço Fina Depilações", width: 1200, height: 800 },
];

export default function Servicos() {
  return (
    <section id="servicos" className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="font-serif text-3xl text-foreground text-center mb-2">
          Tabela de Depilação
        </h2>
        <p className="text-muted text-center mb-8">
          Preços em Meticais (MZN). Toca no ícone do WhatsApp para marcar.
        </p>

        <Carrossel fotos={fotosServicos} />

        <div className="grid sm:grid-cols-2 gap-6">
          {categorias.map((cat, i) => (
            <div
              key={cat.categoria}
              className={`bg-background rounded-2xl shadow-sm p-6 md:p-7 ${
                i === categorias.length - 1 && categorias.length % 2 === 1
                  ? "sm:col-span-2 sm:max-w-md sm:mx-auto sm:w-full"
                  : ""
              }`}
            >
              <h3 className="font-serif text-lg text-foreground pb-2 mb-1 border-b border-primary-light">
                {cat.categoria}
              </h3>
              <div>
                {cat.servicos.map((servico) => (
                  <ServicoCard
                    key={servico.nome}
                    nome={servico.nome}
                    precoFormatado={formatarPreco(servico.preco)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
