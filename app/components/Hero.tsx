export default function Hero() {
  return (
    <section
      id="marcacao"
      className="flex flex-col md:flex-row items-center gap-10 max-w-5xl mx-auto px-6 py-16 md:py-24"
    >
      <div className="flex-1 text-center md:text-left">
        <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
          Fina Depilações
        </h1>
        <p className="font-serif italic text-lg text-muted mb-8">
          Sua pele, seu momento, sua elegância.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a
            href="#servicos"
            className="bg-primary text-white rounded-lg px-6 py-3 font-medium text-center"
          >
            Ver serviços
          </a>
          <a
            href="#contactos"
            className="border border-primary text-primary rounded-lg px-6 py-3 font-medium text-center"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>

      <div className="flex-1 w-full aspect-square max-w-sm rounded-2xl bg-primary-light/40 border border-primary-light flex items-center justify-center">
        <span className="text-muted text-sm">Imagem do salão (em breve)</span>
      </div>
    </section>
  );
}
