import Image from "next/image";

const diferenciais = [
  { titulo: "Ambiente acolhedor", texto: "Um espaço pensado para o teu conforto e privacidade." },
  { titulo: "Profissionais experientes", texto: "Técnicas cuidadosas, adaptadas a cada tipo de pele." },
  { titulo: "Higiene rigorosa", texto: "Materiais e processos seguros em cada atendimento." },
];

export default function Sobre() {
  return (
    <section id="sobre" className="bg-primary-light/20 py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-[minmax(0,220px)_1fr] gap-10 md:gap-14 items-start">
        <div className="mx-auto md:mx-0 w-40 md:w-full">
          <Image
            src="/images/sobre-sala.webp"
            alt="Espaço da Fina Depilações"
            width={793}
            height={793}
            className="rounded-2xl w-full h-auto shadow-sm"
          />
        </div>

        <div>
          <h2 className="font-serif text-3xl text-foreground mb-4">Sobre nós</h2>
          <p className="text-foreground/80 leading-relaxed max-w-lg">
            A Fina Depilações é um espaço dedicado ao cuidado da pele, à
            beleza e ao bem-estar. Aqui, cada cliente encontra uma
            experiência confortável e profissional, com atenção aos
            detalhes e foco na qualidade dos resultados.
          </p>

          <div className="mt-10 space-y-5">
            {diferenciais.map((item, i) => (
              <div key={item.titulo} className="flex items-baseline gap-4">
                <span className="font-serif text-2xl text-gold shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-serif text-lg text-foreground mb-1">
                    {item.titulo}
                  </h3>
                  <p className="text-sm text-muted">{item.texto}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
